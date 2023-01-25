import { networkInterfaces as NetworkInterfaces } from "os";

const networkInterfaces = NetworkInterfaces();
const localNetworkAddres =
  networkInterfaces[Object.keys(networkInterfaces)[0]][1].address;

const appConfig = () => ({
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10) || 8000,
  SSL: process.env.SSL,
  localNetworkAddres,
  clientHost: process.env.CLIENT_HOST || localNetworkAddres,
  clientPort: parseInt(process.env.CLIENT_PORT, 10) || 3000,
  databaseURL: process.env.DATABASE_URL,
});

export default appConfig;
