import { OPENAI_MODELS } from '../adapters'
import { AppSchema } from '/srv/db/schema'

export const koboldPresets = {
  basic: {
    service: 'kobold',
    name: 'Simple',
    maxTokens: 80,
    maxContextLength: 2048,
    repetitionPenalty: 1.08,
    repetitionPenaltySlope: 0.9,
    repetitionPenaltyRange: 1024,
    temp: 0.65,
    topK: 0,
    topP: 0.9,
    typicalP: 1,
    topA: 1,
    tailFreeSampling: 0.9,
    encoderRepitionPenalty: 1.0,
    penaltyAlpha: 0,
    addBosToken: true,
    banEosToken: false,
    skipSpecialTokens: true,
    order: [0, 1, 2, 3, 4, 5, 6],
    frequencyPenalty: 0.7,
    presencePenalty: 0.7,
    gaslight: '',
    ultimeJailbreak: '',
    oaiModel: OPENAI_MODELS.Turbo,
    streamResponse: false,
    memoryDepth: 50,
    memoryContextLimit: 500,
    memoryReverseWeight: false,
    useGaslight: false,
    antiBond: false,
  },
} satisfies Record<string, Partial<AppSchema.GenSettings>>
