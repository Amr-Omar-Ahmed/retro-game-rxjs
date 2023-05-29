export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const convertVhToPx = (percent: number) => {
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (percent * h) / 100;
};
