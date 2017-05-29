function TemplateContainer() {
  this.arrayTemplates = [];
  this.pointer = 0;
  this.pointerMin = 0;
  this.makeArray();
  this.pointerMax = this.arrayTemplates.length - 1;
  this.showScreen(this.pointer);
  document.addEventListener(`keydown`, (event) => {
    if (event.altKey && event.keyCode === 39) {
      this.moveScreenNext();
    }

    if (event.altKey && event.keyCode === 37) {
      this.moveScreenPrev();
    }
  });
}

TemplateContainer.prototype.makeArray = function () {
  const firstScreen = document.querySelector(`.central`).cloneNode(true);
  this.arrayTemplates.push(firstScreen);
  const allTemplates = document.getElementsByTagName(`template`);
  for (const element of allTemplates) {
    this.arrayTemplates.push(element);
  }
};

TemplateContainer.prototype.showScreen = function (number) {
  const newScreen = this.arrayTemplates[number].innerHTML;
  const container = document.querySelector(`.central`);
  container.innerHTML = newScreen;
};

TemplateContainer.prototype.moveScreenNext = function () {
  const nextNumber = this.pointer + 1;
  if (nextNumber <= this.pointerMax) {
    this.pointer = nextNumber;
    this.showScreen(this.pointer);
  }
};

TemplateContainer.prototype.moveScreenPrev = function () {
  const prevNumber = this.pointer - 1;
  if (prevNumber >= this.pointerMin) {
    this.pointer = prevNumber;
    this.showScreen(this.pointer);
  }
};

document.addEventListener(`DOMContentLoaded`, () => {
  new TemplateContainer(); // eslint-disable-line
});
