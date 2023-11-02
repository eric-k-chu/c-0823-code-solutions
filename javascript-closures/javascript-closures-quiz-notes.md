# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?

when the program calls a function or when the program starts

- What allows JavaScript functions to "remember" variables from their surroundings?

closures allow functions to remember variables from their parent scope. It is a collection of
all the variables in scope at the time of creation of the function.

- What values does a closure contain?

contains all the variables that are in scope at the time of creation of the function

- When is a closure created?

when it creates a function references, it encloses the current variable scope into that function reference

- How can you tell if a function will be created with a closure?

it will always be created with a closure

- In React, what is one important case where you need to know if a closure was created?

in useEffect, you need to watch out for stale closures. This occurs when a closure uses a variable but it not updated when
that variable changes.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
