const lunchbox = ["chapati", "rice", "curry"];

// Access items
console.log(lunchbox[1]);

// add new item
lunchbox.push("pickels");

console.log(lunchbox);

// remove item
lunchbox.pop();
console.log(lunchbox);

// looping arrays
lunchbox.forEach((element) => {
  console.log("Item: ", element);
});
