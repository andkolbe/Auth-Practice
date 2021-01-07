import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('no .env file');
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    auth: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    },
    keys: {
        stripe: process.env.STRIPE_KEY,
        mailgun: process.env.MAILGUN_KEY,
        mailgun_domain: process.env.MAILGUN_DOMAIN
    }
}