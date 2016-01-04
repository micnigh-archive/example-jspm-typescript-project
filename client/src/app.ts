// enable hot reload for application
export let __hotReload = true;

// famous library to try out typing with
import * as _ from "underscore";
import * as Backbone from "backbone";

class DataModel extends Backbone.Model {
  attributes: {
    firstName: string;
    lastName: string;
  };
}

class MyView extends Backbone.View<DataModel> {
  template = _.template("<h1><%= firstName %></h1><h2><%= lastName %></h2>");
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}

let myModel = new DataModel({
  firstName: "first",
  lastName: "last",
});
let myView = new MyView({
  el: "#backboneView",
  model: myModel
});
myView.render();

// no type definition for external js lib
// so we define it in `shims.d.ts` shim
import * as es5_shim from "es5-shim";
console.log(es5_shim);

// import external lib without caring about type
import "es5-shim/es5-sham";

// more fun with types
let test = [1, 2, 3, 4, 5];

console.log(_.filter(test, e => e > 2));

function sliceLastNumberArray (arrayToSlice: number[]): number[] {
  return test.slice(-1);
}

let lastElement = sliceLastNumberArray(test);

console.log(lastElement);

import A from "./a";

A("Bobby");
