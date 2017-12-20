export default class PropertyAssignmentOfArrowFunctions {
  constructor(string) {
    this.string = string;
  }

  foo = () => {
    return this.string;
  }
}
