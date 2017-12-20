export default class PropertyAssignmentOfArrowFunctions {
  constructor(string) {
    this.string = string;
  }

  foo = function() {
    return this.string;
  }
}
