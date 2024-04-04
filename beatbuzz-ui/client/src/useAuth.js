import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accsessToken, setAccsessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("https://localhost:3001/refresh", {
        refreshToken,
      })
      .then((res) => {
        // setAccsessToken(res.data.accsessToken)
        // setRefreshToken(res.data.refreshToken)
        // setExpiresIn(res.data.expiresIn)
        // window.history.replaceState({}, null, "/")
      })
      .catch(() => {
        window.location = "/"
      })
  }, [code]);

  useEffect(() => {

  }, [refreshToken, expiresIn])

  return accsessToken
  };

