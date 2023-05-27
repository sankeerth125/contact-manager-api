const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contact-controller");

router
  .route("/")
  .get(getContacts)
  .post(createContact)
  .get((req, res) => {
    res.statusCode;
  });

router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
