import { ITickerResponse, ITicker } from "@/entities/tickers";

const calculatePercentChange = (
  currentPrice: string,
  oldPrice: string,
): number => {
  const current = parseFloat(currentPrice);
  const old = parseFloat(oldPrice);

  return current - old;
};

export const mapTickers = (tickers: ITickerResponse[]): ITicker[] => {
  return tickers.map((ticker) => {
    const percentChange = calculatePercentChange(
      ticker.price,
      ticker.bestBidPrice,
    );
    return {
      tradeId: ticker.tradeId,
      symbol: ticker.symbol,
      price: ticker.price,
      bestBidPrice: ticker.bestBidPrice,
      percentChange: percentChange,
    };
  });
};
