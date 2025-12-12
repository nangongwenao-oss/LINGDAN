import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Database, Users, Link, Share2, Search, ArrowRight } from 'lucide-react';

const SpiritPool: React.FC = () => {
  const resources = [
    { id: 1, title: 'CSAI 交叉科学导论', type: '知识', tag: '四观' },
    { id: 2, title: '高频交易算法工程师', type: '人才', tag: '四链' },
    { id: 3, title: '2025 全球供应链韧性报告', type: '数据', tag: '四观' },
    { id: 4, title: '量子计算实验平台接入', type: '技术', tag: '四链' },
  ];

  return (
    <div className="h-full flex flex-col p-4 pb-24 animate-fade-in overflow-y-auto">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lingdan-purple to-lingdan-gold">
          灵池 (Spirit Pool)
        </h1>
        <p className="text-sm text-gray-400 mt-1">知识与资源聚合中心</p>
      </header>

      {/* Search/Filter */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="搜索四观四链资源..." 
          className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-lingdan-purple transition-colors"
        />
        <Search className="absolute left-3 top-3.5 text-gray-500" size={16} />
      </div>

      {/* 4 Views 4 Chains Matrix */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <GlassCard className="flex flex-col items-center justify-center py-6 border-lingdan-gold/20 bg-gradient-to-br from-transparent to-lingdan-gold/10">
          <Database className="text-lingdan-gold mb-2" size={24} />
          <h3 className="font-serif text-lingdan-gold">四观矩阵</h3>
          <span className="text-[10px] text-gray-400 mt-1">CSAI / 交叉科学</span>
        </GlassCard>
        <GlassCard className="flex flex-col items-center justify-center py-6 border-lingdan-purple/20 bg-gradient-to-br from-transparent to-lingdan-purple/10">
          <Link className="text-lingdan-purple mb-2" size={24} />
          <h3 className="font-serif text-lingdan-purple">四链协同</h3>
          <span className="text-[10px] text-gray-400 mt-1">产业链 / 人才链</span>
        </GlassCard>
      </div>

      {/* Resource List */}
      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
        <Share2 size={16} className="mr-2 text-lingdan-purple" />
        智能匹配资源
      </h3>
      
      <div className="space-y-3">
        {resources.map((res) => (
          <GlassCard key={res.id} className="flex justify-between items-center group">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${res.tag === '四观' ? 'border-lingdan-gold text-lingdan-gold' : 'border-lingdan-purple text-lingdan-purple'}`}>
                  {res.tag}
                </span>
                <span className="text-xs text-gray-400">{res.type}</span>
              </div>
              <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {res.title}
              </h4>
            </div>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <ArrowRight size={16} />
            </button>
          </GlassCard>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-xl border border-dashed border-gray-700 text-center">
        <p className="text-xs text-gray-500 mb-2">缺少必要资源？</p>
        <button className="px-4 py-2 bg-lingdan-purple/20 text-lingdan-purple rounded-lg text-sm hover:bg-lingdan-purple/30 transition-colors">
          启动 AI 深度挖掘
        </button>
      </div>
    </div>
  );
};

export default SpiritPool;