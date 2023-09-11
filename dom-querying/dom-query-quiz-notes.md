# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

mostly for debugging purposes

- What is a "model"?

structure/interface for HTML and XML

- Which "document" is being referred to in the phrase Document Object Model?

html document

- What is the word "object" referring to in the phrase Document Object Model?

all page content is referred to as objects

- What is a DOM Tree?

represents DOM and the html document in nodes and objects

- Give two examples of `document` methods that retrieve a single element from the DOM.

getElementById(), querySelector()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

if you want do something with that value you have the option to if you assigned it to a variable.

- What `console` method allows you to inspect the properties of a DOM element object?

dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

to make sure all the html content loads first

- What does `document.querySelector()` take as its argument and what does it return?

Takes in a css selector(s) as a string. Returns an element object representing the first element in the
document that matches the selectors in the given argument.

- What does `document.querySelectorAll()` take as its argument and what does it return?

Takes in a css selector(s) as a string. Returns a NodeList containing an element object for each element
that matches the selectors in the given argument

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
