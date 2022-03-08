import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import get from "../crud/get";
function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(null);
  const fetchAllData = async () => {
    const data = await get();
    setQuestions(data);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm fetchAllData={fetchAllData} /> : <QuestionList questions={questions} fetchAllData={fetchAllData} />}
    </main>
  );
}

export default App;
