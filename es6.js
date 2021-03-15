const obj = {
  number: 53820391,
  [Symbol.iterator]: function*() {
      yield* this.number.toString();
  }
}
console.log(obj);