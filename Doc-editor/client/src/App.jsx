import TextEditor from "./TextEditor";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Import Routes and Navigate
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} /> {/* Use Navigate instead of redirect */}
        <Route path="/documents/:id" element={<TextEditor />} /> {/* Use element prop to render component */}
      </Routes>
    </Router>
  );
}

export default App;
