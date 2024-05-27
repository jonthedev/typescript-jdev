/*

? Declaration Files

* In TypeScript, .d.ts files, also known as declaration files,consist of type definitions, and are used to provide types for JavaScript code.

* They allow TypeScript to understand the shape and types of objects, functions, classes, etc., in JavaScript libraries, enabling type checking and autocompletion in TypeScript code that uses these libraries.

*/

//create types.ts
//export RandomType
import { Random } from "../types"

/*

* 'tsconfig.json'

lib: Set to ["ES2020", "DOM", "DOM.Iterable"].

* This specifies the library files to be included in the compilation. Specify a set of bundled library declaration files that describe the target runtime environment.

* If you find yourself using a library/package which doesn't have types, refer to the link below. You may find them there.

https://github.com/DefinitelyTyped/DefinitelyTyped

*/
