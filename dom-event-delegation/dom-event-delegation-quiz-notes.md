# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

the element that the triggered the event invocation

- Why is it possible to listen for events on one element that actually happen its descendent elements?

because of event bubbling

- What DOM element property tells you what type of element it is?

nodeType

- What does the `element.closest()` method take as its argument and what does it return?

takes a string of valid CSS selector and returns the closest ancestor Element or itself.

- How can you remove an element from the DOM?

use .remove() on the element

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

You use event delegation. Add an event listener on the parent of clickable DOM elements, and with event bubbling the parent should know which child was clicked.

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
