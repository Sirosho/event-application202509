import router from "./routes/route-config.jsx";
import {RouterProvider} from "react-router-dom";
import './App.css';

const App = () => (
  <RouterProvider router={router}/>
);

export default App;
