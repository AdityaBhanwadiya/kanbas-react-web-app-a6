import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 7, marginRight: "20px" }}>
        <ModuleList />
      </div>

      <div style={{ flex: 2, marginRight: "20px" }}>
        <Status />
      </div>
    </div>
  );
}

export default Home;