import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GptModule } from './gpt/gpt.module';
import { AlesAssistantModule } from './ales-assistant/ales-assistant.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GptModule,
    AlesAssistantModule,
  ]
})
export class AppModule {}
