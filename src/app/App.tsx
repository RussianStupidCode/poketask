import { RoutesView } from "@/pages";
import { HashRouter } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <RoutesView />
    </HashRouter>
  );
};

export default App;
