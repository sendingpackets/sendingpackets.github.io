(function () {
  const mobileByUserAgent = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const mobileByPointer = window.matchMedia("(pointer: coarse)").matches &&
    window.matchMedia("(max-width: 900px)").matches;
  const isMobile = mobileByUserAgent || mobileByPointer;

  if (!isMobile) return;

  document.documentElement.innerHTML =
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta name="robots" content="noindex, nofollow"><title>terrorism.cc</title>' +
    '<link rel="stylesheet" href="/assets/css/site.css"></head>' +
    '<body class="mobile-blocked"><div class="mobile-message">' +
    '<span class="char" style="--i:0">M</span><span class="char" style="--i:1">o</span><span class="char" style="--i:2">b</span><span class="char" style="--i:3">i</span><span class="char" style="--i:4">l</span><span class="char" style="--i:5">e</span> ' +
    '<span class="char" style="--i:7">i</span><span class="char" style="--i:8">s</span> ' +
    '<span class="char" style="--i:10">n</span><span class="char" style="--i:11">o</span><span class="char" style="--i:12">t</span> ' +
    '<span class="char" style="--i:14">s</span><span class="char" style="--i:15">u</span><span class="char" style="--i:16">p</span><span class="char" style="--i:17">p</span><span class="char" style="--i:18">o</span><span class="char" style="--i:19">r</span><span class="char" style="--i:20">t</span><span class="char" style="--i:21">e</span><span class="char" style="--i:22">d</span><span class="char" style="--i:23">.</span>' +
    '<br>' +
    '<span class="char" style="--i:24">P</span><span class="char" style="--i:25">l</span><span class="char" style="--i:26">e</span><span class="char" style="--i:27">a</span><span class="char" style="--i:28">s</span><span class="char" style="--i:29">e</span> ' +
    '<span class="char" style="--i:31">v</span><span class="char" style="--i:32">i</span><span class="char" style="--i:33">e</span><span class="char" style="--i:34">w</span> ' +
    '<span class="char" style="--i:36">o</span><span class="char" style="--i:37">n</span> ' +
    '<span class="char" style="--i:39">d</span><span class="char" style="--i:40">e</span><span class="char" style="--i:41">s</span><span class="char" style="--i:42">k</span><span class="char" style="--i:43">t</span><span class="char" style="--i:44">o</span><span class="char" style="--i:45">p</span><span class="char" style="--i:46">.</span>' +
    '</div></body>';
  throw new Error("__mobile_blocked__");
})();

if (location.pathname === "/index.html") {
  location.replace("/");
}

(function registerGuardWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:") return;

  const isAdPage = location.pathname === "/AD.html";

  navigator.serviceWorker.register("/assets/js/site-sw.js", { scope: "/" }).catch(() => {});

  function postToWorker(message) {
    const controller = navigator.serviceWorker.controller;
    if (controller) controller.postMessage(message);
  }

  navigator.serviceWorker.ready.then(() => {
    if (isAdPage) {
      postToWorker("i-am-ad");
      return;
    }

    postToWorker(document.visibilityState === "visible" ? "page-visible" : "page-hidden");

    setInterval(() => {
      if (document.visibilityState === "visible") postToWorker("ping");
    }, 250);

    document.addEventListener("visibilitychange", () => {
      postToWorker(document.visibilityState === "visible" ? "page-visible" : "page-hidden");
    });
  }).catch(() => {});
})();

if (location.protocol === "http:") {
  location.replace(location.href.replace(/^http:/, "https:"));
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const isDevtools = key === "f12";
  const isInspect = event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c");
  const isViewSource = event.ctrlKey && key === "u";
  const isSave = (event.ctrlKey || event.metaKey) && key === "s";

  if (isDevtools || isInspect || isViewSource || isSave) {
    event.preventDefault();
    event.stopPropagation();
    alert("Inspection is not allowed.");
    return false;
  }
});

function obliteratePage() {
  try {
    document.title = "Don't mess around.";
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<meta name="robots" content="noindex, nofollow"><title>Don\'t mess around.</title>' +
      '<link rel="stylesheet" href="/assets/css/site.css"></head>' +
      '<body class="obliterate-screen"><main class="stage" aria-label="Inspection blocked"><div class="message"><span class="char" style="--i:0">S</span><span class="char" style="--i:1">t</span><span class="char" style="--i:2">o</span><span class="char" style="--i:3">p</span><span class="char" style="--i:4">&nbsp;</span><span class="char" style="--i:5">t</span><span class="char" style="--i:6">r</span><span class="char" style="--i:7">y</span><span class="char" style="--i:8">i</span><span class="char" style="--i:9">n</span><span class="char" style="--i:10">g</span><span class="char" style="--i:11">&nbsp;</span><span class="char" style="--i:12">t</span><span class="char" style="--i:13">o</span><span class="char" style="--i:14">&nbsp;</span><span class="char" style="--i:15">m</span><span class="char" style="--i:16">e</span><span class="char" style="--i:17">s</span><span class="char" style="--i:18">s</span><span class="char" style="--i:19">&nbsp;</span><span class="char" style="--i:20">a</span><span class="char" style="--i:21">r</span><span class="char" style="--i:22">o</span><span class="char" style="--i:23">u</span><span class="char" style="--i:24">n</span><span class="char" style="--i:25">d</span><span class="char" style="--i:26">.</span></div></main></body>';
  } catch (_) {}

  try { window.stop(); } catch (_) {}
  try { location.replace("about:blank"); } catch (_) {}

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_~";

  function randomPath() {
    const length = Math.floor(Math.random() * 11) + 20;
    let path = "/";

    for (let i = 0; i < length; i++) {
      path += chars[Math.floor(Math.random() * chars.length)];
    }

    return path;
  }

  setInterval(() => {
    try {
      window.history.replaceState({}, "Don't mess around.", randomPath());
      document.title = "Don't mess around.";
    } catch (_) {}
  }, 5);
}

function flagDevtools() {
  obliteratePage();
}

(function debugTrap() {
  const start = performance.now();
  debugger;

  if (performance.now() - start > 100) {
    flagDevtools();
  }

  setTimeout(debugTrap, 50);
})();

setInterval(() => {
  try { Function("debugger;")(); } catch (_) {}
}, 50);

setInterval(() => {
  const threshold = 160;
  const widthGap = window.outerWidth - window.innerWidth;
  const heightGap = window.outerHeight - window.innerHeight;

  if (widthGap > threshold || heightGap > threshold) {
    flagDevtools();
  }
}, 500);

(function () {
  let fired = false;
  const trap = new Function();
  trap.toString = function () {
    if (!fired) {
      fired = true;
      flagDevtools();
    }
    return "";
  };

  setInterval(() => {
    try { console.debug(trap); } catch (_) {}
  }, 800);
})();
