export default {
  phone: (input) =>
    input.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im),
  /** Password must have lest one number, uppercase char and length > 6 */
  password: (input) => input.match(/^(?=.*\d)(?=.*[a-z]).{6,128}$/), // use (?=.*[A-Z]) if want to check uppercase
  length: (input, len = 1) => input && input.length >= len,
};
