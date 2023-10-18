import TerminalUtil from '@/app/util/TerminalUtil'
import Beetle from '@/core/fundamentals/Beetle'
import Car from '@/core/fundamentals/Car'
import Ferrari from '@/core/fundamentals/Ferrari'

export default async function polymorphism() {
  TerminalUtil.title('Polymorphism')

  const [carType] = await TerminalUtil.selection('Car type?', [
    'Ferrari',
    'Beetle',
  ])
  const car: Car = carType === 0 ? new Ferrari() : new Beetle()

  while (true) {
    TerminalUtil.clear()
    TerminalUtil.showKeyValue('Maximum Speed: ', `${car.maxSpeed} km/h`)
    TerminalUtil.showKeyValue('Current Speed: ', `${car.currentSpeed} km/h`)

    const [option] = await TerminalUtil.selection('Which option?', [
      'Speed Up',
      'Brake',
    ])

    option === 0 ? car.speedUp() : car.brake()

    const continuate = await TerminalUtil.confirmation(
      'Do you wish to continue?',
    )

    if (!continuate) {
      return
    }
  }
}
