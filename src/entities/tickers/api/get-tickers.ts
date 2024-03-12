import type { TickerResponse, Ticker } from "./tickers.types.ts";
import { apiClient } from "@/shared/api/base";
import { mapTickers } from "@/entities/tickers/api/mapper/map-tickers.ts";

export const getTickers = async (): Promise<{
  tabA: Ticker[];
  tabB: Ticker[];
}> => {
  const tickersResponse = await apiClient.get<TickerResponse[]>(`tickers`);

  const midpoint = Math.ceil(tickersResponse.data.length / 2);
  const tabAData = tickersResponse.data.slice(0, midpoint);
  const tabBData = tickersResponse.data.slice(midpoint);

  const tabA = mapTickers(tabAData);
  const tabB = mapTickers(tabBData);

  return { tabA, tabB };
};
