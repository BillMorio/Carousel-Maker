let counter = 0;

export function generateId(): string {
  counter++;
  return `slide_${Date.now()}_${counter}`;
}
