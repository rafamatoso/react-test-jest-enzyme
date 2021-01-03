import axios from "axios";
import { WORDNIK_KEY } from "../config/wordnikKey";

let URL;
const LOCALHOST = "http://localhost:3030";

if (WORDNIK_KEY) {
  URL = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=1000&minDictionaryCount=100&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${WORDNIK_KEY}`;
} else {
  URL = LOCALHOST;
}

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get(URL);

  WORDNIK_KEY
    ? setSecretWord(response.data.word)
    : setSecretWord(response.data);
};

// default export for mocking convenience
export default {
  getSecretWord,
};
