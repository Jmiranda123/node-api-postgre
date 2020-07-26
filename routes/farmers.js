var express = require('express');
var router = express.Router();
var object = require('../models/index');

const { QueryTypes } = require('sequelize');

/* GET users listing. */
router.get('/:param', async (req, res, next) => {
  const farmers = await object.sequelize.query(
    'SELECT "f"."id", "f"."name", "d"."documentNumber", "a"."address"' +
    'FROM "Farmers" "f"' +
   'LEFT JOIN "Addresses" "a" ON "f"."addressId" = "a"."id"' +
   'LEFT JOIN "Documents" "d" ON "f"."documentId" = "d"."id"' +
   'WHERE ("f"."name" LIKE :value) OR ("d"."documentNumber" LIKE :value)',
      {
          replacements: { value: "%"+req.params.param+"%" },
          type: QueryTypes.SELECT
      }
  );
  res.send(farmers);
});

module.exports = router;
