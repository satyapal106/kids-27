import Home from "./Compontent/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Compontent/Login";
import SelectClass from "./Compontent/Home/SelectClass";
import SelectSubject from "./Compontent/Home/SelectSubject";
import SubjectDetails from "./Compontent/Home/SubjectDetails";
import SubjectType from "./Compontent/Home/SubjectType";
import TeacherLogin from "./Compontent/Home/Mobile/TeacherLogin";
import Tlogin from "./Compontent/Home/Mobile/Tlogin";
import MobileSelectclass from "./Compontent/Home/Mobile/MobileSelectclass";
import MobileSelectSubject from "./Compontent/Home/Mobile/MobileSelectSubject";
import MobileSubjectDetails from "./Compontent/Home/Mobile/MobileSubjectDetails";
import HomeBranch from "./Compontent/Branch/HomeBranch";
import Signup from "./Compontent/Signup";
import Tsignup from "./Compontent/Home/Mobile/Tsignup";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='*' />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/branch/:branch_url/:url" element={<HomeBranch />} />
          <Route path="/branch/:branch_url/:url/login" element={<Login />} />
          <Route path="/branch/:branch_url/:url/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/branch/:branch_url/:url/teacher" element={<TeacherLogin />} />
          <Route path="/branch/:branch_url/:url/teacher-login" element={<Tlogin />} />
          <Route path="/branch/:branch_url/:url/teacher-signup" element={<Tsignup />} />
          <Route path="/mobile-select-class" element={<MobileSelectclass />} />
          <Route path="/branch/:branch_url/:url/mobile-select-subject" element={<MobileSelectSubject />} />
          <Route path="/mobile-subject-detail" element={<MobileSubjectDetails />} />
          <Route path="/branch/:branch_url/:url/select-class" element={<SelectClass />} />
          {/* <Route path="/select-subject" element={<SelectSubject />} /> */}
          <Route path="/branch/:branch_url/:url/select-subject" element={<SelectSubject />} />
          <Route path="/subject-English" element={<SubjectDetails />} />
          <Route path="/branch/:branch_url/:url/subject/:subject_url" element={<SubjectType />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
