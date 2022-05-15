import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PageCreateArgs>({
  page: {
    one: { data: { id: 'String', updatedAt: '2022-05-14T21:15:54Z' } },
    two: { data: { id: 'String', updatedAt: '2022-05-14T21:15:54Z' } },
  },
})

export type StandardScenario = typeof standard
