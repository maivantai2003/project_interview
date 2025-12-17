import "./App.css";
import { NavLink, Route, Routes } from "react-router";
import POSScreen from "./pages/POSScreen";
import RealtimeScreen from "./pages/RealtimeScreen";
function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">🧾 POS System</div>
          {/* Navigation */}
          <nav className="flex gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition font-medium
                 ${
                   isActive
                     ? "bg-yellow-400 text-slate-900 shadow"
                     : "text-slate-300 hover:bg-slate-800 hover:text-white"
                 }`
              }
            >
              POS
            </NavLink>

            <NavLink
              to="/realtime"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition font-medium
                 ${
                   isActive
                     ? "bg-yellow-400 text-slate-900 shadow"
                     : "text-slate-300 hover:bg-slate-800 hover:text-white"
                 }`
              }
            >
              Realtime Orders
            </NavLink>
          </nav>
        </div>
      </header>
      {/* Main content */}
      <main className="flex-1 overflow-hidden mt-[80px]">
        <div className="max-w-7xl mx-auto h-full p-6">
          <div className="bg-white rounded-xl shadow-sm p-6 h-full min-h-0">
            <Routes>
              <Route path="/" element={<POSScreen />} />
              <Route path="/realtime" element={<RealtimeScreen />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
