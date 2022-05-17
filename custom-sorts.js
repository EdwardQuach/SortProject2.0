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
  let base3Arr = [];
  let base2Arr = [];
  let base1Arr = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele < 1000 && ele >= 100) {
      base3Arr.push(ele);
    }
    if (ele < 100 && ele >= 10) {
      base2Arr.push(ele);
    }
    if (ele < 10 && ele >= 0) {
      base1Arr.push(ele);
    }
  }
  let b3Sorted = base3Arr.sort((a, b) => {
    return a - b;
  })
  let b2Sorted = base2Arr.sort((a, b) => {
    return a - b;
  })
  let b1Sorted = base1Arr.sort((a, b) => {
    return a - b;
  })

  return [...b3Sorted, ...b2Sorted, ...b1Sorted];
}

function frequencySort(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!count[ele]) {
      count[ele] = 1
    } else {
      count[ele]++
    }
  }
  return arr.sort((a,b) => {
    if (count[a] > count[b]) return 1;
    if (count[a] === count[b]) return b - a;
    if (count[a] < count[b]) return -1;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
