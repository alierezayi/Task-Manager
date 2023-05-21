const callUntilTimeHasPassed = (fn, timeLimit) => {
  const interval = setInterval(fn, 0); // Call the function every second

  const timeout = setTimeout(() => {
    clearInterval(interval); // Stop calling the function after the time limit
  }, timeLimit);
};

export { callUntilTimeHasPassed };
