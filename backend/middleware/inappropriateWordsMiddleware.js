const inappropriateWords = [
  "word1",
  "word2",
  "word3",
  `word4`,
  `word5`,
  "word6",
  "word7",
  "word8",
  "word9",
  "word10",
];

const inappropriateWordsMiddleware = (req, res, next) => {
  const { username } = req.body;
  const containsInappropriateWord = inappropriateWords.some((word) =>
    username.includes(word)
  );

  if (containsInappropriateWord) {
    console.log("Username contains inappropriate words");
    return res
      .status(400)
      .json({ error: "Username contains inappropriate words" });
  }

  next();
};

module.exports = inappropriateWordsMiddleware;
