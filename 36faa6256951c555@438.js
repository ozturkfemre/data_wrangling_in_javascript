import define1 from "./79750b3b8e929d9d@239.js";

function _1(md){return(
md`# Data Wrangling in JavaScript`
)}

function _2(md){return(
md`In this notebook, I will share my lecture notes on the Introduction to data wrangling and analysis in JavaScript course. I would like to thank Allison Horst for this very instructive course.  `
)}

function _3(md){return(
md`JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date`
)}

function _4(md){return(
md`## Arrays`
)}

function _5(md){return(
md`An array is a special variable, which can hold more than one value.`
)}

function _burritos(){return(
["chicken", 4.2, "FALSE", "avocado"]
)}

function _7(md){return(
md`To access a value of a variable, we can use [] `
)}

function _8(burritos){return(
burritos[0]
)}

function _9(md){return(
md`Some operators of arrays:`
)}

function _10(burritos){return(
burritos[1]
)}

function _11(burritos){return(
burritos.length
)}

function _12(burritos){return(
burritos.indexOf(4.2)
)}

function _13(burritos){return(
burritos.sort()
)}

function _14(burritos){return(
burritos.push("Lemon")
)}

function _15(md){return(
md`## Objects`
)}

function _16(md){return(
md`In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

property(key: value)`
)}

function _droids(){return(
[
{name: "C-3PO", color: "gold", height: 167},

{name: "R2D2", color: "white/blue", height: 96},

{name: "BB-8", color: "white/orange", height: 26.4}

]
)}

function _18(droids){return(
droids[1]
)}

function _19(md){return(
md`Some operators of objects:`
)}

function _20(droids){return(
droids.length
)}

function _21(droids){return(
droids[2].height
)}

function _22(md){return(
md`## Arrow Function`
)}

function _23(md){return(
md`arrow function is a compact way of writing using the arrow operator

arrow function:
"x => x*x "

traditional way:
"
function (X) {
return x*x;
}""

Both are the same thing.`
)}

function _24(md){return(
md`## Map `
)}

function _25(md){return(
md`\`\`Array.map\`\` iterates over all elements in an array:

\`\`myArray.map(callbackFunction)\`\`

1. iterate over all elements in an array...
2.  a function to exevute for each element`
)}

function _26(droids){return(
droids.map(d => d.height / 100)
)}

function _restaurantBills(){return(
[{bill: 49.51, tipPercent: 0.15},
                   {bill: 112.40, tipPercent: 0.22},
                   {bill: 68.25, tipPercent: 0.18},
                   {bill: 27.37, tipPercent: 0.12},
                   {bill: 50.18, tipPercent: 0.17}]
)}

function _28(restaurantBills){return(
restaurantBills.map(d => d.bill * d.tipPercent)
)}

function _29(md){return(
md`## Data Import`
)}

function _nyc_water(FileAttachment){return(
FileAttachment("Water_Consumption_And_Cost__2013_-_Feb_2023_.csv").csv({typed: true})
)}

function _water_consumption_and_cost__2013__feb_2023_(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Water_Consumption_And_Cost__2013_-_Feb_2023_.csv"),{from:{table:"Water_Consumption_And_Cost__2013_-_Feb_2023_"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _32(md){return(
md`Using Array.map and an arrow array to return and array with the ratio of Current Charges to Consumption (HCF):`
)}

function _prices(nyc_water){return(
nyc_water.map(d => d['Current Charges'] / d['Consumption (HCF)'])
)}

function _34(md){return(
md`Visualization:`
)}

function _35(Plot,nyc_water){return(
Plot.plot({
  marks: [
    Plot.dot(nyc_water, {
      x: "Consumption (HCF)",
      y: "Current Charges",
      fill: "purple",
      r: "Consumption (HCF)"
    })
  ],
  x: { domain: [0, 5e4] }
})
)}

function _36(md){return(
md`### Exercises`
)}

