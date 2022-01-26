"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const really_relaxed_json_1 = require("really-relaxed-json");
const rjson = '[ one two three {foo:bar} ]';
const json = (0, really_relaxed_json_1.toJson)(rjson);
console.log(json);
