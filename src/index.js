const randString = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(2, 8) +
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(2, 8);

const phraseStyle = style => {
  const keys = Object.keys(style);
  const keyValue = keys.map(key => {
    const kebabCaseKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const value = `${style[key]}${typeof style[key] === 'number' ? 'px' : ''}`;

    return `${kebabCaseKey}:${value};`;
  });

  return `{ ${keyValue.join('')}}`;
};

const applyStyles = (object, styles) => {
  const className = randString();

  let styleSheet;
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].CSSInJS) {
      styleSheet = document.styleSheets[i];
      console.log(styleSheet);
      break;
    }
  }

  if (!styleSheet) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    styleSheet = style.sheet;
    styleSheet.CSSInJS = true;
    styleSheet.insertRule('.class { width:100%; }');
  }

  object.classList.add(className);
  styleSheet.insertRule(`.${className}${phraseStyle(styles)}`);
};

const imageboy = () => {
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

    applyStyles(container, { maxWidth: '100%' });
    applyStyles(holder, {
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
    applyStyles(imageClone, {
      position: 'absolute',
      display: 'none',
      top: '0',
      left: '0',
      bottom: '0',
      left: '0',
    });
  });
};
