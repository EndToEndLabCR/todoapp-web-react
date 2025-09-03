import { Route, Routes } from "react-router-dom";
import { Archived } from "../features/calendar/archived/Archived";
import { Completed } from "../features/calendar/completed/Completed";
import { Important } from "../features/calendar/important/Important";
import { Pending } from "../features/calendar/pending/Pending";
import { Today } from "../features/calendar/today/Today";
import { Week } from "../features/calendar/week/Week";
import { Home } from "../features/home/Home";
import { Login } from "../features/login/Login";
import { Settings } from "../features/more/settings/Settings";
import { Personal } from "../features/projects/personal/Personal";
import { University } from "../features/projects/university/University";
import { Work } from "../features/projects/work/Work";
import { NotFound } from "../shared/components/not-found/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Calendar */}
      <Route path="/calendar/today" element={<Today />} />
      <Route path="/calendar/week" element={<Week />} />
      <Route path="/calendar/important" element={<Important />} />
      <Route path="/calendar/completed" element={<Completed />} />
      <Route path="/calendar/pending" element={<Pending />} />
      <Route path="/calendar/archived" element={<Archived />} />

      {/* Projects */}
      <Route path="/projects/work" element={<Work />} />
      <Route path="/projects/personal" element={<Personal />} />
      <Route path="/projects/university" element={<University />} />

      {/* More */}
      <Route path="/more/settings" element={<Settings />} />

      {/* Catch-all route for 404 pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
