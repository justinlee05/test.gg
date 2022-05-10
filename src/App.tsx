import { Provider } from "react-redux";
import { store } from "./data/modules/redux/store";
import RootRouter from "./router/rootRouter";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
}

export default App;
