const getData = async (endPoint) => {
  const url = `https://jsonplaceholder.typicode.com/${endPoint}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Can't Fetch Data");
  }

  return res.json();
};

export default getData;
