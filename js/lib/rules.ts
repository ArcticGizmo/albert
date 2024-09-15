export interface BaseRule<T> {
  errorMessage: () => string;
  validate: (value?: T) => boolean;
}

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

/*
Make it so we can do "string".validate() to test it out.

Really an object is just a more complex validation requirement 
with iteration and that kind of thing

*/
