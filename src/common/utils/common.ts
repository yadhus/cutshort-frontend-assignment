export const classNames = (
  classes: Record<string, boolean>
): string | undefined => {
  const currentClasses: Array<string> = [];

  Object.entries(classes).forEach(([key, value]) => {
    if (value) {
      currentClasses.push(key);
    }
  });

  if (currentClasses.length) {
    return currentClasses.join(' ');
  } else {
    return undefined;
  }
};
