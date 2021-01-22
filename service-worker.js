/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7986aee6f161f14d50c84381e7bc6a6"
  },
  {
    "url": "about.html",
    "revision": "a11e1eb9fae6c3c10dec6c450f994e99"
  },
  {
    "url": "assets/css/0.styles.f6581de0.css",
    "revision": "fe196199f43a5e80e67baac602634920"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5c1c4e94.js",
    "revision": "80f7b65a5d1c878ba224002f120d8250"
  },
  {
    "url": "assets/js/11.f6192926.js",
    "revision": "861ac614440fef51a9dbdae37a569ce3"
  },
  {
    "url": "assets/js/12.aa598449.js",
    "revision": "15de6a6d2d9d76127598c7bdb7bc6439"
  },
  {
    "url": "assets/js/13.18e9ddff.js",
    "revision": "2377a714e8bf3f84df96c804d2b7ce1b"
  },
  {
    "url": "assets/js/2.376dbb9a.js",
    "revision": "cf0f628a6c22913aacd471f39b492e60"
  },
  {
    "url": "assets/js/3.8d133bb0.js",
    "revision": "3e60bb355d27933519948c0920ac2883"
  },
  {
    "url": "assets/js/4.aed78e18.js",
    "revision": "441d7fea708c6bcabc92384fbfec9100"
  },
  {
    "url": "assets/js/5.766f7ad1.js",
    "revision": "224c8e6548d7e2b7d1b18fd5e62ecdce"
  },
  {
    "url": "assets/js/6.6d20c684.js",
    "revision": "2b3d5658ced3a83abcc382ad00f6178d"
  },
  {
    "url": "assets/js/7.7ef320fd.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/8.f89b026a.js",
    "revision": "8f3bbc94dab60278914de8e57c7e4dcc"
  },
  {
    "url": "assets/js/9.82360cc5.js",
    "revision": "0cf313aa7931b6bfea4b1d4e1eb78df8"
  },
  {
    "url": "assets/js/app.901316b9.js",
    "revision": "4f85db6ba3821f23957962558c87b4b2"
  },
  {
    "url": "guide/about.html",
    "revision": "8bb9b01dd733ba1a304059b2b4aebe88"
  },
  {
    "url": "guide/feedback.html",
    "revision": "2a8aae1e6aa1fdaa972cc200f0399527"
  },
  {
    "url": "guide/index.html",
    "revision": "91ac218a85c6be787806a251691c10d6"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "398b790d2d07927f5688bba447572d7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
