import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movies from "./Components/Movies";

function App() {
  const api = "https://dummyapi.online/api/movies";
  const [data, setData] = useState([]);
  const [loading, setIsloading] = useState("false");
  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(api);
        setIsloading("true");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {!loading ? <Movies movies={data} /> : <p>Movies are being fetched</p>}
      
    </div>
  );
}

export default App;
