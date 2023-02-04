import { networkInterfaces as NetworkInterfaces } from "os";

const networkInterfaces = NetworkInterfaces();
const localNetworkAddres =
  networkInterfaces[Object.keys(networkInterfaces)[0]][1].address;

export const configuration = () => ({
  host: process.env.HOST || "N/A",
  port: parseInt(process.env.PORT, 10) || 8000,
  SSL: process.env.SSL === "true",
  SSL_CERT_PATH: process.env.SSL === "true" ? process.env.SSL_CERT_PATH : null,
  SSL_KEY_PATH: process.env.SSL === "true" ? process.env.SSL_KEY_PATH : null,
  localNetworkAddres,
  clientHost:
    process.env.CLIENT_HOST ||
    (process.env.HOST ? localNetworkAddres : "localhost"),
  clientPort: parseInt(process.env.CLIENT_PORT, 10) || 3000,
  databaseURL: process.env.DATABASE_URL,
  turnOnGraphqlPlayground: process.env.GRAPHQL_PLAYGROUND === "true",
});

export default configuration;
