import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const ParallaxSection = styled.section<{ $height?: string }>`
  position: relative;
  height: ${(props) => props.$height || "100vh"};
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const ParallaxBackground = styled(motion.div)<{ $image?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.$image
      ? `url(${props.$image}) center/cover no-repeat`
      : theme.colors.gradient.subtle};
  z-index: 0;
`;

export const ParallaxContainer: React.FC<{
  children: React.ReactNode;
  height?: string;
  background?: string;
}> = ({ children, height, background }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <ParallaxSection $height={height}>
      <ParallaxBackground $image={background} style={{ y, opacity }} />
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxSection>
  );
};

export const FadeInView: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export const ScaleInView: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const GradientText = styled.span<{ $gradient: string }>`
  background: ${(props) => props.$gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AnimatedGradientText: React.FC<{
  children: React.ReactNode;
  gradient?: string;
}> = ({ children, gradient = theme.colors.gradient.primary }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <GradientText $gradient={gradient}>{children}</GradientText>
  </motion.div>
);
