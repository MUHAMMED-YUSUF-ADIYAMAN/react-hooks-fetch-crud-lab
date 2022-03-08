const patch = async (id, correctIndex) => {
    try {
      const res = await fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correctIndex: correctIndex }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default patch;