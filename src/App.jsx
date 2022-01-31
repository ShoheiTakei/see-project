import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';
import { GlobalStyle } from './Style/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
