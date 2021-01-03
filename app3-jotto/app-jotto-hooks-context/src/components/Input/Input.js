import React from "react";
import PropTypes from "prop-types";
import guessedWordsContext from "../../context/guessedWordsContext";
import languageContext from "../../context/languageContext";
import successContext from "../../context/successContext";
import { getLetterMatchCount } from "../../helpers";
import stringsModule from "../../helpers/language/language";

export const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            // update guessedWords
            const letterMatchCount = getLetterMatchCount(
              currentGuess,
              secretWord
            );

            const newGuessesWords = [
              ...guessedWords,
              { guessedWords: currentGuess, letterMatchCount },
            ];

            setGuessedWords(newGuessesWords);

            // check against secretWord and update succeed
            if (currentGuess === secretWord) {
              setSuccess(true);
            }

            // clear input box
            setCurrentGuess("");
          }}
        >
          {stringsModule.getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
