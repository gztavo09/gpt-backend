import OpenAI from "openai";

interface Options {
    threadId: string
    assitantId?: string
}

export const createRunUseCase = async (openAi: OpenAI, options: Options) => {
    const { threadId, assitantId = 'asst_WP98Yf4cy4UIcCflo1YiI207' } = options
    const run = await openAi.beta.threads.runs.create(threadId, {
        assistant_id: assitantId,
        //instructions: // OJO! Lo que coloquen aqui sobreescribirá al asistente.
    })

    return run;
}