const showScreen = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export default showScreen;
