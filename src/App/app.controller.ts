import { Controller, Get, Redirect } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  @Redirect()
  redirectClient() {
    const host = this.configService.get<string>("clientHost");

    return { url: `http://${host}` };
  }
}
