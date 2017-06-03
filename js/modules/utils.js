export const showScreen = (array) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  for (const element of array) {
    container.appendChild(element);
  }
};

export const createContent = (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};


export const createArray = (nodes) => {
  return Array.from(nodes);
};

