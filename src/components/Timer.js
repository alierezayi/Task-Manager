import React, { useState, useEffect } from "react";

const Timer = ({ timeLeft, updateTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      updateTime((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval();
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
};
export default Timer;