function _biking(){return(
[
  { day: "Monday", miles: 6.2, time_hr: 0.53 },
  { day: "Tuesday", miles: 10.0, time_hr: 1.02 },
  { day: "Wednesday", miles: 4.9, time_hr: 0.48 },
  { day: "Thursday", miles: 0, time_hr: 0 },
  { day: "Friday", miles: 18.5, time_hr: 1.59 },
  { day: "Saturday", miles: 7.3, time_hr: 0.86 },
  { day: "Sunday", miles: 0, time_hr: 0 }
]
)}

function _38(biking){return(
biking[4].miles
)}

function _39(biking){return(
biking[biking.map(d => d.day).indexOf("Friday")].miles
)}

function _40(biking){return(
biking.map(d => d.miles / d.time_hr)
)}

function _41(md){return(
md`## Filter`
)}

function _42(md){return(
md`Array.filter iterate over elements in an array, keeping objects if a condition is true`
)}

function _43(biking){return(
biking.filter( d => d.miles > 7.3)
)}

function _44(md){return(
md`Explanation of the code below:
Take the object d, iterate over the data set until miles is greater than 7.3. 

1. Iterate over all elements in an array and keep objects 
2. If this condition is met...

Operators

- \`\`< and >\`\` :greater or lees then 
- \`\`>= and <=\`\`: greater/less than or equal
- \`\` ==\`\`:loose equality. ( 2 == "2" is true)
- \`\`===\`\` :strict equality operator (2 === "2" is false) if any other 2 in the data set do this.
- \`\`!=\`\` : loose inequality
- \`\`!==\`\`: strict inequality
- \`\` || \`\` : or
- \`\` && \`\` :and

**NOTE**: A single \`\`=\`\` assigns value to something, rather that as "do these match?"`
)}

function _45(md){return(
md`Examples usages:`
)}

function _46(biking){return(
biking.filter(d => d.miles > 10)
)}

function _47(biking){return(
biking.filter(d => d.day == "Saturday" || d.day == "Monday")
)}

function _48(biking){return(
biking.filter(d => d.miles < 10 && d.time_hr < 0.5)
)}

function _49(biking){return(
biking.filter(d => d.day != "Thursday")
)}

function _50(md){return(
md`### Versality of the Array.map function:`
)}

function _51(md){return(
md`\`\`Array.map\`\` function can be used to...

- Select properties
- Rename properties
- Add new properties
- Reorder properties
- ... and more!`
)}

function _52(droids){return(
droids.map(d => ({id: d.name, height_cm:d.height / 10}))
)}

function _53(md){return(
md`Explanation of the code:
- \`\`droids.map\`\` iterate over all objects in *droids*
- \`\`d=>\`\` and for each of these elements, I want you to...
- \`\`{id: d.name, height_cm:d.height / 10}))\`\` return an object with two properties: id(containing the values in *name* and height_cm(containing values in *height* divided by 100))

Output of this code is a new array containing id and height_cm. But with one little line, it does three wrangling steps: select, rename, mutate.`
)}

function _54(md){return(
md`**The spread operator: {...d}**

"Spread syntax can be used when all elements from an object or array need to be included in a new array or object..."

\`\`\`
new = [...old] // returns all, as Array
new = ({...old}) // returns all, as Object
`
)}

function _biking_km(biking){return(
biking.map(d => ({...d, km: d.miles * 1.61}))
)}

function _56(md){return(
md`Explanation of the code:

- \`\`biking.map\`\` for each of these elements I iterate...
- \`\`({...d, km: d.miles * 1.61}))\`\` : return a new object that should contain original content and new content km. `
)}

function _57(md){return(
md`## Arquero`
)}

function _58(md){return(
md`Arguero is a JavaScript library for data wrangling and transformation from the UW Interactive Data Visualization lab, inspired by dplyr.`
)}

function _carData(FileAttachment){return(
FileAttachment("auto-mpg.csv").csv({typed: true})
)}

function _carTable(aq,carData){return(
aq.from(carData)
)}

