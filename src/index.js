const pocketStyles = require('pocket-styles');

const imageboy = (function() {
  const images = document.querySelectorAll('img[data-replace]');
  images.forEach(image => {
    const ratio = image.dataset.ratio ? eval(image.dataset.ratio) : 16 / 9;

    const bgSize = ratio > 1 ? '100% auto' : 'auto 100%';

    const container = document.createElement('div');
    const holder = document.createElement('div');
    const imageClone = image.cloneNode(true);
    container.classList = image.classList;

    imageClone.classList = '';
    image.parentNode.insertBefore(container, image);
    image.parentNode.removeChild(image);
    container.appendChild(holder);
    holder.appendChild(imageClone);

    pocketStyles.apply(container, { maxWidth: '100%' });
    pocketStyles.apply(holder, {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      paddingBottom: `calc(100% / ${ratio})`,
      maxWidth: '100%',
      zIndex: '0',
      backgroundImage: `url('${image.src}')`,
      backgroundSize: `${ratio > 1 ? '100% auto' : 'auto 100%'}`,
      backgroundPosition: '50% 50%',
    });
    pocketStyles.apply(imageClone, {
      position: 'absolute',
      display: 'none',
      top: '0',
      left: '0',
      bottom: '0',
      left: '0',
    });
  });
})();
