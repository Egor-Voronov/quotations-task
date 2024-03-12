import type { TickerResponse, Ticker } from "./tickers.types.ts";
import { apiClient } from "@/shared/api/base";
import { mapTickers } from "@/entities/tickers/api/mapper/map-tickers.ts";

export const getTickers = async (): Promise<Ticker[] | null> => {
  const [tabAResult, tabBResult] = await Promise.all([
    apiClient.get<TickerResponse[]>(`tickers`, { tab: "A" }),
    apiClient.get<TickerResponse[]>(`tickers`, { tab: "B" }),
  ]);

  const tabA = mapTickers(tabAResult.data);
  const tabB = mapTickers(tabBResult.data);

  return { ...tabA, ...tabB };
};
