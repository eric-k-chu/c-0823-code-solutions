# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

pass data deep down the tree without having to needing to pass the data as a prop

- What values can be stored in context?

any data types

- How do you create context and make it available to the components?

create a separate file for contexts. Then have the components import it.
The parent needs to be the provider and the children just need to call it with
useContext

- How do you access the context values?

useContext(context name)

- When would you use context? (in addition to the best answer: "rarely")

theme changer like dark mode.
Currently logged in
routing
managing state

## Notes

All student notes should be written here.

User sign up:

- Route has AuthPage with 'sign-up' as action
- AuthPage calls AuthForm with the action.
- On successful sign up, navigates to 'sign-in'

User sign in:

- Route has AuthPage with 'sign-in' as action
- AuthPage calls AuthForm with the action
- AuthForm has handleSignIn from App.tsx due to useContext
- On successful sign in, navigate to '/', or HomePage

Reload Page while Signed in:

- App.tsx has a useEffect that runs on mount
- Gets local storage for auth, which contains the user object
  and token. Sets the state 'user' to the auth.user
- since AuthPage has useEffect for user from the useContext, it
  notices user has changed and navigates to home

User sign out:

- NavBar has handleSignOut function from App.tsx due to useContext
- on sign out button click, user and token is set undefined.
- HomePage has useEffect with user as depedency. When user is falsy,
  it swaps to sign-in page

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
