export const showScreen = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export const createContent = (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};

