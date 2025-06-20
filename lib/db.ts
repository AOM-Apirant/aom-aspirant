import mongoose from "mongoose";

// Type definitions for global mongoose caching
declare global {
  var mongoose:
    | {
        conn: typeof mongoose | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        promise: any;
      }
    | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts) as Promise<
      typeof mongoose
    >;
  }

  const mongooseInstance = await cached!.promise;
  cached!.conn = mongooseInstance;
  return cached!.conn;
}

export default connectDB;
