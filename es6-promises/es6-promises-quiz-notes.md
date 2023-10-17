# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?

  The JavaScript runtime System maintains an event queue of promises that needs to be finished.
  When a promise is created, the promise task is syncrhonously put onto the event queue.
  when the synchronous execution of the calling code reaches the end of the function(s), the
  event loop runs. Then, the first promise task from the queue is executed. If the promise
  successfully completes, then the promise calls the then handler. If it completes with an
  error, then the promise calls the catch handler. Then it calls the finally handler

- What are the three states a Promise can be in?

pending is the initial state, neither fulfilled nor rejected
fulfilled is when the operation is completed successfully
rejected is when the operation has failed

- How do you handle the fulfillment of a Promise?

then()

- How do you handle the rejection of a Promise?

catch() or then()

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
