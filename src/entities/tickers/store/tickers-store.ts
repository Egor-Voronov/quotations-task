import type { ITicker } from "../tickers.types.ts";
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

  tabA: ITicker[] = [];
  tabB: ITicker[] = [];

  async fetchTickers() {
    const { tabA, tabB } = await tickersApi.getTickers();
    this.setTabA(tabA);
    this.setTabB(tabB);
  }

  setTabA(tabA: ITicker[]) {
    this.tabA = tabA;
  }

  setTabB(tabB: ITicker[]) {
    this.tabB = tabB;
  }
}

export const tickerStore = new TickerStore();
