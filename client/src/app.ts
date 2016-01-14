// enable hot reload for application
export let __hotReload = true;

// famous library to try out typing with
import * as _ from "underscore";

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

import * as A from "./a";

A.default("Billy");

document.getElementById("content").innerHTML = A.sayIt("Billy bob");

import "jquery";

$("#content").css({
  backgroundColor: "#333",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "24px",
  padding: "12px 12px",
});
