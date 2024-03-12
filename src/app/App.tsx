import { FC, useEffect } from "react";
import { tickersApi } from "@/entities/tickers";
export const App: FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tickersApi.getTickers();

        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Quotations</div>
    </>
  );
};
