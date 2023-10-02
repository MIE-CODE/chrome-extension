import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import classNames from "classnames";
import settings from "./assets/setting-2.svg";
import closecircle from "./assets/close-circle.svg";
import icon from "./assets/iCON32.png";
import mornitor from "./assets/monitor.svg";
import tab from "./assets/copy.svg";
import mic from "./assets/microphone.svg";
import cam from "./assets/video-camera.svg";
import Recording from "./Recording";

function homePage() {
  // const navigatTo = useNavigate();
  // const start = () => {
  //   navigatTo("/Startrec");
  // };
  const [isVidSelected, SetIsVidSelected] = useState(false);
  const [isMicSelected, SetIsMicSelected] = useState(false);

  return (
    <div>
      <ReactMediaRecorder
        screen={isVidSelected}
        audio={isMicSelected}
        render={({ startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="w-[300px] h-[439px]  flex justify-center border-0 items-center rounded">
            <div className="flex flex-col   w-[252px]  items-center rounded-lg  gap-[32px] p-[24px] justify-start">
              <div className="flex  w-[252px] h-[76px] flex-col justify-between ">
                <div className="flex  justify-between">
                  <div className="flex justify-center items-center gap-1">
                    <img className="w-[28px] h-[28px]" src={icon} alt="icon" />
                    <p className="font-bold font-sora">HelpMeOut</p>
                  </div>
                  <div className="flex gap-[12px]">
                    <img src={settings} alt="icon" />
                    <img src={closecircle} alt="icon" />
                  </div>
                </div>
                <p className=" w-[225px] text-{color:   rgba(65, 60, 109, 1)} font-worksans font-medium  text-sm">
                  This extension helps you record and share help videos with
                  ease.
                </p>
              </div>
              <div className="gap-[24px] flex justify-center flex-col ">
                <div className="w-[252px] flex justify-between  self-stretch h-[56px]  ">
                  <div className="flex flex-col items-center justify-between">
                    <img src={mornitor} alt="icon" />
                    <p className="font-medium">Full Screen</p>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <img src={tab} alt="icon" />
                    <p className="font-medium">Current Tab</p>
                  </div>
                </div>
                <div className="w-[252px] flex justify-center items-center border-black h-[48px] rounded-xl border">
                  <div className="flex justify-between  w-[192px] h-[20]">
                    <div className="flex justify-center items-center ">
                      <img src={cam} alt="icon" />
                      <p className="font-medium font-worksans">Camera</p>
                    </div>{" "}
                    <div
                      onClick={() => SetIsVidSelected(!isVidSelected)}
                      className={classNames(
                        "flex items-center transition-all duration-500 w-[36px] bg-gray-600 border h-[20px] rounded-full ",
                        {
                          "bg-indigo-950": isVidSelected,
                        }
                      )}
                    >
                      <span
                        className={classNames(
                          "h-[16px] transition-all duration-500 shadow-lg bg-white w-[16px] rounded-full",
                          {
                            "ml-4": isVidSelected,
                          }
                        )}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="w-[252px] flex items-center justify-center border-black h-[48px] rounded-xl border">
                  <div className="flex justify-between w-[192px] h-[20] ">
                    <div className="flex justify-center items-center">
                      <img src={mic} alt="icon" />
                      <p className=" font-medium font-worksans">Audio</p>
                    </div>{" "}
                    <div
                      onClick={() => SetIsMicSelected(!isMicSelected)}
                      className={classNames(
                        "flex items-center transition-all duration-500 w-[36px] bg-gray-600 border h-[20px] rounded-full ",
                        {
                          "bg-indigo-950": isMicSelected,
                        }
                      )}
                    >
                      <span
                        className={classNames(
                          "h-[16px] p-2 transition-all duration-500 shadow-lg bg-white w-[16px] rounded-full",
                          {
                            "ml-4": isMicSelected,
                          }
                        )}
                      ></span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={startRecording}
                  className="w-[252px] flex focus:outline-none focus:ring focus:ring-violet-300 active:bg-indigo-800 justify-center items-center text-white bg-indigo-950 border-black h-[48px] rounded-xl border"
                >
                  <p className="font-medium">Start Recording</p>
                </button>
                <button
                  onClick={stopRecording}
                  className="w-[252px] flex focus:outline-none focus:ring focus:ring-violet-300 active:bg-indigo-800 justify-center items-center text-white bg-indigo-950 border-black h-[48px] rounded-xl border"
                >
                  <p className="font-medium">Stop</p>
                </button>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default homePage;
