export function getElement(text: string) {
  console.warn("create elements");
  const element = document.createElement("div");
  element.innerHTML = text;

  return element;
}

export function getElementA(text: string) {
  const element = document.createElement("a");
  element.innerHTML = text;

  return element;
}