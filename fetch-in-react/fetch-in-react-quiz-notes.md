# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?

you can put your fetch logic in useEffect and pass an empty dependency array (it runs twice in strict mode)

- What browser function can be used to make HTTP requests to a server in React?

fetch API

- How do you use `useEffect` to load component data just once when the component mounts?

pass in an empty dependency array

- How do you use `useEffect` to load component data every time the data key changes?

put the data key in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

React Query and Vercel SWR

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
