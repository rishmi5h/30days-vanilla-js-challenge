const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
];

const ul = document.querySelector("#bands");

var compare = function (a, b) {
  var aTitle = a.toLowerCase();
  var bTitle = b.toLowerCase();

  aTitle = removeArticles(aTitle);
  bTitle = removeArticles(bTitle);

  return aTitle > bTitle ? 1 : -1;
};

function removeArticles(str) {
  words = str.split(" ");
  if (words.length <= 1) return str;
  if (words[0] == "a" || words[0] == "the" || words[0] == "an") {
    return words.splice(1).join(" ");
  }
  return str;
}
var sortedArr = bands.sort(compare);

ul.innerHTML = sortedArr.map((band) => `<li>${band}</li>`).join(" ");
// sortedArr.forEach((element) => {
//   const li = document.createElement("li");
//   li.innerText = element;
//   ul.appendChild(li);
// });
