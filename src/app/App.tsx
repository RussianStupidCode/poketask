import { RoutesView } from "@/pages";
import { BrowserRouter } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RoutesView />{" "}
    </BrowserRouter>
  );
};

export default App;
