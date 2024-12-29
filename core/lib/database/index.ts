import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

//As this is serverless, we need to use cache or else we will end doing connect multiple times, I have not used URI, because it is already done in MERN

//So follow cache practice for NEXT
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}