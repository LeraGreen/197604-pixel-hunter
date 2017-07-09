import {settings} from '../../data/data.js';
import {showAnswerIcons} from '../../modules/utils.js';
export default statsIcons;

const statsIcons = (state) => `${state.answers.length === 0 ? `` : showAnswerIcons(state)}
${new Array(settings.screens - state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}`;
