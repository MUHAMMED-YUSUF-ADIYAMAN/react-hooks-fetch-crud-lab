import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, fetchAllData }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions?.map((question) => (
          <QuestionItem
            question={question}
            fetchAllData={fetchAllData}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
