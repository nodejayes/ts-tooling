import * as checker from './checker/checker';
import * as arr from './array/array';
import * as obj from './object/object';
import * as str from './string/string';
import * as dt from './datetime/datetime';
import * as uuid from './guid/guid';

export class Core {
    Check: typeof checker;
    Array: typeof arr;
    Object: typeof obj;
    String: typeof str;
    DateTime: typeof dt;
    Guid: typeof uuid;
}
