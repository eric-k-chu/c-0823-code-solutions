# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

debugging purposes

- What is the purpose of events and event handling?

Allows for reactive code/programs.

- Are all possible parameters required to use a JavaScript method or function?

no, can be null or an object with a handleEvent()

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener()

- What is a callback function?

a function that is passed onto another function as an argument

- What object is passed into an event listener callback when the event fires?

the dom query object that the event listener is attached to.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

event.target is the html element that was returned by the dom query.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  first one passes in handleClick as a function, second one passes in the result of handeClick()

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
