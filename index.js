const imageboy = () => {
  const imageholders = document.querySelectorAll('.background-image-holder');
  imageholders.forEach(holder => {
    const img = holder.children[0];
    const imgSrc = img.getAttribute('src');
    holder.style.background = `url("${imgSrc})`;
    holder.style.backgroundPosition = `initial`;
    holder.style.opacity = `1`;
  });
};

export { imageboy };
