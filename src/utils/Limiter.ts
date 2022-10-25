import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 50
})

export default limiter