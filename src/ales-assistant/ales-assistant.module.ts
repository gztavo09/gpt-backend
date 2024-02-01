import { Module } from '@nestjs/common';
import { AlesAssistantService } from './ales-assistant.service';
import { AlesAssistantController } from './ales-assistant.controller';

@Module({
  controllers: [AlesAssistantController],
  providers: [AlesAssistantService],
})
export class AlesAssistantModule {}
