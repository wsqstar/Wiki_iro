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
    "revision": "71a441f862f1d63de597d16fb694048a"
  },
  {
    "url": "about.html",
    "revision": "25fb1f8a42a368825f49817d0bb5cc2e"
  },
  {
    "url": "assets/css/0.styles.cef8f1e9.css",
    "revision": "c9b6ed6aa7bb482d0d9c7cffac29484b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5cb0eb07.js",
    "revision": "fdd75f22342903153965c2314fc348b5"
  },
  {
    "url": "assets/js/11.dae351cb.js",
    "revision": "51e6af4891c7044c170e8908eee00bd1"
  },
  {
    "url": "assets/js/12.cd23b371.js",
    "revision": "93defef3833d786c53e2f012796052d0"
  },
  {
    "url": "assets/js/13.1b85f208.js",
    "revision": "c655c9c3136cae97736525f3aef2de49"
  },
  {
    "url": "assets/js/14.fe17c660.js",
    "revision": "48c07ca7132c944b1db3d3c66bd87765"
  },
  {
    "url": "assets/js/15.9915a16c.js",
    "revision": "df8d63109fbc7cdf888d1bd3838cb896"
  },
  {
    "url": "assets/js/16.0daf947b.js",
    "revision": "bc68ea9618766b39f77ad6e4500e7f8c"
  },
  {
    "url": "assets/js/17.641eb8b2.js",
    "revision": "bab453830d3fc6567804f69e45e3b3f8"
  },
  {
    "url": "assets/js/18.a6424cb7.js",
    "revision": "44606216d32366a8a6847dea9fea2f00"
  },
  {
    "url": "assets/js/19.4bf3f939.js",
    "revision": "43bb69ee2b10e517be4f32ffc491a961"
  },
  {
    "url": "assets/js/2.7747a502.js",
    "revision": "deaa1465cfe38fb753370c07b888a7ac"
  },
  {
    "url": "assets/js/20.c53c8c91.js",
    "revision": "204abc5982e7c40e5d48f33856dc8a9c"
  },
  {
    "url": "assets/js/3.ba148df3.js",
    "revision": "e3369625932e86f7616037e8dabec743"
  },
  {
    "url": "assets/js/4.42c74dd1.js",
    "revision": "5cef917f204c2e2f2b0ef0cf62e7ba4d"
  },
  {
    "url": "assets/js/5.8677b382.js",
    "revision": "0adcb4ebfe224a236b25e2a562747a0a"
  },
  {
    "url": "assets/js/6.8abc0196.js",
    "revision": "0f75dd6f5adbf16c3cd8d470406c1bd8"
  },
  {
    "url": "assets/js/7.ca90e37d.js",
    "revision": "94f7a5e6c5e3db8406828c39fe20e535"
  },
  {
    "url": "assets/js/8.987d3bee.js",
    "revision": "9174f4d165c0d49bfc0f5f1e83395fb2"
  },
  {
    "url": "assets/js/9.ec033203.js",
    "revision": "2be0f2f8247a3c749bfe5a6427449f60"
  },
  {
    "url": "assets/js/app.ca9a199a.js",
    "revision": "a93d2221f2a768752b240237cf5ae8d8"
  },
  {
    "url": "demo.html",
    "revision": "a10e937e9afdeb85eaa4ef6004cde2f6"
  },
  {
    "url": "guide/about.html",
    "revision": "ded4795ade3117cd7c33abd9a7df4fab"
  },
  {
    "url": "guide/feedback.html",
    "revision": "eaf6de1399ce5d65f801010b49429427"
  },
  {
    "url": "guide/index.html",
    "revision": "fecb786cba649908fb4fcf0764d602a5"
  },
  {
    "url": "guide/webp.html",
    "revision": "ac14bba0c145e81090f4fae99f7d96f9"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "6e3f156b47eb483eb1749bc4eed8ce7e"
  },
  {
    "url": "releases.html",
    "revision": "723ef98b8f5ba6b59a4af2e82d36844b"
  },
  {
    "url": "sponsors.html",
    "revision": "e8b6283e99a0bcdc770c7ffd7b907bba"
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
