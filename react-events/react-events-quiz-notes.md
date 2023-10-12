# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?

same as in JS, an action that could be triggered as a result of a user action

- What is an "event handler"? Which component declares the handler?

something that handles what occurs after the event is triggered. The handler is declared by the parent of the component

- How do you pass an event handler to a React component?

eventHandlerPropName = {event handler function}, pass it as a prop enclosed in {}

- What is the naming convention for event handlers?

handleXxx

- What is an "event handler prop"? Which component declares the prop?

Event handler prop is the function that is passed to the component where it will call
that function when the event is triggered. The child declares the event handler prop

- What are some custom event handler props a component may wish to define?

onCustomClick, onSelect, etc.

- What is the naming convention for custom event handler props?

onXxx

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
