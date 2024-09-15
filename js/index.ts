import { StringSchema, NumberSchema } from './lib/schema';
import * as yup from 'yup';

new StringSchema().validateAndLog('apples');
new StringSchema().min(5).validateAndLog('a');

new NumberSchema().validateAndLog(-1);
new NumberSchema().min(5).validateAndLog(4);

// try {
//   yup.string().min(5).validateSync('a');
// } catch (e) {
//   console.dir(e);
// }
