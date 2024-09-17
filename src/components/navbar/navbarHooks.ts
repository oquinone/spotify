import { useState } from "react";

export const useNavbarHooks = (): any => {
  const [searchText, setSearchText] = useState("");

  return { searchText, setSearchText };
};
