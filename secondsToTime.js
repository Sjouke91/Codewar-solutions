function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutes = Math.floor((seconds % 3600) / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const sec = ((seconds % 3600) - minutes * 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${hours}:${minutes}:${sec}`;
}

console.log(humanReadable(60));
