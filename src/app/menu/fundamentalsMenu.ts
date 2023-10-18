import TerminalUtil from '@/app/util/TerminalUtil'
import polymorphism from '@/app/fundamentals/polymorphism'

export default async function fundamentalsMenu() {
  TerminalUtil.title('Fundamentals')

  const [index] = await TerminalUtil.menu(['1. Polymorphism', 'Back'])

  switch (index) {
    case 0:
      await polymorphism()
      break
    case 1:
      return
  }

  await fundamentalsMenu()
}
