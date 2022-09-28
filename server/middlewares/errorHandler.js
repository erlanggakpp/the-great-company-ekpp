const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    return res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "emptyPassword") {
    return res.status(400).json({ message: "Password cannot be empty" });
  } else if (err.name === "emptyEmail") {
    return res.status(400).json({ message: "Email cannot be empty" });
  } else if (err.name === "emptyBirthdate") {
    return res.status(400).json({ message: "Birthdate cannot be empty" });
  } else if (err.name === "emptyPhoneNumber") {
    return res.status(400).json({ message: "Phone number cannot be empty" });
  } else if (err.name === "emptyidNumber") {
    return res.status(400).json({ message: "ID number cannot be empty" });
  } else if (err.name === "emptyAddress") {
    return res.status(400).json({ message: "Address cannot be empty" });
  } else if (err.name === "emptyFName") {
    return res.status(400).json({ message: "First name cannot be empty" });
  } else if (err.name === "emptyLName") {
    return res.status(400).json({ message: "Last name cannot be empty" });
  } else if (err.name === "invalidEmailPassword") {
    return res.status(401).json({ message: "Invalid email/password" });
  } else if (err.name === "notLoggedIn") {
    return res.status(401).json({ message: "Please login to continue" });
  } else if (err.name === "unauthorizedUser") {
    return res
      .status(403)
      .json({ message: "You are not authorized to edit this profile" });
  } else if (err.name === "profileNotFound") {
    return res.status(404).json({ message: "Profile not found" });
  } else {
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = errorHandler;
