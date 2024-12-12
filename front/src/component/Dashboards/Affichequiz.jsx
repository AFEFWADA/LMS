import React from "react";
import SidebarUser from "./Sidebar";

const AfficheQuiz = ({ quizzes = [] }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px" }}>
        <SidebarUser />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <h2 style={{ marginBottom: "20px" }}>My Quizzes</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {quizzes.map((quiz, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#1abc9c",
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onClick={() => alert(`Quiz Selected: ${quiz.title}`)}
            >
              {/* Header */}
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {quiz.title}
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#fff",
                  color: "#333",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                <p>{quiz.numQuestions} question(s)</p>
                <p>
                  Success rate:{" "}
                  {quiz.successRate !== null
                    ? `${quiz.successRate.toFixed(2)}%`
                    : "N/A"}
                </p>
              </div>

              {/* Play Button */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#1abc9c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                ▶
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfficheQuiz;
