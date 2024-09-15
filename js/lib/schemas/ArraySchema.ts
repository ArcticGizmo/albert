import { BaseRule } from '../rules';
import { ArrayMinRule } from '../rules/arrayRules';
import { ValidationError } from '../validation';
import { BaseSchema, InferType } from './BaseSchema';

export class ArraySchema<T extends BaseSchema<any>> {
  __type!: T;
  private _schema: T;
  rules: BaseRule<InferType<T>[]>[] = [];

  constructor(schema: T) {
    this._schema = schema;
  }

  private getPath(index: number, root?: string) {
    if (!root) return `${index}`;
    return `${root}[${index}]`;
  }

  addRule(rule: any) {
    this.rules.push(rule);
    return this;
  }

  min(min: number) {
    return this.addRule(new ArrayMinRule(min));
  }

  max(max: number) {
    return this.addRule(new ArrayMinRule(max));
  }

  validate(value?: InferType<T>[], path?: string) {
    const errors: ValidationError[] = [];

    // TODO: this can also have its own validations
    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        errors.push(new ValidationError(rule.errorMessage(), path));
      }
    }

    if (!value) {
      return errors;
    }

    for (let i = 0; i < value.length || 0; i++) {
      errors.push(...this._schema.validate(value?.[i], this.getPath(i, path)));
    }

    return errors;
  }

  validateAndLog(value?: InferType<T>[]) {
    const errors = this.validate(value);
    console.dir(errors);
  }
}
