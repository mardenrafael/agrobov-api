export default class ErrorHandler extends Error {
  public code: string;
  public meta: Record<string, unknown> | undefined;

  constructor(code: string, meta: Record<string, unknown> | undefined) {
    super();
    this.meta = meta;
    this.code = code;
  }
}
