# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

Once the component finishes rendering

- What is a React Effect?

react effect lets you synchronize your components with external systems (non-React systems)

- When should you use an Effect and when should you not use an Effect?

use: APIs, third-party widgets, network, etc. If your effect only adjusts some state based on other states, then you
do not need an effect.

- When do Effects run?

After a render, react then runs the code inside useEffect

- What function is used to declare an Effect?

useEffect()

- What are Effect dependencies and how do you declare them?

effects run after every render. By declaring a dependency in an array as the 2nd argument in useEffect, the callback function in useEffect
will be skipped if the dependencies have not changed since the last render

- Why would you want to clean up from an Effect?

In order to stop the effect

- How do you clean up from an Effect?

you can return a cleanup function in the useEffect callback function body.

- When does the cleanup function run?

it runs each time before the effect runs again, and one final time when the component unmounts

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
