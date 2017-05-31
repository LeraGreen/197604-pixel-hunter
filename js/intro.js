import createEl from './createEl.js';
import showScreen from './showScreen.js';
import moduleGreetingElement from './greeting.js';

const introEl = `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;

const moduleIntroElement = createEl(introEl);
const introButton = moduleIntroElement.querySelector(`.intro__asterisk`);
introButton.addEventListener(`click`, () => {
  showScreen(moduleGreetingElement);
});

export default moduleIntroElement;

// function Intro() {
//   this.element = createEl(this.template);
//   this.introButton = this.element.querySelector(`.intro__asterisk`);
//   this.introButton.addEventListener(`click`, () => {
//     showScreen(moduleGreetingElement);
//   });
// };
//
// Intro.prototype.template = `<div id="intro" class="intro">
//       <h1 class="intro__asterisk">*</h1>
//       <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//     </div>`;
//
// const intro = new Intro();
// export default intro;
