/**
 * Only Debounce
 *
 * @author Leon Brett
 * @export only debounce
 * @param {function} func the function to debounce
 * @param {number} delay the delay in milliseconds
 * @returns a new debounce method(call this to debounce)
 */
export default function (func, delay) {
  let timeout = null;
  return (...args) => {
    const context = this;
    const bounce = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(bounce, delay);
  };
}
