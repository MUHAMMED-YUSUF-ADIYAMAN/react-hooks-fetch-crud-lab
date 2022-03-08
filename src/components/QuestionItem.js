import React from "react";
import deleteQ from "../crud/delete";
import patch from "../crud/patch";
function QuestionItem({ question, fetchAllData }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    deleteQ(id);
    fetchAllData();
  };
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleChange = (e) => {
    const newCorrectIndex = e.target.value;
    patch(id, newCorrectIndex);
    fetchAllData();
  };
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleChange(e)}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
