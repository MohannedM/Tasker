import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express' // eslint-disable-line

declare global {
    namespace Express {
        interface Request {
            isAuth?: boolean
            userId?: string
        }
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.get('Authorization')

  if (!authorization) {
    req.isAuth = false
    return next()
  }
  const token = authorization.split(' ')[1]
  if (!token) {
    req.isAuth = false
    return next()
  }
  let decodedToken: any
  try {
    decodedToken = jwt.verify(token, 'supersecret')
  } catch (err) {
    req.isAuth = false
    return next()
  }
  if (!decodedToken) {
    req.isAuth = false
    return next()
  }
  req.isAuth = true
  req.userId = decodedToken.userId
  return next()
}
