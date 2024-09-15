import { NumberMaxRule, NumberMinRule } from '../rules';
import { BaseSchema } from './BaseSchema';

export class NumberSchema extends BaseSchema<number> {
  constructor() {
    super('number');
  }

  min(min: number) {
    return this.addRule(new NumberMinRule(min));
  }

  max(max: number) {
    return this.addRule(new NumberMaxRule(max));
  }
}
