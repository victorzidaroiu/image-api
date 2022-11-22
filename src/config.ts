export const config = {
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT || '8080', 10),
  logLevel: process.env.LOG_LEVEL || 'debug',
}
