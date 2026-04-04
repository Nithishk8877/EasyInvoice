import React, { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDark = theme === 'dark';

  return (
    <div className={`flex h-screen w-screen ${
      isDark ? 'bg-black' : 'bg-slate-50'
    }`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden w-full">
        {/* Header */}
        <header className={`border-b backdrop-blur-xl ${
          isDark
            ? 'border-gray-800 bg-gray-950/80'
            : 'border-slate-200 bg-white/80'
        }`}>
          <div className="flex items-center justify-between px-6 py-5">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`rounded-lg p-2 transition lg:hidden ${
                isDark ? 'hover:bg-gray-900 text-gray-300' : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex flex-1 items-center justify-between lg:ml-0">
              <div>
                <h1 className={`hidden text-3xl font-semibold lg:block ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Dashboard
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`rounded-lg p-2 transition ${
                    isDark
                      ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  title="Toggle dark/light mode"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  className={`rounded-2xl px-4 py-2 text-sm font-semibold transition border ${
                    isDark
                      ? 'border-gray-800 bg-gray-900 text-white hover:bg-gray-800'
                      : 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Scrollable Content */}
        <main className={`flex-1 overflow-y-auto w-full ${
          isDark ? 'bg-black' : 'bg-slate-50'
        }`}>
          <div className="px-6 py-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className={`rounded-3xl border p-8 shadow-2xl ${
                isDark
                  ? 'border-gray-800 bg-gray-950 shadow-black/20'
                  : 'border-slate-200 bg-white shadow-slate-100/20'
              }`}>
                <p className={`text-sm uppercase tracking-[0.24em] ${
                  isDark ? 'text-sky-400' : 'text-sky-600'
                }`}>
                  Overview
                </p>
                <h2 className={`mt-4 text-3xl font-semibold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Welcome back
                </h2>
                <p className={`mt-2 ${
                  isDark ? 'text-gray-300' : 'text-slate-600'
                }`}>
                  Your dashboard is ready. Start managing invoices, tracking
                  payments, and reviewing reports.
                </p>
              </div>

              <div className={`rounded-3xl border p-8 shadow-2xl ${
                isDark
                  ? 'border-gray-800 bg-gray-950 shadow-black/20'
                  : 'border-slate-200 bg-white shadow-slate-100/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}>This month</p>
                    <p className={`mt-2 text-4xl font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      $12,740
                    </p>
                  </div>
                  <div className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
                    isDark
                      ? 'bg-sky-500/10 text-sky-300'
                      : 'bg-sky-100 text-sky-600'
                  }`}>
                    +18.4%
                  </div>
                </div>
                <div className={`mt-6 space-y-3 ${
                  isDark ? 'text-gray-300' : 'text-slate-600'
                }`}>
                  <p>Pending invoices: 8</p>
                  <p>Paid invoices: 26</p>
                  <p>Customers active: 14</p>
                </div>
              </div>
            </div>

            <section className={`mt-8 rounded-3xl border p-8 shadow-2xl ${
              isDark
                ? 'border-gray-800 bg-gray-950 shadow-black/20'
                : 'border-slate-200 bg-white shadow-slate-100/20'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-2xl font-semibold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Quick actions
                  </h3>
                  <p className={`mt-2 ${
                    isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                    Use these actions to begin your invoicing workflow.
                  </p>
                </div>
                <button className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600">
                  Create invoice
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;