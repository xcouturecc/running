// A deployment can replace a chunk while an older page is still open.
// Refresh once to fetch the current entry point, without creating a reload loop.
const recoveryKey = 'chunk-recovery-at';
const recoveryCooldown = 60_000;

window.addEventListener('vite:preloadError', (event) => {
  try {
    const now = Date.now();
    const previous = Number(sessionStorage.getItem(recoveryKey));
    if (previous && now - previous < recoveryCooldown) return;
    sessionStorage.setItem(recoveryKey, String(now));
  } catch {
    // If storage is unavailable, let the error boundary offer a manual retry.
    return;
  }

  event.preventDefault();
  window.location.reload();
});
