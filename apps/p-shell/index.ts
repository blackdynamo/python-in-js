import { PythonShell as py } from "python-shell";

const data = {
  dates: ["2020-01-01", "2021-01-01"],
  amounts: [-1000, 1200],
} as const;

py.run("index.py", { mode: "json", args: [JSON.stringify(data)] }).then(
  (messages) => {
    console.info(messages);
    console.info("finished");
  },
);
