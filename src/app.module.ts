import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/appConfig";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    AuthModule,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(appService: AppService) {
    appService.writeAppStartMessage();
  }
}
