'use client'

// Demo 1: Classic 3-Circle Venn Diagram
function VennClassic() {
  return (
    <div className="relative w-64 h-56 mx-auto">
      {/* Engineering circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/20 dark:bg-blue-400/20 border-2 border-blue-500/40 dark:border-blue-400/40" />
      {/* Design circle */}
      <div className="absolute bottom-0 left-4 w-32 h-32 rounded-full bg-rose-500/20 dark:bg-rose-400/20 border-2 border-rose-500/40 dark:border-rose-400/40" />
      {/* Business circle */}
      <div className="absolute bottom-0 right-4 w-32 h-32 rounded-full bg-amber-500/20 dark:bg-amber-400/20 border-2 border-amber-500/40 dark:border-amber-400/40" />
      
      {/* Labels */}
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-medium text-blue-600 dark:text-blue-400">Engineering</span>
      <span className="absolute bottom-2 left-6 text-[10px] font-medium text-rose-600 dark:text-rose-400">Design</span>
      <span className="absolute bottom-2 right-6 text-[10px] font-medium text-amber-600 dark:text-amber-400">Business</span>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white" />
    </div>
  )
}

// Demo 2: Minimalist Overlapping Lines
function LinesMinimal() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-16 w-64">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        
        {/* Intersection point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
      </div>
      <div className="flex gap-6 text-[10px]">
        <span className="text-blue-600 dark:text-blue-400">Engineering</span>
        <span className="text-rose-600 dark:text-rose-400">Design</span>
        <span className="text-amber-600 dark:text-amber-400">Business</span>
      </div>
    </div>
  )
}

// Demo 3: Concentric Rings with "Me" at Center
function ConcentricRings() {
  return (
    <div className="relative w-56 h-56 mx-auto">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700 flex items-center justify-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-black px-1">Engineering</span>
      </div>
      <div className="absolute inset-6 rounded-full border-2 border-dashed border-rose-300 dark:border-rose-700 flex items-center justify-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium text-rose-600 dark:text-rose-400 bg-white dark:bg-black px-1">Design</span>
      </div>
      <div className="absolute inset-12 rounded-full border-2 border-dashed border-amber-300 dark:border-amber-700 flex items-center justify-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium text-amber-600 dark:text-amber-400 bg-white dark:bg-black px-1">Business</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
          <span className="text-xs font-bold text-white dark:text-black">Me</span>
        </div>
      </div>
    </div>
  )
}

// Demo 4: Triangle with Gradient Center
function TriangleGradient() {
  return (
    <div className="relative w-64 h-56 mx-auto">
      {/* Triangle vertices */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-blue-500" />
        <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">Engineering</span>
      </div>
      <div className="absolute bottom-0 left-4 flex flex-col items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-rose-500" />
        <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">Design</span>
      </div>
      <div className="absolute bottom-0 right-4 flex flex-col items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-amber-500" />
        <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">Business</span>
      </div>
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 224">
        <line x1="128" y1="16" x2="32" y2="192" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="128" y1="16" x2="224" y2="192" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="32" y1="192" x2="224" y2="192" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      </svg>
      
      {/* Center gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-rose-500 to-amber-500 opacity-60 blur-sm" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-700" />
    </div>
  )
}

// Demo 5: Horizontal Pills Merging
function MergingPills() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center -space-x-4">
        <div className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 z-10">
          <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Engineering</span>
        </div>
        <div className="px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/40 border border-rose-200 dark:border-rose-800 z-20">
          <span className="text-xs font-medium text-rose-700 dark:text-rose-300">Design</span>
        </div>
        <div className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 z-10">
          <span className="text-xs font-medium text-amber-700 dark:text-amber-300">Business</span>
        </div>
      </div>
      <div className="w-0.5 h-6 bg-neutral-300 dark:bg-neutral-700" />
      <div className="px-4 py-2 rounded-full bg-neutral-900 dark:bg-white">
        <span className="text-xs font-bold text-white dark:text-black">The Intersection</span>
      </div>
    </div>
  )
}

// Demo 6: Card Stack Perspective
function CardStack() {
  return (
    <div className="relative w-64 h-44 mx-auto perspective-500">
      <div className="absolute inset-0 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 transform -rotate-6 translate-y-2">
        <span className="absolute bottom-3 left-4 text-[10px] font-medium text-blue-600 dark:text-blue-400">Engineering</span>
      </div>
      <div className="absolute inset-0 rounded-xl bg-rose-100 dark:bg-rose-900/40 border border-rose-200 dark:border-rose-800 transform rotate-3 -translate-y-1">
        <span className="absolute bottom-3 left-4 text-[10px] font-medium text-rose-600 dark:text-rose-400">Design</span>
      </div>
      <div className="absolute inset-0 rounded-xl bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 transform rotate-6 translate-y-2">
        <span className="absolute bottom-3 right-4 text-[10px] font-medium text-amber-600 dark:text-amber-400">Business</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-3 py-1.5 rounded-full bg-neutral-900 dark:bg-white shadow-lg">
          <span className="text-[11px] font-bold text-white dark:text-black">Where I thrive</span>
        </div>
      </div>
    </div>
  )
}

// Demo 7: Radar/Spider Style
function RadarStyle() {
  return (
    <div className="relative w-56 h-56 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Background grid */}
        <polygon points="100,20 170,160 30,160" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        <polygon points="100,50 150,140 50,140" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        <polygon points="100,80 130,120 70,120" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        
        {/* Filled area */}
        <polygon 
          points="100,35 155,145 45,145" 
          fill="url(#radarGradient)" 
          fillOpacity="0.3"
          stroke="url(#radarGradient)"
          strokeWidth="2"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        
        {/* Vertex dots */}
        <circle cx="100" cy="35" r="4" fill="#3b82f6" />
        <circle cx="155" cy="145" r="4" fill="#f43f5e" />
        <circle cx="45" cy="145" r="4" fill="#f59e0b" />
      </svg>
      
      {/* Labels */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-medium text-blue-600 dark:text-blue-400">Engineering</span>
      <span className="absolute bottom-0 right-2 text-[10px] font-medium text-rose-600 dark:text-rose-400">Design</span>
      <span className="absolute bottom-0 left-2 text-[10px] font-medium text-amber-600 dark:text-amber-400">Business</span>
    </div>
  )
}

