const showScreen = (element) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export default showScreen;

// const showScreen = (page) => {
//   console.log(page.element);
//   const container = document.querySelector(`.central`);
//   container.innerHTML = ``;
//   container.appendChild(page.element);
// };
//
// export default showScreen;
