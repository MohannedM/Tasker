import { buildSchema } from 'graphql'
import { taskResolvers, taskSchema } from './task'
import { userResolvers, userSchema } from './user'

export const resolvers = {
  ...userResolvers,
  ...taskResolvers,
}

export const schema = buildSchema(`
    type Query{
      _empty: String
    }
    type Mutation {
      _empty: String
    }
    ${userSchema}
    ${taskSchema}

    schema {
        query: Query
        mutation: Mutation
    }
`)
