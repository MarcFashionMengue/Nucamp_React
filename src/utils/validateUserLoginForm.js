export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "username required";
  }
  if (!values.password) {
    errors.password = "password required";
  }
  if (values.username.length < 6 && values.username.length > 15) {
    errors.username = "Username must be at least 6 characters";
  }
  if (values.username.length > 15) {
    errors.username = "Username must be at most 15 characters";
  }
  if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;
};