import Car from './Car'

export default class Beetle implements Car {
  constructor(readonly maxSpeed = 140, private _currentSpeed = 0) {}

  get currentSpeed() {
    return this._currentSpeed
  }

  speedUp(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 5, this.maxSpeed)
  }

  brake(): void {
    this._currentSpeed = Math.max(this.currentSpeed - 5, 0)
  }
}
