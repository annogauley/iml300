// main.js: shared code used by every page. Needs jQuery and data.js loaded first.

// ---- Saved events and joined communities live in localStorage (survives refresh) ----
function load(key) { return JSON.parse(localStorage.getItem(key) || "[]"); }
function save(key, list) { localStorage.setItem(key, JSON.stringify(list)); }

// ---- Add or remove an id from a stored list ----
function toggle(key, id) {
  var list = load(key);
  var i = list.indexOf(id);
  if (i === -1) list.push(id); else list.splice(i, 1);
  save(key, list);
  return i === -1;               // true if we just added it
}

// ---- Build the navigation bar once, so every page shares it ----
function buildNav() {
  $("body").prepend(
    '<nav>' +
      '<a class="logo" href="index.html">Third Place</a>' +
      '<a href="explore.html">Explore</a>' +
      '<a href="index.html#communities">Communities</a>' +
      '<a href="explore.html?saved=1">Saved (<span id="saved-count">0</span>)</a>' +
    '</nav>');
  $("#saved-count").text(load("saved").length);
}

// Colour classes from style.css. Cards take turns using them.
var NOTE_COLORS = ['yellow', 'pink', 'blue', 'mint', 'orange', 'paper'];
function noteColor(id) { return NOTE_COLORS[parseInt(id.slice(1)) % NOTE_COLORS.length]; }

// ---- Turn one event object into HTML ----
function eventCard(e) {
  var isSaved = load("saved").indexOf(e.id) !== -1;
  var price = e.price === 0 ? "Free" : "$" + e.price;
  var tags = (e.solo ? '<span class="tag">Going solo friendly</span>' : "") +
             (e.beginner ? '<span class="tag">First-timer friendly</span>' : "");
  return '<article class="card note ' + noteColor(e.id) + '">' +
    '<div class="pic">photo: ' + e.cat + '</div>' +
    '<div class="body">' +
      '<span class="mono">' + e.date + ' / ' + e.place + '</span>' +
      '<h3>' + e.title + '</h3>' +
      '<span class="mono">' + e.going + ' going / ' + price + '</span>' +
      '<span class="mono">Hosted by ' + e.host + '</span>' +
      '<div>' + tags + '</div>' +
      '<button class="save-btn ' + (isSaved ? "on" : "") + '" data-id="' + e.id + '">' +
        (isSaved ? "Saved" : "Save") + '</button>' +
    '</div></article>';
}

// ---- Turn one community object into HTML ----
function communityCard(c) {
  var joined = load("joined").indexOf(c.id) !== -1;
  return '<article class="card note ' + noteColor(c.id) + '">' +
    '<div class="pic">cover photo</div>' +
    '<div class="body">' +
      '<h3>' + c.name + '</h3>' +
      '<p>' + c.about + '</p>' +
      '<span class="mono">' + c.place + ' / ' + c.members + ' members / ' + c.meets + '</span>' +
      '<button class="btn join-btn ' + (joined ? "joined" : "") + '" data-id="' + c.id + '">' +
        (joined ? "Joined" : "Join Community") + '</button>' +
    '</div></article>';
}

// ---- Click handlers. Written on "document" so they also work on cards added later ----
$(document).on("click", ".save-btn", function () {
  var added = toggle("saved", $(this).data("id"));
  $(this).toggleClass("on", added).text(added ? "Saved" : "Save");
  $("#saved-count").text(load("saved").length);
  if (!added && window.showSavedOnly) renderEvents();   // explore page: remove it from the view
});

$(document).on("click", ".join-btn", function () {
  var added = toggle("joined", $(this).data("id"));
  $(this).toggleClass("joined", added).text(added ? "Joined" : "Join Community");
});

$(buildNav);   // run buildNav when the page is ready