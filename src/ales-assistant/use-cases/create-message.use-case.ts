import OpenAI from "openai";

interface Options {
    question: string,
    threadId: string
}

export const createMessageUseCase = async (openAi: OpenAI, options: Options) => {
    const { threadId, question } = options

    // Crea el mensaje asignado a ese thread
    const message = await openAi.beta.threads.messages.create(threadId, {
        role: 'user',
        content: question
    })

    return message
}