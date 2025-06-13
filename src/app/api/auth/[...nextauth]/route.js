import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
   secret: process.env.NEXTAUTH_SECRET,
  // debug: true,

  
});
// const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
