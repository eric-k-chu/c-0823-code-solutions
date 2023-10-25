SELECT "genres"."name" as "movieGenre",
       count(*) as "appearsIn"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
 WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
 GROUP BY "genres"."name"
 ORDER BY "appearsIn" DESC;
