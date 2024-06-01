import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "chat app",
  description = "this chat app chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
