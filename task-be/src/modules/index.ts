import { buildSchema } from 'graphql'
import { userResolvers, userSchema } from './user'

export const resolvers = {
  ...userResolvers,
}

export const schema = buildSchema(`
    ${userSchema}

    schema {
        query: Query
        mutation: Mutation
    }
`)
