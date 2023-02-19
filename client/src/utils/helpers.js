/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} target - Target for checking
 * @returns {boolean} Is existy?
 */
export const isExisty = (target) => !isUndefined(target) && !isNull(target);

/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} target - Target for checking
 * @returns {boolean} Is null?
 */
export const isNull = (target) => target === null || target === "";

/**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} target - Target for checking
 * @returns {boolean} Is object?
 */
export const isObject = (target) => target === Object(target);

/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} target - Target for checking
 * @returns {boolean} Is undefined?
 */
export const isUndefined = (target) => target === undefined;

/**
 * Check whether the given variable is a valid non-empty Array
 * @param {*} target - Target for checking
 * @returns {boolean} Is non-empty Array?
 */
export const isNonEmptyArray = (target) => !!target && target.length > 0;

/**
 * This function will replace all static variables with proper values from the configuration
 * @param url URL that contains varibales wrapped with curly braces
 * ex: `/carts/{{StoreId}}/{{language}}/current/
 * @param params object contains the actual value for the matched variables
 * ex: {StoreId: 123, language: 'au'}
 * @returns the modified URL after replacing all variables
 */
export const replaceUrlVariables = (url, params) => {
  const regex = /[^{{}]+(?=}})/g;
  const matches = url.match(regex);

  let modifiedURL = url;

  if (matches) {
    matches.forEach((item) => {
      const value = params[item];
      modifiedURL = modifiedURL.replace(
        new RegExp("{{" + item + "}}"),
        isExisty(value) || value === "" ? value : `{{${item}}}`
      );
    });
  }

  return modifiedURL;
};
