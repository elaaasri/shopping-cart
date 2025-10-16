import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((res) => res.json())
  //     .then(setData);
  // }, []);
  // console.log(data);
  // console.log(data.length);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
