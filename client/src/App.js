import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Request from server:</h1>
      <p>{data.message}</p>
    </div>
  );
}

export default App;
