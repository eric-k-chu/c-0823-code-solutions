import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grades = Object.values(result.rows);
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;

    if (name === undefined) {
      throw new ClientError(400, '"name" is a required field.');
    }

    if (course === undefined) {
      throw new ClientError(400, '"course" is a required field.');
    }

    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(
        400,
        '"score" is a required field and must be between 0 and 100.'
      );
    }

    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
           VALUES ($1, $2, $3)
           RETURNING *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    if (name === undefined) {
      throw new ClientError(400, '"name" is a required field.');
    }

    if (course === undefined) {
      throw new ClientError(400, '"course" is a required field.');
    }

    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(
        400,
        '"score" is a required field and must be between 0 and 100.'
      );
    }

    const sql = `
      UPDATE "grades"
         SET "name" = $1,
             "course" = $2,
             "score" = $3
       WHERE "gradeId" = $4
       RETURNING *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows;

    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      DELETE
        FROM "grades"
       WHERE "gradeId" = $1
       RETURNING *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows;

    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening to port 8080.');
});
