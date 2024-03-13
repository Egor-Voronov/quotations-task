import type { Ticker } from "../tickers.types.ts";
import { observable, makeObservable, action } from "mobx";
import { tickersApi } from "../index.ts";

class TickerStore {
  constructor() {
    makeObservable(this, {
      tabA: observable,
      tabB: observable,
      fetchTickers: action,
      setTabA: action,
      setTabB: action,
    });
  }

  tabA: Ticker[] = [];
  tabB: Ticker[] = [];

  async fetchTickers() {
    const { tabA, tabB } = await tickersApi.getTickers();
    this.setTabA(tabA);
    this.setTabB(tabB);
  }

  setTabA(tabA: Ticker[]) {
    this.tabA = tabA;
  }

  setTabB(tabB: Ticker[]) {
    this.tabB = tabB;
  }
}

export const useTickerStore = new TickerStore();
