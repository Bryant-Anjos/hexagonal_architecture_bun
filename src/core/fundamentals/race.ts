import { terminal } from 'terminal-kit'

import Car from './Car'

export default function race(
  car: Car,
  logger: (text: string) => void = console.log,
) {
  Array.from({ length: 10 }).forEach(() => {
    car.speedUp()
    logger(`\nSpeed: ${car.currentSpeed}`)
  })

  Array.from({ length: 10 }).forEach(() => {
    car.brake()
    logger(`\nSpeed: ${car.currentSpeed}`)
  })
}
