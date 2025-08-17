import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import hubtypeLogo from "../../assets/images/hubtype.jpeg";
import serimagLogo from "../../assets/images/serimag.jpeg";

const ExperienceSection = styled.section`
  position: relative;
  background: ${theme.colors.background};
  padding: ${theme.spacing["4xl"]} 0;
  overflow: hidden;
`;

const ExperienceContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 24px;
  padding: ${theme.spacing["3xl"]};
  margin-bottom: ${theme.spacing["4xl"]};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 6px rgba(0, 0, 0, 0.03),
    0 8px 16px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.04),
      0 10px 20px rgba(0, 0, 0, 0.06);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing["3xl"]};
  }
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing["3xl"]};
`;

const CompanyLogo = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
  background-color: transparent;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoleTitle = styled(motion.h2)`
  font-size: ${theme.typography.sizes["3xl"]};
  font-weight: ${theme.typography.weights.bold};
  margin-bottom: ${theme.spacing.sm};
  background: ${theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["2xl"]};
  }
`;

const CompanyInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.gray[500]};
  font-size: ${theme.typography.sizes.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
  }
`;

const Description = styled(motion.p)`
  font-size: ${theme.typography.sizes.lg};
  line-height: 1.6;
  color: ${theme.colors.gray[500]};
  margin-bottom: ${theme.spacing["2xl"]};
  max-width: 800px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
    margin-bottom: ${theme.spacing.xl};
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing["2xl"]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Achievement = styled(motion.div)`
  position: relative;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.gray[100]};
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray[100]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${theme.colors.gray[100]};
  }
`;

const AchievementTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
  }
`;

const AchievementDescription = styled.p`
  color: ${theme.colors.gray[500]};
  font-size: ${theme.typography.sizes.base};
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
  }
`;

const TechSection = styled(motion.div)`
  border-top: 1px solid ${theme.colors.gray[100]};
  padding-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    padding-top: ${theme.spacing.lg};
  }
`;

const TechTitle = styled.h4`
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.gray[400]};
  margin-bottom: ${theme.spacing.xl};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
`;

const TechTag = styled(motion.span)`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.gradient.primary};
  color: white;
  border-radius: 12px;
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  transition: all 0.3s ease;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xs} ${theme.spacing.base};
    font-size: ${theme.typography.sizes.xs};
  }
`;

const experiences = [
  {
    role: "AI Engineer",
    company: "Hubtype",
    logo: hubtypeLogo,
    period: "2020 - Present",
    location: "Barcelona",
    description:
      "Leading AI innovation and strategy at Hubtype, where I architect and implement advanced language models and conversational AI solutions. Specializing in developing intelligent systems that transform how businesses interact with their customers.",
    achievements: [
      {
        title: "AI-Powered Conversation Platform",
        description:
          "Architected and implemented a comprehensive conversational AI platform using LangChain and OpenAI, enabling natural language interactions with contextual awareness and deep integration capabilities.",
      },
      {
        title: "Enterprise Knowledge Base System",
        description:
          "Developed an intelligent document processing system that automatically extracts, indexes, and retrieves information from diverse sources, significantly improving response accuracy and reducing manual effort.",
      },
      {
        title: "Multi-Modal AI Framework",
        description:
          "Created a unified AI framework handling multiple tasks simultaneously - from sentiment analysis to intent classification - improving system efficiency by 60% while maintaining high accuracy.",
      },
      {
        title: "Cloud Infrastructure Innovation",
        description:
          "Designed and implemented scalable AI infrastructure on AWS and Azure, enabling seamless deployment and monitoring of AI models while ensuring cost efficiency and performance.",
      },
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "AWS SageMaker",
      "OpenAI",
      "Azure OpenAI",
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "spaCy",
      "MLOps",
      "Vector Databases",
      "Kubernetes",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Serimag",
    logo: serimagLogo,
    period: "2019 - 2020",
    location: "Barcelona",
    description:
      "Pioneered the development of AI-powered document processing solutions for the banking sector, focusing on automation and accuracy. Led initiatives to transform traditional document workflows into intelligent, automated systems.",
    achievements: [
      {
        title: "Intelligent Document Processing",
        description:
          "Built and deployed deep learning models achieving 95% accuracy in automated document classification and data extraction, processing millions of documents monthly.",
      },
      {
        title: "Computer Vision Pipeline",
        description:
          "Developed an end-to-end computer vision pipeline for document analysis, incorporating advanced OCR and image processing techniques to handle complex document layouts.",
      },
      {
        title: "Automated Validation System",
        description:
          "Created an AI-driven validation system that reduced manual review time by 70% while maintaining high accuracy in document processing and data extraction.",
      },
      {
        title: "Model Optimization Framework",
        description:
          "Implemented a model optimization framework that improved inference speed by 40% while maintaining accuracy, enabling real-time document processing.",
      },
    ],
    technologies: [
      "Computer Vision",
      "Deep Learning",
      "OCR",
      "TensorFlow",
      "OpenCV",
      "Python",
      "Docker",
      "REST APIs",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const achievementVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const techVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Experience: React.FC = () => {
  return (
    <ExperienceSection>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardHeader>
              <CompanyLogo
                src={exp.logo}
                alt={`${exp.company} logo`}
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <HeaderContent>
                <RoleTitle
                  variants={headerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {exp.role}
                </RoleTitle>
                <CompanyInfo
                  variants={headerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span style={{ fontWeight: theme.typography.weights.medium }}>
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </CompanyInfo>
              </HeaderContent>
            </CardHeader>

            <Description
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {exp.description}
            </Description>

            <AchievementsGrid>
              {exp.achievements.map((achievement, achievementIndex) => (
                <Achievement
                  key={achievement.title}
                  variants={achievementVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + achievementIndex * 0.1,
                  }}
                >
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementDescription>
                    {achievement.description}
                  </AchievementDescription>
                </Achievement>
              ))}
            </AchievementsGrid>

            <TechSection
              variants={techVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TechTitle>Technologies & Skills</TechTitle>
              <TechGrid>
                {exp.technologies.map((tech, techIndex) => (
                  <TechTag
                    key={tech}
                    variants={techVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + techIndex * 0.05,
                    }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechGrid>
            </TechSection>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};
