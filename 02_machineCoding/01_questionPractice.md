# ☕ JavaScript Object Manipulation

## 📖 1. Creating an Object
```js
const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffeine: "low"
};
```
**Explanation:** Objects in JavaScript store data in key-value pairs. Here, we have created a simple `teas` object.

## 🔍 2. Accessing Object Properties
```js
console.log(teas.name); // "Lemon Tea"
console.log(teas.type); // "Green"
```
**Tip:** Use dot notation or bracket notation to access object properties.

**Interview Trick:** They might ask which method is better — dot or bracket notation. Use dot notation unless the property is dynamic or contains special characters.

## 📝 3. Adding a Property
```js
teas.origin = "Assam";
console.log(teas);
```
**Behavior:** JavaScript lets you add properties to objects at any time.

## 🙇 4. Updating a Property
```js
teas.caffeine = "Medium";
console.log(teas);
```
**Behavior:** If the key already exists, assigning a new value updates it.

## 🗑 5. Deleting a Property
```js
delete teas.type;
console.log(teas);
```
**Note:** `delete` removes a property from the object entirely.

**Interview Trick:** Deleting a property doesn't affect the object's prototype chain.

## 🔎 6. Checking Property Existence
```js
console.log("origin" in teas); // true
console.log(teas.hasOwnProperty("type")); // false
```
**Difference:** 
- `in` checks if the property exists anywhere in the object (including prototype).
- `hasOwnProperty()` checks only the object's own properties.

## 🧰 7. Looping Through Properties
```js
for (const key in teas) {
    console.log(`${key} : ${teas[key]}`);
}
```
**Behavior:** `for...in` loops through all enumerable properties.

**Tip:** Use `Object.keys()` with `forEach` for arrays or filtered properties.

## 📚 8. Nested Objects
```js
const myTeas = {
    greentea: {
        name: "Green Tea"
    },
    blacktea: {
        name: "Black Tea"
    }
};
```
**Use Case:** Nesting allows you to organize complex data structures logically.

## 📋 9. Copying an Object
```js
const teaCopy = { ...teas };
console.log(teaCopy);
```
**Tip:** Use the spread operator (`...`) for shallow copying. For deep copies, use `structuredClone()` or `JSON.parse(JSON.stringify(obj))`.

## 💬 10. Adding Methods to an Object
```js
teas.describe = function() {
    return `This is a ${this.name} from ${this.origin} with ${this.caffeine} caffeine.`;
};
console.log(teas.describe());
```
**Behavior:** Methods can be added just like properties. Use `this` to refer to the current object.

**Interview Trick:** They may ask what `this` refers to. Inside an object method, `this` refers to the object itself.

## 🔀 11. Merging Two Objects
```js
const anotherTea = { flavor: "Mint" };
const mergedTea = { ...teas, ...anotherTea };
console.log(mergedTea);
```
**Note:** The spread operator merges properties, and later keys override earlier ones.

## 💪 Final Tips
- Always know when you're mutating the original object vs. creating a new one.
- Practice `Object.entries()`, `Object.keys()`, and `Object.values()`.
- Understand prototypal inheritance — it's a favorite interview topic.

