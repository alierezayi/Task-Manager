import { useState, useEffect } from "react";

const TimeAgo = ({ dateString, className }) => {
  const [timeAgoString, setTimeAgoString] = useState("");

  useEffect(() => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now - date;

    // Calculate the number of minutes, hours, days, weeks, months, and years
    const diffInMinutes = Math.round(diffInMs / 60000);
    const diffInHours = Math.round(diffInMs / 3600000);
    const diffInDays = Math.round(diffInMs / 86400000);
    const diffInWeeks = Math.round(diffInMs / 604800000);
    const diffInMonths = Math.round(diffInMs / 2592000000);
    const diffInYears = Math.round(diffInMs / 31536000000);

    // Use the appropriate description based on the time elapsed
    if (diffInMinutes < 1) {
      setTimeAgoString("همین الان");
    } else if (diffInMinutes < 60) {
      setTimeAgoString(`${diffInMinutes} دقیقه پیش`);
    } else if (diffInHours < 24) {
      setTimeAgoString(`${diffInHours} ساعت پیش`);
    } else if (diffInDays < 7) {
      setTimeAgoString(`${diffInDays} روز پیش`);
    } else if (diffInWeeks < 4) {
      setTimeAgoString(`${diffInWeeks} هفته پیش`);
    } else if (diffInMonths < 12) {
      setTimeAgoString(`${diffInMonths} ماه پیش`);
    } else if (diffInYears < 10) {
      setTimeAgoString(`${diffInYears} سال پیش`);
    } else {
      setTimeAgoString("بیش از 10 سال");
    }
  }, [dateString]);

  return <span className={className}>{timeAgoString}</span>;
};

export default TimeAgo;
