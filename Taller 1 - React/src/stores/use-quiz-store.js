import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    percentageQuizCompleted: 0,
  },

  /*Los 3 puntos indican que todo lo que no se indica se deja igual */
  incrementQuizProgress: () =>
    set((state) => {
      const newPercentage = Math.min(
        state.quiz.percentageQuizCompleted + 25,
        100
      );
      return {
        quiz: { ...state.quiz, percentageQuizCompleted: newPercentage },
      };
    }),

  clearQuiz: () =>
    set(() => ({
      quiz: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        percentageQuizCompleted: 0,
      },
    })),
}));

export default useQuizStore;
