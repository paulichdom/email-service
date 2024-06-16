import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailjsModule } from './emailjs/emailjs.module';

@Module({
  imports: [EmailjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
