'use client'

// Section 1: Bold Statement with Floating Tags
function SectionBoldStatement() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 p-8 text-white dark:text-black">
      <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4">What makes me different</p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">
        I'm not the best at any one thing.
        <br />
        <span className="opacity-60">I'm dangerous at all three.</span>
      </h2>
      <p className="text-sm opacity-70 leading-relaxed max-w-md mb-6">
        Most engineers can't design. Most designers can't ship. Most business minds can't build. 
        I operate at the intersection — where technical depth meets design intuition meets business sense.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs">Engineering</span>
        <span className="px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-xs">Design</span>
        <span className="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-xs">Business</span>
      </div>
    </div>
  )
}

// Section 2: Three Columns Converging
function SectionThreeColumns() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <div className="grid grid-cols-3 divide-x divide-neutral-200 dark:divide-neutral-800">
        <div className="p-5 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-blue-600 dark:text-blue-400 text-lg">⚡</span>
          </div>
          <p className="text-xs font-semibold mb-1">Engineer</p>
          <p className="text-[10px] text-neutral-500 leading-relaxed">8 years shipping at scale. React, TS, mobile, backend.</p>
        </div>
        <div className="p-5 text-center">
          <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-rose-600 dark:text-rose-400 text-lg">✦</span>
          </div>
          <p className="text-xs font-semibold mb-1">Designer</p>
          <p className="text-[10px] text-neutral-500 leading-relaxed">Strong intuition for UX, typography, and visual systems.</p>
        </div>
        <div className="p-5 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mx-auto mb-3">
            <span className="text-amber-600 dark:text-amber-400 text-lg">◆</span>
          </div>
          <p className="text-xs font-semibold mb-1">Founder</p>
          <p className="text-[10px] text-neutral-500 leading-relaxed">Built EZZRA from zero. Understand users, markets, growth.</p>
        </div>
      </div>
      <div className="px-5 py-4 bg-neutral-50 dark:bg-neutral-900 text-center border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm font-medium">The rare combination that lets me build products end-to-end.</p>
      </div>
    </div>
  )
}

// Section 3: Venn with Quote
function SectionVennQuote() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
      <div className="flex items-center gap-6">
        {/* Mini Venn */}
        <div className="relative w-32 h-28 shrink-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/30" />
          <div className="absolute bottom-0 left-1 w-16 h-16 rounded-full bg-rose-500/15 border border-rose-500/30" />
          <div className="absolute bottom-0 right-1 w-16 h-16 rounded-full bg-amber-500/15 border border-amber-500/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white" />
        </div>
        
        <div className="flex-1">
          <blockquote className="text-lg font-medium tracking-tight mb-2">
            "I build like an engineer, think like a designer, and decide like a founder."
          </blockquote>
          <p className="text-xs text-neutral-500 leading-relaxed">
            This intersection is where I thrive — translating complex problems into elegant, 
            user-focused solutions that actually ship.
          </p>
        </div>
      </div>
    </div>
  )
}

// Section 4: Gradient Bar Spectrum
function SectionGradientSpectrum() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
      <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">My sweet spot</p>
      
      <div className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-rose-500 to-amber-500 mb-4" />
      
      <div className="flex justify-between text-[10px] text-neutral-500 mb-6">
        <span>Pure Engineering</span>
        <span>Pure Design</span>
        <span>Pure Business</span>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0.5 h-4 bg-neutral-900 dark:bg-white" />
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 text-center">
          <p className="text-sm font-medium mb-1">I live here — in the middle</p>
          <p className="text-xs text-neutral-500">
            Strong enough in each to be dangerous. Fluent enough to bridge the gaps.
          </p>
        </div>
      </div>
    </div>
  )
}

