import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Layers, ChevronUp } from 'lucide-react';

const SpiritState: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(3); // 3 = Focus State

  const levels = [
    { id: 5, name: '能力级 (Capability)', desc: '意出象外 - 顶层进化', status: '突变' },
    { id: 4, name: '组织级 (Organization)', desc: '系统协同 - 有机整体', status: '重构' },
    { id: 3, name: '聚焦态 (Focus)', desc: '聚精会神 - 关键突破', status: '稳定' },
    { id: 2, name: '流程级 (Flow)', desc: '循序渐进 - 规范运作', status: '内循环' },
    { id: 1, name: '事件级 (Event)', desc: '随机应变 - 基础单元', status: '活跃' },
  ];

  return (
    <div className="h-full flex flex-col p-4 pb-24 overflow-y-auto animate-fade-in relative">
      {/* Background Ambient Effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lingdan-purple/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <header className="mb-6 z-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lingdan-purple to-lingdan-gold">
          灵态 (Spirit State)
        </h1>
        <p className="text-sm text-gray-400 mt-1">动态安全生态体系可视化</p>
      </header>

      {/* Spiral/Stack Visualization */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 my-4 z-10">
        {levels.map((level) => {
          const isActive = activeLevel === level.id;
          const isPast = activeLevel > level.id;
          
          return (
            <div 
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`
                relative w-full max-w-xs transition-all duration-500 cursor-pointer
                ${isActive ? 'scale-105 z-20' : 'scale-95 opacity-60 z-10'}
              `}
            >
              {/* Connection Line */}
              {level.id > 1 && (
                <div className="absolute left-8 -bottom-4 w-0.5 h-4 bg-gray-700/50 -z-10"></div>
              )}
              
              <GlassCard 
                className={`
                  flex items-center justify-between p-4 border
                  ${isActive ? 'border-lingdan-purple bg-lingdan-purple/10 shadow-[0_0_15px_rgba(138,43,226,0.2)]' : 'border-white/5'}
                `}
              >
                <div className="flex items-center space-x-4">
                   <div className={`
                     w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                     ${isActive ? 'bg-lingdan-purple text-white' : 'bg-gray-800 text-gray-500'}
                   `}>
                     {level.id}
                   </div>
                   <div>
                     <h3 className={`font-serif ${isActive ? 'text-white' : 'text-gray-400'}`}>
                       {level.name}
                     </h3>
                     {isActive && <p className="text-[10px] text-lingdan-gold">{level.desc}</p>}
                   </div>
                </div>
                
                {isActive && (
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500">Status</span>
                    <span className="text-xs text-lingdan-purple font-bold animate-pulse">{level.status}</span>
                  </div>
                )}
              </GlassCard>
            </div>
          );
        })}
      </div>

      {/* Balance Meter */}
      <div className="mt-auto z-10">
        <GlassCard accent="gold" className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-lingdan-gold">千姿百态平衡度</h4>
            <p className="text-[10px] text-gray-400">姿 (Static) vs 态 (Dynamic)</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">静</span>
            <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/50 -translate-x-1/2 z-20"></div> {/* Center marker */}
              <div className="h-full bg-gradient-to-r from-blue-900 to-lingdan-purple w-[60%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs text-gray-400">动</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SpiritState;