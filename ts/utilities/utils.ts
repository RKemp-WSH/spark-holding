/**
 * Concatenates multiple class names together, filtering out any falsey values.
 *
 * @param {...(string | null | undefined | boolean)[]} classes - An array of class names.
 *        Each class name can be a string, null, undefined, or a boolean value.
 *        If a class name is null, undefined, or false, it will be filtered out.
 *
 * @returns {string} - A string containing the concatenated class names, separated by spaces.
 */
export function cn(...classes: (string | null | undefined | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
  }