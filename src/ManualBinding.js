export default class ManualBinding {
  constructor(string) {
    this.string = string;
    this.foo = this.foo.bind(this);
  }

  foo() {
    return this.string;
  }
}
