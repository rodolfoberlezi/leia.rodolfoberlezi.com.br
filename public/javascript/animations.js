var roundLogEl = document.querySelector('.round');

anime({
  targets: roundLogEl,
  innerHTML: [0, 100],
  easing: 'linear',
  round: 1 // Will round the animated value to 1 decimal
});