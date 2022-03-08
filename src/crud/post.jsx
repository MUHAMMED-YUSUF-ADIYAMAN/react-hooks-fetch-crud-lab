const post = async (formData) => {
    const { prompt, answer1, answer2, answer3, answer4, correctIndex } = formData;
  
    const data = {
      prompt: prompt,
      answers: [answer1, answer2, answer3, answer4],
      correctIndex: correctIndex,
    };
  
    try {
      const res = await fetch("http://localhost:4000/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataJson = await res.json();
      return dataJson;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default post;