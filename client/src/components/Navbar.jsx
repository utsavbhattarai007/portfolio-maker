import React, { useContext, useEffect } from "react";
import styles from "../css/components/Navbar.module.css";
import {
  AiFillFire,
  AiOutlineGoogle,
  AiOutlineCloudDownload,
  AiOutlineCloudSync,
} from "react-icons/ai";
import { BsCloudCheck } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { NavLink } from "react-router-dom";
import { auth, logout } from "../api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ContextProvider } from "../config/Context";

const Navbar = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const location = window.location.pathname;
  const { usr, c } = useContext(ContextProvider);
  const token = localStorage.getItem("access");
  const [cload, setCload] = c;
  const [user, setUser] = usr;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const mutation = useMutation({
    mutationFn: (data) => auth(data),
    onSuccess: ({ data }) => {
      localStorage.setItem("access", data.accessToken);
      localStorage.setItem("refresh", data.refreshToken);
      window.location.href = "/app";
    },
  });
  const onFailure = (err) => {
    console.log(err);
  };

  const onSuccess = async (res) => {
    const { profileObj } = res;
    mutation.mutate({
      username: profileObj.name,
      email: profileObj.email,
      profilePic: profileObj.imageUrl,
    });
  };

  const logoutUser = async () => {
    let refreshToken = localStorage.getItem("refresh");
    const res = await logout(refreshToken);
    console.log(res.data.msg);
    window.location.reload();
    localStorage.clear();
    setUser([]);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    onFailure,
  });
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.left}>
          <motion.div className={styles.logo} whileTap={{ scale: 0.8 }}>
            <AiFillFire />
          </motion.div>
          <NavLink to="/">
            <h2>Devport</h2>
          </NavLink>
        </div>
        {token === null ? (
          <motion.div
            className={styles.right}
            onClick={signIn}
            whileTap={{ scale: 0.8 }}
          >
            <button>
              <AiOutlineGoogle />
            </button>
            <p>Login</p>
          </motion.div>
        ) : (
          <div className={styles.right}>
            {location === "/app/customization" && (
              <div className={styles.save_con}>
                {cload ? (
                  <span className={styles.saving}>
                    <AiOutlineCloudSync size={26} />
                    Saving . . .
                  </span>
                ) : (
                  <span className={styles.saved}>
                    <BsCloudCheck size={26} />
                    Saved
                  </span>
                )}
              </div>
            )}
            <div className={styles.user_img}>
              <img src={user[0]?.profilePic} />
            </div>
            <div className={styles.logout} onClick={logoutUser}>
              <FiLogOut />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
