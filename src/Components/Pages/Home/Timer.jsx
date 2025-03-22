import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const initialDays = 250;
  const serverStartDate = new Date("2026-06-07T00:00:00Z");

  const calculateTimeRemaining = (intervalId) => {
    const currentDate = new Date();
    const timeDifference = currentDate - serverStartDate;
    const totalSeconds = Math.floor(timeDifference / 1000);
    const remainingSeconds = initialDays * 24 * 60 * 60 - totalSeconds;

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      console.log("Timer reached 0. Event triggered!");
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(remainingSeconds / (24 * 60 * 60)),
      hours: Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60)),
      minutes: Math.floor((remainingSeconds % (60 * 60)) / 60),
      seconds: remainingSeconds % 60,
    };
  };

  const [time, setTime] = useState(() => calculateTimeRemaining(null));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = calculateTimeRemaining(intervalId);
        if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
          clearInterval(intervalId);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-1 flex justify-center">
      <div className="border-3 border-blue-700 rounded-md flex gap-2 p-2">
        {[
          { label: "Days", value: time.days },
          { label: "Hours", value: time.hours },
          { label: "Minutes", value: time.minutes },
          { label: "Seconds", value: time.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <h1 className="text-xl font-semibold text-white bg-blue-600 px-4 py-2 my-2 rounded-md">
              {label}
            </h1>
            <motion.h1
              key={value}
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ type: "spring", stiffness: 200 }} // Smooth bounce effect
              className="text-3xl font-bold text-white bg-blue-600 px-4 py-3 rounded-md"
            >
              {value}
            </motion.h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
