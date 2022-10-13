import jwt from "jsonwebtoken";

export default class JWT {
  private static readonly JWTExpirationInSecond: number = 86400;

  public static generate(id: number) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: this.JWTExpirationInSecond,
    });
  }
}

