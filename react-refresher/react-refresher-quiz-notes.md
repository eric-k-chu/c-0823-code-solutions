# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?

just like how you would define a function

- How do you use JSX in a React component?

in the return statement, just write normal html.

- How do you declare the props a React component needs?

outside the function, calling type Prop {...} or do it inline

- How do you pass props to a React component?

write the prop name and pass in the appropriate value

- How do you include JavaScript expressions in JSX?

enclose in {}

- What are React hooks and what are the three "Rules of Hooks"?

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

They can only be called at the top level of your components.
You can’t call Hooks inside conditions, loops, or other nested functions.
Hooks cannot be conditional.

- How do you manage state in a React component?

useState

- How do you handle events in React?

you can add event handlers to the jsx itself by passing the function as a prop to the appropriate JSX tag

- How do you let a parent component know that an event happened?

create the event handler function in the parent and pass that function as a prop to the child

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
