// Reveal Sections
const allQuestions = document.querySelectorAll('div.question');

const revealQuestion = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('question-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealQuestion, {
  root: null,
  threshold: 0.15,
});

allQuestions.forEach(function (question) {
  sectionObserver.observe(question);
  question.classList.add('question-hidden');
});
