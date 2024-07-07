export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "25879ab6cbmsh298d1be3dfea5b5p10a7b0jsn85392aa7dbe6",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "25879ab6cbmsh298d1be3dfea5b5p10a7b0jsn85392aa7dbe6",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
