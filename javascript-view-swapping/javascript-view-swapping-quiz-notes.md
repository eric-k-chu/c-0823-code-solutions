# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

the element that triggered the event invocation

- What is the affect of setting an element to `display: none`?

hides the element, no space will be allocated for it

- What does the `element.matches()` method take as an argument and what does it return?

takes a css selector. returns true if element matches the selectors, otherwise false

- How can you retrieve the value of an element's attribute?

getAttribute(attribute-name)

- At what steps of the solution would it be helpful to log things to the console?

step 4 and step 6. This is because there are if statements there

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?

add an eventlistener to every tab.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?

we would have to get every individual tab and view and write className is equal to 'tab active', 'tab', 'view', or 'view hidden'

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
