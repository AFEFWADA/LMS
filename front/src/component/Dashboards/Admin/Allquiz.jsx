import React, { useState } from 'react';
import SidebarComponent from "./Sidebar";

const QuizBuilder = () => {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', choices: ['', ''], correctAnswer: '' }
  ]);

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleChoiceChange = (qIndex, cIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].choices[cIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = e.target.value;
    setQuestions(newQuestions);
  };

  const addNewChoice = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].choices.push('');
    setQuestions(newQuestions);
  };

  const addNewQuestion = () => {
    setQuestions([...questions, { question: '', choices: ['', ''], correctAnswer: '' }]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const deleteChoice = (qIndex, cIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].choices = newQuestions[qIndex].choices.filter((_, i) => i !== cIndex);
    setQuestions(newQuestions);
  };

  const handleSave = () => {
    const quizData = {
      name: quizName,
      questions: questions,
    };
    console.log('Quiz Data:', quizData);
    // Save quiz data to the server/database here.
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Section */}
      <div style={{ width: '250px', backgroundColor: '#f8f9fa' }}>
        <SidebarComponent />
      </div>

      {/* Main Content Section */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
        <div className="quiz-builder" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Quiz Builder</h1>

          {/* Quiz Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '16px', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Quiz Name:
            </label>
            <input
              type="text"
              placeholder="Enter the Name of the Quiz..."
              value={quizName}
              onChange={handleQuizNameChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            />
          </div>

          {/* Quiz Questions */}
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => deleteQuestion(qIndex)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                X
              </button>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                  Question {qIndex + 1}:
                </label>
                <input
                  type="text"
                  placeholder="Enter the question here..."
                  value={q.question}
                  onChange={(e) => handleQuestionChange(qIndex, e)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              {/* Choices */}
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Choices:</label>
                {q.choices.map((choice, cIndex) => (
                  <div
                    key={cIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
                      {String.fromCharCode(65 + cIndex)}:
                    </span>
                    <input
                      type="text"
                      placeholder={`Choice ${cIndex + 1}`}
                      value={choice}
                      onChange={(e) => handleChoiceChange(qIndex, cIndex, e)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                      }}
                    />
                    <button
                      onClick={() => deleteChoice(qIndex, cIndex)}
                      style={{
                        marginLeft: '10px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addNewChoice(qIndex)}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  Add a New Choice
                </button>
              </div>

              {/* Correct Answer */}
              <div style={{ marginTop: '10px' }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                  Correct Answer:
                </label>
                <input
                  type="text"
                  placeholder="Enter the correct answer (e.g., A, B, C...)"
                  value={q.correctAnswer}
                  onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
            </div>
          ))}
          <button
            onClick={addNewQuestion}
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              marginTop: '20px',
            }}
          >
            Add a New Question
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              marginTop: '20px',
            }}
          >
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizBuilder;
