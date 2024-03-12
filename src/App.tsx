import React, { FC, useState, useEffect } from "react";

export const App: FC = () => {
  const [data, setData] = useState<any[]>([]); // Assuming data is an array of objects

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://futures-api.poloniex.com/api/v2/tickers",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>Quotations</div>
    </>
  );
};
