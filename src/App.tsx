import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import { lazy } from "react";

const WelcomePage = lazy(() => import("@/pages/welcome-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));
const UploadPage = lazy(() => import("@/pages/upload-page"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
