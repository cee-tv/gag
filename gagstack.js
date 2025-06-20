const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", function () {
  mainNav.classList.toggle("open");
  if (mainNav.classList.contains("open")) {
    setTimeout(() => {
      window.addEventListener("click", navCloseHandler);
    }, 0x0);
  }
});
function navCloseHandler(_0x4d5534) {
  if (!mainNav.contains(_0x4d5534.target)) {
    mainNav.classList.remove("open");
    window.removeEventListener("click", navCloseHandler);
  }
}
const themeSelect = document.getElementById("themeSelect");
function setTheme(_0x1f5f6b) {
  document.documentElement.setAttribute("data-theme", _0x1f5f6b);
  localStorage.setItem("gag_theme", _0x1f5f6b);
}
themeSelect.addEventListener("change", function () {
  setTheme(this.value);
});
(function () {
  const _0x1768d4 = localStorage.getItem("gag_theme");
  if (_0x1768d4) {
    setTheme(_0x1768d4);
    themeSelect.value = _0x1768d4;
  } else {
    setTheme("dark");
    themeSelect.value = "dark";
  }
})();
(function () {
  let _0x358b12 = document.querySelectorAll(".nav-link");
  let _0x20b95d = window.location.pathname.replace(/\\/g, '/').split('/').pop() || "index.html";
  _0x358b12.forEach(_0x1a142e => {
    if (_0x1a142e.getAttribute("href") === _0x20b95d) {
      _0x1a142e.classList.add("active");
    } else {
      _0x1a142e.classList.remove("active");
    }
  });
})();
if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}
const importantHoney = ["Bee Egg"];
const importantEggs = ["Bug Egg", "Rare Egg", "Legendary Egg", "Mythical Egg"];
const importantSeeds = ["Ember Lily Seed", "Sugar Apple Seed", "Beanstalk Seed", "Cacao Seed", "Pepper Seed", "Mushroom Seed", "Grape Seed", "Mango Seed"];
const importantGears = ["Basic Sprinkler", "Advanced Sprinkler", "Godly Sprinkler", "Master Sprinkler", "Lightning Rod", "Friendship Pot"];
let notifiedAvailable = {};
const emojis = {
  "Common Egg": '🥚',
  "Uncommon Egg": '🐣',
  "Rare Egg": '🍳',
  "Legendary Egg": '🪺',
  "Mythical Egg": '🔮',
  "Bug Egg": '🪲',
  "Watering Can": '🚿',
  "Cleaning Spray": '🧴',
  "Friendship Pot": '💑',
  'Trowel': "🛠️",
  "Recall Wrench": '🔧',
  "Basic Sprinkler": '💧',
  "Advanced Sprinkler": '💦',
  "Godly Sprinkler": '⛲',
  "Lightning Rod": '⚡',
  "Master Sprinkler": '🌊',
  "Favorite Tool": '❤️',
  "Harvest Tool": '🌾',
  'Carrot': '🥕',
  'Strawberry': '🍓',
  'Blueberry': '🫐',
  "Orange Tulip": '🌷',
  'Tomato': '🍅',
  'Corn': '🌽',
  'Daffodil': '🌼',
  'Watermelon': '🍉',
  'Pumpkin': '🎃',
  'Apple': '🍎',
  'Bamboo': '🎍',
  'Coconut': '🥥',
  'Cactus': '🌵',
  "Dragon Fruit": '🍈',
  'Mango': '🥭',
  'Grape': '🍇',
  'Mushroom': '🍄',
  'Pepper': "🌶️",
  'Cacao': '🍫',
  'Beanstalk': '🌱',
  "Ember Lily": "🏵️",
  "Sugar Apple": '🍏',
  "Wild Honey": '🍯',
  "Royal Jelly": '👑',
  "Sunflower Crown": '🌻',
  "Bunny Ears": '🐰',
  "Pumpkin Mask": '🎭',
  "Cherry Blossom Pin": '🌸'
};
function pad(_0x3ad162) {
  return _0x3ad162 < 0xa ? '0' + _0x3ad162 : _0x3ad162;
}
function getPHTime() {
  return new Date(new Date().toLocaleString("en-US", {
    'timeZone': "Asia/Manila"
  }));
}
function getCountdown(_0x3054ad) {
  const _0x31d259 = new Date(new Date().toLocaleString("en-US", {
    'timeZone': "Asia/Manila"
  }));
  const _0x3bf90b = _0x3054ad - _0x31d259;
  if (_0x3bf90b <= 0x0) {
    return "00h 00m 00s";
  }
  const _0x2eab75 = Math.floor(_0x3bf90b / 0x36ee80);
  const _0x539bd4 = Math.floor(_0x3bf90b % 0x36ee80 / 0xea60);
  const _0x5c220d = Math.floor(_0x3bf90b % 0xea60 / 0x3e8);
  return (_0x2eab75 < 0xa ? '0' + _0x2eab75 : _0x2eab75) + "h " + (_0x539bd4 < 0xa ? '0' + _0x539bd4 : _0x539bd4) + "m " + (_0x5c220d < 0xa ? '0' + _0x5c220d : _0x5c220d) + 's';
}
function getNextRestocks() {
  const _0xa6e812 = new Date(new Date().toLocaleString("en-US", {
    'timeZone': "Asia/Manila"
  }));
  const _0x57dc11 = {};
  const _0x38a6ab = new Date(_0xa6e812);
  _0x38a6ab.setSeconds(0x0, 0x0);
  if (_0xa6e812.getMinutes() < 0x1e) {
    _0x38a6ab.setMinutes(0x1e);
  } else {
    _0x38a6ab.setHours(_0xa6e812.getHours() + 0x1);
    _0x38a6ab.setMinutes(0x0);
  }
  _0x57dc11.egg = getCountdown(_0x38a6ab);
  const _0x2ae80d = new Date(_0xa6e812);
  const _0x407103 = Math.ceil((_0xa6e812.getMinutes() + (_0xa6e812.getSeconds() > 0x0 ? 0x1 : 0x0)) / 0x5) * 0x5;
  _0x2ae80d.setSeconds(0x0, 0x0);
  if (_0x407103 === 0x3c) {
    _0x2ae80d.setHours(_0xa6e812.getHours() + 0x1);
    _0x2ae80d.setMinutes(0x0);
  } else {
    _0x2ae80d.setMinutes(_0x407103);
  }
  _0x57dc11.gear = _0x57dc11.seed = getCountdown(_0x2ae80d);
  const _0x398438 = new Date(_0xa6e812);
  _0x398438.setHours(_0xa6e812.getHours() + 0x1, 0x0, 0x0, 0x0);
  _0x57dc11.honey = getCountdown(_0x398438);
  const _0x4eef74 = new Date(_0xa6e812);
  const _0x59d293 = _0xa6e812.getHours() + _0xa6e812.getMinutes() / 0x3c + _0xa6e812.getSeconds() / 0xe10;
  const _0x39f845 = Math.ceil(_0x59d293 / 0x7) * 0x7;
  _0x4eef74.setHours(_0x39f845, 0x0, 0x0, 0x0);
  _0x57dc11.cosmetics = getCountdown(_0x4eef74);
  return _0x57dc11;
}
function formatValue(_0x4dfdf7) {
  if (_0x4dfdf7 >= 0xf4240) {
    return 'x' + (_0x4dfdf7 / 0xf4240).toFixed(0x1) + 'M';
  }
  if (_0x4dfdf7 >= 0x3e8) {
    return 'x' + (_0x4dfdf7 / 0x3e8).toFixed(0x1) + 'K';
  }
  return 'x' + _0x4dfdf7;
}
function getItemPrice(_0x2bd72d) {
  if (typeof _0x2bd72d.price !== "undefined") {
    return formatValue(Number(_0x2bd72d.price));
  }
  if (typeof _0x2bd72d.cost !== "undefined") {
    return formatValue(Number(_0x2bd72d.cost));
  }
  return '--';
}
function shouldNotify(_0x58ad66, _0x93dc03) {
  const _0x23ed94 = document.getElementById("importantNotifySwitch")?.["checked"];
  if (!_0x23ed94) {
    return true;
  }
  if (_0x58ad66 === "honey") {
    return importantHoney.includes(_0x93dc03);
  }
  if (_0x58ad66 === "egg") {
    return importantEggs.includes(_0x93dc03);
  }
  if (_0x58ad66 === "seed") {
    return importantSeeds.includes(_0x93dc03);
  }
  if (_0x58ad66 === "gear") {
    return importantGears.includes(_0x93dc03);
  }
  return false;
}
function sendAvailabilityNotification(_0x2a3d1d, _0x2e3f6f) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Available: " + _0x2a3d1d, {
      'body': "Qty: " + _0x2e3f6f,
      'icon': "https://cdn-icons-png.flaticon.com/512/616/616408.png"
    });
  }
}
function showImportantOverlay(_0x44a96c) {
  if (!_0x44a96c.length) {
    return;
  }
  const _0x3bec9f = document.getElementById("importantOverlay");
  const _0x548970 = document.getElementById("overlayAvailableList");
  _0x548970.innerHTML = _0x44a96c.map(({
    section: _0x1f2728,
    name: _0xe6caee,
    quantity: _0x5b53cb
  }) => "<div><b>" + _0xe6caee + "</b> (" + sectionLabel(_0x1f2728) + "): <span style=\"color:#4be87a;font-weight:bold;\">" + _0x5b53cb + "</span></div>").join('');
  _0x3bec9f.style.display = "flex";
}
function hideImportantOverlay() {
  document.getElementById("importantOverlay").style.display = "none";
}
function sectionLabel(_0x3da1cb) {
  switch (_0x3da1cb) {
    case "gear":
      return "Gear";
    case "seed":
      return "Seed";
    case "egg":
      return "Egg";
    case "honey":
      return "Honey";
    case "cosmetics":
      return "Cosmetics";
    default:
      return _0x3da1cb;
  }
}
async function fetchAndRender() {
  const _0x32f4f6 = document.getElementById("sections");
  const _0x2800bf = window.scrollY;
  const _0x3daf72 = document.getElementById("updateTime");
  try {
    const _0xe8ec8f = await fetch("https://corsproxy.io/?https://gagstock.gleeze.com/grow-a-garden");
    if (!_0xe8ec8f.ok) {
      throw new Error("Failed to fetch API");
    }
    const _0x204f4d = (await _0xe8ec8f.json()).data;
    const _0x1f3eeb = getNextRestocks();
    const _0x41037d = [{
      'label': "🛠️ Gear",
      'emoji': "🛠️",
      'sectionKey': "gear",
      'rows': _0x204f4d.gear.items,
      'restock': _0x1f3eeb.gear
    }, {
      'label': "🌱 Seeds",
      'emoji': '🌱',
      'sectionKey': "seed",
      'rows': _0x204f4d.seed.items,
      'restock': _0x1f3eeb.seed
    }, {
      'label': "🥚 Eggs",
      'emoji': '🥚',
      'sectionKey': "egg",
      'rows': _0x204f4d.egg.items,
      'restock': _0x1f3eeb.egg
    }, {
      'label': "🎨 Cosmetics",
      'emoji': '🎨',
      'sectionKey': "cosmetics",
      'rows': _0x204f4d.cosmetics.items,
      'restock': _0x1f3eeb.cosmetics
    }, {
      'label': "🍯 Honey",
      'emoji': '🍯',
      'sectionKey': "honey",
      'rows': _0x204f4d.honey.items,
      'restock': _0x1f3eeb.honey
    }];
    let _0x263c0d = [];
    ["gear", "seed", "egg", "cosmetics", "honey"].forEach(_0x331e96 => {
      (_0x204f4d[_0x331e96]?.["items"] || []).forEach(_0x36a66e => {
        const _0x1ee8f3 = shouldNotify(_0x331e96, _0x36a66e.name);
        const _0x453ae6 = Number(_0x36a66e.quantity);
        if (_0x1ee8f3 && _0x453ae6 > 0x0) {
          if (!notifiedAvailable[_0x36a66e.name]) {
            sendAvailabilityNotification(_0x36a66e.name, _0x36a66e.quantity);
            notifiedAvailable[_0x36a66e.name] = true;
          }
          _0x263c0d.push({
            'section': _0x331e96,
            'name': _0x36a66e.name,
            'quantity': _0x453ae6
          });
        } else {
          notifiedAvailable[_0x36a66e.name] = false;
        }
      });
    });
    const _0x7bbf9b = document.getElementById("importantNotifySwitch")?.["checked"];
    if (_0x7bbf9b && _0x263c0d.length > 0x0) {
      showImportantOverlay(_0x263c0d);
    }
    _0x32f4f6.innerHTML = '';
    for (const _0x1383d2 of _0x41037d) {
      const _0x2cd51d = document.createElement("div");
      _0x2cd51d.className = "section";
      if (window.innerWidth <= 0x226) {
        _0x2cd51d.innerHTML = "\n          <div class=\"section-title\"><span class=\"emoji\">" + _0x1383d2.emoji + "</span>" + _0x1383d2.label.replace(_0x1383d2.emoji, '') + "</div>\n          <span class=\"restock\">" + (_0x1383d2.restock ? "⏳ Restock in: " + _0x1383d2.restock : '') + "</span>\n          <table>\n            <tbody>\n              " + _0x1383d2.rows.map(_0x362493 => "\n                <tr>\n                  <td data-label=\"Item\">" + (emojis[_0x362493.name] ? "<span class=\"emoji\">" + emojis[_0x362493.name] + "</span>" : '') + _0x362493.name + "</td>\n                  <td data-label=\"Qty Available\">" + formatValue(Number(_0x362493.quantity)) + "</td>\n                  <td data-label=\"Price\">" + getItemPrice(_0x362493) + "</td>\n                </tr>\n              ").join('') + "\n            </tbody>\n          </table>\n        ";
      } else {
        _0x2cd51d.innerHTML = "\n          <div class=\"section-title\"><span class=\"emoji\">" + _0x1383d2.emoji + "</span>" + _0x1383d2.label.replace(_0x1383d2.emoji, '') + "</div>\n          <span class=\"restock\">" + (_0x1383d2.restock ? "⏳ Restock in: " + _0x1383d2.restock : '') + "</span>\n          <table>\n            <thead>\n              <tr><th>Item</th><th>Qty Available</th><th>Price</th></tr>\n            </thead>\n            <tbody>\n              " + _0x1383d2.rows.map(_0x42d95a => "\n                <tr>\n                  <td>" + (emojis[_0x42d95a.name] ? "<span class=\"emoji\">" + emojis[_0x42d95a.name] + "</span>" : '') + _0x42d95a.name + "</td>\n                  <td>" + formatValue(Number(_0x42d95a.quantity)) + "</td>\n                  <td>" + getItemPrice(_0x42d95a) + "</td>\n                </tr>\n              ").join('') + "\n            </tbody>\n          </table>\n        ";
      }
      _0x32f4f6.appendChild(_0x2cd51d);
    }
    _0x3daf72.textContent = "Last updated: " + new Date(new Date().toLocaleString("en-US", {
      'timeZone': "Asia/Manila"
    })).toLocaleTimeString("en-PH", {
      'hour': "2-digit",
      'minute': "2-digit",
      'second': "2-digit"
    });
  } catch (_0x1a330b) {
    _0x3daf72.innerHTML = "<span class=\"error-msg\">Failed to fetch data! Please check your connection.</span>";
  }
  setTimeout(() => {
    window.scrollTo(0x0, _0x2800bf);
  }, 0x0);
}
document.getElementById("refresh-btn").addEventListener("click", fetchAndRender);
document.getElementById("importantNotifySwitch").addEventListener("change", () => {
  notifiedAvailable = {};
  fetchAndRender();
});
document.getElementById("overlayCloseBtn").onclick = hideImportantOverlay;
document.getElementById("aboutDevBtn").addEventListener("click", function (_0x268874) {
  _0x268874.preventDefault();
  document.getElementById("aboutDevOverlay").style.display = "flex";
});
document.getElementById("aboutDevCloseBtn").onclick = function () {
  document.getElementById("aboutDevOverlay").style.display = "none";
};
document.getElementById("aboutDevOverlay").addEventListener("click", function (_0x145a46) {
  if (_0x145a46.target === this) {
    this.style.display = "none";
  }
});
fetchAndRender();
setInterval(fetchAndRender, 0x1388);
window.addEventListener("resize", fetchAndRender);
async function checkApiStatus() {
  const _0x5cb72e = document.getElementById("apiStatus");
  const _0xcfcc8a = getComputedStyle(document.documentElement).getPropertyValue("--online").trim() || "#4be87a";
  const _0x412a7d = getComputedStyle(document.documentElement).getPropertyValue("--offline").trim() || "#ff5252";
  try {
    const _0x28e513 = await fetch("https://corsproxy.io/?https://gagstock.gleeze.com/grow-a-garden", {
      'method': "GET",
      'cache': "no-cache"
    });
    if (_0x28e513.ok) {
      _0x5cb72e.textContent = "API: Online";
      _0x5cb72e.style.color = _0xcfcc8a;
    } else {
      _0x5cb72e.textContent = "API: Offline";
      _0x5cb72e.style.color = _0x412a7d;
    }
  } catch (_0x5321d9) {
    _0x5cb72e.textContent = "API: Offline";
    _0x5cb72e.style.color = _0x412a7d;
  }
}
checkApiStatus();
setInterval(checkApiStatus, 0x3a98);
