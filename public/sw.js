if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>n(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JdwZnj9dDGuojpqvlQW4P/_buildManifest.js",revision:"1295be1b14fd60d9b33e3c93785ecc72"},{url:"/_next/static/JdwZnj9dDGuojpqvlQW4P/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/JdwZnj9dDGuojpqvlQW4P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-5cc891a08d8f7bdd.js",revision:"5cc891a08d8f7bdd"},{url:"/_next/static/chunks/545-009a8c0dca90bfba.js",revision:"009a8c0dca90bfba"},{url:"/_next/static/chunks/d60b5658-667cf6747e556ea1.js",revision:"667cf6747e556ea1"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-784e916df6ec1917.js",revision:"784e916df6ec1917"},{url:"/_next/static/chunks/pages/_app-d45fe7217709c5b7.js",revision:"d45fe7217709c5b7"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/index-d4d9d549f6457dd1.js",revision:"d4d9d549f6457dd1"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/a73f1076022ddf3e.css",revision:"a73f1076022ddf3e"},{url:"/btc.png",revision:"7fb7a877ddf5238d97395b422022e2eb"},{url:"/download.jpg",revision:"84a9939d5fc33a4efadfbb77089e33de"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/SF-Pro-Display-Bold.otf",revision:"f954a74495ae3d38d953ee631543c04a"},{url:"/fonts/sf-pro.css",revision:"505b484efacebfa9a1747a70259351fe"},{url:"/icons/GitIcon.png",revision:"07c061bbb4a96dae3fbc271df7e08905"},{url:"/icons/JavaIcon.png",revision:"3a255c86f54385c8360d919311a1cf8c"},{url:"/icons/JupyterIcon.png",revision:"4fbce7779955649a425cf4feb0218569"},{url:"/icons/LinuxIcon.png",revision:"bf14ce105b20d2be84d00fb719e8cf69"},{url:"/icons/avax-logo.png",revision:"bcfbb16284d0fe74e311ef8e8ac5e22b"},{url:"/icons/btc-logo.png",revision:"24cbd2ab9a2850aa7bffaac5e05e4fe6"},{url:"/icons/cssIcon.png",revision:"230ecc0ce81139179d546816794f7420"},{url:"/icons/eth-logo.png",revision:"ba1218b16a0987ad4318f98fc1c82624"},{url:"/icons/expressJSIcon.png",revision:"6098c595b5aa429d4f74bf10b68a7611"},{url:"/icons/htmlIcon.png",revision:"3847525f84ad2ec85e1b7e033b298581"},{url:"/icons/javascriptIcon.png",revision:"25db122f5d3e34dbf06788515c47dee5"},{url:"/icons/nodeJSIcon.png",revision:"9c350c80c3898161dbe4cf24a1dbe701"},{url:"/icons/pythonIcon.png",revision:"7d8a8909d8eda0dcb7b76c43756250dc"},{url:"/icons/sol-logo.png",revision:"8ed9ca4df50f996340c1b57b97b598ac"},{url:"/manifest.json",revision:"84451df8dc5e74773d36062f7c956b0e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
