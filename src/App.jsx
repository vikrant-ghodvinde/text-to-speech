import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechToText from "./components/SpeechToText/SpeechToText";
import TextToSpeech from "./components/TextToSpeech/TextToSpeech";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextToSpeech />} />
        <Route path="/speech" element={<SpeechToText />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
