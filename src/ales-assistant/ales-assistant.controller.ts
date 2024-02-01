import { Body, Controller, Post } from '@nestjs/common';
import { AlesAssistantService } from './ales-assistant.service';
import { QuestionDto } from './dto/question.dto';

@Controller('ales-assistant')
export class AlesAssistantController {
  constructor(private readonly alesAssistantService: AlesAssistantService) {}

  @Post('create-thread')
  async createThread() {
    return await this.alesAssistantService.createThread()
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ) {
    return await this.alesAssistantService.userQuestion(questionDto)
  }
}
