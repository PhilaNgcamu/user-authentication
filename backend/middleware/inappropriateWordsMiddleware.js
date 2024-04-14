// InappropriateWordsMiddleware.js

// Define the list of inappropriate words
const inappropriateWords = ["word1", "word2", "word3"];

// Middleware function to filter out inappropriate usernames
const inappropriateWordsMiddleware = (req, res, next) => {
  const { username } = req.body; // Assuming the username is sent in the request body

  // Check if the username contains any inappropriate words
  const containsInappropriateWord = inappropriateWords.some((word) =>
    username.includes(word)
  );

  // If the username contains inappropriate words, send an error response
  if (containsInappropriateWord) {
    console.log("Username contains inappropriate words");
    return res
      .status(400)
      .json({ error: "Username contains inappropriate words" });
  }

  // If the username is appropriate, continue to the next middleware or route handler
  next();
};

module.exports = inappropriateWordsMiddleware;
