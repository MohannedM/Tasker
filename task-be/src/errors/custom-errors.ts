export class CustomError extends Error {
  constructor (message: string, public statusCode: number, public data?: any[]) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)

    this.statusCode = statusCode
    this.data = data
  }
}
