import { BaseRule } from '.';

export class NumberMinRule implements BaseRule<number> {
  private _min: number;
  constructor(min: number) {
    this._min = min;
  }

  errorMessage() {
    return `must be at least ${this._min}`;
  }

  validate(value?: number) {
    return (value || 0) >= this._min;
  }
}

export class NumberMaxRule implements BaseRule<number> {
  private _max: number;
  constructor(max: number) {
    this._max = max;
  }

  errorMessage() {
    return `must be no more than ${this._max}`;
  }

  validate(value?: number) {
    return (value || 0) <= this._max;
  }
}
