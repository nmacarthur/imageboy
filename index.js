const imageboy = () => {
  const imageholders = document.querySelectorAll('.background-image-holder');
  imageholders.forEach(holder => {
    const img = holder.children[0];
    const imgSrc = img.dataset.src;
    holder.style.backgroundPosition = `initial`;
    holder.style.opacity = `1`;
    holder.dataset.src = imgSrc;
  });
};

export { imageboy };
