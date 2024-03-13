import { observable, makeObservable, action } from "mobx";

export class BaseModalStore {
  constructor() {
    makeObservable(this, {
      showModal: observable,
      openModal: action,
      closeModal: action,
    });
  }

  showModal = true;
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
