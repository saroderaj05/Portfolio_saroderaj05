import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NYC_MVC from "../../Assets/Projects/NYC_MVC.png";
import NYC_INS from "../../Assets/Projects/NYC_Food_Inspections.png";
import Twitter from "../../Assets/Projects/Twitter.png";
import Diagnosis from "../../Assets/Projects/Diagnosis.png";
import Iowa_Liquor_Sales from "../../Assets/Projects/Iowa_Liquor_Sales.png";
import Web_Wise from "../../Assets/Projects/Web_Wise.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NYC_MVC}
              isBlog={false}
              title="Unveiling New York City Traffic Dynamics"
              description="Thorough analysis of the New York City Motor Vehicle Collisions dataset, aimed at extracting pivotal trends and insights. By leveraging data analytics and statistical methodologies, the analysis contributed to public safety strategies enhancement. Sophisticated ETL processes were executed using Talend, achieving an 85% data refinement accuracy, thus increasing the dataset’s reliability for representing collision causes and outcomes."
              ghLink="https://github.com/saroderaj05/New_York_Motor_Vehicle_Collisions"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NYC_INS}
              isBlog={false}
              title="New York City Food Inspection"
              description="This project entailed a multifaceted analysis of food establishment inspections across New York City. 
              It inlcuded staging, profiling, and the development of a dimensional data model. The final outcome involved creating BI dashboards using Alteryx for data preparation and employing Power BI and Tableau for visualization. These dashboards provided insights into inspection results, highlighting areas for potential improvement in food safety standards."
              ghLink="https://github.com/saroderaj05/-New_York_City_Food_Inspection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Iowa_Liquor_Sales}
              isBlog={false}
              title="IOWA Liquor Sales"
              description="This project involves a detailed analysis of a large dataset containing 25 million records of liquor sales in Iowa. The focus was on applying data analytics techniques and statistical models to extract valuable insights and identify underlying patterns and trends. Alteryx and Talend were utilized for robust data integration which significantly improved the quality of the dataset and reduced errors. Additionally, the project produced powerful visualizations with Tableau and Power BI, improving the understanding of key performance indicators."
              ghLink="https://github.com/saroderaj05/IOWA_Liquor_Sales"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Twitter}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="The project entailed creating a model to classify and identify hate speech on Twitter. It involved using natural language processing (NLP) and machine learning techniques to differentiate between harmful and non-harmful tweets, with a focus on racist and sexist sentiments. Challenges included handling complex sentence structures and real-time data acquisition via the Twitter API. The project successfully implemented algorithms such as SVM, Random Forest, and XGBoost, with XGBoost providing the best results for real-time sentiment analysis."
              ghLink="https://github.com/saroderaj05/-Twitter-Sentiment-Analysis-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diagnosis}
              isBlog={false}
              title="Symptom Based Diagnosis"
              description="The Disease Detective project is a machine learning initiative focused on symptom-based disease prediction. It utilizes a range of advanced algorithms, like SVMs, Random Forests, and XGBoost, achieving up to 89% accuracy with the XGBoost model. The project stands out for its meticulous data preprocessing and application of diverse algorithms to ensure precise predictions. The practical use of this work promises to enhance diagnostic processes in healthcare settings. The project showcases the application of data science for meaningful real-world impact in healthcare."
              ghLink="https://github.com/saroderaj05/SYMPTOM-BASED-DIAGNOSIS-WITH-MACHINE-LEARNING"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={Web_Wise}
            isBlog={false}
            title="Web Wise - RAG ChatBot"
            description="The project involved developing a retrieval-augmented generation (RAG) chatbot that enhances website interaction by leveraging advanced language models like GPT-4 for real-time information extraction and contextually relevant responses. It utilized the LangChain library for web communication, implemented large language models for query handling, and used Streamlit for a user-friendly interface. Key processes included web scraping with BeautifulSoup, data preprocessing, vectorization of content for semantic search, and integration with a large language model to inform responses, aiming to make chatbots more adaptable and useful for information retrieval."
            ghLink="https://github.com/saroderaj05/WebWise-RAG-Chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
