# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& returs the first falsy operand or the last operand if all are truthy
|| returns the operand that is truthy

You can use && compute an expression only if both operands are true.
You can use || to assign default values if the one of the operands is false.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Short-circuit evaluation means the operator stops evaluating and returns a value immediately depending on the operator
For &&, if the result of one operand is false, the operator will stop evaluating and will return the original value of the falsy operand
For ||, if an operand is evaluated to true, the operator will stop evaluating and will return the truthy operand.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

?? checks if the left hand operand is null or undefined. So things like 0 do pass.
|| justs checks if one of the operands is truthy. So things like '' or 0 do not pass.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

?: is just a short-handed expression to an if/else. Ternary operators are a single statement vs if/else is a block of code.

- What is the `?.` (optional chaining) operator? When would you use it?

?. accesses an object's property or calls a function. If the property or function is null or undefined, then the expression
short circuits and evaluates undefined instead. You would use it if you are unsure if the object property/method you exists.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

... allows an iterable to be expanded in places where zero or more arguments or elements are expected.
With arrays, you can call ...array to get all elements in that array or to copy an array. For objects, you can use it
to shallow copy an object

- What data types can be spread into an array? Into an object?

all data types can be spread into an array. For objects, only other objects that are iterable.

- How does spread syntax differ from rest syntax?

spread expands an array into elements, rest collects multiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
