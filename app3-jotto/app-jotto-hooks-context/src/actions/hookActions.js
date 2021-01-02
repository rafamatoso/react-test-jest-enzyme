import axios from "axios";

import {wordnikKey} from '../config/wordnikKey'

export const WORDNIK_URL = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=1000&minDictionaryCount=100&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${wordnikKey}`;

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get(WORDNIK_URL);

  setSecretWord(response.data);
};

// default export for mocking convenience
export default {
  getSecretWord,
};
