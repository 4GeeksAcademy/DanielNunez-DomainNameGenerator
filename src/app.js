let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function onload() {
  let firstPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let firstAdj = adj[Math.floor(Math.random() * adj.length)];
  let firstNoun = noun[Math.floor(Math.random() * noun.length)];
  return `${firstPronoun}${firstAdj}${firstNoun}.com`;
}
document.getElementById("domain").innerText = onload();
