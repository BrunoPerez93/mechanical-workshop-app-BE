const capitalizeFirstLetter = (text) =>
 text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

const Roles = {
  Admin: 'Admin',
  Management: 'Management',
  Mechanic: 'Mechanic',
}

module.exports = {
  capitalizeFirstLetter,
  Roles,
};