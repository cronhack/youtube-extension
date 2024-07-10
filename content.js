function skipAds() {
  const skipButton = document.querySelector('.ytp-skip-ad-button');
  if (skipButton) {
    skipButton.click();
    console.log('Ad skipped');
  }
}

function observeAds() {
  const observer = new MutationObserver(skipAds);
  observer.observe(document, { childList: true, subtree: true });
}

window.addEventListener('load', observeAds);
