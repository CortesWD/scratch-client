export const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function colorGenerator(onlyDark: boolean = false): string {

  const randFloatNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);

  const H = randFloatNum(0, 360);
  const S = randFloatNum(0, onlyDark ? 45 : 100);
  const L = randFloatNum(0, onlyDark ? 65 : 100);

  return `hsla(${H}, ${S}%, ${L}%, 0.8)`;
}