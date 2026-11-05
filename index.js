require("datejs");

function combineUsers(...args) {
  let combinedObject = {
    users: []
  };

  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
combineUsers
};