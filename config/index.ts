// Config file

import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    redis_host: process.env.REDIS_HOST,
    redis_port: process.env.REDIS_PORT,
    redis_pass: process.env.REDIS_PASS,
    allowedOrigins: process.env.ALLOWED_ORIGINS
};
