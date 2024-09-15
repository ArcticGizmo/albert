import { StringMaxRule, StringMinRule } from '../rules';
import { BaseSchema } from './BaseSchema';

export class StringSchema extends BaseSchema<string> {
  constructor() {
    super('string');
  }

  min(min: number) {
    return this.addRule(new StringMinRule(min));
  }

  max(max: number) {
    return this.addRule(new StringMaxRule(max));
  }
}
