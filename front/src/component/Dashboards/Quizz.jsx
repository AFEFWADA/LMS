import React, { useState, useEffect } from "react";
import SidebarUser from "./Sidebar";

const Quiz = () => {
  // Quiz questions data
  const quizData = [
    {
      title: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database management system",
        "A web browser",
      ],
      correctAnswer: 0,
    },
    {
      title: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      correctAnswer: 1,
    },
    {
      title: "What is JSX?",
      options: [
        "A toolchain for React",
        "A syntax extension for JavaScript",
        "A state management library",
        "A database system",
      ],
      correctAnswer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30); // Set initial time to 30 seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      handleSubmit();
    }
  }, [time]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption(null);
      setTime(30); // Reset time for the next question
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setTime(30);
    setQuizCompleted(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SidebarUser />

      {/* Quiz Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {quizCompleted ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "50px", marginBottom: "20px" }}>😊</div>
              <h2>Your Score</h2>
              <h3>{score}/{quizData.length}</h3>
              <button
                onClick={resetQuiz}
                style={{
                  backgroundColor: "#1abc9c",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  margin: "20px 0",
                }}
              >
                Try Again
              </button>
              <p style={{ color: "green" }}>✔ Correct Answers: {score}</p>
              <p style={{ color: "red" }}>✖ Incorrect Answers: {quizData.length - score}</p>
             {/* <a  style={{ color: "#1abc9c" }}>Select Another Quiz</a> */}
            </div>
          ) : (
            <>
              {/* Header Section */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1abc9c",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "24px",
                  }}
                >
                  {"</>"}
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <h2 style={{ margin: 0, fontSize: "20px" }}>React Quiz</h2>
                  <p style={{ margin: 0, color: "#555" }}>{quizData.length} Questions</p>
                </div>
                <div style={{ marginLeft: "auto", color: "#888", fontSize: "14px" }}>⏱ {formatTime(time)}</div>
              </div>

              {/* Question */}
              <h3 style={{ marginBottom: "20px", fontSize: "18px", color: "#333" }}>
                {currentQuestion + 1}. {quizData[currentQuestion].title}
              </h3>

              {/* Options */}
              {quizData[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    padding: "10px",
                    border: `2px solid ${
                      selectedOption === index ? "#1abc9c" : "#ddd"
                    }`,
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOptionChange(index)}
                >
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: `2px solid ${
                        selectedOption === index ? "#1abc9c" : "#ddd"
                      }`,
                      backgroundColor: selectedOption === index ? "#1abc9c" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: selectedOption === index ? "#fff" : "#000",
                      marginRight: "15px",
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <p style={{ margin: 0, color: "#333" }}>{option}</p>
                </div>
              ))}

              {/* Submit Button */}
              <button
                style={{
                  backgroundColor: "#1abc9c",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginTop: "20px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={handleSubmit}
              >
                {currentQuestion < quizData.length - 1 ? "Next" : "Submit"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;