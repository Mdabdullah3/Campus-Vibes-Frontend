import React from "react";
import { useTimer } from "react-timer-hook";
interface TimeProps {
    expiryTimestamp: Date;
}
const Time: React.FC<TimeProps> = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div className="font-mono text-white">
                    <div className="mb-3 font-bold w-[50px] h-[50px] mx-1 mt-3 inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-5xl">{days}</span><span className="text-sm font-light text-center font-mono">DAYS</span></div>
                    </div>
                    <span className="text-3xl">:</span>

                    <div className="mb-3 font-bold w-[50px] h-[50px] mx-1 mt-3 inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-5xl">{hours}</span><span className="text-sm font-light text-center font-mono">HOURS</span></div>
                    </div>
                    <span className="text-3xl">:</span>
                    <div className="mb-3 font-bold w-[60px] h-[60px] mx-1 mt-3 inline-block md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-5xl">{minutes}</span><span className="text-sm font-light text-center font-mono">MINS</span></div>
                    </div>
                    <span className="text-3xl">:</span>
                    <div className="mb-3 font-bold  w-[60px] h-[60px] mx-1 mt-3 inline-block  md:px-3 py-2 justify-items-center justify-center"><div className="grid justify-center "><span className="text-center text-5xl">{seconds}</span><span className="text-sm font-light text-center font-mono">SECO</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Time;
