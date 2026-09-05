self.addEventListener('install', e => {
  console.log('Service Worker installé');
});

self.addEventListener('activate', e => {
  console.log('Service Worker activé');
});

self.addEventListener('fetch', e => {
  console.log('Fetch:', e.request.url);
});
