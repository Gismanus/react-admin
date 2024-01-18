let object = {
  grey: {
    900: "#e0e0e0",
    800: "#c2c2c2",
    700: "#a3a3a3",
    600: "#858585",
    500: "#666666",
    400: "#525252",
    300: "#3d3d3d",
    200: "#292929",
    100: "#141414",
  },
  primary: {
    900: "#d0d1d5",
    800: "#a1a4ab",
    700: "#727681",
    600: "#434957",
    500: "#141b2d",
    400: "#101624",
    300: "#0c101b",
    200: "#080b12",
    100: "#040509",
  },
  greenAccent: {
    900: "#dbf5ee",
    800: "#b7ebde",
    700: "#94e2cd",
    600: "#70d8bd",
    500: "#4cceac",
    400: "#3da58a",
    300: "#2e7c67",
    200: "#1e5245",
    100: "#0f2922",
  },
  redAccent: {
    900: "#f8dcdb",
    800: "#f1b9b7",
    700: "#e99592",
    600: "#e2726e",
    500: "#db4f4a",
    400: "#af3f3b",
    300: "#832f2c",
    200: "#58201e",
    100: "#2c100f",
  },
  blueAccent: {
    900: "#e1e2fe",
    800: "#c3c6fd",
    700: "#a4a9fc",
    600: "#868dfb",
    500: "#6870fa",
    400: "#535ac8",
    300: "#3e4396",
    200: "#2a2d64",
    100: "#151632",
  },
};

function reverseObjectValues(obj) {
  for (let key in obj) {
    let values = [];
    console.log(key + ":");
    for (let value in key) {
      values.push(key[value]);
    }
    values.reverse();

    let i = 0;
    for (let value in key) {
      obj[key[value]] = values[i];
      console.log(obj[key[value]]);
      i++;
    }
    console.log(obj[key], ",");
  }
}

/* reverseObjectValues(object) */
const myPromise = () => Promise.resolve().then(()=>
console.log('1'));

const firstFunction = () => {
  setTimeOut(()=> console.log('2'), 0);
  myPromise();

}
