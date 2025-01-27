import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProviders from 'next-auth/providers/credentials'

export const options : NextAuthOptions = {
    providers: [
        GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label:"Password",
                    type:"password",
                    placeholder: "Your Password"
                }
            },
            async authorize(credentials) {
                const user = { id: "45", name: "Alisha", password: "alisha0704" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}
