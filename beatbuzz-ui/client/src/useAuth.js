import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accsessToken, setAccsessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("https://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccsessToken(res.data.accsessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!accsessToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("https://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccsessToken(res.data.accsessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accsessToken;
}
