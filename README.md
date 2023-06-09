# Data Wrangling in JavaScript

In this notebook, I shared my lecture notes on the Introduction to data wrangling and analysis in JavaScript course. I would like to thank Allison Horst for this course.

You can reach Observable notebook from [this link](https://observablehq.com/d/36faa6256951c555@438).

View this notebook in your browser by running a web server in this folder. For example:

``` sh
npx http-server
```

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to import this module directly into your application. To npm install:

``` sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/36faa6256951c555@438.tgz?v=3
```

Then, import your notebook and the runtime as:

``` js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "36faa6256951c555";
```

To log the value of the cell named "foo":

``` js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
```
