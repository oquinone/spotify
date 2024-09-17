import { observer } from "mobx-react-lite";
import { useLoginHook } from "./loginHooks";

const LoginComponent: React.FC = observer(() => {
  const { userLoggedIn } = useLoginHook();

  return (
    <div>
      <button
        onClick={() => {
          userLoggedIn();
        }}
      >
        Login
      </button>
    </div>
  );
});

export default LoginComponent;
