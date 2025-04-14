
import { BrowserRouter as BrowserRouter,  Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
function App() {
  const routes = [
    {"path":"/","element":<MainPage/>}
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
