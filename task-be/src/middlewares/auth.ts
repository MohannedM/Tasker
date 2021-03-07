import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.get('Authorization')

    if (!authorization) {
        req.isAuth = false;
        return next()
    }

    const token = authorization.split(" ")[1];
    if(!token){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, jwtKey);
    }catch(err){
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    if(decodedToken.expiration < new Date().getTime()){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    req.is_admin = decodedToken.is_admin;
    next();
}