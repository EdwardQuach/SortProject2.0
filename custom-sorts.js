function ageSort(users) {
  return users.sort((a,b) =>{
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  let oddArr = [];
  let evenArr = [];
  for(let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele % 2 !== 0) {
      oddArr.push(ele);
    } else {
      evenArr.push(ele);
    }
  }
  let sortedOdd = oddArr.sort((a, b) => {
    return a - b;
  })
  let sortedEven = evenArr.sort((a, b) => {
    return a - b;
  })

  return [...sortedOdd, ...sortedEven];
}

function validAnagrams(s, t) {
  let sArray = s.split("");
  let tArray = t.split("");

  let sSorted = sArray.sort();
  let tSorted = tArray.sort();

  return sSorted.join("") === tSorted.join("");
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
