# bindthis

Binds "this" to all methods of your class

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

Now, only one line to clear your mess stuff.
```js
constructor() {
  // .......
  bindMethods(this);
  // .......
}
```