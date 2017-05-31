const createEl = (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};

export default createEl;

