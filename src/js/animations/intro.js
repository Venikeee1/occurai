import { gsap } from 'gsap';

const animatedWordClass = 'animated-word';
const animatedCharacterClass = 'animated-character';
const animatedCharacterContentClass = 'animated-character-content';
const STAGGER = 0.05;
const DURATION = 0.4;

const splitByWords = (text) => {
  return text.replace(/\s+/g, ' ').trim().split(' ');
};

const splitByCharacters = (word) => {
  return word.split('');
};

const wrapCharacters = (characters) => {
  return characters.map(
    (character) =>
      `<span class="${animatedCharacterClass}">
        <span class="${animatedCharacterContentClass}">${character}</span>
      </span>`
  );
};

const createSplittedText = (words) => {
  return words
    .map((word) => {
      const characters = splitByCharacters(word);
      const unWrapperWord = wrapCharacters(characters).join('');

      return `<span class="${animatedWordClass}">${unWrapperWord}</span>`;
    })
    .join(' ');
};

const animateLetters = (selector) => {
  const introText = document.querySelector(selector);
  const text = introText.textContent;
  const words = splitByWords(text);
  const characterLayout = createSplittedText(words);

  introText.innerHTML = characterLayout;

  gsap.to(`.${animatedCharacterContentClass}`, {
    y: '0%',
    duration: DURATION,
    stagger: STAGGER,
  });

  gsap.to(`.${animatedCharacterClass}`, {
    rotate: '0deg',
    duration: DURATION,
    stagger: STAGGER,
  });
};

const animateForm = () => {
  const inputs = document.querySelectorAll('.send-email');
  const submitButton = document.querySelector('.main-btn__main');
  const animationElements = [...inputs, submitButton];

  gsap.set(animationElements, {
    opacity: 0,
    rotate: '8deg',
    transformOrigin: '0 0',
    duration: 0,
  });

  gsap.to(
    animationElements,
    {
      rotate: '0deg',
      opacity: 1,
      duration: 0.5,
      stagger: 0.08,
    },
    1.5
  );
};

const animateIntroImage = () => {
  const image = document.querySelector('.main-img');

  gsap.set(image, {
    opacity: 0,
    y: 60,
  });

  gsap.to(image, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 1.2);
};

export const animateIntro = (selector) => {
  animateLetters(selector);
  animateForm();
  animateIntroImage();
};
