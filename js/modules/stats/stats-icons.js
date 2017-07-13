import {settings} from '../../data/data.js';

export const statsIcons = (state) => ` <ul class="stats">
        ${state.answers.length === 0 ? `` : showAnswerIcons(state)}
        ${new Array(settings.screens - state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)};
      </ul>`;

const showAnswerIcons = (state) => {
  let iconsArray = [];
  for (let i = 0; i < state.answers.length; i++) {
    iconsArray.push(`<li class="stats__result stats__result--${state.answers[i]}"></li>`);
  }
  return iconsArray.join(``);
};
