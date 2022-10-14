import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ex from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/5IV7_Ruiz_Betanzos_Emilio_AP_Recetas" element={<ex.Home/>} />
        <Route exact path="/:id" element={<ex.DetailRecipeComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <App/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
