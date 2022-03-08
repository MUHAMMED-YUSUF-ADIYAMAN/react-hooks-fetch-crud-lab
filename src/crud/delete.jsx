const deleteQ= async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default deleteQ;