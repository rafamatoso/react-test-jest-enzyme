import axios from "axios";

import { wordnikKey } from "../config/wordnikKey";

let URL;
const LOCALHOST = "http://localhost:3030";

if (wordnikKey) {
  URL = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=1000&minDictionaryCount=100&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${wordnikKey}`;
} else {
  URL = LOCALHOST;
}

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get(URL);

  wordnikKey ? setSecretWord(response.data.word) : setSecretWord(response.data);
};

// default export for mocking convenience
export default {
  getSecretWord,
};
