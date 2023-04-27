export const strContains = (stringOne, stringTwo) => {
  if (stringOne.toLowerCase().includes(stringTwo.toLowerCase())) return true;
  else return false;
};