// Section 5: Side-by-Side Comparison
function SectionComparison() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
        <div className="p-5">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3">What I'm not</p>
          <ul className="space-y-2 text-xs text-neutral-500">
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px]">✕</span>
              The best algorithm specialist
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px]">✕</span>
              A pixel-perfect UI designer
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px]">✕</span>
              A pure business strategist
            </li>
          </ul>
        </div>
        <div className="p-5 bg-neutral-50 dark:bg-neutral-900">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3">What I am</p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</span>
              An engineer with design intuition
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</span>
              A builder with business sense
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</span>
              Someone who ships end-to-end
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Section 6: Animated Orbiting Circles
function SectionOrbitingCircles() {
  return (
    <div className="rounded-2xl bg-neutral-900 dark:bg-neutral-100 p-8 text-white dark:text-black text-center">
      <div className="relative w-48 h-48 mx-auto mb-6">
        {/* Orbit rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-white/20 dark:border-black/20 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-6 rounded-full border border-dashed border-white/20 dark:border-black/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-12 rounded-full border border-dashed border-white/20 dark:border-black/20 animate-spin" style={{ animationDuration: '10s' }} />
        
        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-rose-500 to-amber-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-rose-500" />
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-amber-500" />
      </div>
      
      <h3 className="text-xl font-bold tracking-tight mb-2">Everything orbits the product</h3>
      <p className="text-sm opacity-70 max-w-xs mx-auto">
        Engineering, design, and business thinking — all in service of building something people love.
      </p>
    </div>
  )
}

// Section 7: Card with Blurred Background
function SectionGlassCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-400/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-rose-400/40 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-32 h-32 rounded-full bg-amber-400/40 blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-black" />
            <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-white dark:border-black" />
            <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white dark:border-black" />
          </div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 pt-1">
            Three disciplines. One mindset.
          </div>
        </div>
        
        <h3 className="text-xl font-bold tracking-tight mb-3">
          The T-shaped professional,<br />
          <span className="text-neutral-500">with three vertical bars.</span>
        </h3>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I've spent years building depth in engineering while cultivating strong intuitions 
          in design and business. The result? I can own a product from concept to launch.
        </p>
      </div>
    </div>
  )
}

// Section 8: Timeline/Journey Style
function SectionJourney() {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
      <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">How I got here</p>
      
      <div className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-700 space-y-6">
        <div className="relative">
          <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-blue-500" />
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Started as an Engineer</p>
          <p className="text-[11px] text-neutral-500">Built systems at scale. Learned to ship fast and reliably.</p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-rose-500" />
          <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-1">Developed Design Intuition</p>
          <p className="text-[11px] text-neutral-500">Obsessed over UX. Started noticing what others missed.</p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-amber-500" />
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Built a Business</p>
          <p className="text-[11px] text-neutral-500">Co-founded EZZRA. Learned what it takes to create value.</p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-neutral-900 dark:bg-white -ml-0.5" />
          <p className="text-sm font-bold mb-1">Now: The Intersection</p>
          <p className="text-[11px] text-neutral-500">Where all three combine to build products that matter.</p>
        </div>
      </div>
    </div>
  )
}

// Main export with all section demos
export function IntersectionSections() {
  const sections = [
    { name: 'Bold Statement', component: <SectionBoldStatement /> },
    { name: 'Three Columns', component: <SectionThreeColumns /> },
    { name: 'Venn with Quote', component: <SectionVennQuote /> },
    { name: 'Gradient Spectrum', component: <SectionGradientSpectrum /> },
    { name: 'Comparison', component: <SectionComparison /> },
    { name: 'Orbiting Circles', component: <SectionOrbitingCircles /> },
    { name: 'Glass Card', component: <SectionGlassCard /> },
    { name: 'Journey Timeline', component: <SectionJourney /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">8 Full Section Demos</p>
        <h2 className="text-xl font-bold tracking-tight">Homepage-Ready Sections</h2>
        <p className="text-sm text-neutral-500 mt-2">Each with example copy you can customize</p>
      </div>
      
      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={section.name}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">{section.name}</span>
            </div>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  )
}
