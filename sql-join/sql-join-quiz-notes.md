# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?

a column or combination of columns that establishes a link between the data in two tables

- How do you join two SQL tables? (Provide at least two syntaxes.)

join table_name using (foreign key) ~only if the primary key of the first table matches the foreign key provided~

join table_name on table_name.col_name = table_name.col_name

- How do you temporarily rename columns or tables in a SQL statement?

in the from and join clause clause, do table_name as name

- How do you create a one-to-many relationship between two tables?

a foreign key is accessed by multiple tables, and a table can only access a single foreign key

- How do you create a many-to-many relationship between two tables?

a 3rd join table, a foreign key links to another table

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
