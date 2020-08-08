console.log("HELLOW");
const element = document.getElementById("app");

console.log("element");
const paragraph = document.createElement("p");

const text = document.createTextNode("LoveU");

paragraph.appendChild(text);

element.appendChild(paragraph);

function createElement(tagName, ...children) {
  const element = document.createElement(tagName);

  children.forEach((child) => {
    element.appendChild(child);
  });
  element.appendChild(children[0]);

  return element;
}

// const paragraph = createElement("p", document.createTextNode("hello Wolrd"));

const container = document.getElementById("app");
const root = document.createElement("div", paragraph);

container.appendChild(paragraph);


