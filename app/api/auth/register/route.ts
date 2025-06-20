import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/auth";
import { registerSchema } from "@/schemas/authSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = registerSchema.parse(body);

    // Register user
    const user = await registerUser(
      validatedData.name,
      validatedData.email,
      validatedData.password
    );

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Registration failed" },
      { status: 400 }
    );
  }
}
