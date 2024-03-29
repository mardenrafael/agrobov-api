import { Prisma } from "@prisma/client";

export enum PrismaErrorCodes {
  P2000 = "P2000",
  P2001 = "P2001",
  P2002 = "P2002",
  P2003 = "P2003",
  P2004 = "P2004",
  P2005 = "P2005",
  P2006 = "P2006",
  P2007 = "P2007",
  P2008 = "P2008",
  P2009 = "P2009",
  P2010 = "P2010",
}

export default class PrismaErrorHandler {
  private code: string;
  private meta: any;
  public name: string;
  public message: string;
  public stack?: string | undefined;

  constructor({
    code,
    meta,
    name,
    message,
    stack,
  }: Prisma.PrismaClientKnownRequestError) {
    this.message = message;
    this.name = name;
    this.code = code;
    this.meta = meta;
    this.stack = stack;
    this.setErrorMessageBasedOnCode();
  }

  private setErrorMessageBasedOnCode(): void {
    switch (this.code) {
      case PrismaErrorCodes.P2000:
        this.message =
          "The provided value for the column is too long for the column's type";
        break;
      case PrismaErrorCodes.P2001:
        this.message = "The record searched for in the where condition";
        break;
      case PrismaErrorCodes.P2002:
        this.message = `Unique constraint failed on the ${this.meta?.target[0]}`;
        break;
      case PrismaErrorCodes.P2003:
        this.message = `Foreign key constraint failed`;
        break;
      case PrismaErrorCodes.P2004:
        this.message = "A constraint failed on the database";
        break;
      case PrismaErrorCodes.P2005:
        this.message =
          "The value stored in the database for the field is invalid for the field's type";
        break;
      case PrismaErrorCodes.P2006:
        this.message =
          "The provided value for model on field is not valid";
        break;
      case PrismaErrorCodes.P2007:
        this.message = "Data validation error";
        break;
      case PrismaErrorCodes.P2008:
        this.message = "Failed to parse the query";
        break;
      case PrismaErrorCodes.P2009:
        this.message = "Failed to validate the query";
        break;
      case PrismaErrorCodes.P2010:
        this.message = "Raw query failed.";
        break;
      default:
        this.message = "Unknow prisma error";
        break;
    }
  }
}
