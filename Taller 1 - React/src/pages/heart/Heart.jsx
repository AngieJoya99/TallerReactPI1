import { Outlet } from "react-router"
import "./Heart.css"

const Heart = () => {
  return (
    <div>
      <h1>Heart</h1>
      <Outlet/>
    </div>
  );
}

export default Heart
