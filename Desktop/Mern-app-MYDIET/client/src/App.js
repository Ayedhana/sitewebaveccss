import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import CreateDiet from "./components/doctor/CreateDiet.jsx";
import { SavedDiets } from "./components/doctor/SavedDiets.jsx";
import PrivedRoutes from "./components/routes/PrivedRoutes.jsx";
import AdminRoutes from "./components/routes/AdminRoutes.jsx";
import DoctorRoutes from "./components/routes/AdminRoutes.jsx";
import UserRoutes from "./components/routes/UserRoutes.jsx";
import "./App.css";
import { DoctorDiets } from "./components/doctor/DoctorDiets.jsx";
import PublicLayout from "./components/layout/PublicLayout.jsx";
import DoctorLayout from "./components/layout/DoctorLayout.jsx";
import UserLayout from "./components/layout/UserLayout.jsx";
import { UserDiets } from "./components/user/UserDiets.jsx";
import { UserSavedDiets } from "./components/user/UserSavedDiets.jsx";
import AdminDashbord from "./components/admin/AdminDashbord.jsx";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import VerifyEmail from "./components/verify/VerifyEmail.jsx";
import VerifyEmailDoctor from "./components/verify/VerifyEmailDoctor.jsx";
import RegisterUser from "./components/user/RegisterUser.jsx";
import LoginUser from "./components/user/LoginUser.jsx";
import LoginDoctor from "./components/doctor/LoginDoctor.jsx";
import RegisterDoctor from "./components/doctor/RegisterDoctor.jsx";
import GetDoctors from "./components/admin/GetDoctors.jsx";
import GetUsers from "./components/admin/GetUsers.jsx";

import("./App.css");

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<LoginUser />} />
            <Route path="/user/register" element={<RegisterUser />} />
            <Route path="/doctor/login" element={<LoginDoctor />} />
            <Route path="/doctor/register" element={<RegisterDoctor />} />
          </Route>
          <Route element={<DoctorLayout />}>
            <Route path="/doctor/createDiet" element={<CreateDiet />} />
            <Route path="/doctor/diets" element={<DoctorDiets />} />
            <Route path="/doctor/diets/savedDiets" element={<SavedDiets />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path="/user/diets" element={<UserDiets />} />
            <Route path="/user/diets/savedDiets" element={<UserSavedDiets />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashbord"
              element={
                <AdminRoutes>
                  <AdminDashbord />
                </AdminRoutes>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminRoutes>
                  <GetUsers />
                </AdminRoutes>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <AdminRoutes>
                  <GetDoctors />
                </AdminRoutes>
              }
            />

            
          </Route>

          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/verifyEmailDoctor" element={<VerifyEmailDoctor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
