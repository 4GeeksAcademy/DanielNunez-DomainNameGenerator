let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  //   let firstPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  //   let firstAdj = adj[Math.floor(Math.random() * adj.length)];
  //   let firstNoun = noun[Math.floor(Math.random() * noun.length)];
  //   return `${firstPronoun}${firstAdj}${firstNoun}.com`;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + "." + adj[j] + "." + noun[k] + ".com");
      }
      // console.log(pronoun[i] + "." + adj[j]);
    }
    // console.log(pronoun[i]);
  }
};
// document.getElementById("domain").innerText = onload();
