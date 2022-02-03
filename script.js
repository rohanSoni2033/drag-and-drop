const fill = document.querySelector('.draggable-item');
const containers = document.querySelectorAll('.container');

fill.addEventListener('dragstart', dragStart);

fill.addEventListener('dragend', dragEnd);

const dragStart = function (e) {
  setTimeout(() => {
    this.classList.remove('draggable-item');
  }, 0);
};

const dragEnd = function () {
  this.classList.add('draggable-item');
};

containers.forEach((container) => {
  container.addEventListener('dragover', function (e) {
    e.preventDefault();
    container.classList.add('dragover');
  });

  container.addEventListener('dragenter', function (e) {
    e.preventDefault();
    container.classList.remove('dragover');
  });

  container.addEventListener('dragleave', function (e) {
    e.preventDefault();
    container.classList.replace('dragover', 'empty');
  });

  container.addEventListener('drop', function (e) {
    e.preventDefault();
    container.append(fill);
    container.classList.remove('dragover', 'empty');
  });
});
