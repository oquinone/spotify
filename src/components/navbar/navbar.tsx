import MUInput from "../../material-ui-components/mu-input";
import { useNavbarHooks } from "./navbarHooks";
import SpotifyLogo from "../../assets/images/Full_Logo_Green_PMS_U.svg";
import "./navbar.css";

const NavbarComponent = (props: any) => {
  const { callSearchAPI } = props || null;
  const { searchText, setSearchText } = useNavbarHooks();
  return (
    <nav className="flex flex-row justify-between w-full py-2 px-4">
      <div>
        <img src={SpotifyLogo} width="150px" height="150px" />
        {/* <SpotifyLogo /> */}
      </div>
      <MUInput
        id="search-bar"
        variant="outlined"
        label="Search Bar"
        value={searchText}
        onChange={(e: any) => setSearchText(e.target.value)}
        onBlur={() => callSearchAPI(searchText)}
        sx={{
          // Root class for the input field
          "& .MuiOutlinedInput-root": {
            color: "#FFFFFF",
            // fontFamily: "Arial",
            // fontWeight: "bold",
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
              borderWidth: "2px",
            },
          },
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "#FFFFFF",
            fontWeight: "bold",
          },
        }}
      />
      <div>Something</div>
    </nav>
  );
};

export default NavbarComponent;
