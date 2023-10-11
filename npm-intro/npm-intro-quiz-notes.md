# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
npm is a software registry. It is used to share and borrow packages, and many
organizations use npm to manage private development as well.

- What is a package?

A package is a file or directory that is described by a package.json file.

- What are some other popular package managers?

yarn, pnpm

- How can you create a `package.json` with `npm`?

npm init --yes

- What is a dependency and how do you add one to a package?

A dependency is a library that a project needs to function effectively.
Do npm install package-name

- What happens when you add a dependency to a package with `npm`?

it will be added to the dependecies object in package.json

- What is a devDependency and how do you add one to a package?

packages that are used in the project in its development phase and not in the
production or testing environment with its version number.
Do npm install package-name --save-dev

- How do you define and run `npm` scripts? Why are these useful?
Create a scripts object in package.json. To run it, just call npm + name of the key.
These are used to make command development commands available without the need to
remember or type long arguments, and to share them across the team.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
