/*

Copyright (c) YEAR Name. All Rights Reserved.

*/

// Util, etc
let Env = require('./env'),
    Utils = require('./utils/utils'),
    Eventful = require('./utils/eventful');

// Header
let ExampleM = require('./models/example-m'),
    ExampleC = require('./controllers/example-c');

class Application extends Eventful {

  /*
  ------------------------------------------
  | constructor:void
  |
  | Construct.
  ------------------------------------------ */
  constructor() {
    super();

    // global vars
    Namespace.$wn = $(window);

    // class vars

    // build
    this.build();
  }

  /*
  ------------------------------------------
  | build:void
  |
  | Build.
  ------------------------------------------ */
  build() {
    // example
    this.example_m = new ExampleM({'$e': $('#example')});
    this.example_c = new ExampleC({'model': this.example_m});
    this.example_c.trigger('activate');

    this.routes();
    this.observe();
  }

  /*
  ------------------------------------------
  | routes:void
  |
  | Routes.
  ------------------------------------------ */
  routes() {
    // For routes, use page!
    // page('/test', () => {
    //   console.log('pagey!');
    // });
    // page();
  }

  /*
  ------------------------------------------
  | observe:void
  |
  | Observe.
  ------------------------------------------ */
  observe() {

  }
}

// Send it!
$(function() { Namespace.instance = new Application(); });

module.exports = Application;