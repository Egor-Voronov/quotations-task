export interface ITickerResponse {
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

export interface ITicker extends ITickerResponse {
  /**
   last - highest bid
   */
  percentChange: number;
}
