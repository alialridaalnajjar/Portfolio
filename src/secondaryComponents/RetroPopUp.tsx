import React from "react";

export function RetroPopup() {
  const [showPopup, setShowPopup] = React.useState(true);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div  className=" fixed inset-0 bg-transparent bg-opacity-75 flex items-center justify-center z-50 p-4 font-mono">
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-500 rounded-lg shadow-retro max-w-sm w-full md:max-w-md lg:max-w-lg overflow-hidden animate-fade-in">
        <div className="flex items-center justify-between bg-gray-600 border-b-2 border-gray-500 p-3 lg:p-4 cursor-grab">
          <div className="flex items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-blue-400 border border-blue-300 rounded-sm mr-2"></div>
            <span className="text-white text-sm lg:text-base font-bold uppercase tracking-wider">
              SYSTEM MESSAGE
            </span>
          </div>
          <button
            onClick={handlePopupClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs lg:text-sm w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-sm border border-red-400 shadow-sm transition duration-200 ease-in-out"
            title="Close Window"
          >
            X
          </button>
        </div>

        <div className="p-6 lg:p-8 bg-gray-800 text-gray-200 text-sm lg:text-base leading-relaxed">
          <p className="mb-4 lg:mb-5">
            <span className="text-green-400">[STATUS]</span> Initializing
            portfolio system...
          </p>
          <p className="mb-4 lg:mb-5">
            <span className="text-yellow-400">[ALERT]</span> Welcome, user! This
            is a simulated interface designed to showcase my skills and
            projects.
          </p>
          <p>
            <span className="text-purple-400">[INFO]</span> All systems nominal.
            Proceed with caution.
          </p>
        </div>

        <div className="bg-gray-700 border-t-2 border-gray-600 p-3 lg:p-4 text-right">
          <button
            onClick={handlePopupClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs lg:text-sm px-4 py-2 lg:px-5 lg:py-2.5 rounded-md border border-blue-400 shadow-md transition duration-200 ease-in-out"
          >
            OK
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

        /* Using VT323 for a more readable retro font, Press Start 2P is too chunky for body text */
        .font-mono {
          font-family: 'VT323', monospace;
        }

        /* Custom shadow for retro feel, mimicking old CRT screens or physical buttons */
        .shadow-retro {
          box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.7);
        }

        /* Basic fade-in animation for the pop-up, making it appear smoothly */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
