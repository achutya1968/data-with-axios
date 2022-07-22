import "./App.css";
import {useState,useEffect} from "react"
import axios from "axios"
export default function App() {
  const [datas, setDatas] = useState([]);
  const [getData, setGetData] = useState(false);
  useEffect(() => {
    async function loadData() {
      setGetData(true);
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setDatas(resp.data);
      setGetData(false);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Axios test</h1>
      {getData ? (
        <h4>Loading...</h4>
      ) : (
        datas.map((data) => <div key={data.id}>{data.id}: {data.body}</div>)
      )}
    </div>
  );
}



