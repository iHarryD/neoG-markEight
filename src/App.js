import React, { useState } from "react";
import "./styles.css";

const myDict = {
  "": "",
  "😊": "Smiling",
  "😭": "Crying",
  "😠": "Angry",
  "😔": "Sad",
  "😂": "Laughing",
  "😎": "Cool Face",
  "😉": "Winking",
  "🙄": "Rolling Eyes Face",
  "🤥": "Lying Face",
  "😧": "Anguished Face",
  "😨": "Scared Face",
  "😬": "Grimacing Face",
  "😒": "Unamused Face",
  "🙃": "Upside Down Face",
  "😐": "Neutral Face",
  "😞": "Disappointed Face",
  "🤤": "Drooling Face",
  "🥴": "Woozy Face",
  "😵": "KOed Face",
  "🤒": "Ill Face"
};

const myDictKeys = Object.keys(myDict);

const notFoundMessage = "Sorry, we don't have this in our database";

export default function App() {
  const [value, setValue] = useState("");

  function inputChangeHandler(event) {
    let currentValue = myDict[event.target.value];
    if (currentValue === undefined) {
      setValue(notFoundMessage);
    } else {
      setValue(currentValue);
    }
  }

  function liClickHandler(item) {
    let currentValue = myDict[item];

    if (currentValue === undefined) {
      setValue(notFoundMessage);
    } else {
      setValue(currentValue);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>EmojiBook</h1>
      </header>
      <main>
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Enter your emoji here"
        />
        <ul className="emoji-tab">
          {myDictKeys.map((item, index) => {
            return (
              <li key={item} onClick={() => liClickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="outputDiv">{value}</div>
      </main>
      <footer>
        <ul id="social-media-tab">
          <li>
            <a className="social-media-links" href="https://github.com/iHarryD">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="social-media-links"
              href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p id="portfolio-link">
          Website created by{" "}
          <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}
