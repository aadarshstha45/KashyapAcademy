import { useLocation } from "react-router-dom";

function PathName() {
  const location = useLocation();
  const { pathname } = location;
  return pathname;
}

export default PathName;
