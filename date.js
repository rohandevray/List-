//exporting the function using module.exports
exports.getDate = () => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleString("en-US", options);
};
//exporting many modules as we want
exports.getDay = () => {
  let today = new Date();

  let options = {
    weekday: "long",
  };
  return today.toLocaleString("en-US", options);
};
