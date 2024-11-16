export function DatewithTime(dateString) {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    const trimmedDate = formattedDate.replace(/,/, '');
    return trimmedDate;
  };