import { useState } from "react";
import { getAPICall } from "../../apis/api";
import { urls } from "../../assets/urls";
// import Search from "./search.store";

interface SearchResponse {
  albums: {
    items: [
      {
        images: [{}];
        name: string;
        release_date: string;
        href: string;
        artists: [
          {
            name: string;
          }
        ];
      }
    ];
    href: string;
  };

  artists: {
    items: [
      {
        images: [{}];
        name: string;
        href: string;
      }
    ];
    href: string;
  };

  tracks: {};
}

export const useSearchHook = () => {
  const [data, setData] = useState<SearchResponse>();
  const callSearchAPI = async (search: string) => {
    const data: any = await getAPICall(
      `${urls.searchAPI}?q=${search}&type=album,artist,track`
    );
    setData(data);
    // Search.setArtist(data?.artist || null);
    // Search.setAlbums(data?.albums || null);
    // Search.setTracks(data?.tracks || null);
  };

  return { callSearchAPI, data };
};
