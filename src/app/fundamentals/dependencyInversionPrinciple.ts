import TerminalUtil from '@/app/util/TerminalUtil'
import Beetle from '@/core/fundamentals/Beetle'
import Car from '@/core/fundamentals/Car'
import Civic from '@/core/fundamentals/Civic'
import Ferrari from '@/core/fundamentals/Ferrari'
import race from '@/core/fundamentals/race'
import { terminal } from 'terminal-kit'

export default async function dependencyInversionPrinciple() {
  TerminalUtil.title('Dependency Inversion Principle')

  const [type] = await TerminalUtil.selection('Car type?', [
    'Beetle',
    'Civic',
    'Ferrari',
  ])

  let car: Car
  switch (type) {
    case 0:
      car = new Beetle()
      break
    case 1:
      car = new Civic()
      break
    default:
      car = new Ferrari()
  }

  race(car, terminal.green)
  await TerminalUtil.waitEnter()
}
