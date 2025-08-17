import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";

const GradientBlob = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle at center, ${theme.colors.accent}20, transparent 70%);
  filter: blur(80px);
  z-index: 0;
`;

const GridPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(${theme.colors.gray[200]}20 1px, transparent 1px),
    linear-gradient(90deg, ${theme.colors.gray[200]}20 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  z-index: 0;
`;

export const BackgroundShapes: React.FC<{ position?: "left" | "right" }> = ({ position = "right" }) => (
  <>
    <GradientBlob
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        [position]: "-200px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    />
    <GridPattern
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
  </>
);
