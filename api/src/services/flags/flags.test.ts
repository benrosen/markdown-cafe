import { flags, flag, createFlag, updateFlag, deleteFlag } from './flags'
import type { StandardScenario } from './flags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('flags', () => {
  scenario('returns all flags', async (scenario: StandardScenario) => {
    const result = await flags()

    expect(result.length).toEqual(Object.keys(scenario.flag).length)
  })

  scenario('returns a single flag', async (scenario: StandardScenario) => {
    const result = await flag({ id: scenario.flag.one.id })

    expect(result).toEqual(scenario.flag.one)
  })

  scenario('creates a flag', async (scenario: StandardScenario) => {
    const result = await createFlag({
      input: { pageId: scenario.flag.two.pageId },
    })

    expect(result.pageId).toEqual(scenario.flag.two.pageId)
  })

  scenario('updates a flag', async (scenario: StandardScenario) => {
    const original = await flag({ id: scenario.flag.one.id })
    const result = await updateFlag({
      id: original.id,
      input: { pageId: scenario.flag.two.pageId },
    })

    expect(result.pageId).toEqual(scenario.flag.two.pageId)
  })

  scenario('deletes a flag', async (scenario: StandardScenario) => {
    const original = await deleteFlag({ id: scenario.flag.one.id })
    const result = await flag({ id: original.id })

    expect(result).toEqual(null)
  })
})