function _62(__query,carTable,invalidation){return(
__query(carTable,{from:{table:"carTable"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"carTable")
)}

function _63(md){return(
md`Let's do the following wrangling steps together using Arquero verbs:

- Only keep properties (columns) for "name", "economy (mpg)", "cylinders", and "weight (lb)"
- Only keep rows for cars with 4 cylinders, and where "economy (mpg)" is not null (empty)
- Add a new column called weight_kg, with "weight (lb)" converted to kilograms (multiply the pounds by 0.45)
- Sort the data by increasing value of "economy (mpg)"
- Rename the "economy (mpg)" column to "mpg"`
)}

function _64(carTable){return(
carTable
  .select("car name", "mpg", "cylinders", "weight")
  .filter((d) => d.cylinders == 4 && d['mpg'] != null)
  .derive({weight_kg: d => d['weight'] * 0.45})
  .orderby('mpg')
  .rename({'mpg': 'mpg'})
  .view()
)}

function _65(md){return(
md`Another example:`
)}

function _wb(FileAttachment){return(
FileAttachment("world_bank_data.csv").csv({typed: true})
)}

function _wbTable(aq,wb){return(
aq.from(wb)
)}

function _68(md){return(
md`Using only Array map and filter methods, I'll do the following:

-   Create a new array named wb2019...
-   ...that includes columns "country", "year", "co2", "region" and "co2_thousands". The first four should contain the same values currently in those properties; "co2_thousands" should contain the co2 property value divided by 1000.
-   Filter to only include objects where the year value is 2019`
)}

function _wb2019(wb){return(
wb
  .map((d) => ({
    country: d.country,
    year: d.year,
    co2: d.co2,
    region: d.region,
    co2_thousands: d.co2 / 1000
  }))
  .filter(
    (d) =>
      d.year == 2019
  )
)}

function _70(md){return(
md`Now, I'll do it only using Arquero functions:`
)}

function _wbEAPArquero(wbTable){return(
wbTable
  .select("country", "year", "co2", "region")
  .derive({ co2_thousands: (d) => d.co2 / 1000 })
  .filter(d => d.year == 2019)
  .view()
)}

function _72(md){return(
md`Data Visualization: Creating a chart of the top 10 CO2 emitting countries in 2019 (using the wb2019 array created above)`
)}

function _73(Plot,wb2019){return(
Plot.plot({
  marks: [
    Plot.barX(wb2019, {
      x: (d) => d.co2 / 1e6,
      y: "country",
      fill: "blueviolet",
      stroke: "gray",
      sort: { y: "x", reverse: true, limit: 10 }
    }),
    Plot.text(wb2019, {
      x: (d) => d.co2 / 1e6,
      y: "country",
      text: (d) => d.co2 / 1e6,
      dx: 2,
      textAnchor: "start"
    }),
    Plot.ruleX([0])
  ],
  marginLeft: 200,
  x: { domain: [0, 12], grid: true, label: "CO2" }
})
)}

function _penguinData(FileAttachment){return(
FileAttachment("penguinData.csv").csv({typed: true})
)}

function _75(__query,penguinData,invalidation){return(
__query(penguinData,{from:{table:"penguinData"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"penguinData")
)}

function _76(md){return(
md`Using Array.map and Array.filter, I will do the following with penguinData:

- Make a subset with species, massKilograms (body_mass_g / 1000), and billRatio (culmen_length_mm / culmen_depth_mm)
- Filter to only keep penguins with a billRatio greater than 3.5`
)}

function _77(penguinData){return(
penguinData
  .map((d) => ({
    species: d.species,
    massKilograms: d.body_mass_g / 1000,
    billRatio: d.culmen_length_mm / d.culmen_depth_mm
  }))
  .filter((d) => d.billRatio > 3.5)
)}

function _78(md){return(
md`## Descriptive Statistics`
)}

function _79(md){return(
md`d3 package provides functions for descriptive statistics.`
)}

function _80(d3,penguinData){return(
d3.mean(penguinData, d => d.body_mass_g)
)}

function _81(d3,penguinData){return(
d3.deviation(penguinData, d => d.body_mass_g)
)}

function _82(d3,penguinData){return(
d3.median(penguinData, d => d.body_mass_g)
)}

function _83(md){return(
md`**Note:** Basic statistics automatically coerce inputs to numbers and ignores invalid values(NA, NaN, NULL)`
)}

function _mass(){return(
[12, "8", NaN, null]
)}

function _85(d3,mass){return(
d3.mean(mass)
)}

function _86(d3,mass){return(
d3.count(mass)
)}

function _87(md){return(
md`Use d3 methods, I will find the following:`
)}

function _88(d3,penguinData){return(
d3.min(penguinData, d => d.culmen_length_mm)
)}

function _89(d3,penguinData){return(
d3.extent(penguinData, d => d.culmen_length_mm)
)}

function _90(d3,penguinData){return(
d3.mean(penguinData, d => d.body_mass_g)
)}

function _91(d3,penguinData){return(
d3.mean(penguinData.map((d) => d.body_mass_g))
)}

function _92(d3,penguinData){return(
d3.deviation(penguinData, d => d.culmen_depth_mm)
)}

function _93(d3,penguinData){return(
d3.count(penguinData, d => d.flipper_length_mm)
)}

function _94(md){return(
md`## Grouping`
)}

function _95(md){return(
md`\`\`d3.group\`\` : group values by key`
)}

function _96(d3,penguinData){return(
d3.group(penguinData, d => d.species)
)}

function _97(md){return(
md`Here, the output is a Map - a data structure. Different from Array.map, a method.

A Map like an object contains key-value pairs.

How does a Map differ from an Object?

- keys can be anything(function, object, etc). Keys of an Object must be string or symbols.
- Maps are iterable
- Maps remember the element insertion order
- Get size(number of key-value pairs) quickluy with size property.

If you have a Map, you can get element with get.`
)}

function _groupSpecies(d3,penguinData){return(
d3.group(penguinData, d => d.species)
)}

function _99(md){return(
md`Use get() to access elements in a Map:`
)}

function _100(groupSpecies){return(
groupSpecies.get("Adelie")
)}

function _101(md){return(
md`Examples: `
)}

function _groupSpeciesIsland(d3,penguinData){return(
d3.group(penguinData, d => d.species, d => d.island)
)}

function _103(groupSpeciesIsland){return(
groupSpeciesIsland.get("Adelie").get("Dream")
)}

function _104(md){return(
md`**Rollups:** Summary statistics by group.

We can use a \`\`d3.rollup\`\` to find statistics by group.
`
)}

function _105(d3,penguinData){return(
d3.rollup(penguinData, v => d3.mean(v, d => d.body_mass_g), b => b.species)
)}

function _106(md){return(
md`Code explanation:

- \`\`penguinData\`\` : data
- \`\`v => d3.mean(v, d => d.body_mass_g)\`\` : reducer function
- \`\`b => b.species\`\` : grouping key

"from the *penguinData* data, return the mean of the *body_mass_g* property for each unique group in the *species* property."

the output of \`\`d3.rollup\`\` is also a Map.

If you want to return an array of arrays insted, use \`\`d3.flatRollup\`\` .`
)}

function _107(d3,penguinData){return(
d3
  .flatRollup(
    penguinData,
    (v) => d3.mean(v, (d) => d.body_mass_g),
    (d) => d.species
  )
 .map(([species, meanMass]) => ({ species, meanMass }))
)}

function _108(md){return(
md`Data Visualization: Creating a new bar chart with Observable Plot to visualize mean body mass by species:`
)}

function _109(Plot,penguinData){return(
Plot.plot({
  marks: [
    Plot.barY(
      penguinData,
      Plot.groupX(
        { y: "mean" },
        { y: "body_mass_g", x: "species", sort: { x: "y", reverse: true } }
      )
    )
  ]
})
)}

function _110(md){return(
md`Exercises:`
)}

function _fishing(){return(
[{river: "San Juan", species: "rainbow", lengthInches: 18.2},
           {river: "San Juan", species: "brown", lengthInches: 14.1},
           {river: "San Juan", species: "brown", lengthInches: 21.5},
           {river: "Rio Grande", species: "brown", lengthInches: 9.0},
           {river: "Rio Grande", species: "brown", lengthInches: 12.5},
           {river: "Rio Grande", species: "cutthroat", lengthInches: 10.6},
           {river: "Rio Grande", species: "brown", lengthInches: 14.5},
           {river: "Rio Chama", species: "rainbow", lengthInches: 8.5},
           {river: "Rio Chama", species: "rainbow", lengthInches: 11.5}]
)}

function _112(d3,fishing){return(
d3.group(fishing, (d) => d.species).get("rainbow")
)}

function _113(fishing){return(
fishing.filter((d) => d.species === "rainbow")
)}

function _riverTroutSize(d3,fishing){return(
d3.rollup(
  fishing,
  (v) => d3.mean(v, (d) => d.lengthInches),
  (d) => d.river
)
)}

function _115(riverTroutSize){return(
riverTroutSize.get("San Juan")
)}

function _116(md){return(
md`## Math Transforms`
)}

function _117(md){return(
md`Math.log
Math.exp
Math.sqrt
\`\`\`

Also contains properties for common values, like:

\`\`Math.E\`\`  and \`\`Math.PI\`\` 

**Aside**: exponentiation op in JS is ** (e.g. 4 * * 2)

We can transform values outsite of within:`
)}

function _us_imports(FileAttachment){return(
FileAttachment("us_imports.csv").csv({typed: true})
)}

function _121(us_imports){return(
us_imports.map((d) => Math.log(d.value))
)}

function _usLogValue(us_imports){return(
us_imports.map((d) => ({ ...d, logValue: Math.log(d.value) }))
)}

function _123(md){return(
md`Data Visualization: Creating a histogram of the log-transformed values (logValue) in usLogValue:`
)}

function _124(Plot,usLogValue){return(
Plot.plot({
  marks: [
    Plot.rectY(usLogValue, Plot.binX({ y: "count" }, { x: "logValue" })),
    Plot.ruleY([0])
  ]
})
)}

function _125(md){return(
md`With observable plot:`
)}

function _126(Plot,us_imports){return(
Plot.plot({
  marks: [
    Plot.rectY(
      us_imports,
      Plot.binX({ y: "count" }, { x: (d) => Math.log(d.value), thresholds: 10 })
    ),
    Plot.ruleY([0])
  ]
})
)}

function _127(md){return(
md`## Interactivity`
)}

function _128(md){return(
md`Creating interactive charts:`
)}

function _129(Plot,usLogValue){return(
Plot.auto(usLogValue, {x: "value", y: "Sector", fx: "year", mark: "bar"}).plot()
)}

function _130(md){return(
md`Without interctivity:`
)}

function _131(Plot,usLogValue){return(
Plot.auto(usLogValue, {
  x: { value: "logValue", reduce: "sum" },
  y: "Sector",
  fx: "year"
}).plot()
)}

function _132(md){return(
md`### More Interactivity`
)}

function _133(md){return(
md`Inputs are "lightweight interface components - buttons, sileders, dropdowns, tables, and the like -help you explore data."

\`\`viewof\`\`  operator is shorthand for defining the view and its value in the same cell. `
)}

function _height(Inputs){return(
Inputs.range([400,1200], {label: "Chart height:", step:1})
)}

function _135(md){return(
md`Example:`
)}

function _pickSector(Inputs,us_imports){return(
Inputs.radio(
  us_imports.map(d => d.Sector), 
  { label: "Choose sector:", value: "AG", unique: true}
)
)}

function _pickColor(Inputs){return(
Inputs.color({label: "Favorite color", value: "#8d5434"})
)}

function _138(Plot,us_imports,pickSector){return(
Plot.plot({
  marks: [
    Plot.barX(
      us_imports,
      Plot.groupY(
        { x: "sum" },
        {
          x: "value",
          y: "Sector",
          fill: (d) => (d.Sector === pickSector ? "yellow" : "#8d5434"),
          sort: { y: "x", reverse: true }
        }
      )
    )
  ],
  x: { tickFormat: ".1s" },
  width: 900
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Water_Consumption_And_Cost__2013_-_Feb_2023_.csv", {url: new URL("./files/6ca3fa2b65c99dd2fd3416663e98db3e9f656ff9ceec4e5548e891c2602494c9ab72b0c80e988e736d26a2e3ce6ac949cefb0f246fb27ebb6968f71146b4aff6.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["world_bank_data.csv", {url: new URL("./files/314e4aed94dba6a1d91423bcf47db2647d9f21af01484ac663569b56c494dc3b5670cc6986c4d75ae67c97928aad24e1e66d1150229d10cce4da59a001677b12.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["auto-mpg.csv", {url: new URL("./files/83f6d9d2d0fcee64e5f640c144a675650ab1cf8cb734ae864e7a91f35fccaf1e4d4c65f9dc05d72378f1a8910f725b5a8ede865ec9a12db74157244e31223ee9.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["penguinData.csv", {url: new URL("./files/7f63959df02587fa2661dbeada66ee67b5218cc752777f62c1c4aa06c73c80ff45bc1f7e9409a693f7f8ccc56aa91adb5ce6615b7bfb1e4052380dd502163288.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["us_imports.csv", {url: new URL("./files/6f4156924be9d1c96c381c82106af906094c40c5d289cef3256d9315351bc7f869206ee9e76e3cea850f77ee007e5578ca9142c079cf9f222da03ef8a2060b4a.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("burritos")).define("burritos", _burritos);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["burritos"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["burritos"], _10);
  main.variable(observer()).define(["burritos"], _11);
  main.variable(observer()).define(["burritos"], _12);
  main.variable(observer()).define(["burritos"], _13);
  main.variable(observer()).define(["burritos"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer("droids")).define("droids", _droids);
  main.variable(observer()).define(["droids"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["droids"], _20);
  main.variable(observer()).define(["droids"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["droids"], _26);
  main.variable(observer("restaurantBills")).define("restaurantBills", _restaurantBills);
  main.variable(observer()).define(["restaurantBills"], _28);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("nyc_water")).define("nyc_water", ["FileAttachment"], _nyc_water);
  main.variable(observer("water_consumption_and_cost__2013__feb_2023_")).define("water_consumption_and_cost__2013__feb_2023_", ["__query","FileAttachment","invalidation"], _water_consumption_and_cost__2013__feb_2023_);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer("prices")).define("prices", ["nyc_water"], _prices);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer()).define(["Plot","nyc_water"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("biking")).define("biking", _biking);
  main.variable(observer()).define(["biking"], _38);
  main.variable(observer()).define(["biking"], _39);
  main.variable(observer()).define(["biking"], _40);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer()).define(["biking"], _43);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer()).define(["md"], _45);
  main.variable(observer()).define(["biking"], _46);
  main.variable(observer()).define(["biking"], _47);
  main.variable(observer()).define(["biking"], _48);
  main.variable(observer()).define(["biking"], _49);
  main.variable(observer()).define(["md"], _50);
  main.variable(observer()).define(["md"], _51);
  main.variable(observer()).define(["droids"], _52);
  main.variable(observer()).define(["md"], _53);
  main.variable(observer()).define(["md"], _54);
  main.variable(observer("biking_km")).define("biking_km", ["biking"], _biking_km);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer()).define(["md"], _58);
  const child1 = runtime.module(define1);
  main.import("aq", child1);
  main.import("op", child1);
  main.variable(observer("carData")).define("carData", ["FileAttachment"], _carData);
  main.variable(observer("carTable")).define("carTable", ["aq","carData"], _carTable);
  main.variable(observer()).define(["__query","carTable","invalidation"], _62);
  main.variable(observer()).define(["md"], _63);
  main.variable(observer()).define(["carTable"], _64);
  main.variable(observer()).define(["md"], _65);
  main.variable(observer("wb")).define("wb", ["FileAttachment"], _wb);
  main.variable(observer("wbTable")).define("wbTable", ["aq","wb"], _wbTable);
  main.variable(observer()).define(["md"], _68);
  main.variable(observer("wb2019")).define("wb2019", ["wb"], _wb2019);
  main.variable(observer()).define(["md"], _70);
  main.variable(observer("wbEAPArquero")).define("wbEAPArquero", ["wbTable"], _wbEAPArquero);
  main.variable(observer()).define(["md"], _72);
  main.variable(observer()).define(["Plot","wb2019"], _73);
  main.variable(observer("penguinData")).define("penguinData", ["FileAttachment"], _penguinData);
  main.variable(observer()).define(["__query","penguinData","invalidation"], _75);
  main.variable(observer()).define(["md"], _76);
  main.variable(observer()).define(["penguinData"], _77);
  main.variable(observer()).define(["md"], _78);
  main.variable(observer()).define(["md"], _79);
  main.variable(observer()).define(["d3","penguinData"], _80);
  main.variable(observer()).define(["d3","penguinData"], _81);
  main.variable(observer()).define(["d3","penguinData"], _82);
  main.variable(observer()).define(["md"], _83);
  main.variable(observer("mass")).define("mass", _mass);
  main.variable(observer()).define(["d3","mass"], _85);
  main.variable(observer()).define(["d3","mass"], _86);
  main.variable(observer()).define(["md"], _87);
  main.variable(observer()).define(["d3","penguinData"], _88);
  main.variable(observer()).define(["d3","penguinData"], _89);
  main.variable(observer()).define(["d3","penguinData"], _90);
  main.variable(observer()).define(["d3","penguinData"], _91);
  main.variable(observer()).define(["d3","penguinData"], _92);
  main.variable(observer()).define(["d3","penguinData"], _93);
  main.variable(observer()).define(["md"], _94);
  main.variable(observer()).define(["md"], _95);
  main.variable(observer()).define(["d3","penguinData"], _96);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer("groupSpecies")).define("groupSpecies", ["d3","penguinData"], _groupSpecies);
  main.variable(observer()).define(["md"], _99);
  main.variable(observer()).define(["groupSpecies"], _100);
  main.variable(observer()).define(["md"], _101);
  main.variable(observer("groupSpeciesIsland")).define("groupSpeciesIsland", ["d3","penguinData"], _groupSpeciesIsland);
  main.variable(observer()).define(["groupSpeciesIsland"], _103);
  main.variable(observer()).define(["md"], _104);
  main.variable(observer()).define(["d3","penguinData"], _105);
  main.variable(observer()).define(["md"], _106);
  main.variable(observer()).define(["d3","penguinData"], _107);
  main.variable(observer()).define(["md"], _108);
  main.variable(observer()).define(["Plot","penguinData"], _109);
  main.variable(observer()).define(["md"], _110);
  main.variable(observer("fishing")).define("fishing", _fishing);
  main.variable(observer()).define(["d3","fishing"], _112);
  main.variable(observer()).define(["fishing"], _113);
  main.variable(observer("riverTroutSize")).define("riverTroutSize", ["d3","fishing"], _riverTroutSize);
  main.variable(observer()).define(["riverTroutSize"], _115);
  main.variable(observer()).define(["md"], _116);
  main.variable(observer()).define(["md"], _117);
  main.variable(observer("us_imports")).define("us_imports", ["FileAttachment"], _us_imports);
  main.variable(observer()).define(["us_imports"], _121);
  main.variable(observer("usLogValue")).define("usLogValue", ["us_imports"], _usLogValue);
  main.variable(observer()).define(["md"], _123);
  main.variable(observer()).define(["Plot","usLogValue"], _124);
  main.variable(observer()).define(["md"], _125);
  main.variable(observer()).define(["Plot","us_imports"], _126);
  main.variable(observer()).define(["md"], _127);
  main.variable(observer()).define(["md"], _128);
  main.variable(observer()).define(["Plot","usLogValue"], _129);
  main.variable(observer()).define(["md"], _130);
  main.variable(observer()).define(["Plot","usLogValue"], _131);
  main.variable(observer()).define(["md"], _132);
  main.variable(observer()).define(["md"], _133);
  main.variable(observer("viewof height")).define("viewof height", ["Inputs"], _height);
  main.variable(observer("height")).define("height", ["Generators", "viewof height"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _135);
  main.variable(observer("viewof pickSector")).define("viewof pickSector", ["Inputs","us_imports"], _pickSector);
  main.variable(observer("pickSector")).define("pickSector", ["Generators", "viewof pickSector"], (G, _) => G.input(_));
  main.variable(observer("viewof pickColor")).define("viewof pickColor", ["Inputs"], _pickColor);
  main.variable(observer("pickColor")).define("pickColor", ["Generators", "viewof pickColor"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","us_imports","pickSector"], _138);
  return main;
}
