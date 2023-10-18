# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?

async tells the browser that the function has some async code to run.
await is used before a function call that returns a promise that will make
the code pause at that point until the promise is settled.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  They are functionally the same.

- When do you use `async`?

if code in the function block is going to be async

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

You use await when you want make the code pause until that promise is fulfiled. Do not use await if the function is not async.
There will be a parsing error if you hover that says you cannot use await outside an async function. If you run
the code you'll get a syntax error saying await is a reserved word.

- How do you handle errors with `await`?

you have to use throw to throw the return value of the function you awaited.

- What do `try`, `catch` and `throw` do? When do you use them?

The try block contains statements that specify what to do after the promise is fulfilled or rejected.
The throw block exists in the try block and will throw an exception when the promise is rejected.
The catch block will contain statements that specifiy what to do if an exception is thrown.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

It will just return a promise that is in pending state. If there is a rejection, the program will crash

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async/await is much easier to read through and understand. Promise.then and callbacks can get really messy
once your callback functions get super long.

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
