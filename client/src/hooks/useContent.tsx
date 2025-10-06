import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/content`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setContents(response.data);
        });
    } catch (error) {
      alert("Unable to fetch contents : " + error);
    }
  }

  useEffect(() => {
    refresh();

    const interval = setInterval(() => {
      refresh();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return {contents, refresh};
}
