var tocConfig = {
  url: "http://www.champion-pulsa.com",
  feedNum: 6,
  labelName: (window.location.hash && window.location.hash != "#0" && window.location.hash != "#search") ? encodeURIComponent(window.location.hash.substr(1)) : false,
  numChars: 140,
  thumbWidth: 70,
  navText: "Load More &#9660;",
  frontText: "Top &uArr;",
  noImage: "data:image/png;base64,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",
  loading: "<span>Loading...</span>",
  searching: "<span>Searching...</span>",
  MonthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  noResult: "No Result"
};

function getID(b) {
  return document.getElementById(b)
}
var head = document.getElementsByTagName("head")[0],
  tocContainer = getID("feedContainer"),
  feedNav = getID("feedNav"),
  orderByer = getID("orderFeedBy"),
  labelSorter = getID("labelSorter"),
  input = getID("postSearcher").getElementsByTagName("input")[0],
  resultDesc = getID("resultDesc"),
  nextPage, feedArchive, startPage = 0;

function cropFeed(d, c) {
  var f = d.split("<");
  for (var e = 0; e < f.length; e++) {
    if (f[e].indexOf(">") != -1) {
      f[e] = f[e].substring(f[e].indexOf(">") + 1, f[e].length)
    }
  }
  f = f.join(" ");
  f = f.substring(0, c - 1);
  return f
}

function showLabels(c) {
  var a = c.feed.category,
    d = "";
  d = "<select id='labelSorter' onchange='changeSort(this.value);'>";
  d += "<option value='' selected>CATEGORY...</option>";
  for (var b = 0; b < a.length; b++) {
    d += "<option value='" + decodeURIComponent(a[b].term) + "'>" + a[b].term.toUpperCase() + "</option>"
  }
  d += "</select>";
  labelSorter.innerHTML = d
}

function showFeedList(t) {
  var m = t.feed.entry,
    o, s, n, h, e, u, g, p, r, q, c = "";
  if (typeof(t.feed.entry) !== "undefined") {
    for (var f = 0; f < tocConfig.feedNum; f++) {
      o = (m) ? m[f] : "", nextPage = "";
      if (f == t.feed.entry.length) {
        break
      }
      s = o.title.$t;
      for (var d = 0; d < o.link.length; d++) {
        if (o.link[d].rel == "alternate") {
          n = o.link[d].href;
          break
        }
      }
      for (var b = 0; b < t.feed.link.length; b++) {
        if (t.feed.link[b].rel == "next") {
          nextPage = t.feed.link[b].href
        }
      }
      for (var a = 0; a < o.link.length; a++) {
        if (o.link[a].rel == "replies" && o.link[a].type == "text/html") {
          q = o.link[a].title;
          break
        }
      }
      if ("content" in o) {
        e = o.content.$t
      } else {
        if ("summary" in o) {
          e = o.summary.$t
        } else {
          e = ""
        }
      }
      if ("media$thumbnail" in o) {
        h = o.media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      } else {
        h = tocConfig.noImage.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      }
      postdate = o.published.$t.substring(0, 10), u = postdate.substring(0, 4), g = postdate.substring(5, 7), p = postdate.substring(8, 10), r = tocConfig.MonthNames[parseInt(g, 10) - 1];
      c += "<li><div class='inner'>";
      c += "<a href='" + n + "' target='_blank'><img style='width:" + tocConfig.thumbWidth + "px;height:" + tocConfig.thumbWidth + "px;' src='" + h + "' alt='" + s + "' /></a>";
      c += "<a class='toc-title' href='" + n + "' target='_blank'>" + s + "</a><strong> - (" + q + ")</strong><br>";
      c += "<div class='news-text'>" + cropFeed(e, tocConfig.numChars) + "&hellip;<br style='clear:both;'/></div>";
      c += '<div class="date"><span class="dd">' + p + '</span><span class="dm">' + r + '</span><span class="dy">' + u + "</span></div></div></li>"
    }
    if (input.value !== "" && window.location.hash == "#search") {
      resultDesc.innerHTML = "<span>Search result for keyword <strong>&quot;" + input.value + "&quot;</strong></span>"
    } else {
      resultDesc.innerHTML = ""
    }
    feedContainer.innerHTML += c;
    if (nextPage) {
      if (window.location.hash && window.location.hash !== "#0") {
        c = "<a href='javascript:initResult(2);' class='next'>" + tocConfig.navText + "</a>"
      } else {
        c = "<a href='javascript:initResult(1);' class='next'>" + tocConfig.navText + "</a>"
      }
    } else {
      c = "<a href='#table-outer' onclick='jQuery(&apos;html, body&apos;).animate({scrollTop: jQuery(&apos;#table-outer&apos;).offset().top}, 1500); return false' class='front'>" + tocConfig.frontText + "</a>"
    }
    feedNav.innerHTML = c;
    input.value = "";
    labelSorter.getElementsByTagName("select")[0].removeAttribute("disabled");
    orderByer.removeAttribute("disabled")
  } else {
    feedContainer.innerHTML = "";
    alert(tocConfig.noResult);
    feedNav.innerHTML = "<a href='?reload=true'>" + tocConfig.frontText + "</a>";
    searchDesc.innerHTML = ""
  }
}

function initResult(a) {
  var b, c;
  if (a == 1) {
    b = nextPage.indexOf("?");
    c = nextPage.substring(b)
  } else {
    if (a == 2) {
      b = nextPage.indexOf("?");
      c = nextPage.substring(b).replace(/\?/, "/-/" + window.location.hash.substr(1) + "?")
    } else {
      c = "?start-index=1&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&alt=json-in-script"
    }
  }
  c += "&callback=showFeedList";
  updateScript(c)
}

function removeScript() {
  var a = getID("temporer-script");
  a.parentNode.removeChild(a)
}

function buildLabels() {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels";
  head.appendChild(a)
}

function updateScript(b) {
  if (startPage == 1) {
    removeScript()
  }
  feedNav.innerHTML = tocConfig.loading;
  if (tocConfig.labelName !== false) {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary/-/" + tocConfig.labelName + b
  } else {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + b
  }
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = feedArchive;
  a.id = "temporer-script";
  head.appendChild(a);
  startPage = 1
}

function changeSort(c) {
  removeScript();
  tocContainer.innerHTML = "";
  feedNav.innerHTML = tocConfig.loading;
  var b = document.createElement("script"),
    d = labelSorter.getElementsByTagName("select")[0],
    a = (c !== 0) ? "/-/" + c : "";
  b.type = "text/javascript";
  b.id = "temporer-script";
  b.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + a + "?alt=json-in-script&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&callback=showFeedList";
  head.appendChild(b);
  d.disabled = true;
  orderByer.disabled = true;
  window.location.hash = c
}

function searchPost() {
  removeScript();
  tocContainer.innerHTML = "";
  resultDesc.innerHTML = "";
  feedNav.innerHTML = tocConfig.searching;
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.id = "temporer-script";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?alt=json-in-script&orderby=published&q=" + input.value + "&max-results=9999&callback=showFeedList";
  head.appendChild(a);
  window.location.hash = "#search";
  return false
}
getID("postSearcher").onsubmit = function() {
  return searchPost()
};
orderByer.onchange = function() {
  changeSort(0)
};
labelSorter.getElementsByTagName("select")[0].onchange = function() {
  changeSort(this.value)
};
window.onload = function() {
  initResult(0);
  buildLabels();
  window.location.hash = "#0"
};
