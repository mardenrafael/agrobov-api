export type RequestCreateOx<Ox> = {
  [P in keyof Ox]: Ox[P];
};
