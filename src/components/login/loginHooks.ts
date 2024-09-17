import { ObtainToken } from "../../apis/api";
import globalStore from "../../store/globalStore";
import { useNavigate } from "react-router-dom";

export const useLoginHook = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (globalStore.isLoggedIn) {
  //     const token = async () => {
  //       const data: any = await ObtainToken();
  //       if (data) {
  //         globalStore.setToken(data.access_token);
  //       }
  //     };
  //     token();
  //   }
  // }, [globalStore.isLoggedIn]);

  const userLoggedIn = async () => {
    globalStore.setIsLoggedIn(true);
    const data: any = await ObtainToken();
    if (data) {
      globalStore.setToken(data.access_token);
    }
    navigate("/likedSongs");
  };
  return { userLoggedIn };
};
