import { makeAutoObservable } from "mobx";
import globalStore from "../../store/globalStore";

class HomeStore {
  count: number = 0;
  globalStore: any = null;
  likedSongs: any = null;

  constructor(globalStore: any) {
    makeAutoObservable(this);
    this.globalStore = globalStore;
  }

  incrementCount(): void {
    this.count += 1;
  }

  setToken(token: string): void {
    this.globalStore.setToken(token);
  }

  getToken(): string {
    return this.globalStore.getToken();
  }

  setLikedSongs(likedSongs: any): void {
    this.likedSongs = likedSongs;
  }

  getLikedSongs(): any {
    return this.likedSongs;
  }
}

const homeStore: any = new HomeStore(globalStore);
export default homeStore;
