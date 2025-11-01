import { getElement } from './component';

function component() {
  const element: HTMLDivElement = getElement("Hello, webpack");
  const element2: HTMLDivElement = getElement("Hello, webpack2");
  return element;
}

document.body.appendChild(component());