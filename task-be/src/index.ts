import express, { Response, Request, NextFunction } from 'express' //eslint-disable-line
import { json } from 'body-parser'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import { schema, resolvers } from './modules'
import { authMiddleware } from './middlewares/auth'

const app = express()

app.use(json())

app.use((req, res, next) => { //eslint-disable-line
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(authMiddleware)

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
  customFormatErrorFn (err: any) { // Remember to change it
    if (!err.originalError) {
      return err
    }
    const { data } = err.originalError
    const message = err.originalError.message || 'An Error Occurred'
    const code = err.originalError.statusCode || 500
    return { message, status: code, data }
  },
}))

mongoose.connect('mongodb+srv://mohannedm:zip123@cluster0.usvsi.mongodb.net/tasks?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4000)
  })
