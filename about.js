
const imageCards = document.querySelectorAll(
    '.life-card, .gallery-card'
);

imageCards.forEach(card => {

    const tooltip = card.querySelector('.cursor-tooltip');

    card.addEventListener('mouseenter', () => {

        tooltip.style.opacity = '1';

    });


    card.addEventListener('mousemove', (event) => {

        tooltip.style.left = event.clientX + 'px';

        tooltip.style.top = event.clientY + 'px';

    });


    card.addEventListener('mouseleave', () => {

        tooltip.style.opacity = '0';

    });

});


const mainNodes = document.querySelectorAll(
  '.node-design, .node-lbe, .node-people, .node-interactivity, .node-coding'
);

const groups = {
  design: document.querySelectorAll('.design-child'),
  lbe: document.querySelectorAll('.lbe-child'),
  people: document.querySelectorAll('.people-child'),
  interactivity: document.querySelectorAll('.interactivity-child'),
  coding: document.querySelectorAll('.coding-child')
};

const allNodes = document.querySelectorAll('.network-node');

mainNodes.forEach(node => {

  node.addEventListener('mouseenter', () => {

    const group = node.dataset.group;

    allNodes.forEach(n => {
      n.style.opacity = '0.25';
    });

    node.style.opacity = '1';

    groups[group].forEach(child => {
      child.style.opacity = '1';
    });
  });

  node.addEventListener('mouseleave', () => {

    allNodes.forEach(n => {
      n.style.opacity = '1';
    });

  });

});
