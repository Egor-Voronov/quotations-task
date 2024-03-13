import { TickerResponse, Ticker } from "../../tickers.types.ts";

const calculatePercentChange = (
  currentPrice: string,
  oldPrice: string,
): number => {
  const current = parseFloat(currentPrice);
  const old = parseFloat(oldPrice);

  return current - old;
};

export const mapTickers = (tickers: TickerResponse[]): Ticker[] => {
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
