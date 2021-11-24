import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // * Default Sign in Page given by NextAuth
  // theme: {
  //   logo: 'https://links.papareact.com/sq0',
  //   brandColor: '#f13287',
  //   colorScheme: 'auto,',
  // },

  // * Our own Custom Sign-in page
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      // John Doe to johndoe
      session.user.username = session.user.name.split(' ').join('').toLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
