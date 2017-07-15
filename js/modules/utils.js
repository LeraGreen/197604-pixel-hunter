import {resize} from '../data/data.js';

export const showScreen = (screen) => {
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
  const frame = {};
  frame.height = img.parentNode.clientHeight;
  frame.width = img.parentNode.clientWidth;

  const given = {};
  given.width = img.naturalWidth;
  given.height = img.naturalHeight;
  const newSize = resize(frame, given);
  img.width = newSize.width;
  img.height = newSize.height;

  // if (parentHeight < img.naturalHeight) {
  //   const width = Math.floor(img.naturalWidth / (img.naturalHeight / parentHeight));
  //   img.width = width;
  //   img.height = parentHeight;
  // } else if (parentWidth < img.naturalWidth) {
  //   const height = Math.floor(img.naturalHeight / (img.naturalWidth / parentWidth));
  //   img.width = parentWidth;
  //   img.height = height;
  // }
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
