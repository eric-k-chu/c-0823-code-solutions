# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

Front-end JavaScript library for building user interfaces based on components

- What is a React component?

They are essentially just functions that return HTML code that work in isolation. They are basically reuseable UI elements.

- How do you mount a React app (root component) to the DOM?

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- What are some other popular frontend frameworks?

angular, vue

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
