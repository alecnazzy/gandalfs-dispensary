import React, { useEffect, useRef } from "react";
import Popup from "reactjs-popup";

const PopupComponent = () => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.open();
    }
  }, []);

  return (
    <Popup ref={popupRef} modal closeOnDocumentClick={false}>
      {(close) => (
        <div className="flex flex-col w-96 h-fit align-center items-center bg-black text-white  p-4 rounded-xl border-2 border-white">
          <h1 className="text-xl underline">Disclaimer</h1>
          <div className="mt-4">
            All photos are AI generated, no drugs were used in the making of
            this website nor does it condone the use of drugs.
          </div>
          <div className="mt-4">
            Due to Render's free tier hosting, data being fetched from the
            database may take a minute to load as the server instance has to
            spin back up.
          </div>
          <img
            src="onering.png"
            alt="the one ring"
            className="w-16 h-auto mt-4"
          />
          <button
            onClick={close}
            className="mt-6 hover:bg-white hover:text-black p-1 rounded-xl"
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  );
};

export default PopupComponent;
