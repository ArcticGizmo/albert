import { BaseRule } from '.';

export class BooleanTrueRule implements BaseRule<boolean> {
  errorMessage() {
    return 'must be true';
  }

  validate(value?: boolean) {
    return value == true;
  }
}

export class BooleanFalseRule implements BaseRule<boolean> {
  errorMessage() {
    return 'must be false';
  }

  validate(value?: boolean) {
    return value == false;
  }
}