// Demo 8: Modern Blurred Orbs
function BlurredOrbs() {
  return (
    <div className="relative w-72 h-48 mx-auto overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900/50">
      {/* Floating orbs */}
      <div className="absolute top-4 left-8 w-24 h-24 rounded-full bg-blue-400/50 dark:bg-blue-500/40 blur-xl" />
      <div className="absolute bottom-4 left-16 w-20 h-20 rounded-full bg-rose-400/50 dark:bg-rose-500/40 blur-xl" />
      <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-amber-400/50 dark:bg-amber-500/40 blur-xl" />
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">At the intersection of</span>
        <div className="flex gap-2 mt-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/50 text-blue-600 dark:text-blue-400">Engineering</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/50 text-rose-600 dark:text-rose-400">Design</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/50 text-amber-600 dark:text-amber-400">Business</span>
        </div>
      </div>
    </div>
  )
}

// Main export with all demos
export function IntersectionDemos() {
  const demos = [
    { name: 'Classic Venn', component: <VennClassic /> },
    { name: 'Minimal Lines', component: <LinesMinimal /> },
    { name: 'Concentric Rings', component: <ConcentricRings /> },
    { name: 'Triangle Gradient', component: <TriangleGradient /> },
    { name: 'Merging Pills', component: <MergingPills /> },
    { name: 'Card Stack', component: <CardStack /> },
    { name: 'Radar Style', component: <RadarStyle /> },
    { name: 'Blurred Orbs', component: <BlurredOrbs /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">8 Intersection Demos</p>
        <h2 className="text-xl font-bold tracking-tight">Where Engineering Meets Design & Business</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {demos.map((demo, i) => (
          <div key={demo.name} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-mono text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm font-medium">{demo.name}</span>
            </div>
            {demo.component}
          </div>
        ))}
      </div>
    </div>
  )
}
