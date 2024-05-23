This project stands as an in-depth guide to TypeScript, meticulously covering its fundamental basics and progressing to its more advanced concepts. It starts with basic setup instructions for creating a TypeScript project using Vite and progresses through a series of tutorials covering various TypeScript features and best practices. Key topics include type annotations, type inference, practical applications of type annotation, union types, handling of "any", "unknown", and "never" types, arrays, and objects fundamentals, challenges to reinforce learning, and functions with their complexities.

The project also delves into advanced TypeScript features such as generics, fetching data with TypeScript, working with the Zod library for data validation, understanding TypeScript declaration files, and class-based programming with TypeScript. Each tutorial is designed to provide hands-on experience with TypeScript, helping learners understand how to apply TypeScript features in real-world scenarios effectively.

Overall, the project is an in-depth TypeScript learning/reference resource, ideal for developers who wish to gain a thorough understanding of TypeScript, from basic to advanced levels, through practical examples.

## Install

```sh
npm create vite@latest typescript -- --template vanilla-ts
```

## Setup

- create src/tutorial.ts
- import tutorial in src/main.ts

```ts
import "./tutorial.ts"
```

- write code in tutorial

- create README.md
- copy from final

## Type Annotations

TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

```ts
let awesomeName: string = "shakeAndBake"
awesomeName = "something"
awesomeName = awesomeName.toUpperCase()
// awesomeName = 20;

console.log(awesomeName)

let amount: number = 12
amount = 12 - 1
// amount = 'pants';

let isAwesome: boolean = true
isAwesome = false
// isAwesome = 'shakeAndBake';
```

## Type Inference

The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are working in the typescript file 😄

```ts
let awesomeName = "shakeAndBake"
awesomeName = "something"
awesomeName = awesomeName.toUpperCase()
// awesomeName = 20;
```
