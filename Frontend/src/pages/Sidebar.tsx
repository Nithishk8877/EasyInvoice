import React, { useState } from 'react';
import {
  X,
  Receipt,
  Users,
  Building,
  Wrench,
  Package,
  GitBranch,
  UserCheck,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const { theme } = useTheme();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const menuItems = [
    {
      id: 'billing',
      label: 'Billing',
      icon: Receipt,
      description: 'Manage invoices & payments',
    },
    {
      id: 'customer',
      label: 'Customers',
      icon: Users,
      description: 'Customer management',
    },
    {
      id: 'company',
      label: 'Company',
      icon: Building,
      description: 'Company information',
    },
    {
      id: 'service',
      label: 'Services',
      icon: Wrench,
      description: 'Service catalog',
    },
    {
      id: 'product',
      label: 'Products',
      icon: Package,
      description: 'Product inventory',
    },
    {
      id: 'branch',
      label: 'Branches',
      icon: GitBranch,
      description: 'Branch management',
    },
    {
      id: 'staff',
      label: 'Staff',
      icon: UserCheck,
      description: 'Team members',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      description: 'Company settings',
    },
  ];

  const toggleMenu = (id: string) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 transform transition-transform duration-300 flex flex-col lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isDark
            ? 'bg-gray-950'
            : 'bg-white'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between border-b px-6 py-5 ${
          isDark ? 'border-gray-800' : 'border-slate-200'
        }`}>
          <h1 className={`text-xl font-semibold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>EasyInvoice</h1>
          <button
            onClick={onClose}
            className={`rounded-lg p-1 transition ${
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
            } lg:hidden`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className={`space-y-1 overflow-y-auto px-4 py-6 flex-1 ${isDark ? '' : ''}`}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedMenu === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`group w-full rounded-xl px-4 py-3 text-left transition ${
                    isDark
                      ? 'hover:bg-gray-900/50'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-sky-500 transition group-hover:text-sky-600" />
                      <div className="flex flex-col">
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-slate-100' : 'text-slate-900'
                        }`}>
                          {item.label}
                        </span>
                        <span className={`text-xs ${
                          isDark ? 'text-slate-500' : 'text-slate-500'
                        }`}>
                          {item.description}
                        </span>
                      </div>
                    </div>
                    {/* <ChevronDown
                      className={`h-4 w-4 transition ${
                        isDark ? 'text-gray-500' : 'text-slate-400'
                      } ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    /> */}
                  </div>
                </button>

                {/* Submenu */}
                {/* {isExpanded && (
                  <div className={`mt-2 space-y-2 border-l-2 pl-4 ${
                    isDark ? 'border-slate-700' : 'border-slate-300'
                  }`}>
                    <button className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                      isDark
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}>
                      View {item.label}
                    </button>
                    <button className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                      isDark
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}>
                      Add New
                    </button>
                    <button className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                      isDark
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}>
                      Reports
                    </button>
                  </div>
                )} */}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className={`border-t px-6 py-4 mt-auto ${
          isDark
            ? 'border-gray-800 bg-gray-900'
            : 'border-slate-200 bg-slate-50'
        }`}>
          <p className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-slate-500'
          }`}>
            EasyInvoice.  An Billing software for small businesses.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
