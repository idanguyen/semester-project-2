let inputParameter = '';

/**
 * Get the parameter from the URI. This is used from many different projects of mine throughout the course.
 * @function
 * @param {string} parameter - the value in the URI that you want to extract "?parameter=".
 */
export function getParameter(parameter) {
  let parameters = new URLSearchParams(window.location.search);
  inputParameter = parameter;
  return parameters.get(inputParameter);
}
