# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

They can only be called at the top level of your components. You can’t call Hooks inside conditions, loops, or other nested functions

- What is the purpose of state in React?

Holds information about a component. If a state changes, then the component rerenders

- Why can't we just maintain state in a local variable?

Local variables will get reset every render upon mutation whereas state will update

- What two actions happen when you call a `state setter` function?

store the next state and render your component again with the new values

- When does the local `state variable` get updated with the new value?

In the next render

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
