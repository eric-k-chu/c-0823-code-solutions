# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?

no, it justs creates the new element. To insert the element you have to use appendChild() to add it to
an element of the page.

- How do you add an element as a child to another element?

use createElement() and use appendChild() to add the child element to the parent element

- What do you pass as the arguments to the `element.setAttribute()` method?

name of attribute, and the value of said attribute

- What steps do you need to take in order to insert a new element into the page?

createElement(name) with name being the name of the element. Then query the dom for some existing element on the page.
Then use appendChild() to add the newly created element

- What is the `textContent` property of an element object for?

It is the current text content of an HTML element

- Name two ways to set the `class` attribute of a DOM element.

className.value or setAttribute('class', value)

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

reuseability and modularity

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
