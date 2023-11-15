document.addEventListener('DOMContentLoaded', () => {
  let start, lastTs;
  let activated, done = false;
  let loaded = 0;

  const step = (ts) => {
    if (start === undefined) {
      start = ts;
    }

    const elapsed = Math.floor(ts - start);

    if (elapsed >= 2900 && !activated) {
      document.querySelector('.storage__loading').style.display = 'none';
      document.querySelector('.storage__content').style.display = 'flex';
      activated = true;
    } 

    if (elapsed >= 3000 && lastTs !== ts) {
      const usedStorage = document.querySelector('.storage__used');
      if (loaded === 75) {
        usedStorage.style.width = '75.5%';
        done = true;
        return;
      }
      loaded = loaded + 0.25;
      usedStorage.style.width = `${Math.floor(loaded)}%`;
    }

    if (!done) {
      window.requestAnimationFrame(step);
      return;
    }

    lastTs = ts;
  };
  
  document.querySelector('.storage__loading').style.display = 'block';
  document.querySelector('.storage__content').style.display = 'none';
  window.requestAnimationFrame(step);
});
