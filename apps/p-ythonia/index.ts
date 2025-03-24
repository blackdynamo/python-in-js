import { python } from "pythonia";

type PyXirr = Readonly<{
  xirr: (
    dates: readonly string[],
    amounts: readonly number[],
  ) => Promise<number>;
}>;

const main = async () => {
  const pyXirr: PyXirr = await python("pyxirr");

  const data = {
    dates: ["2020-01-01", "2021-01-01"],
    amounts: [-1000, 1200],
  } as const;

  console.info(await pyXirr.xirr(data.dates, data.amounts));

  python.exit();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
