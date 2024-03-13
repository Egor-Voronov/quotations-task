import { observable, makeObservable, action } from "mobx";

class ModalStore {
  constructor() {
    makeObservable(this, {
      isOpen: observable,
      setOpen: action,
      setClose: action,
    });
  }

  isOpen = false;
  setOpen() {
    this.isOpen = true;
  }
  setClose() {
    this.isOpen = false;
  }
}

export const useModalStore = new ModalStore();
