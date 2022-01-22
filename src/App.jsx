import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';
import { GlobalStyle } from './Style/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
