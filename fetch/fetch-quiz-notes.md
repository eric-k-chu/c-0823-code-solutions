# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?

A Response instance is returned. It contains a status method, a statusText method, and an ok method.

- What is the default request method used by `fetch()`?

get is the default request method

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

fetch can take a second parameter, which is an object that contains a field for the request method called method

- How does `fetch` report errors?

fetch will return a response object, which contains a method called ok. It returns a boolean indicating whether
the status is in the range 200-299 inclusive.

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
