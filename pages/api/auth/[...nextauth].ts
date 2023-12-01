import { userProps } from "@/types";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

interface UserProps {
  id: string;
  name: string;
  email: string;
  type_user: string;
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    credentialsProvider({
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        const response = await fetch(
          "https://graphikaz.digifaz.com/api/users/auth",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: raw,
          }
        );

        if (!response.ok) {
          throw new Error("Invalid credentials");
        }

        const data = await response.json();
        console.log("data: " + data.user.id);
        const user = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          type_user: data.user.type_user,
          // ... autres champs supplémentaires
        };

        console.log("user: ", user);

        return Promise.resolve(user);
      },
    }),
  ],
  ///////
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.type_user = user.type_user; // Ajouter le champ type_user
        // ... autres champs supplémentaires
      }

      return token;
    },
    async session({ session, token }) {
      session.user.type_user = token.type_user;
      session.user.id = token.id;
      return session;
    },
  },
  ///////:
  pages: {
    signIn: "/auth",
  },
};

export default NextAuth(authOptions);
