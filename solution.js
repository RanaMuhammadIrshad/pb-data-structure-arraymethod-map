// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1

console.log(`******01******`);
function camelize(str) {
  //write your code here

  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2
console.log(`******02******`);

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

//write your code here

let usersMapped = users.map((el) => ({
  fullName: `${el.name} ${el.surname}`,
  id: el.id,
}));

/*   usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ] */

console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
