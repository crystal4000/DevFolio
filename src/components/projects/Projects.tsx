import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import search4me from "../../assets/Projects/search4me.png";
import telex from "../../assets/Projects/telex.webp";
import demir from "../../assets/Projects/demir.png";
import malware from "../../assets/Projects/malware.jpg";
import brainAI from "../../assets/Projects/brainAI.png";
import linkedinAI from "../../assets/Projects/linkedinAI.png";
import game from "../../assets/Projects/game.png";
import food from "../../assets/Projects/food.png";
import gym from "../../assets/Projects/gym.jpg";
import law from "../../assets/Projects/law.png";
import phisihing from "../../assets/Projects/phisihing.jpg";
import qabot from "../../assets/Projects/qabot.png";
import startup from "../../assets/Projects/startup.png";
import medical from "../../assets/Projects/medical.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects and research work I've contributed to
          recently.
        </p>
        <Row className="g-4">
          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={demir}
              isBlog={false}
              title="Demir E-commerce Platform"
              description="Developing the seller dashboard for an e-commerce platform, improving dashboard efficiency by 30% and reducing seller support requests by 20%. Features include order management, shipping tracking, and real-time updates."
              ghLink=""
              demoLink="https://shopping.deimr.com/en"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={telex}
              isBlog={false}
              title="Telex - Notification & Slack Integration"
              description="Built profile settings and Slack integration for Telex, enabling users to manage notifications, update profile details, and integrate Slack channels seamlessly. Improved user engagement by 25%."
              ghLink=""
              demoLink="https://telex.im/"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={law}
              isBlog={false}
              title="Law Firm Website"
              description="Designed and developed a website for a law firm, highlighting its services and client testimonials. Includes a contact form for inquiries."
              ghLink="https://github.com/crystal4000/Law-Firm"
              demoLink="https://law-firm-gamma-six.vercel.app/"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Gaming Store Website"
              description="Built an e-commerce website for a gaming store, allowing users to browse, purchase games, and manage their orders with a streamlined UI."
              ghLink="https://github.com/crystal4000/Game-App"
              demoLink="https://game-app-red-three.vercel.app"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={search4me}
              isBlog={false}
              title="Search4Me - Missing Persons Platform"
              description="Led the development of Search4Me, a website allowing users to submit and track missing person reports. Implemented advanced search and filter features, increasing platform traffic by 200%."
              ghLink="https://github.com/princessvincent/team-ares"
              demoLink="https://princessvincent.github.io/team-ares/index.html"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={qabot}
              isBlog={false}
              title="Q&A Bot using GPT-3.5"
              description="Developed a web-based Q&A bot using OpenAI's GPT-3.5-turbo model. Users can input questions and receive AI-generated responses with a simple, responsive UI."
              ghLink="https://github.com/crystal4000/QA-Bot"
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Application"
              description="Built a food ordering app using React, HTML, and CSS. Users can browse through products, add items to their cart, and complete checkout with integrated payment options."
              ghLink="https://github.com/crystal4000/Food-Application"
              demoLink="https://animated-stardust-4d2969.netlify.app/"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Medical Dashboard for Patient Charts"
              description="A comprehensive medical dashboard built with HTML, CSS, and Bootstrap 5. This system allows doctors to securely view and manage patient charts, medical history, and appointments, providing an efficient way to track and update patient information."
              ghLink="https://github.com/crystal4000/-Medical_Admin_DashBoard"
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Membership Management System"
              description="Full-stack CRUD application for gym membership management. Admins can log, update users, payments, and subscriptions. SQL database integration included."
              ghLink="https://github.com/crystal4000/Gym-Application"
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={startup}
              isBlog={false}
              title="Website for Startup Company"
              description="A responsive website for a startup company using HTML, CSS, and Bootstrap 5. It provides an elegant and professional layout for showcasing services, products, and contact information."
              ghLink="https://github.com/crystal4000/Startup"
              demoLink="https://crystal4000.github.io/Startup/"
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={malware}
              isBlog={false}
              title="Malware Analysis using Deep Reinforcement Learning"
              description="Developing a deep reinforcement learning system using PyTorch to analyze network traffic for real-time malware detection. Includes a feature extraction pipeline for analyzing Zeek network logs."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={brainAI}
              isBlog={false}
              title="Advanced Brain Tumor Segmentation using EMCAD"
              description="Built a CNN-based model for accurate brain tumor segmentation, achieving high accuracy in classifying tumor boundaries using medical imaging datasets. Improved model performance with advanced preprocessing techniques."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={linkedinAI}
              isBlog={false}
              title="LinkedIn Career Analysis with AI"
              description="Led an AI research project analyzing 62,000 LinkedIn profiles using machine learning models (Random Forest, Gradient Boosting). Achieved 97% accuracy in predicting career advancement trends."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <ProjectCard
              imgPath={phisihing}
              isBlog={false}
              title="Phishing Detection using Deep Q-Networks"
              description="Implemented a reinforcement learning model using Deep Q-Networks (DQN) to detect phishing URLs. The agent learns from interactions with a simulated environment, improving classification accuracy over time."
              ghLink="https://github.com/crystal4000/Phishing_Detection_RL"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
