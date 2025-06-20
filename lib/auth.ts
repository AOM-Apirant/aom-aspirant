import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        if (user.password) {
          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password as string
          );
          if (!isValid) {
            throw new Error("Invalid password");
          }
        } else {
          throw new Error(
            "This account was created with Google. Please sign in with Google."
          );
        }
        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  secret:
    process.env.NEXTAUTH_SECRET ||
    "LF6vEn4IcwfJYISVzNPhhFU8HXOO/M7Q79GRhUAgzWk=",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
      if (account?.provider === "google") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }
      }
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/quiz";
    },
    async session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
});

// Register function for credentials
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  await connectDB();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return { id: user._id.toString(), name: user.name, email: user.email };
}
