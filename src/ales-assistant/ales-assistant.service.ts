import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { createThreadUseCase } from './use-cases/create-thread.use-case';
import { QuestionDto } from './dto/question.dto';
import { createMessageUseCase } from './use-cases/create-message.use-case';
import { createRunUseCase } from './use-cases/create-run.use-case';
import { checkCompleteStatusUseCase } from './use-cases/checkCompleteStatus.use-case';
import { getMessageListUseCase } from './use-cases/getMessageList.use-case';

@Injectable()
export class AlesAssistantService {
    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

      
    async createThread() {
        return await createThreadUseCase(this.openai)
    }

    async userQuestion(questionDto: QuestionDto) {
        // CREA EL MENSAJE AL THREAD
        const message = await createMessageUseCase(this.openai, questionDto)

        // AGREGA UN ESTADO AL MENSAJE - EN COLA /////- CANCELADO - EXPIRADO - COMPLETADO 
        const run = await createRunUseCase(this.openai, {
            threadId: questionDto.threadId
        })

        // ESPERA EL ESTADO COMPLETADO
        await checkCompleteStatusUseCase(this.openai, {
            runId: run.id,
            threadId: questionDto.threadId
        })

        // TRAEMOS LOS MENSAJES
        const messages = await getMessageListUseCase(this.openai, {
            threadId: questionDto.threadId
        })

        return messages.reverse()
    }
}
