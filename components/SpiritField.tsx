import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Globe, Activity, GitMerge, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const SpiritField: React.FC = () => {
  const projects: Project[] = [
    { id: '1', name: 'Alpha-Eco 安全体系', resilienceScore: 92, status: 'deployed', domain: '网络安全' },
    { id: '2', name: 'Green-Flow 碳汇追踪', resilienceScore: 78, status: 'testing', domain: '环保科技' },
    { id: '3', name: 'Art-Synapse 神经美学', resilienceScore: 45, status: 'active', domain: '数字艺术' },
  ];

  return (
    <div className="h-full flex flex-col p-4 pb-24 overflow-y-auto animate-fade-in">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lingdan-purple to-lingdan-gold">
          灵场 (Spirit Field)
        </h1>
        <p className="text-sm text-gray-400 mt-1">生态测试与全球应用环境</p>
      </header>

      {/* Global Map Placeholder */}
      <div className="aspect-video w-full rounded-xl bg-black/40 border border-white/10 relative overflow-hidden mb-6 flex items-center justify-center group">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/600/300')] opacity-30 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F] to-transparent"></div>
         <div className="z-10 flex flex-col items-center">
            <Globe className="text-lingdan-purple mb-2 animate-float" size={48} />
            <span className="text-xs text-lingdan-purple tracking-widest uppercase">Global Mesh Active</span>
         </div>
         
         {/* Data Points */}
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-lingdan-gold rounded-full animate-ping"></div>
         <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-lingdan-purple rounded-full animate-ping delay-700"></div>
      </div>

      {/* Project List */}
      <h3 className="text-lg font-bold text-white mb-3">部署项目 (Deployed Projects)</h3>
      <div className="space-y-3">
        {projects.map(proj => (
          <GlassCard key={proj.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${proj.status === 'deployed' ? 'bg-green-500' : proj.status === 'testing' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
              <div>
                <h4 className="text-sm font-semibold">{proj.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-gray-500 uppercase">{proj.domain}</span>
                  <span className="text-[10px] px-1 rounded bg-white/5 border border-white/5">{proj.status}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400">韧性得分</span>
              <span className={`text-sm font-mono font-bold ${proj.resilienceScore > 80 ? 'text-green-400' : 'text-lingdan-gold'}`}>
                {proj.resilienceScore}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Cross-Domain Graph Placeholder */}
      <div className="mt-6">
        <GlassCard accent="purple" className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="p-2 bg-lingdan-purple/20 rounded-lg text-lingdan-purple">
                <GitMerge size={20} />
             </div>
             <div>
               <h4 className="text-sm font-bold">跨领域融合图谱</h4>
               <p className="text-[10px] text-gray-400">3 个潜在创新点已识别</p>
             </div>
          </div>
          <ExternalLink size={16} className="text-gray-500" />
        </GlassCard>
      </div>

      {/* Wave Platform Link */}
      <div className="mt-4">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-lingdan-purple/80 to-blue-600/80 text-white text-sm font-bold flex items-center justify-center space-x-2 shadow-lg shadow-lingdan-purple/20 hover:scale-[1.02] transition-transform">
           <span>进入 Wave 核心构建平台</span>
           <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default SpiritField;