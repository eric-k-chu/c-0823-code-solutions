# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

SELECT, INSERT, UPDATE, DELETE

- How do you add a row to a SQL table?

INSERT INTO table_name (columns)
VALUES (col values)

- How do you add multiple rows to a SQL table at once?

separate by commas

- How do you update rows in a database table?

UPDATE table_name
SET col_name = col_value
WHERE expression

- How do you delete rows from a database table?

DELETE
FROM table_name
WHERE expression

- Why is it important to include a `where` clause in your `update` and `delete` statements?

to specify which specific row to update or delete. If you don't have it will update/delete all rows

- How do you accidentally delete or update all rows in a table?

If you dont specifiy a where clause

- How do you get back the modified row without a separate `select` statement?

RETURNING \*;

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
