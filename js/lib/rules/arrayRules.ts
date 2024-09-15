import { BaseRule } from '.';

export class ArrayMinRule<T> implements BaseRule<T[]> {
  private _min: number;

  constructor(min: number) {
    this._min = min;
  }

  errorMessage() {
    return `must have at least ${this._min} elements`;
  }

  validate(value?: T[]) {
    return (value?.length || 0) >= this._min;
  }
}

export class ArrayMaxRule<T> implements BaseRule<T[]> {
  private _max: number;

  constructor(min: number) {
    this._max = min;
  }

  errorMessage() {
    return `must be no more than ${this._max} elements`;
  }

  validate(value?: T[]) {
    return (value?.length || 0) <= this._max;
  }
}
