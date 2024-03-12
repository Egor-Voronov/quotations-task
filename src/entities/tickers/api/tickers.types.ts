export interface TickerResponse {
  tradeId: string;
  symbol: string;
  price: string;
  bestBidPrice: string;
}

export interface Ticker extends TickerResponse {
  percentChange: number;
}
