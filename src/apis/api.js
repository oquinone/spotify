import { urls } from "../assets/urls";
import globalStore from "../store/globalStore";

export const ObtainToken = async () => {
  const options = {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials", // grant type for client credentials flow
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `${import.meta.env.VITE_CLIENT_ID}:${
          import.meta.env.VITE_CLIENT_SECRET
        }`
      )}`,
    },
  };
  const res = await fetch(urls.obtainToken, options);
  const data = await res.json();
  console.log(data);
  return data;
};

export const GetLikedSongs = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${globalStore.getToken()}`,
    },
  };
  const res = await fetch(urls.someArtist, options);
  const data = await res.json();
  return data;
};

// export const GetCurrentUserPlaylist = () =>{
//   const res = await fetch(urls.getCurrentUserPlaylist, options);
//   const data = await res.json();
//   return data;
// }

export const getAPICall = async (url, headers, moreOptions) => {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${globalStore.getToken()}`,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...headers,
    },
    ...moreOptions,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const postAPICall = async (url, headers, moreOptions) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${globalStore.getToken()}`,
      ...headers,
    },
    ...moreOptions,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
