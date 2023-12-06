import Car from './Car'

export default class Civic implements Car {
  constructor(readonly maxSpeed = 208, private _currentSpeed = 0) {}

  get currentSpeed() {
    return this._currentSpeed
  }

  speedUp(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 10, this.maxSpeed)
  }

  brake(): void {
    this._currentSpeed = Math.max(this.currentSpeed - 10, 0)
  }
}
