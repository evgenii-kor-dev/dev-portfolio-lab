import { getElement } from './component';
import Icon from './icon.svg';

import "./index.css";

function component() {
  const element: HTMLDivElement = getElement("Hello, webpack");
  const element2: HTMLDivElement = getElement("Hello, webpack2");
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());