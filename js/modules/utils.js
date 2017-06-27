export const showScreen = (screen) => {
  debugger;
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(screen.element);
};

export const createContent = (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};

export const resizeImages = (img) => {
  const parentHeight = img.parentNode.clientHeight;
  const parentWidth = img.parentNode.clientWidth;
  if (parentHeight < img.naturalHeight) {
    const width = Math.floor(img.naturalWidth / (img.naturalHeight / parentHeight));
    img.width = width;
    img.height = parentHeight;
  } else if (parentWidth < img.naturalWidth) {
    const height = Math.floor(img.naturalHeight / (img.naturalWidth / parentWidth));
    img.width = parentWidth;
    img.height = height;
  }
};

export const createImg = (parentNodes, questions) => {
  for (let i = 0; i < parentNodes.length; i++) {
    const image = new Image();
    image.src = questions.answers[i].img;
    parentNodes[i].insertBefore(image, parentNodes[i].children[0]);
    image.onload = () => {
      resizeImages(image);
    };
  }
};
