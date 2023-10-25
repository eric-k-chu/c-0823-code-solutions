SELECT "countries"."name" as "country",
       count(*) as "numberOfCities"
  FROM "cities"
  JOIN "countries" USING ("countryId")
  GROUP BY "countryId"
  ORDER BY "countries"."name";
