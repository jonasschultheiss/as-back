import IConfiguration from './configuration.interface';

export default (): IConfiguration => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
});
