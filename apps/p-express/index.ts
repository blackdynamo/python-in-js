fetch("http://localhost:8000/xirr", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    dates: ["2020-01-01", "2021-01-01"],
    amounts: [-1000, 1200],
  } as const),
})
  .then((res) => res.json())
  .then((result) => {
    console.info(result);
  });
