const fs = require('fs');

const Trie = require('regexgen').Trie;

const emojiDependencyMap = require('./emoji-dependency-map.js');
const getSequences = require('./get-sequences.js');

for (const [version, packageName] of emojiDependencyMap) {
  const sequences = getSequences(packageName);
  const trie = new Trie();
  trie.addAll(sequences);
  const emojiSequenceES5 = trie.toString();
  const output = `${emojiSequenceES5}\n`;
  const fileName = `./dist/emoji-${version}.txt`;
  // Since output is guaranteed to be ASCII-safe, its `.length`
  // accurately reflects the number of bytes in the file.
  const fileSize = output.length;
  console.log(`${fileName}\t${fileSize} bytes`);
  fs.writeFileSync(fileName, output);
}
