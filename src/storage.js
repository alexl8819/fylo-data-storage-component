document.addEventListener('DOMContentLoaded', () => {
  const firstNode = document.querySelector('.storage__loading');
  const lastNode = document.querySelector('.storage__content');
  firstNode.style.display = 'block';
  lastNode.style.display = 'none';
  setTimeout(() => {
    firstNode.style.display = 'none';
    lastNode.style.display = 'flex';
    let loaded = 0;
    const usedStorage = document.querySelector('.storage__used');
    const intervalHandle = setInterval(() => {
      if (loaded === 75) {
        clearInterval(intervalHandle);
        usedStorage.style.width = '75.5%';
        return;
      }
      loaded++;
      usedStorage.style.width = loaded + '%';
    }, 100);
    usedStorage.style.width = loaded + '%';
  }, 3000);
});