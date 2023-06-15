import Layout from "@/components/layout";
import teamAPI from "@/services/teamApi";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Teams = () => {
  const { token } = useSelector((state) => state.login);
  useEffect(() => {
    teamAPI
      .getTeamsList(token)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <Layout>teams</Layout>;
};

export default Teams;
