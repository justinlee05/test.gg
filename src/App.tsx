import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RootRouter from "./router/rootRouter";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [queryClient] = useState(()=>new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
