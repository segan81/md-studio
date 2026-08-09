console.info("[MD Studio] Service Worker iniciado.");

chrome.runtime.onInstalled.addListener(() => {
  console.info("[MD Studio] Extensión instalada correctamente.");
});