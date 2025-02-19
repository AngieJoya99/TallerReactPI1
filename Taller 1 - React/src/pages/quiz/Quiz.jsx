import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";

const Quiz = () => {
  const {quiz, incrementQuizProgress} = useQuizStore();

  const handleNextQuiz = useCallback( () => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);
  return (
    <div>
      <h1>Quiz</h1>
      <span>Progreso del quiz: {quiz.percentageQuizCompleted} % </span>
      <button onClick={handleNextQuiz}>Siguiente</button>
    </div>
  )
}

export default Quiz
