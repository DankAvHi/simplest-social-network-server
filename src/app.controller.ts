import { Controller, Get, Redirect, Request } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  @Redirect()
  async redirectClient(@Request() req: Request) {
    const host = this.configService.get<string>("clientHost");
    const port = this.configService.get<string>("clientPort");

    return { url: `http://${host === "localhost" ? `${host}:${port}` : host}` };
  }
}
