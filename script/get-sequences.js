const getSequences = (packageName) => {
  const sequences = require(`${packageName}/Sequence_Property/RGI_Emoji/index.js`)
    // Sort by code point length; longest sequences first.
    .sort((a, b) => [...b].length - [...a].length);
  return sequences;
};

module.exports = getSequences;
