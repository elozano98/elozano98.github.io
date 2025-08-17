import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const GradientCanvas = styled(motion.div)<{ $light?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.$light ? "#ffffff" : "linear-gradient(125deg, #ffffff 0%, #f5f5f7 100%)"};
  opacity: 0.9;
`;

const FloatingShape = styled(motion.div)<{ $color: string; $size: number; $blur?: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(${props => props.$blur || 100}px);
  mix-blend-mode: soft-light;
`;

export const HeroGradient: React.FC = () => (
  <>
    <GradientCanvas
      $light
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <FloatingShape
      $color="#FF2D55"
      $size={600}
      style={{ top: "10%", left: "-20%", opacity: 0.4 }}
      animate={{
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <FloatingShape
      $color="#AF52DE"
      $size={400}
      style={{ bottom: "10%", right: "-10%", opacity: 0.3 }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <FloatingShape
      $color="#5856D6"
      $size={300}
      style={{ top: "40%", right: "30%", opacity: 0.2 }}
      animate={{
        x: [0, 30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </>
);

export const ExperienceGradient: React.FC = () => (
  <>
    <GradientCanvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <FloatingShape
      $color="#FF2D55"
      $size={500}
      style={{ top: "20%", right: "-20%", opacity: 0.2 }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <FloatingShape
      $color="#5856D6"
      $size={400}
      style={{ bottom: "10%", left: "-10%", opacity: 0.2 }}
      animate={{
        scale: [1, 1.1, 1],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </>
);

export const SkillsGradient: React.FC = () => (
  <>
    <GradientCanvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <FloatingShape
      $color="#AF52DE"
      $size={600}
      style={{ top: "30%", left: "-20%", opacity: 0.2 }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 45, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <FloatingShape
      $color="#FF2D55"
      $size={400}
      style={{ bottom: "20%", right: "-10%", opacity: 0.15 }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -20, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </>
);