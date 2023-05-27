//@desc get contacts
//@route GET api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({
    message: "Get Contacts",
  });
};

//@desc create a new contact
//@route POST api/contacts
//@access public
const createContact = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Create Contact",
  });
};

//@desc get contact by id
//@route GET api/contacts/:id
//@access public
const getContactById = (req, res) => {
  res.status(200).json({
    message: `Get Contact by ${req.params.id}`,
  });
};

//@desc update contact
//@route PUT api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({
    message: `Update Contacts for ${req.params.id}`,
  });
};

//@desc delete contact
//@route DELETE api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({
    message: `Delete Contact by ${req.params.id}`,
  });
};

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
