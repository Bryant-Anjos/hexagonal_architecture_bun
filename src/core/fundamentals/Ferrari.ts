import Car from './Car'

export default class Ferrari implements Car {
  constructor(readonly maxSpeed = 324, private _currentSpeed = 0) {}

  get currentSpeed() {
    return this._currentSpeed
  }

  speedUp(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 20, this.maxSpeed)
  }

  brake(): void {
    this._currentSpeed = Math.max(this.currentSpeed - 20, 0)
  }
}
