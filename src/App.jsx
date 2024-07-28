import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechToText from "./components/SpeechToText/SpeechToText";
import TextToSpeech from "./components/TextToSpeech/TextToSpeech";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Developer from "./components/Developer/Developer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextToSpeech />} />
        <Route path="/speech" element={<SpeechToText />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
