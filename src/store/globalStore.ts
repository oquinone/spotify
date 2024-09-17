import { makeAutoObservable } from "mobx";

class GlobalStore {
  token: string = "";
  isLoggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem("token", token);
  }

  getToken(): string {
    return this.token;
  }

  setIsLoggedIn(login: boolean): void {
    this.isLoggedIn = login;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}

const globalStore = new GlobalStore();
export default globalStore;
