"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { postDataToDB } from "@/lib/actions/test.actions";

const Febe = () => {
  const [bdData, setBdData] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await axios.get("http://localhost:3000/febe/api");
    setBdData(data.data);
    console.log(await postDataToDB());
  };

  return <div> HEY FEBE (GET POST) {bdData}</div>;
};

export default Febe;
