import { useContext, useEffect } from "react";
import { AuthContext } from "./context/Auth";
import { ModeContext } from "./context/Mode";
import { fetchUserData } from "./services/auth.api";

const RunOnLoad = () => {
  const { setAuth } = useContext(AuthContext);
  const {mode, toggleMode} = useContext(ModeContext);

  useEffect(() => {
    document.title = "E-Commerce";

    const loadUser = async () => {
      try {
        const res = await fetchUserData();

        if (res.status === 200) {
          console.log(res.user)
          setAuth(res.user);
        } else {
          console.warn("Not logged in:", res.message);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    loadUser();
  }, []); 
    useEffect(()=>{
        if(mode==='light'){
            document.body.style.backgroundColor = "#ffdee8"
        }else{
            document.body.style.backgroundColor = "rgb(46, 45, 45)";
        }
    },[mode]);

  return null; // No need to render a <div></div>
};

export default RunOnLoad;
