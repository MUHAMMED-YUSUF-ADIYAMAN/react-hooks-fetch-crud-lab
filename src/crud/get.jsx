const get = async () => {
    try {
      const res = await fetch("http://localhost:4000/questions");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default get;