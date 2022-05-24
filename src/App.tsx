import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import RootRouter from "./router/rootRouter";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <RootRouter />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
