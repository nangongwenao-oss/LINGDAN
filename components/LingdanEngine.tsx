import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { generateLingdan } from '../services/geminiService';
import { SpiritMetrics, SpiritLevel, LingdanResult } from '../types';
import { Sparkles, Scroll, Hexagon, BrainCircuit, ArrowRight } from 'lucide-react';

interface LingdanEngineProps {
  metrics: SpiritMetrics;
}

const LingdanEngine: React.FC<LingdanEngineProps> = ({ metrics }) => {
  const [question, setQuestion] = useState('');
  const [isBrewing, setIsBrewing] = useState(false);
  const [result, setResult] = useState<LingdanResult | null>(null);

  const handleBrew = async () => {
    if (!question.trim()) return;
    
    setIsBrewing(true);
    setResult(null);

    // Call Gemini API Service
    const lingdan = await generateLingdan(question, metrics, SpiritLevel.Focus);
    
    setResult(lingdan);
    setIsBrewing(false);
  };

  return (
    <div className="h-full flex flex-col p-4 pb-24 overflow-y-auto animate-fade-in">
      <header className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lingdan-purple to-pink-500">
          高级灵感涌现系统
        </h1>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">AI ALCHEMY ENGINE</p>
      </header>

      {/* The Furnace Animation */}
      <div className="relative h-48 w-full flex items-center justify-center mb-6">
        {isBrewing ? (
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-lingdan-purple/30 animate-spin-slow"></div>
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-t-4 border-lingdan-purple animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-lingdan-purple rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-serif text-2xl animate-bounce">
              炼
            </div>
          </div>
        ) : (
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border border-white/10 bg-black/40 flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.1)] group-hover:shadow-[0_0_50px_rgba(138,43,226,0.4)] transition-all duration-500">
               <BrainCircuit size={48} className="text-lingdan-purple opacity-80 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        )}
      </div>

      {!result && !isBrewing && (
        <div className="flex flex-col space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <label className="text-xs text-lingdan-gold font-bold mb-2 block uppercase">战略提问 (Strategic Inquiry)</label>
            <textarea
              className="w-full bg-transparent text-white text-sm focus:outline-none min-h-[100px] resize-none"
              placeholder="e.g. 如何实现能力级从'质变'到'蝶变'？"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleBrew}
            disabled={!question}
            className={`
              w-full py-4 rounded-xl font-bold text-white flex items-center justify-center space-x-2 transition-all
              ${question 
                ? 'bg-gradient-to-r from-lingdan-purple to-indigo-900 shadow-lg shadow-lingdan-purple/30 hover:scale-[1.02]' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
            `}
          >
            <Sparkles size={18} />
            <span>一键炼制灵丹</span>
          </button>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="space-y-4 animate-slide-up">
           <div className="flex items-center justify-between mb-2">
             <h3 className="text-white font-bold">灵丹已成 (Lingdan Generated)</h3>
             <button 
               onClick={() => {setResult(null); setQuestion('');}}
               className="text-xs text-gray-400 hover:text-white"
             >
               重新炼制
             </button>
           </div>

           {/* Kit (锦囊) */}
           <GlassCard accent="purple" className="relative overflow-hidden">
             <div className="absolute -right-4 -top-4 text-lingdan-purple/10">
               <Scroll size={100} />
             </div>
             <div className="relative z-10">
               <h4 className="text-lingdan-purple font-serif font-bold text-lg mb-1 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-lingdan-purple flex items-center justify-center text-xs mr-2">1</span>
                 锦囊 (Kit)
               </h4>
               <p className="text-gray-300 text-sm leading-relaxed">{result.kit}</p>
             </div>
           </GlassCard>

           {/* Strategy (妙计) */}
           <GlassCard accent="gold" className="relative overflow-hidden">
             <div className="absolute -right-4 -top-4 text-lingdan-gold/10">
               <Hexagon size={100} />
             </div>
             <div className="relative z-10">
               <h4 className="text-lingdan-gold font-serif font-bold text-lg mb-1 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-lingdan-gold flex items-center justify-center text-xs mr-2">2</span>
                 妙计 (Strategy)
               </h4>
               <p className="text-gray-300 text-sm leading-relaxed">{result.strategy}</p>
             </div>
           </GlassCard>

           {/* Blueprint (棋谱) */}
           <GlassCard className="relative overflow-hidden border-t border-white/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lingdan-purple/10 pointer-events-none"></div>
             <div className="relative z-10">
               <h4 className="text-white font-serif font-bold text-lg mb-1 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs mr-2">3</span>
                 棋谱 (Blueprint)
               </h4>
               <p className="text-gray-300 text-sm leading-relaxed">{result.blueprint}</p>
             </div>
           </GlassCard>
        </div>
      )}
    </div>
  );
};

export default LingdanEngine;