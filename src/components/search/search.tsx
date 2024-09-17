import NavbarComponent from "../navbar/navbar";
import { useSearchHook } from "./searchHooks";
import { observer } from "mobx-react-lite";
// import Search from "./search.store";

const SearchComponent: React.FC = observer(() => {
  const { callSearchAPI, data } = useSearchHook();

  return (
    <section className="w-screen h-screen bg-black">
      <NavbarComponent callSearchAPI={callSearchAPI} />

      <h1>Artist</h1>
      <section aria-label="albums" className="flex flex-row gap-2">
        {data?.artists?.items &&
          data.artists.items.map((artists: any, idx: number) => {
            if (artists?.images.length > 0 && idx < 11) {
              return (
                <div className="sm:w-40 h-52" key={artists.name}>
                  <img
                    src={artists?.images[0].url}
                    className="w-40 h-40 object-cover rounded-full"
                  />
                  <p>{artists.name}</p>
                </div>
              );
            }
          })}
      </section>

      <h1>Albums</h1>
      <section aria-label="albums" className="flex flex-row gap-2">
        {data?.albums?.items &&
          data.albums.items.map((albums: any, idx: number) => {
            if (idx < 11) {
              return (
                <div
                  className="sm:w-40 h-64 border-2 border-red-500"
                  key={albums.name}
                >
                  <img
                    src={albums?.images[0].url}
                    alt={albums.name}
                    className="object-contain"
                  />
                  <p>{albums.name}</p>
                  <p>{albums?.artists[0]?.name}</p>
                </div>
              );
            }
          })}
      </section>
    </section>
  );
});

export default SearchComponent;
