SELECT "line1",
       "cities"."name",
       "district",
       "countries"."name" as "countryName"
  FROM "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId");
