const removeFromArray = function (array, ...args) {
  const newArray = [];
  for (let x = 0; x < array.length; x++) {
    let item = array[x];
    toRemove = false;

    for (let i = 0; i < args.length; i++) {
      if (item === args[i]) {
        toRemove = true;
        break;
      }
    }

    if (toRemove === false) {
      newArray.push(item);
    }
  }
  return newArray;
};

// filter + includes
// const removeFromArray = (array, ...args) => {
//   return array.filter(item => !args.includes(item));
// };

// forEach() + includes()
// const removeFromArray = (array, ...args) => {
//   const newArray = [];
//   array.forEach(item => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
