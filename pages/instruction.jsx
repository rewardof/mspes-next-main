import React from "react";
import { Typography } from "antd";
import { tl } from "../configs/i18n";
import SEO from "../components/seo";

const { Title, Paragraph } = Typography;

function Instructions() {
  return (
    <>
      <SEO />
      <div className="container section">
        <Typography>
          <Title>{tl("instructions")}</Title>
          <Paragraph>{tl("instructions.text")}</Paragraph>
        </Typography>
      </div>
    </>
  );
}

export default Instructions;
