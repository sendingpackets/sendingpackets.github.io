(function () {
  const mobileByUserAgent = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const mobileByPointer = window.matchMedia("(pointer: coarse)").matches &&
    window.matchMedia("(max-width: 900px)").matches;
  const isMobile = mobileByUserAgent || mobileByPointer;

  if (!isMobile) return;

  document.documentElement.innerHTML =
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta name="robots" content="noindex, nofollow"><title>terrorism.cc</title>' +
    '<style>html,body{margin:0;height:100%;background:#000;overflow:hidden;font-family:"Mongolian Baiti",serif;}' +
    'body{display:flex;align-items:center;justify-content:center;color:#550400;font-size:clamp(26px,8vw,46px);' +
    'line-height:1.2;text-align:center;filter:blur(.8px) contrast(1.6) saturate(.7);padding:0 18px;box-sizing:border-box;}' +
    '.mobile-message{max-width:min(92vw,680px);overflow-wrap:anywhere;}' +
    'text-shadow:0 0 2px #550400,0 0 4px #550400,0 0 16px #550400,0 0 24px #550400;}' +
    '.char{display:inline-block;animation:noodleWave 8.12s ease-in-out infinite;animation-delay:calc(var(--i)*-.18s);' +
    'transform-origin:50% 70%;will-change:transform;}@keyframes noodleWave{0%,100%{transform:translateY(0) rotate(0deg) skewX(0deg)}' +
    '20%{transform:translateY(-1.2px) rotate(-1.8deg) skewX(3deg)}45%{transform:translateY(.9px) rotate(1.4deg) skewX(-2.5deg)}' +
    '70%{transform:translateY(-.6px) rotate(1deg) skewX(1.8deg)}}</style></head>' +
    '<body><div class="mobile-message"><span class="char" style="--i:0">M</span><span class="char" style="--i:1">o</span><span class="char" style="--i:2">b</span><span class="char" style="--i:3">i</span><span class="char" style="--i:4">l</span><span class="char" style="--i:5">e</span><span class="char" style="--i:6">&nbsp;</span><span class="char" style="--i:7">i</span><span class="char" style="--i:8">s</span><span class="char" style="--i:9">&nbsp;</span><span class="char" style="--i:10">n</span><span class="char" style="--i:11">o</span><span class="char" style="--i:12">t</span><span class="char" style="--i:13">&nbsp;</span><span class="char" style="--i:14">s</span><span class="char" style="--i:15">u</span><span class="char" style="--i:16">p</span><span class="char" style="--i:17">p</span><span class="char" style="--i:18">o</span><span class="char" style="--i:19">r</span><span class="char" style="--i:20">t</span><span class="char" style="--i:21">e</span><span class="char" style="--i:22">d</span><span class="char" style="--i:23">.</span><br><span class="char" style="--i:24">P</span><span class="char" style="--i:25">l</span><span class="char" style="--i:26">e</span><span class="char" style="--i:27">a</span><span class="char" style="--i:28">s</span><span class="char" style="--i:29">e</span><span class="char" style="--i:30">&nbsp;</span><span class="char" style="--i:31">v</span><span class="char" style="--i:32">i</span><span class="char" style="--i:33">e</span><span class="char" style="--i:34">w</span><span class="char" style="--i:35">&nbsp;</span><span class="char" style="--i:36">o</span><span class="char" style="--i:37">n</span><span class="char" style="--i:38">&nbsp;</span><span class="char" style="--i:39">d</span><span class="char" style="--i:40">e</span><span class="char" style="--i:41">s</span><span class="char" style="--i:42">k</span><span class="char" style="--i:43">t</span><span class="char" style="--i:44">o</span><span class="char" style="--i:45">p</span><span class="char" style="--i:46">.</span></div></body>';
  throw new Error("__mobile_blocked__");
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
    alert("Inspection is disabled.");
    return false;
  }
});

function obliteratePage() {
  try {
    document.title = "Don't mess around.";
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<meta name="robots" content="noindex, nofollow"><title>Don\'t mess around.</title>' +
      '<style>html,body{margin:0;padding:0;height:100%;background:#000;overflow:hidden;' +
      'font-family:"Mongolian Baiti",serif;cursor:default;}.stage{position:fixed;inset:0;display:flex;' +
      'align-items:center;justify-content:center;}.stage:before{content:"";position:absolute;inset:0;' +
      'background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.7) 80%);pointer-events:none;}' +
      '.message{position:relative;z-index:10;max-width:min(90vw,900px);padding:6px 10px;color:#550400;' +
      'font-family:"Mongolian Baiti",serif;font-size:clamp(34px,5vw,68px);letter-spacing:1px;line-height:1.1;' +
      'text-align:center;user-select:none;image-rendering:pixelated;-webkit-font-smoothing:none;' +
      '-moz-osx-font-smoothing:grayscale;filter:blur(.8px) contrast(1.6) saturate(.7);' +
      'text-shadow:0 0 2px #550400,0 0 4px #550400,0 0 16px #550400,0 0 24px #550400;}.char{display:inline-block;' +
      'animation:noodleWave 8.12s ease-in-out infinite;animation-delay:calc(var(--i)*-.18s);transform-origin:50% 70%;' +
      'will-change:transform;}@keyframes noodleWave{0%,100%{transform:translateY(0) rotate(0deg) skewX(0deg)}' +
      '20%{transform:translateY(-1.2px) rotate(-1.8deg) skewX(3deg)}45%{transform:translateY(.9px) rotate(1.4deg) skewX(-2.5deg)}' +
      '70%{transform:translateY(-.6px) rotate(1deg) skewX(1.8deg)}}</style></head>' +
      '<body><main class="stage" aria-label="Inspection blocked"><div class="message"><span class="char" style="--i:0">S</span><span class="char" style="--i:1">t</span><span class="char" style="--i:2">o</span><span class="char" style="--i:3">p</span><span class="char" style="--i:4">&nbsp;</span><span class="char" style="--i:5">t</span><span class="char" style="--i:6">r</span><span class="char" style="--i:7">y</span><span class="char" style="--i:8">i</span><span class="char" style="--i:9">n</span><span class="char" style="--i:10">g</span><span class="char" style="--i:11">&nbsp;</span><span class="char" style="--i:12">t</span><span class="char" style="--i:13">o</span><span class="char" style="--i:14">&nbsp;</span><span class="char" style="--i:15">m</span><span class="char" style="--i:16">e</span><span class="char" style="--i:17">s</span><span class="char" style="--i:18">s</span><span class="char" style="--i:19">&nbsp;</span><span class="char" style="--i:20">a</span><span class="char" style="--i:21">r</span><span class="char" style="--i:22">o</span><span class="char" style="--i:23">u</span><span class="char" style="--i:24">n</span><span class="char" style="--i:25">d</span><span class="char" style="--i:26">.</span></div></main></body>';
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
