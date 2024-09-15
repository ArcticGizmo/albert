import { BaseRule } from '.';

export class StringMinRule implements BaseRule<string> {
  private _min: number;

  constructor(min: number) {
    this._min = min;
  }

  errorMessage() {
    return `must be at least ${this._min} characters`;
  }

  validate(value?: string) {
    return (value?.length || 0) >= this._min;
  }
}


export class StringMaxRule implements BaseRule<string> {
  private _max: number;
  constructor(max: number) {
    this._max = max;
  }

  errorMessage() {
    return `must be no more than ${this._max} characters`;
  }

  validate(value?: string) {
    return (value?.length || 0) <= this._max;
  }
}