import Header from "./components/Header";
import { Outlet } from "react-router";

// function ModelViewer() {
//   return (
//     <iframe
//       title="Cysketch Grocery Mart"
//       width="100%"
//       height="500"
//       src="https://sketchfab.com/models/6becbf71e57d4717845d86f75e09ef09/embed?autostart=1&preload=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_watermark=0&ui_stop=0&ui_hint=0"
//       frameBorder="0"
//       allow="autoplay; fullscreen; vr"
//       allowFullScreen
//     ></iframe>
//   );
// }
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
