# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?

focus

- What event is fired when a user's cursor leaves a form control?

blur

- What event is fired as a user changes the value of a form control?

input

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

submit

- What does the `event.preventDefault()` method do?

if the event does not get explicitly handled, its default action should not be taken as it normally would be.
In our case, it prevents the browser from automatically reloading the page with the form's values in the URL.

- What does submitting a form without `event.preventDefault()` do?

put the form's values in the url

- What property of a form element object contains all of the form's controls.

elements property

- What property of a form control object gets and sets its value?

value property

- What is one risk of writing a lot of code without checking to see if it works so far?

backtracking, one error in the beginning of your code could cause problems for the rest of your code.

- What is an advantage of having your console open when writing a JavaScript program?

You can see any errors that the console ouputs.

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
