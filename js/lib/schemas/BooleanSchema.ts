import { BooleanFalseRule, BooleanTrueRule } from '../rules/booleanRules';
import { BaseSchema } from './BaseSchema';

export class BooleanSchema extends BaseSchema<boolean> {
  constructor() {
    super('number');
  }

  true() {
    return this.addRule(new BooleanTrueRule());
  }

  false() {
    return this.addRule(new BooleanFalseRule());
  }
}
