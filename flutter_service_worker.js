'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "054a7af0004cae33edf00532c96518a9",
".git/config": "3a3a21cfc3205b2a2278d5c9eaf710fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b25f9539682de6d63d1cf8ac1e0dad7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b7fe1f47428d64acd40568c548b570f",
".git/logs/refs/heads/main": "0b7fe1f47428d64acd40568c548b570f",
".git/logs/refs/remotes/origin/HEAD": "19d72b9673f4335a33c479de0d6a13f4",
".git/logs/refs/remotes/origin/main": "3064e6c2c0184108870c91b9a471d23c",
".git/objects/08/c40b9edb5295a7fbf8493e67b8322a48e0cf89": "589fee50d2a108da4dde5232f5e9cc38",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/b53bab6f130a74d078aac5bd475df2b78ca79b": "bdc59801e49e72c07c3cad1581025955",
".git/objects/1b/812768611d5a293d9916bc636533d3f87bab16": "7014b423102dfe52cfee42e647f5e3bb",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/1f/806db2cc73fecd65306d7a49e00269ca686451": "dbb61e51424f54d5b3c913a96504e48e",
".git/objects/1f/edeab4861c897c7d58e837f90d9473582e2cc3": "ff6b96c02ca79f090ede1b7e85f3c623",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/486122f3908dfcaf20f39392de30b88a55dd4a": "f88f67a7348f07554480e73896b91ec6",
".git/objects/2b/53f330c89c6b3d6dd0ad9002ca1c4507b9753f": "25982881ae4f74c5786aa43427d371c1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/72c1d8f17e1fbe7a2618316ade3a65d8f6ba03": "68e1ea7283352e4ba799d624dce39a73",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/6cfb7fc93baf3dd65261363750c058801459bd": "346dc8795c9859bf1101c12098c7ac75",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/227c9d75bd0014acb3daf350ab4bfc79779389": "b576fdc7bfc8270b66c7a512ee7fbed8",
".git/objects/40/6567821b342d2622f67d3e99add4303177ebf0": "90788cf250ca778068b48b66d91146c6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5dde2d6e3105e01520c9979d2578a03dc943bc": "bcd12a9e3d569dcfa148179172376258",
".git/objects/4b/a0aacae7b59c29595854135f3ea25965d6c392": "5a52195cd2c8323aa49875f66d6084f5",
".git/objects/4c/fa36c16ebfb3874630bf3b249da25419546592": "3b4e408dd959786520f4e61765e77b07",
".git/objects/53/9d4590982bd21a370f49c651f9b455ac8e69de": "1dda840b56116ea936deb29700bc3aa2",
".git/objects/54/9e48604822a2bf4c0dba21950442792c7bf9ca": "90696c6126ecae8d28bcbd0963aef1ac",
".git/objects/58/2277e439142320cfe6db426d0cd9e6209f9373": "a9a8afa102e952ee13abcaf4cd3e306a",
".git/objects/61/053263bd0ef4ceea725419df9447b2e44cce03": "872abc7403880686761dd8d9cf502e62",
".git/objects/61/a6888185474437836a11689e9fb03892962136": "5d5ac4da4ea24033c82b02273226d718",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/65/de12335ba128f16c3c56c2bc189043c00c79a7": "0ac9a951e2bfe6135866f1c793f78bb2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/e54ff583fceef0e697f51ffc0cad8922d4851f": "c78f64c217bd392405db5a3f8d66955e",
".git/objects/86/791ac0204c0f9b218fa977b5b866676161ba23": "ba64edf1ec5a8825c8e089e157edb1a8",
".git/objects/87/69ae6bbbb7b5050dda4f201323b6a8b1c3e601": "bd539b8e9e682020c3be904f88d80c05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0db49e7baecba0c9fc7cdad8d916fd6b5f1b28": "64c49bc800e3d4ee069deec8c5c04e2f",
".git/objects/89/9a0f84e4943cd5c783c94dbfcbf3e2be182023": "24d7897477d4eae87ab02bb3855ee1b8",
".git/objects/8a/530b7a75355bc75042a0ecbe80a3b4d0617efc": "59d341cdf34fbbc34a0e4643905c3795",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1d9b433b1fcdcd088ad1a3762c67a6b241b3b3": "5b3611167df0e3743c2f0cedc2626804",
".git/objects/8d/1d0eb5be82870ab09bac6c15ccac819a5bd5ca": "74d3e10840a7bab5d59555316034440a",
".git/objects/8d/489aceeb40e5b6893b91a42c646cb6197ee396": "26c411230697854160ac80e0b54614ed",
".git/objects/8f/32df023189acbd649103b7cebb48615f48cef0": "70a021159adda5c304c59aace9c3323c",
".git/objects/90/4ee11bd307a5be15dc4948aa2ce38df5353ef5": "ecd63b26b10e2d5ac07fd77dfaa94105",
".git/objects/91/abe796ca7bf2126268261e5e719b416051d9ad": "56fe765fe2fe8a2ba774d0ce0243fb01",
".git/objects/94/082b80e5852de6a3bf7e2686f6dceedf6d73c0": "032ebc46bb0d40f637a6c6c8e03318c6",
".git/objects/94/71936ffdc64d71a5185a81e98b9f3fc440e32b": "80c798ae1ad5fcc4ece8c1fb201605e7",
".git/objects/9b/d881f3e95ac5e3536d1ea947da1aa39d5bda40": "aa5e625ee4db342f4130e9a636ecfe15",
".git/objects/9f/ecb66b0b786c928ac34468c0046a9b5bd43607": "3f1e22f93fed88be3312c39d77311940",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/a5d71bdd880b99c02b56b3c1a9f3b22c1d455d": "15b0c86a3fe00d8cc9044b20a0bea2d0",
".git/objects/b1/895d5097982ebc5007e9128df5b2772ab8f1ea": "5fe1610173f3a77e827b3b34d04989ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/0b343b45f4980f3c8b6f26af2491d219355ac6": "38f3e87d1659bd1c752b51cefcf52967",
".git/objects/bc/9f4a9b7130926cee7e65cee5d62b5a6345cb9d": "7a29dd06cb4183d429d01ed47e6048de",
".git/objects/bc/b33c373a5e94a938aa5f84809e470306b8fc99": "6a6e67dfa30e1da0a942571fc238b5b7",
".git/objects/c0/03d8ea87ccc1295ccb367679bddcff87e792ec": "03487c9015726c09be7ed24bbc852b87",
".git/objects/c5/4c64805f25e74e386844fb59892bd407d5252a": "15f6a8f6e171b8263f1153bd3056df3b",
".git/objects/c5/7602d5c6939b2b93180a9554a0e27c7c04c98d": "74b84af10af5b95d66c6b7760ec023d9",
".git/objects/c5/ea782295986aa4fa9c964cd5ed954b61ce39a5": "55fabf3e1eb08a684c7d893eaa99dade",
".git/objects/cd/4ab8015e473ae8ee97b28aec23b829df07b868": "c9808842b09bcb57a52766498f6a7799",
".git/objects/d2/b07e5b0dcaf09bcbaafc48bc88529f8affe8ac": "dc67e1503b49d693828a2ef54bec3349",
".git/objects/d8/3d9e1f73a8d7a8396cbaf38c9b3c0097f6d14d": "1f69a740edfef7695f15551d2f24ab8f",
".git/objects/dc/db111b8a69474d78b289968ae50de06a7522fa": "68edaa41c3be118871cd08379b12d58a",
".git/objects/e4/cfb37e8d71bd7b9dfdb0040d59bd83722feefb": "e285f883ea9fbbec33989fa41e25012c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/648488fae1e96ead758612d5b5335ad157f8b7": "a3746c9ddd73f1d3b76ac884584139c0",
".git/objects/e9/94eabe74c9601ea056e6389774ab8f64a5062f": "643f8dc3eab533d479644085a9209f56",
".git/objects/f0/ffd8d168ba183c99295b2fa4c5f7a53244b59e": "40cb8133c17ef6e11f4d6962a91efca8",
".git/objects/f1/78c29fdc54c84785404896e65180236a30b04a": "7f1c9fd4a5c723b991d9fb8185a7879f",
".git/objects/f8/7eeea53fde3ec1f3fca65e573ced9a9cd40dc5": "eb8a91e72c22c83723846e85f70df6cd",
".git/objects/f9/20b61cfa3dc78314a3ea399b3b2e4255c20c20": "d0f08d83f1ca2f6d9ddb2d120051e4c7",
".git/objects/fe/f345f96f856d47a525d85eb1cb3ddc65e92836": "875e2e6f3dad3833647e358ec1940821",
".git/objects/ff/1445e7e8ab175791966aaa2a2d13073a6ce5e8": "c234ee14265f67d457585d4c9df34030",
".git/packed-refs": "5b0eacb27e3f221a8ebb66ea2e4c8fcb",
".git/refs/heads/main": "006740a68dd600df57201c8cbfa72394",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "006740a68dd600df57201c8cbfa72394",
"assets/AssetManifest.json": "49bcdbbc0914d9445f3754dd16823be1",
"assets/assets/fonts/PoppinsRegular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/images/app_logo.png": "f57ff02db02108a00424f128a4a10fae",
"assets/assets/images/burger_bun.png": "4f49dd93b617a540ab9b4b6f72ff09a6",
"assets/assets/images/cereal_bread.png": "87815eb40c7dc4f4dee0a165459ae0eb",
"assets/assets/images/chennai.png": "622c6afc02ed99ebc81b9e9e9004dbb2",
"assets/assets/images/country_loaf.png": "709cc935017d9501c2181f61141c2555",
"assets/assets/images/garlic_roll.png": "7a77f9806e09b5e178d940e300626c48",
"assets/assets/images/gluten_free_bread.png": "9f038bdd91ba65e535d4616ecc4e1650",
"assets/assets/images/hyderabad.png": "8f73bb70473586ac3e9a6e245bd05085",
"assets/assets/images/milk_bread.png": "183ba15ab87ce9edddc0871a5812e274",
"assets/assets/images/ombc-brand-logo.png": "f61340f856802e9d6052808083e327c9",
"assets/assets/images/ombc-daily-button.png": "dc07a90821af531589792a1d8331ce5a",
"assets/assets/images/ombc_daily_button.png": "dc07a90821af531589792a1d8331ce5a",
"assets/assets/images/ombc_logo.png": "f61340f856802e9d6052808083e327c9",
"assets/assets/images/pav_bun.png": "25c0c6e9b837f61cd4d980fb0b3ea7e5",
"assets/assets/images/slider1.png": "b48659e00c3de73484cf29d7595b8616",
"assets/assets/images/slider2.png": "b9f9e3ed7056088394ad8ef0ea27c993",
"assets/assets/images/slider3.png": "188cc517fb21aabb64d673d6350b2762",
"assets/assets/images/subscribe_top_banner.jpg": "c58d8cdb2949e6a753c6d592ec7de729",
"assets/assets/images/wheat_bread.png": "3fa018460296b0dbfef7db6f850a61ad",
"assets/FontManifest.json": "957a3c4c66e291d20d484bc87787762f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ee6ffd4e2417359a996d489a68fe7392",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "75f2fd6ede797c459868da04355526ce",
"/": "75f2fd6ede797c459868da04355526ce",
"main.dart.js": "b4bc29ddaa2effcd0cffd91be8a64d62",
"manifest.json": "8b452f5fbdc7df246d2dd0c815b6f9c7",
"version.json": "5d58809eea0373bfaa4cac93ecf43d18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
