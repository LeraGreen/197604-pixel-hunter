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

export const resizeImages = (images) => {
  for (const image of images) {
    image.onload = (event) => {
      const img = event.currentTarget;
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
  }
};


