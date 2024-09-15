import { ValidationError } from '../validation';
import { BaseSchema, InferType } from './BaseSchema';

export class ArraySchema<T extends BaseSchema<any>> {
  private _schema: T;
  constructor(schema: T) {
    this._schema = schema;
  }

  private getPath(index: number, root?: string) {
    if (!root) return `${index}`;
    return `${root}[${index}]`;
  }

  validate(value?: InferType<T>[], path?: string) {
    const errors: ValidationError[] = [];

    // TODO: this can also have its own validations

    if (!value) {
      return [];
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
