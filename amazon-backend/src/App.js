import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing";
import { useContext, useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/actiontype";
import { auth } from "./Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // User is signed out
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
