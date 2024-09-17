import { makeAutoObservable } from "mobx";

class Search {
  artist: any;
  albums: any;
  tracks: any;

  constructor() {
    makeAutoObservable(this);
  }

  setArtist(artist: any): void {
    this.artist = artist;
  }

  setAlbums(albums: any): void {
    this.albums = albums;
  }

  setTracks(tracks: any): void {
    this.tracks = tracks;
  }

  getArtist(): any {
    return this.artist;
  }

  getAlbums(): any {
    return this.albums;
  }

  getTracks(): any {
    return this.tracks;
  }
}

const search: any = new Search();
export default search;
