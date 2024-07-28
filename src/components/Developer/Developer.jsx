import React from "react";
import Header from "../Header/Header";

const Developer = () => {
  return (
    <React.Fragment>
      <Header
        title="Pankaj Misal"
        description="Developer of the Text to Speech App for the final year project."
      />
      <section className="relative py-14">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
                <img src="" alt="pankaj misal" className="w-full h-full" />
            </div>
            <div className="col-span-12 lg:col-span-6">
                <h2 className="text-2xl font-bold mb-3">Who I am ?</h2>
              <p>
                Pankaj Misal, a student of MSc IT, has developed an innovative
                application that seamlessly converts text to speech and speech
                to text. The app also features advanced voice recognition
                capabilities, making it a versatile tool for various
                communication and accessibility needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Developer;
