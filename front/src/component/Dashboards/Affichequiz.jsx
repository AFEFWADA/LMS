import React from "react";
import SidebarUser from "./Sidebar";
import { useNavigate } from "react-router-dom";

const AfficheQuiz = ({ quizzes = [] }) => {
  const tests = [
    {
      title: "Test technique Angular",
      questions: 3,
      duration: 5,
      description:
        "Angular test technique pour valider vos connaissances techniques.",
      image: "https://angular.io/assets/images/logos/angular/angular.png",
    },
    {
      title: "Test de connaissances : Langage SQL",
      questions: 5,
      duration: 10,
      description: "Validez vos compétences SQL pour les bases de données.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      title: "PHP - Test technique Partnaire",
      questions: 4,
      duration: 10,
      description: "Explorez le monde du PHP avec ce test technique.",
      image: "https://www.php.net/images/logos/php-logo.svg",
    },
    {
      title: "Test de compétences CSS & HTML",
      questions: 7,
      duration: 15,
      description:
        "Testez vos compétences CSS et HTML pour le développement front-end.",
      image: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    },
      {
      title: "Test de compétences CSS & HTML",
      questions: 7,
      duration: 15,
      description:
        "Testez vos compétences CSS et HTML pour le développement front-end.",
      image: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    },
  ];
  const navigate = useNavigate(); 
  const styles = {
    layout: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#f0f4f8",
    },
    sidebar: {
      width: "250px", // Keeping original sidebar width
    },
    mainContent: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    },
    card: {
      width: "250px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
      textAlign: "center",
      padding: "20px",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "#1abc9c",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.2s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <SidebarUser />
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Available Tests
        </h1>
        <div style={styles.grid}>
          {tests.map((test, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img src={test.image} alt={test.title} style={styles.image} />
              <h3 style={styles.title}>{test.title}</h3>
              <p style={styles.description}>{test.description}</p>
              <p>
                {test.questions} questions • {test.duration} mins
              </p>
              <button
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
                onClick={() => navigate("/quiz")}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfficheQuiz;
