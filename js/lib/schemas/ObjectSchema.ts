import { ValidationError } from '../validation';
import { BaseSchema, InferType } from './BaseSchema';

interface ObjectSchemaProperties {
  [key: string]: BaseSchema<any>;
}

type ObjectSchemaValues<T extends ObjectSchemaProperties> = {
  [key in keyof T]?: InferType<T[key]>;
};

export class ObjectSchema<T extends ObjectSchemaProperties> {
  private _props: T;
  constructor(properties: T) {
    // super('object');
    this._props = properties;
  }

  private getPath(key: string, root?: string) {
    if (!root) return key;
    return `${root}.${key}`;
  }

  validate(value?: ObjectSchemaValues<T>, path?: string) {
    const errors: ValidationError[][] = [];

    for (const [key, schema] of Object.entries(this._props)) {
      errors.push(schema.validate(value?.[key], this.getPath(key, path)));
    }

    return errors.flat();
  }

  validateAndLog(value?: ObjectSchemaValues<T>) {
    const errors = this.validate(value);
    console.dir(errors);
  }
}
