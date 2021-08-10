const fetch = require("node-fetch");

function getNamesFromCliArguments() {
  const names = process.argv.slice(2);
  if (names.length === 0) {
    console.log(`Введите аргументы для поиска!
  `);
    process.exit(1);
  }
  return names;
}
function convertIntoArray(values) {
  const data = [];
  for (let i of values) {
    if (i !== undefined) {
      for (let j of i) {
        data.push(j);
      }
    }
  }
  return data;
}
async function searchElements(values) {
  const data = [];
  for (let i of values) {
    data.push(
      fetch(`https://swapi.dev/api/people/?search=${i}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.results.length === 0) {
            console.log(`No results found for '${i}'
`);
          } else {
            const info = [];
            for (let j of json.results) {
              console.log(`Name: ${j.name}
Height: ${j.height}
`);
              info.push({ name: j.name, height: j.height });
            }
            return info;
          }
        })
        .catch((err) => console.log(err))
    );
  }
  const results = await Promise.all(data);
  return convertIntoArray(results);
}
function findValuesInArray(array) {
  const names = [];
  const heights = [];
  let Max;
  let Min;
  for (let i of array) {
    names.push(i.name);
    heights.push(i.height);
  }
  const sortedNames = names.sort((a, b) => {
    if (a.substring(0, 1).toLowerCase() > b.substring(0, 1).toLowerCase()) {
      return 1;
    }
    if (a.substring(0, 1).toLowerCase() < b.substring(0, 1).toLowerCase()) {
      return -1;
    }
    return 0;
  });
  const sortedHeights = heights.sort((a, b) => {
    if (a - b > 0) {
      return 1;
    }
    if (a - b < 0) {
      return -1;
    }
    return 0;
  });
  for (let i of array) {
    if (i.height === sortedHeights[sortedHeights.length - 1]) {
      Max = i;
    }
    if (i.height === sortedHeights[0]) {
      Min = i;
    }
  }
  return {
    sortedNames,
    Min,
    Max,
  };
}
function showresults(quantity, arrayOfResults, minvalueObj, maxValueObj) {
  console.log(`//////////
Total results: ${quantity}.

All: ${arrayOfResults.join(", ")}.

Min height: ${minvalueObj.name}, ${minvalueObj.height}.

Max height: ${maxValueObj.name}, ${maxValueObj.height}.
//////////
`);
}
async function search(array) {
  const data = await searchElements(array);
  const info = findValuesInArray(data);
  showresults(data.length, info.sortedNames, info.Min, info.Max);
}
search(getNamesFromCliArguments());
