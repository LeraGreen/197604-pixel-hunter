const showScreen = (page) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(page.element);
};

export default showScreen;
