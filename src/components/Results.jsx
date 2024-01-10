import { calculateInvestmentResults } from "../util/Investment";

export default function Result({ input }) {



  const resultData = calculateInvestmentResults(input)
  console.log(resultData)
  return (
    <>
      <p>Results...</p>
    </>
  );
}
