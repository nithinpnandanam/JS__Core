

// const fetchData1 = async () => {
//   try {
//     const [d1, d2, d3] = await Promise.all([
//       fetch("https://dummyjson.com/products/1"),
//       fetch("https://dummyjson.com/products/2"),
//       fetch("https://dummyjson.com/products/3"),
//     ]);
//     const [a1, a2, a3] = await Promise.all([d1.json(), d2.json(), d3.json()]);
//     console.log("Final", a1, a2, a3);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const fetchData5 = async () => {
//   try {
//     const [d1, d2, d3] = await Promise.all([
//       fetch("https://dummyjson.com/products/1"),
//       Promise.reject("Intentional failure"),
//       fetch("https://dummyjson.com/products/3"),
//     ]);
//     const [a1, a2, a3] = await Promise.all([d1.json(), d2.json(), d3.json()]);
//     console.log("Final", a1, a2, a3);
//   } catch (e) {
//     console.log("my error : ",e);
//   }
// };

const fetchData2 = async () => {
  try {
    const result = await Promise.allSettled([
      fetch("https://dummyjson.com/products/1"),
      fetch("https://dummyjson.com/products/2"),
      fetch("https://dummyjson.com/products/3"),
    ]);
    console.log("result",result);
    const successfulResponses = result
      .filter((r) => r.status === "fulfilled")
      .map((r) => r.value);
    console.log("successfulResponses",successfulResponses)
    const data = successfulResponses.map((res) => res.json())
    // .json always returns a promise
    // we need to await this promise to get the result
    const data1 = await Promise.all(data);
    // instead of Promise.all we can do 
    // const data = [];
    // for (const res of successfulResponses) {
    //   data.push(await res.json());
    // }
    // console.log(data);
    console.log("data",data1);

  } catch (e) {
    console.log(e);
  }
};

// const fetchData3 = async () => {
//   try {
//     const d1 = await Promise.race([
//       fetch("https://dummyjson.com/products/4"),
//       fetch("https://dummyjson.com/products/2"),
//       fetch("https://dummyjson.com/products/3"),
//     ]);
//     const a1 = await d1.json();
//     console.log("Final", a1);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const fetchData4 = async () => {
//   try {
//     const d1 = await Promise.any([
//       fetch("https://dummyjson.com/products/9"),
//       fetch("https://dummyjson.com/products/3"),
//       fetch("https://dummyjson.com/products/1"),
//     ]);
//     const a1 = await d1.json();
//     console.log("Final", a1);
//   } catch (e) {
//     console.log(e);
//   }
// };


// fetchData1()
fetchData2();
// fetchData3()
// fetchData4()
// fetchData5()