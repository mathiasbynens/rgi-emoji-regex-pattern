const fs = require('fs');

const Trie = require('regexgen').Trie;

const emojiDependencyMap = require('./emoji-dependency-map.js');
const getSequences = require('./get-sequences.js');

const writeFile = (fileName, contents) => {
  // Since the output is guaranteed to be ASCII-safe, its `.length`
  // accurately reflects the number of bytes in the file.
  const fileSize = contents.length;
  console.log(`${fileName}\t${fileSize} bytes`);
  fs.writeFileSync(fileName, contents);
};

let latestOutput = '';
for (const [version, packageName] of emojiDependencyMap) {
  const sequences = getSequences(packageName);
  const trie = new Trie();
  trie.addAll(sequences);
  const pattern = trie.toString();
  const output = `${pattern}\n`;
  latestOutput = output;
  writeFile(`./dist/emoji-${version}.txt`, output);
}
writeFile(`./dist/latest.txt`, latestOutput);
