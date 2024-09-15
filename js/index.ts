import { StringSchema, NumberSchema, BooleanSchema, ObjectSchema } from './lib/schemas';
import * as yup from 'yup';

// new StringSchema().validateAndLog('apples');
// new StringSchema().min(5).validateAndLog('a');

// new NumberSchema().validateAndLog(-1);
// new NumberSchema().min(5).validateAndLog(4);

// new BooleanSchema().validateAndLog(true);
// new BooleanSchema().true().validateAndLog(false);

new ObjectSchema({
  apple: new StringSchema(),
  banana: new NumberSchema().min(5)
}).validateAndLog({ apple: '7', banana: 2 });

yup.object();

// try {
//   // yup.string().min(5).validateSync('a');
//   yup
//     .object({
//       apple: yup.string().min(5)
//     })
//     .validate({ apple: 'x' });
// } catch (e) {
//   console.dir(e);
// }
