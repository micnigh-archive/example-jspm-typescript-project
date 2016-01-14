export let __hotReload = true;

export function sayIt (name: string): string {
  return `say something - ${name}`;
};

export default function (name: string): void {
  console.log(`Hello ${name}`);
}
