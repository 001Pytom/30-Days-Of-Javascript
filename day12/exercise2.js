function tenMostFrequentWords(paragraph) {
  const sanitizedText = paragraph.toLowerCase().replace(/[.,]/g, "");
  const words = sanitizedText.split(/\s+/);

  const wordFrequency = {};
  words.forEach(
    (word) => (wordFrequency[word] = (wordFrequency[word] || 0) + 1)
  );

  return Object.keys(wordFrequency)
    .sort((a, b) => wordFrequency[b] - wordFrequency[a])
    .slice(0, 10);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let cleanText = sentence.replace(/[%$@&;#]/g, "");
console.log(cleanText);
