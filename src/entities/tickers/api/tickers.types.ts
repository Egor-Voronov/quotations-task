export interface TickerResponse {
  /**
    айдишник
   */
  tradeId: string;
  /**
   имя тикера
   */
  symbol: string;
  /**
   last
   */
  price: string;
  /**
   highest bid
   */
  bestBidPrice: string;
}

export interface Ticker extends TickerResponse {
  /**
   last - highest bid
   */
  percentChange: number;
}
