if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,s,n)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return c;case"module":return a;default:return e(i)}})).then(e=>{const i=n(...e);return c.default||(c.default=i),c})}))}}define("./sw.js",["./workbox-68d819e8"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"dAw0c1hpIHG4jN8zqz7j7"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.ad03ba0bcae4565d3ff9.js",revision:"06419d500f62084228f6c67a94f41a24"},{url:"/_next/static/chunks/framework.7425f7c0f2c0fa6b9f98.js",revision:"e1ff77e618abd1dda42076059844b3bd"},{url:"/_next/static/chunks/main-5a4ae25e8212407688c3.js",revision:"1a08720a8624d80f4e57ed9aa472c83d"},{url:"/_next/static/chunks/pages/_app-90896e58b6bb65390a65.js",revision:"7787c57da47789fc91fb1115f97e7f4a"},{url:"/_next/static/chunks/pages/_error-927dcf93581c925cc38b.js",revision:"3cb81459d8a964d089f540a8a9c9feeb"},{url:"/_next/static/chunks/pages/index-91e12dad7ea904812a7d.js",revision:"78073fd8309092d7cc57df23a91b2e4b"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/00b7c7f4e22ac3c58dc0.css",revision:"b9b50941eea23817192a7105610fb914"},{url:"/_next/static/dAw0c1hpIHG4jN8zqz7j7/_buildManifest.js",revision:"036c5acaa02e8b1fa6d758d9b521f7d2"},{url:"/_next/static/dAw0c1hpIHG4jN8zqz7j7/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/media/hero.e24bf3cb5206343a56042c2b06c1c2bf.jpg",revision:"515ea5998aae5c8c8061fb33c57b92e0"},{url:"/about_me.png",revision:"cb97e077e06b569f0a74253a2100fac1"},{url:"/android-chrome-192x192.png",revision:"a085b267e1100f8fe9e7ca0f3a3d52b1"},{url:"/android-chrome-384x384.png",revision:"80fc32c73f0823c9c8b98bc19dfde477"},{url:"/apple-touch-icon.png",revision:"d301f888806573fce58d61770a32de50"},{url:"/asogba_ibrahim.jpg",revision:"6a31a1837540e2c36d00af7a11b045c9"},{url:"/developer_activity.png",revision:"c35acf18b3b62f7507d3405ff0edc8f3"},{url:"/developer_activity.svg",revision:"59389695208d7454c6607bed51ed4316"},{url:"/drf.png",revision:"c5f7f2ec588e4ba7c22cdab48269b33b"},{url:"/favicon-16x16.png",revision:"345d42718c836f1ff54be121151bdbc0"},{url:"/favicon-32x32.png",revision:"256257fd858bf814f9208bce53e34c37"},{url:"/favicon.ico",revision:"e535a776f430372b83f4df54e3a31ca8"},{url:"/hero.jpg",revision:"515ea5998aae5c8c8061fb33c57b92e0"},{url:"/images/bt-next.png",revision:"7e0ebdd6a22043d853192cb8d673c0d9"},{url:"/images/bt-next@2x.png",revision:"f39019ad8c32e9882928827fbb86d6e0"},{url:"/images/bt-prev.png",revision:"571654d6cf553afd3cd0ea6bf814cc40"},{url:"/images/bt-prev@2x.png",revision:"e5e67ce7fa1cc080ce3b777b7041de1f"},{url:"/images/icons/apple-touch-icon-120x120.png",revision:"c30efb0f68a3257324a0e47277aa056f"},{url:"/images/icons/apple-touch-icon-57x57.png",revision:"ee8a0a50f275dcd735b9b6ac52ead82a"},{url:"/images/icons/apple-touch-icon-60x60.png",revision:"07c380a0f3ee70e198876eb4df9f297b"},{url:"/images/icons/apple-touch-icon-76x76.png",revision:"fd6178c8673f43cca972de871c8968ad"},{url:"/images/icons/favicon-16x16.png",revision:"345d42718c836f1ff54be121151bdbc0"},{url:"/images/icons/favicon-32x32.png",revision:"256257fd858bf814f9208bce53e34c37"},{url:"/images/icons/icon-114x114.png",revision:"1fa5ab94bada5d368c35b40ca12cc040"},{url:"/images/icons/icon-128x128.png",revision:"849cc13376d1a6fa94d88f5ec38b2fa4"},{url:"/images/icons/icon-144x144.png",revision:"79d38b869624d3ce74206d8198608b56"},{url:"/images/icons/icon-152x152.png",revision:"e10eff8e2d0cd0d5c836c690e40150a0"},{url:"/images/icons/icon-192x192.png",revision:"184165c97f6bd56e38e87e83af3f7f04"},{url:"/images/icons/icon-384x384.png",revision:"80fc32c73f0823c9c8b98bc19dfde477"},{url:"/images/icons/icon-72x72.png",revision:"8012f9b60b972d3123c4bd8c5b6e8861"},{url:"/images/icons/icon-96x96.png",revision:"d68d5dbb69d3e6c1093635b42ac157f3"},{url:"/images/icons/mstile-144x144.png",revision:"79d38b869624d3ce74206d8198608b56"},{url:"/images/icons/mstile-150x150.png",revision:"27b594930c7afbf06d0773395fcb9725"},{url:"/images/icons/mstile-310x150.png",revision:"bb96726d3ecefe0d60496e627126c2fb"},{url:"/images/icons/mstile-310x310.png",revision:"7a954ed58e9cdce977e9c9f46411835e"},{url:"/images/icons/mstile-70x70.png",revision:"849cc13376d1a6fa94d88f5ec38b2fa4"},{url:"/manifest.json",revision:"a177222258c9ce8dffbb1f85322e61cd"},{url:"/mstile-150x150.png",revision:"8fbc263410308d7c4cd852eaf34458d9"},{url:"/web_developer.png",revision:"3948ed367e5e82b78418ae9e3bd34253"},{url:"/web_developer.svg",revision:"f7f12d8b700f6d8f96ca0c84a7a366e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
