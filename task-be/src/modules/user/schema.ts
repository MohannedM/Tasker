export const userSchema = `
    input RegisterInput{
        username: String!
        email: String!
        password: String!
    }

    input LoginInput{
        email: String!
        password: String!
    }

    type User{
        id: ID!
        username: String!
        email: String!
    }

    type AuthData{
        token: String!
        user: User!
    }

    extend type Mutation{
        register(userData: RegisterInput): AuthData!
        login(userData: LoginInput): AuthData!
    }

    extend type Query{
        getUserData(token: String!): User!
    }
`
