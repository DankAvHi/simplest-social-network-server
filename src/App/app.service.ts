import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  private readonly logger = new Logger(AppService.name);

  writeAppStartMessage() {
    const appHost = this.configService.get<string>("host");
    const appLocalNetworkHost =
      this.configService.get<string>("localNetworkAddres");
    const appPort = this.configService.get<number>("port");
    const appNetProtocol = this.configService.get<boolean>("SSL")
      ? "https"
      : "http";

    this.logger.log(
      `⚡ App started,\n
      🖥️  localhost addres: ${appNetProtocol}://localhost:${appPort},
      🌐 global addres: ${appNetProtocol}://${appHost},
      🏠 local network addres: ${appNetProtocol}://${appLocalNetworkHost}:${appPort}\n`
    );
  }
}
