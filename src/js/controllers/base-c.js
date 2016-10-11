/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Dependencies

// Util, etc
let Eventful = require('../utils/eventful');

class BaseC extends Eventful {

  /*
  ------------------------------------------
  | constructor:void
  |
  | init:object - init params
  |
  | Construct.
  ------------------------------------------ */
  constructor(init) {
    super();

    // class vars
    this.model = init.model;
  }

  /*
  ------------------------------------------
  | build:void
  |
  | Build.
  ------------------------------------------ */
  build() {
  }

  /*
  ------------------------------------------
  | observe:void
  |
  | Observe.
  ------------------------------------------ */
  observe() {
    this.on('activate', this.activate);
    this.on('suspend', this.suspend);
  }

  /*
  ------------------------------------------
  | activate:void
  |
  | e:object - eventful
  |
  | Activate.
  ------------------------------------------ */
  activate(e) {
    this.model.$e.show();
  }

  /*
  ------------------------------------------
  | suspend:void
  |
  | e:object - eventful
  |
  | Suspend.
  ------------------------------------------ */
  suspend(e) {
    this.model.$e.hide();
  }
}

module.exports = BaseC;