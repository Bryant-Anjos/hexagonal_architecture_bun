import TerminalUtil from '@/app/util/TerminalUtil'
import polymorphism from '@/app/fundamentals/polymorphism'
import dependencyInversionPrinciple from '@/app/fundamentals/dependencyInversionPrinciple'

export default async function fundamentalsMenu() {
  TerminalUtil.title('Fundamentals')

  const [index] = await TerminalUtil.menu([
    '1. Polymorphism',
    '2. Dependency Inversion Principle',
    'Back',
  ])

  switch (index) {
    case 0:
      await polymorphism()
      break
    case 1:
      await dependencyInversionPrinciple()
      break
    default:
      return
  }

  await fundamentalsMenu()
}
