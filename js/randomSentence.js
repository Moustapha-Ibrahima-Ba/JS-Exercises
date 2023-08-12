function randomSentence(words) {
  const randomWords = words.sort(() => Math.random() - 0.5); 
  const sentence = randomWords.join(" "); 
  console.log(sentence); 
}
