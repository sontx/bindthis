# bindthis

Binds `this` to all methods of your class

Your mess stuff:
```js
constructor() {
  // .......
  this.method1 = this.method1.bind(this);
  this.method2 = this.method2.bind(this);
  this.method3 = this.method3.bind(this);
  this.method4 = this.method4.bind(this);
  // .......
}
```

Now, only one line to clear your mess.
```js
constructor() {
  // .......
  bindMethods(this);
  // .......
}
```

# Usage

Install
```bash
npm i @sontx/bindthis
```

or 

```bash
yarn add @sontx/bindthis
```

In your code
```js
import bindMethods from "bindthis";

class MyClass {
  constructor() {
    // ..............
    bindMethods(this);
    // ..............
  }
  // ..............
  method1() {}
  method2() {}
}
```