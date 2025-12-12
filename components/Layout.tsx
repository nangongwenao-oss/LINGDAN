import React from 'react';
import { View } from '../types';
import { User, Database, Layers, Globe, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const navItems = [
    { id: 'spirit_body', icon: User, label: '灵体' },
    { id: 'spirit_pool', icon: Database, label: '灵池' },
    { id: 'lingdan_engine', icon: Zap, label: '炼丹', isPrimary: true },
    { id: 'spirit_state', icon: Layers, label: '灵态' },
    { id: 'spirit_field', icon: Globe, label: '灵场' },
  ];

  return (
    <div className="h-screen w-full bg-[#0A0A1F] text-white flex flex-col overflow-hidden max-w-md mx-auto shadow-2xl relative">
      {/* Content Area */}
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="h-20 bg-[#0A0A1F]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-2 z-50">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          if (item.isPrimary) {
             return (
                 <div key={item.id} className="relative -top-6">
                     <button
                        onClick={() => onNavigate(item.id as View)}
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0A0A1F] shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-transform duration-300
                          ${isActive ? 'bg-white text-lingdan-purple scale-110' : 'bg-lingdan-purple text-white hover:scale-105'}
                        `}
                     >
                        <Icon size={28} className={isActive ? 'animate-pulse' : ''} />
                     </button>
                     <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-bold whitespace-nowrap">
                         {item.label}
                     </span>
                 </div>
             )
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as View)}
              className={`
                flex flex-col items-center justify-center space-y-1 w-12 transition-colors duration-300
                ${isActive ? 'text-lingdan-gold' : 'text-gray-500 hover:text-gray-300'}
              `}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && <div className="w-1 h-1 rounded-full bg-lingdan-gold"></div>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;