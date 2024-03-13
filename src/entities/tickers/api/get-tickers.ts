import type { ITickerResponse, ITicker } from "../tickers.types.ts";
import { apiClient } from "@/shared/api/base";
import { mapTickers } from "@/entities/tickers/api/mapper/map-tickers.ts";

export const getTickers = async (): Promise<{
  tabA: ITicker[];
  tabB: ITicker[];
}> => {
  // тут нет эндпоинта по типу tickers/count - поэтому я не могу взять отдельно разные запросы по половинкам
  const tickersResponse = await apiClient.get<ITickerResponse[]>(`tickers`);

  const midpoint = Math.ceil(tickersResponse.data.length / 2);
  const tabAData = tickersResponse.data.slice(0, midpoint);
  const tabBData = tickersResponse.data.slice(midpoint);

  const tabA = mapTickers(tabAData);
  const tabB = mapTickers(tabBData);

  return { tabA, tabB };
};
