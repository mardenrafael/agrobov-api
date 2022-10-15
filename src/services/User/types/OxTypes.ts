import { Male, Female } from "./OxGenreTypes"

export type RequestCreateOx = {
    earring: string,
    born_date: Date,
    genre: Male | Female,
}
