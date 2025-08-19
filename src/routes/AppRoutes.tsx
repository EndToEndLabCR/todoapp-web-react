import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home/Home";
import { Today } from "../features/calendar/today/Today";
import { Week } from "../features/calendar/week/Week";
import { Important } from "../features/calendar/important/Important";
import { Completed } from "../features/calendar/completed/Completed";
import { Pending } from "../features/calendar/pending/Pending";
import { Archived } from "../features/calendar/archived/Archived";
import { Work } from "../features/projects/work/Work";
import { Personal } from "../features/projects/personal/Personal";
import { University } from "../features/projects/university/University";
import { Settings } from "../features/more/settings/Settings";
import { NotFound } from "../shared/components/not-found/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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
