import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FlagCreateArgs>({
  flag: {
    one: {
      data: {
        page: {
          create: {
            endpoint: 'String2150684',
            updatedAt: '2022-05-13T22:45:06Z',
          },
        },
      },
    },
    two: {
      data: {
        page: {
          create: {
            endpoint: 'String8422266',
            updatedAt: '2022-05-13T22:45:06Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
