// import { useEffect } from "react";
// import { ObtainToken } from "../../apis/api";
import { observer } from "mobx-react-lite";
import homeStore from "./homeStore";
import { useHomeHooks } from "./homeHooks";

const HomeComponent: React.FC = observer(() => {
  useHomeHooks();

  return (
    <div>
      <h1>Hello World</h1>
      <p>{`Count: ${homeStore.count}`}</p>
      <button onClick={() => homeStore.incrementCount()}>Click me</button>
      <p>{homeStore.getToken()}</p>
    </div>
  );
});
export default HomeComponent;
