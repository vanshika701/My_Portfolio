import { useState, useEffect } from 'react';

export default function TerminalSection() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Active Terminal Session</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 font-mono text-sm overflow-hidden">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="space-y-2 text-gray-300">
            <div>
              <span className="text-pink-400">barbie</span>
              <span className="text-gray-500">@</span>
              <span className="text-purple-400">her-station</span>
              <span className="text-gray-500">:~$ </span>
              <span className="text-green-400">init</span> --aesthetic pink
            </div>
            <div className="text-gray-500 pl-4">
              &gt; [OK] Neural Network: READY.js
            </div>
            <div className="text-gray-500 pl-4">
              &gt; [OK] Style Engine:
            </div>
            <div className="text-gray-500 pl-4">
              &gt; [OK] Loading barbiecore.sh...
            </div>
            <div className="text-gray-500 pl-4">
              &gt; [OK] Cloud Cluster
            </div>
            <div className="text-gray-500 pl-4">
              &gt; [OK] 💖 PINK_REGION
            </div>
            <div className="mt-4">
              <span className="text-pink-400">barbie</span>
              <span className="text-gray-500">@</span>
              <span className="text-purple-400">her-station</span>
              <span className="text-gray-500">:~$ </span>
              <span className="animate-pulse">▊</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Terminal v2.0.4</h3>
            <div className="text-pink-500 font-semibold mb-4">Uptime: 100% unapologetically stylish</div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Automating taxing and optimizing elegance through enterprise-grade architecture and fashion-forward UIUX design patterns.
            </p>

            <div className="flex gap-3">
              <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                ☁
              </div>
              <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                🔒
              </div>
              <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                ⚡
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105 w-full"
          >
            Run Script
          </button>
        </div>
      </div>
    </div>
  );
}
