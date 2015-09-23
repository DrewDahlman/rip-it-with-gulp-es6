/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Dependencies

// data
let Data = require('../data/data');

// base
let BaseM = require('./base-m');

class ExampleM extends BaseM {

  /*
  ------------------------------------------
  | constructor:void
  |
  | data:object - data
  |
  | Construct.
  ------------------------------------------ */
  constructor(data) {
    super(data);

    this.parse();
  }

  /*
  ------------------------------------------
  | parse:void
  |
  | Parse sync data.
  ------------------------------------------ */
  parse() {
    this._example = null;
    this.example = Data.example;
  }

  /*
  ------------------------------------------
  | example:string (get)
  |
  | Get the example.
  ------------------------------------------ */
  get example() {
    return this._example;
  }

  /*
  ------------------------------------------
  | example:void (set)
  |
  | e:string - example
  |
  | Set the example.
  ------------------------------------------ */
  set example(e) {
    this._example = e;
  }
}

module.exports = ExampleM;