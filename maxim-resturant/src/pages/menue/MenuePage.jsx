import { useParams } from "react-router-dom";
import SidebarMenue from "../../components/SidebarMenue";
function MenuePage() {
  const { type } = useParams();
  return (
    <>
      <SidebarMenue type={type} />
    </>
  );
}

export default MenuePage;
