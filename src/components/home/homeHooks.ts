import { useEffect } from "react";
import homeStore from "./homeStore";
import { GetLikedSongs } from "../../apis/api";

export const useHomeHooks = () => {
  useEffect(() => {
    const getLikedSongs = async () => {
      const data: any = await GetLikedSongs();
      if (data) {
        homeStore.setLikedSongs(data);
      }
    };
    getLikedSongs();
  }, []);
};
