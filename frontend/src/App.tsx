import "./App.css";
import { NavLink, Route, Routes } from "react-router";
import POSScreen from "./pages/POSScreen";
import RealtimeScreen from "./pages/RealtimeScreen";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-indigo-600 to-blue-600
        border-b border-indigo-700/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl">🧾</span>
            <span className="text-lg font-semibold tracking-wide">
              POS System
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 bg-white/15 backdrop-blur
            rounded-lg p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition
                 ${
                   isActive
                     ? "bg-white text-indigo-600 shadow"
                     : "text-white/80 hover:bg-white/20 hover:text-white"
                 }`
              }
            >
              POS
            </NavLink>

            <NavLink
              to="/realtime"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition
                 ${
                   isActive
                     ? "bg-white text-indigo-600 shadow"
                     : "text-white/80 hover:bg-white/20 hover:text-white"
                 }`
              }
            >
              Realtime Orders
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-hidden mt-[80px]">
        <div className="max-w-7xl mx-auto h-full p-6">
          <div className="
            bg-white
            rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            p-6
            h-full
            min-h-0
          ">
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
