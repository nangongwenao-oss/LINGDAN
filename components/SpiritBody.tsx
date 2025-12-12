import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SpiritMetrics } from '../types';
import { GlassCard } from './ui/GlassCard';
import { Shield, Zap, Target, Activity } from 'lucide-react';

interface SpiritBodyProps {
  metrics: SpiritMetrics;
  onNavigate: (view: any) => void;
}

const SpiritBody: React.FC<SpiritBodyProps> = ({ metrics, onNavigate }) => {
  const data = [
    { subject: '作品 (Work)', A: metrics.work, fullMark: 100 },
    { subject: '产品 (Product)', A: metrics.product, fullMark: 100 },
    { subject: '商品 (Commodity)', A: metrics.commodity, fullMark: 100 },
    { subject: '用品 (Item)', A: metrics.item, fullMark: 100 },
  ];

  return (
    <div className="h-full flex flex-col space-y-6 overflow-y-auto pb-24 p-4 animate-fade-in">
      <header className="mb-2">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lingdan-purple to-lingdan-gold">
          灵体 (Spirit Body)
        </h1>
        <p className="text-sm text-gray-400 mt-1">个人价值与能力全息评估</p>
      </header>

      {/* Radar Chart Section */}
      <GlassCard className="h-80 relative flex flex-col items-center justify-center neon-border">
        <div className="absolute top-4 left-4 text-lingdan-gold font-mono text-xs border border-lingdan-gold/30 px-2 py-0.5 rounded">
          FOUR PINS ANALYSIS
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#ffffff20" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#B8860B', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Current State"
              dataKey="A"
              stroke="#8A2BE2"
              strokeWidth={3}
              fill="#8A2BE2"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div 
          onClick={() => onNavigate('spirit_state')}
          className="absolute bottom-4 right-4 bg-lingdan-purple/20 hover:bg-lingdan-purple/40 text-lingdan-purple text-xs px-3 py-1 rounded-full cursor-pointer transition-colors border border-lingdan-purple/50"
        >
          查看提升方案 &rarr;
        </div>
      </GlassCard>

      {/* RITE Scores (Mock) */}
      <div className="grid grid-cols-2 gap-4">
        <GlassCard accent="purple">
          <div className="flex items-center space-x-2 mb-2">
            <Zap size={18} className="text-lingdan-purple" />
            <span className="text-sm font-semibold">R - 资源力</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-lingdan-purple w-[85%]"></div>
          </div>
          <div className="text-right text-xs mt-1 text-gray-400">85/100</div>
        </GlassCard>
        
        <GlassCard accent="purple">
          <div className="flex items-center space-x-2 mb-2">
            <Target size={18} className="text-lingdan-purple" />
            <span className="text-sm font-semibold">I - 创新力</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-lingdan-purple w-[72%]"></div>
          </div>
          <div className="text-right text-xs mt-1 text-gray-400">72/100</div>
        </GlassCard>

        <GlassCard accent="purple">
          <div className="flex items-center space-x-2 mb-2">
            <Shield size={18} className="text-lingdan-purple" />
            <span className="text-sm font-semibold">T - 信任力</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-lingdan-purple w-[90%]"></div>
          </div>
          <div className="text-right text-xs mt-1 text-gray-400">90/100</div>
        </GlassCard>

        <GlassCard accent="purple">
          <div className="flex items-center space-x-2 mb-2">
            <Activity size={18} className="text-lingdan-purple" />
            <span className="text-sm font-semibold">E - 演进力</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-lingdan-purple w-[65%]"></div>
          </div>
          <div className="text-right text-xs mt-1 text-gray-400">65/100</div>
        </GlassCard>
      </div>

      {/* Spirit Four Images (Si Xiang) */}
      <GlassCard accent="gold">
        <h3 className="text-lingdan-gold font-serif mb-3 text-lg">灵体四象诊断</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-900 to-black border border-green-500 flex items-center justify-center mb-1">
              <span className="text-xl">🐉</span>
            </div>
            <span className="text-xs text-gray-400">青龙·创新</span>
            <span className="text-xs text-green-400">强</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-700"></div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-900 to-black border border-red-500 flex items-center justify-center mb-1">
              <span className="text-xl">🐦</span>
            </div>
            <span className="text-xs text-gray-400">朱雀·品牌</span>
            <span className="text-xs text-red-400">弱</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-black border border-white flex items-center justify-center mb-1">
              <span className="text-xl">🐯</span>
            </div>
            <span className="text-xs text-gray-400">白虎·执行</span>
            <span className="text-xs text-white">极强</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300 italic">
          "君子性非异也，善假于物也。" — 当前执行力旺盛，但品牌势能不足，建议在灵池中寻找品牌类资源补充。
        </p>
      </GlassCard>
    </div>
  );
};

export default SpiritBody;