import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
function App() {
  const id="16920609121-17u3g06nkn0bfer1gqfsji1colge602p.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={id}>
      <AccountProvider>

   <Messenger/>
      </AccountProvider>
   </GoogleOAuthProvider>
  );
}

export default App;
