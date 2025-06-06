
import { BrowserRouter as BrowserRouter,  Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ProjectPage from './Pages/ProjectPage';
import WorkExperiencePage from './Pages/WorkExperiencePage';
function App() {
  const routes = [
    {"path":"/","element":<WorkExperiencePage/>},
    {"path" :"/projects","element":<ProjectPage/>}
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
