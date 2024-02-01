import OpenAI from "openai";

interface Options {
    threadId: string,
    runId: string
}

// Esta es una funcion recursiva
export const checkCompleteStatusUseCase = async ( openAi: OpenAI, options: Options) => {
    const {threadId, runId} = options
    const runStatus = await openAi.beta.threads.runs.retrieve(threadId, runId)

    console.log({ status: runStatus.status });

    if(runStatus.status === 'completed') {
        return runStatus
    }

    // Esperar un segundo
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return await checkCompleteStatusUseCase(openAi, options)
}