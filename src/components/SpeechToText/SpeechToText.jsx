import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { toast } from "sonner";

const SpeechToText = () => {
  const [listening, setListening] = useState(false);
  const [startListen, setStartListen] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        setTranscript((prev) => prev + event.results[i][0].transcript);
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    console.log("Interim:", interimTranscript);
  };

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
    setStartListen(false);
  };

  const handleCopy = (text) => {
    if (transcript.length > 0) {
      navigator.clipboard.writeText(text);
      toast("Copied Successful!");
    }
  };

  useEffect(() => {
    console.log(transcript);
  }, [transcript]);

  useEffect(() => {
    if (listening) {
      const timeout = setTimeout(() => {
        setStartListen(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [listening]);

  return (
    <React.Fragment>
      <Header
        title="Speech To Text"
        description="Transform your voice into text and copy the text if you want."
      />
      <section className="relative py-14">
        <div className="container">
          <div className="w-full max-w-screen-md mx-auto space-y-5">
            <textarea
              value={transcript}
              className="w-full h-56 p-2 border border-black/50 bg-transparent rounded-md outline-none resize-none"
              readOnly
            />
            <div className="relative flex items-center justify-center gap-5">
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                onClick={startListening}
              >
                Listen
              </button>
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300"
                onClick={stopListening}
              >
                Stop
              </button>
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-gray-500 hover:bg-gray-600 transition-all duration-300"
                onClick={() => handleCopy(transcript)}
              >
                Copy
              </button>
              <button
                type="button"
                className="relative py-2 px-6 rounded-3xl text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
                onClick={() => setTranscript("")}
              >
                Clear
              </button>
            </div>
            <div className="relative text-center">
              {listening && <p className="font-bold">{startListen ? "Speak Now" : "Wait Before Speaking..."}</p>}
            </div>
          </div>
          <div className="relative text-center mt-20">
            <p className="font-medium">
              Try our{" "}
              <Link
                to="/"
                className="text-blue-500 underline underline-offset-2"
              >
                Text to Speech
              </Link>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SpeechToText;
