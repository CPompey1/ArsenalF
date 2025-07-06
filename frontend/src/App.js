
import { BrowserRouter as BrowserRouter,  Route, Routes } from 'react-router-dom';
import ProjectPage from './Pages/ProjectPage';
import WorkExperiencePage from './Pages/WorkExperiencePage';
import ContactMePage from './Pages/ContactMePage';
function App() {
  const routes = [
    {"path":"/","element":<WorkExperiencePage/>},
    {"path" :"/projects","element":<ProjectPage/>},
    {"path":"/contact-me","element":<ContactMePage/>},
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
