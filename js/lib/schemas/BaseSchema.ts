import { BaseRule } from '../rules';
import { ValidationError } from '../validation';

export abstract class BaseSchema<T> {
  type: string;
  rules: BaseRule<T>[] = [];

  constructor(type: string) {
    this.type = type;
  }

  addRule(rule: any) {
    this.rules.push(rule);
    return this;
  }

  validate(value?: T) {
    const errors: ValidationError[] = [];
    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        // TODO: how to get a path?
        errors.push(new ValidationError(rule.errorMessage(), undefined));
      }
    }

    return errors;
  }

  validateAndLog(value?: T) {
    const errors = this.validate(value);
    console.dir(errors);
  }
}
