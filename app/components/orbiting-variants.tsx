'use client'

// Variant 1: Orbiting with External Labels
function OrbitExternalLabels() {
  return (
    <div className="rounded-2xl bg-neutral-900 dark:bg-neutral-100 p-8 text-white dark:text-black">
      <div className="relative w-64 h-64 mx-auto">
        {/* Orbit rings */}
        <div className="absolute inset-0 rounded-full border border-white/10 dark:border-black/10" />
        <div className="absolute inset-8 rounded-full border border-white/10 dark:border-black/10" />
        <div className="absolute inset-16 rounded-full border border-white/10 dark:border-black/10" />
        
        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <span className="text-white font-bold text-sm">Me</span>
          </div>
        </div>
        
        {/* Orbiting elements with labels */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-[10px] font-medium text-blue-400">Engineering</span>
          <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
        </div>
        
        <div className="absolute bottom-4 left-4 flex flex-col items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50" />
          <span className="text-[10px] font-medium text-rose-400">Design</span>
        </div>
        
        <div className="absolute bottom-4 right-4 flex flex-col items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
          <span className="text-[10px] font-medium text-amber-400">Business</span>
        </div>
      </div>
      
      <p className="text-center text-sm opacity-70 mt-6 max-w-xs mx-auto">
        Three disciplines orbiting one focus: building products people love.
      </p>
    </div>
  )
}

// Variant 2: Planets with Tooltip-style Labels
function OrbitPlanetLabels() {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-neutral-950 to-neutral-900 dark:from-neutral-50 dark:to-neutral-100 p-8 text-white dark:text-black">
      <div className="relative w-72 h-64 mx-auto">
        {/* Elliptical orbit */}
        <div className="absolute inset-4 rounded-full border border-dashed border-white/20 dark:border-black/20" />
        
        {/* Center sun */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <span className="text-xs font-bold text-black dark:text-white">Core</span>
        </div>
        
        {/* Planet 1 - Engineering */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-[10px] font-bold">ENG</span>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/40">
              <span className="text-[9px] font-medium text-blue-300 dark:text-blue-600 whitespace-nowrap">Engineering</span>
            </div>
          </div>
        </div>
        
        {/* Planet 2 - Design */}
        <div className="absolute bottom-8 left-8">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
              <span className="text-[10px] font-bold">DSN</span>
            </div>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40">
              <span className="text-[9px] font-medium text-rose-300 dark:text-rose-600 whitespace-nowrap">Design</span>
            </div>
          </div>
        </div>
        
        {/* Planet 3 - Business */}
        <div className="absolute bottom-8 right-8">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-[10px] font-bold">BIZ</span>
            </div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40">
              <span className="text-[9px] font-medium text-amber-300 dark:text-amber-600 whitespace-nowrap">Business</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-center text-lg font-bold tracking-tight mt-4">At the center of gravity</h3>
      <p className="text-center text-xs opacity-60 mt-1">Where engineering, design, and business converge</p>
    </div>
  )
}

// Variant 3: Radar/HUD Style with Labels
function OrbitHUD() {
  return (
    <div className="rounded-2xl bg-black p-8 text-white font-mono">
      <div className="relative w-64 h-64 mx-auto">
        {/* HUD circles */}
        <div className="absolute inset-0 rounded-full border border-green-500/30" />
        <div className="absolute inset-8 rounded-full border border-green-500/20" />
        <div className="absolute inset-16 rounded-full border border-green-500/10" />
        
        {/* Crosshairs */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-500/20" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-green-500/20" />
        
        {/* Center target */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-500/10">
            <span className="text-[10px] font-bold text-green-400">TGT</span>
          </div>
        </div>
        
        {/* Blips with labels */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] text-blue-400">&lt;ENG&gt;</span>
        </div>
        
        <div className="absolute bottom-12 left-8 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] text-rose-400">&lt;DSN&gt;</span>
        </div>
        
        <div className="absolute bottom-12 right-8 flex items-center gap-2">
          <span className="text-[10px] text-amber-400">&lt;BIZ&gt;</span>
          <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
        </div>
      </div>
      
      <div className="text-center mt-6 border-t border-green-500/20 pt-4">
        <p className="text-[10px] text-green-500/60 uppercase tracking-widest">// system.identify</p>
        <p className="text-sm text-green-400 mt-1">Operating at intersection coordinates</p>
      </div>
    </div>
  )
}

// Variant 4: Soft Glowing Orbs with Inline Labels
function OrbitGlowingSoft() {
  return (
    <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-950 p-8 overflow-hidden">
      <div className="relative w-72 h-56 mx-auto">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-400/30 blur-2xl" />
        <div className="absolute bottom-0 left-4 w-28 h-28 rounded-full bg-rose-400/30 blur-2xl" />
        <div className="absolute bottom-0 right-4 w-28 h-28 rounded-full bg-amber-400/30 blur-2xl" />
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 224">
          <line x1="144" y1="40" x2="56" y2="184" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="144" y1="40" x2="232" y2="184" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="56" y1="184" x2="232" y2="184" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        
        {/* Labeled orbs */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-white">⚡</span>
          </div>
          <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">Engineering</span>
        </div>
        
        <div className="absolute bottom-2 left-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-rose-500 shadow-lg shadow-rose-500/40 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-white">✦</span>
          </div>
          <span className="text-[11px] font-medium text-rose-600 dark:text-rose-400">Design</span>
        </div>
        
        <div className="absolute bottom-2 right-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-white">◆</span>
          </div>
          <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">Business</span>
        </div>
        
        {/* Center intersection */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-700 shadow-xl flex items-center justify-center">
            <span className="text-[10px] font-bold">Me</span>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-4">
        Where these three converge, that's where I operate.
      </p>
    </div>
  )
}

// Variant 5: Animated Spinning with Labels on Track
function OrbitSpinningLabels() {
  return (
    <div className="rounded-2xl bg-neutral-900 dark:bg-neutral-100 p-8 text-white dark:text-black">
      <div className="relative w-56 h-56 mx-auto">
        {/* Animated orbit ring */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 dark:border-black/20 animate-spin"
          style={{ animationDuration: '30s' }}
        />
        
        {/* Static inner ring */}
        <div className="absolute inset-8 rounded-full border border-white/10 dark:border-black/10" />
        
        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-rose-500 to-amber-500 mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-[10px] opacity-60">Intersection</span>
          </div>
        </div>
        
        {/* Orbiting labeled elements - these spin too */}
        <div 
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: '30s' }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
              <div className="px-2 py-1 rounded-full bg-blue-500 text-[10px] font-medium">Engineering</div>
            </div>
          </div>
          
          <div className="absolute bottom-4 -left-2">
            <div className="flex flex-col items-center animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
              <div className="px-2 py-1 rounded-full bg-rose-500 text-[10px] font-medium">Design</div>
            </div>
          </div>
          
          <div className="absolute bottom-4 -right-2">
            <div className="flex flex-col items-center animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
              <div className="px-2 py-1 rounded-full bg-amber-500 text-[10px] font-medium">Business</div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm opacity-70 mt-4">
        All three in constant orbit. All three in balance.
      </p>
    </div>
  )
}

// Variant 6: Minimalist with Line Connectors
function OrbitMinimalLines() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
      <div className="relative w-72 h-48 mx-auto">
        {/* Line connectors */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 192">
          <line x1="144" y1="96" x2="144" y2="24" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="144" y1="96" x2="48" y2="168" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="144" y1="96" x2="240" y2="168" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        </svg>
        
        {/* Center node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-14 h-14 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-white dark:text-black">Core</span>
          </div>
        </div>
        
        {/* Engineering */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 mb-1" />
          <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">Engineering</span>
        </div>
        
        {/* Design */}
        <div className="absolute bottom-0 left-4 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-rose-500 mb-1" />
          <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">Design</span>
        </div>
        
        {/* Business */}
        <div className="absolute bottom-0 right-4 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-amber-500 mb-1" />
          <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">Business</span>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold tracking-tight">The three pillars</h3>
        <p className="text-xs text-neutral-500 mt-1">All connected. All essential. One center.</p>
      </div>
    </div>
  )
}

// Variant 7: Stacked Rings with Legend
function OrbitStackedRings() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-200 p-8 text-white dark:text-black">
      <div className="flex items-center gap-8">
        {/* Rings visualization */}
        <div className="relative w-40 h-40 shrink-0">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/50" />
          <div className="absolute inset-4 rounded-full border-4 border-rose-500/50" />
          <div className="absolute inset-8 rounded-full border-4 border-amber-500/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center">
              <span className="text-xs font-bold text-black dark:text-white">Me</span>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-medium">Engineering</p>
              <p className="text-[10px] opacity-60">Systems, architecture, code</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div>
              <p className="text-sm font-medium">Design</p>
              <p className="text-[10px] opacity-60">UX, visual systems, intuition</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div>
              <p className="text-sm font-medium">Business</p>
              <p className="text-[10px] opacity-60">Strategy, users, growth</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm opacity-70 mt-6">
        Each layer adds context. At the center, they converge into something greater.
      </p>
    </div>
  )
}

// Variant 8: Floating Badges with Gravity
function OrbitFloatingBadges() {
  return (
    <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-8 overflow-hidden">
      <div className="relative w-full h-56">
        {/* Floating badges */}
        <div className="absolute top-4 left-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="px-4 py-2 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/30">
            <p className="text-xs font-bold text-white">Engineering</p>
            <p className="text-[9px] text-white/70">8 years deep</p>
          </div>
        </div>
        
        <div className="absolute top-8 right-8 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
          <div className="px-4 py-2 rounded-xl bg-rose-500 shadow-lg shadow-rose-500/30">
            <p className="text-xs font-bold text-white">Design</p>
            <p className="text-[9px] text-white/70">Strong intuition</p>
          </div>
        </div>
        
        <div className="absolute top-20 left-1/4 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }}>
          <div className="px-4 py-2 rounded-xl bg-amber-500 shadow-lg shadow-amber-500/30">
            <p className="text-xs font-bold text-white">Business</p>
            <p className="text-[9px] text-white/70">Founder mindset</p>
          </div>
        </div>
        
        {/* Gravity center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-400 to-neutral-600 dark:via-neutral-600 dark:to-neutral-400 mb-2" />
            <div className="px-6 py-3 rounded-2xl bg-neutral-900 dark:bg-white shadow-xl">
              <p className="text-sm font-bold text-white dark:text-black text-center">The Intersection</p>
              <p className="text-[10px] text-white/60 dark:text-black/60 text-center">Where I thrive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main export
export function OrbitingVariants() {
  const variants = [
    { name: 'External Labels', component: <OrbitExternalLabels /> },
    { name: 'Planet Tooltips', component: <OrbitPlanetLabels /> },
    { name: 'HUD / Radar Style', component: <OrbitHUD /> },
    { name: 'Soft Glowing Orbs', component: <OrbitGlowingSoft /> },
    { name: 'Spinning with Labels', component: <OrbitSpinningLabels /> },
    { name: 'Minimal Lines', component: <OrbitMinimalLines /> },
    { name: 'Stacked Rings + Legend', component: <OrbitStackedRings /> },
    { name: 'Floating Badges', component: <OrbitFloatingBadges /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">8 Orbiting Variants</p>
        <h2 className="text-xl font-bold tracking-tight">Labeled Orbital Concepts</h2>
      </div>
      
      <div className="space-y-8">
        {variants.map((v, i) => (
          <div key={v.name}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">{v.name}</span>
            </div>
            {v.component}
          </div>
        ))}
      </div>
    </div>
  )
}
