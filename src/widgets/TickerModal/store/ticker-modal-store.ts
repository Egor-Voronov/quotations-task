import { observable, makeObservable, action } from "mobx";
import { BaseModalStore } from "@/shared/modal";

class TickerModalStore extends BaseModalStore {
  selectedTickerId: string | null = null;

  constructor() {
    super();
    makeObservable(this, {
      selectedTickerId: observable,
      setSelectedTickerId: action,
    });
  }

  setSelectedTickerId(id: string | null) {
    this.selectedTickerId = id;
  }
}

export const useTickerModalStore = new TickerModalStore();
