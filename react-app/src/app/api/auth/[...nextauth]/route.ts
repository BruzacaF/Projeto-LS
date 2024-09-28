import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// IMPORTAR O METODO DE VERIFICAR A SENHA
// IMPORTAR O METODO PARA BUSCAR O USUARIO NO BANCO DE DADOS

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials || {};

                const user = await findUserByEmail(email); // BUSCA O USUARIO NO BANCO DE DADOS e constroi essa constante (FAZER ALTERAÇÕES QUANTO AOS CAMPOS A SEREM VALIDADOS)
                if (!user) {
                    throw new Error('User not found');
                }

                const isPasswordValid = await verifyPassword(password, user.password); // VERIFICA A SENHA

                if (!isPasswordValid) {
                    throw new Error('Invalid password');
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
            }
        })
    ],

    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
    },

    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (token.sub) {
                session.user.id = token.sub;
            }
            return session;
        }
    }
});


export { handler as GET, handler as POST };
