export const saveItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
