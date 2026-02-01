function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0 && word !== "") return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelize("background-color"));
