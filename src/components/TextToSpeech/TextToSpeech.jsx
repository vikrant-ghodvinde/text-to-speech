import React, { useEffect, useState } from "react";
import voices from "../../lib/json/voices.json";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState();

  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance(text);
    speech.voice = window.speechSynthesis.getVoices()[voice];
    window.speechSynthesis.speak(speech);
  };

  const onPause = () => {
    window.speechSynthesis.cancel();
  };

  const onClear = () => {
    setText("");
  };

  useEffect(() => {
    window.speechSynthesis.cancel();
  }, [text]);

  return (
    <React.Fragment>
      <Header title="Text To Speech" description="Transform your text into voice and listen to the audio." />
      <section className="relative py-14">
        <div className="container">
          <div className="w-full max-w-screen-md mx-auto space-y-5">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here"
              className="w-full h-56 p-2 border border-black/50 bg-transparent rounded-md outline-none resize-none"
            />
            <div className="relative flex flex-col items-center justify-center">
              <label className="block mb-2">Select Voice</label>
              <select
                onChange={(e) => setVoice(e.target.value)}
                className="relative p-2 px-6 border border-black/50 outline-none rounded-md"
              >
                {voices?.map((voice, index) => (
                  <option value={index} key={index}>
                    {voice.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex items-center justify-center gap-5">
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                onClick={handleSpeak}
              >
                Speak
              </button>
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300"
                onClick={onPause}
              >
                Pause
              </button>
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
                onClick={onClear}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="relative text-center mt-20">
            <p className="font-medium">
              Try our{" "}
              <Link
                to="/speech"
                className="text-blue-500 underline underline-offset-2"
              >
                Speech to Text
              </Link>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TextToSpeech;
