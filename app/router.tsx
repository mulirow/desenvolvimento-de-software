import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";  
import HomePage from "./page"; 
import AnalysisPage from "./analysis/page";  

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar appears on all pages */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;