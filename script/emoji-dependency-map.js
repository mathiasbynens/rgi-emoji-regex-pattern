const getEmojiDependencyMap = () => {
  const pkg = require('../package.json');
  const deps = Object.keys(pkg.devDependencies);
  // Mapping from emojiVersion to dependencyName.
  const emojiDeps = new Map();
  for (const dep of deps) {
    if (dep.startsWith('unicode-emoji-')) {
      const version = dep.replace('unicode-emoji-', '');
      emojiDeps.set(version, dep);
    }
  }
  return emojiDeps;
};

const emojiDependencyMap = getEmojiDependencyMap();
module.exports = emojiDependencyMap;
