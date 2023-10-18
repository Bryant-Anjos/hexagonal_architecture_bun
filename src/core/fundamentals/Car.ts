export default interface Car {
  readonly maxSpeed: number
  readonly currentSpeed: number
  speedUp(): void
  brake(): void
}
