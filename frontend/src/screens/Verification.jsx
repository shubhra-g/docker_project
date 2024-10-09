import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";

function Verification() {
  const { uniqueString } = useParams();
  console.log(uniqueString, "The Unique String")

  const VerifyUser = async () => {
    try {
      const response = await axios.get(`/auth/verify/${uniqueString}`);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  VerifyUser()

  return (
    <div>
      Verification Page
      <Button action="Login Here" />
    </div>
  );
}

export default Verification;
