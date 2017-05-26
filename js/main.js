function Templates() {
  this.arrayTemplates = [];
  this.pointer = 0;
  this.pointerMin = 0;
}

Templates.prototype.initialize = function () {
  this.makeArray();
  this.pointerMax = this.arrayTemplates.length - 1;
  this.showScreen(this.pointer);
  document.addEventListener(`keydown`, function (event) {
    if (event.altKey && event.keyCode === 39) {
      this.moveScreenNext();
    }

    if (event.altKey && event.keyCode === 37) {
      this.moveScreenPrev();
    }
  }.bind(this));
};

Templates.prototype.makeArray = function () {
  const firstScreen = document.querySelector(`.central`).cloneNode(true);
  this.arrayTemplates.push(firstScreen);
  const allTemplates = document.getElementsByTagName(`template`);
  for (let element of allTemplates) {
    this.arrayTemplates.push(element);
  }
};

Templates.prototype.showScreen = function (number) {
  let newScreen = this.arrayTemplates[number].innerHTML;
  let container = document.querySelector(`.central`);
  container.innerHTML = newScreen;
};

Templates.prototype.moveScreenNext = function () {
  let nextNumber = this.pointer + 1;
  if (nextNumber <= this.pointerMax) {
    this.pointer = nextNumber;
    this.showScreen(this.pointer);
  }
};

Templates.prototype.moveScreenPrev = function () {
  let prevNumber = this.pointer - 1;
  if (prevNumber >= this.pointerMin) {
    this.pointer = prevNumber;
    this.showScreen(this.pointer);
  }
};

document.addEventListener(`DOMContentLoaded`, function () {
  let templates = new Templates();
  templates.initialize();
});

