import React, { useState } from 'react';
import { User, Lock, ArrowRight, AlertCircle } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('luoyuan881105');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate Server Delay
    setTimeout(() => {
      if (username === 'luoyuan881105' && password === '123456') {
        onLogin();
      } else {
        setError('无效的灵体凭证 (Invalid Credentials)');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a3a] to-[#0A0A1F]">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="inline-block p-4 rounded-full border border-lingdan-purple/30 bg-lingdan-purple/10 mb-4 animate-pulse-slow shadow-[0_0_20px_rgba(138,43,226,0.3)]">
            <span className="text-4xl">💊</span>
          </div>
          <h1 className="text-3xl font-bold font-serif text-white tracking-wider mb-2">灵丹</h1>
          <p className="text-lingdan-gold text-xs tracking-widest uppercase">LINGDAN PLATFORM</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <User className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-lingdan-purple transition-colors" size={18} />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-lingdan-purple focus:bg-white/10 transition-all"
              placeholder="灵体 ID"
            />
          </div>
          
          <div className="relative group">
            <Lock className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-lingdan-purple transition-colors" size={18} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-lingdan-purple focus:bg-white/10 transition-all"
              placeholder="访问密钥"
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-400 text-xs bg-red-900/20 p-2 rounded border border-red-900/50">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 rounded-lg font-bold text-white flex items-center justify-center space-x-2 mt-6 transition-all duration-300
              ${loading ? 'bg-gray-700 cursor-wait' : 'bg-lingdan-purple hover:bg-purple-700 hover:shadow-[0_0_15px_#8A2BE2]'}
            `}
          >
            {loading ? (
              <span className="animate-pulse">正在链接灵态...</span>
            ) : (
              <>
                <span>进入灵场</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-[10px] text-gray-600">
                “万物负阴而抱阳，冲气以为和”
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;