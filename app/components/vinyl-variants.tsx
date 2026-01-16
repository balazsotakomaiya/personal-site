'use client';

// Variant 1: Classic Slide-Out
// Disc slides out from right edge on hover, smooth and elegant
export function VinylVariant1() {
  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        paddingBottom: '100%',
        overflow: 'visible'
      }}>
        {/* Vinyl Disc - behind the album */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '10%',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #d4af37, #c9a647, #b8952f)',
          transition: 'right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '-4px 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        }}
        className="vinyl-disc">
          <div style={{
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            background: '#333',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
          }} />
        </div>
        
        {/* Album Cover - in front */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 1
        }}>
          <img 
            src="https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop" 
            alt="Album Cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <p style={{ 
        fontFamily: 'monospace', 
        textAlign: 'center', 
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#000'
      }}>
        [LC - MEAN IT IN THE MORNING]
      </p>
      <style jsx>{`
        div:hover .vinyl-disc {
          right: -40% !important;
        }
      `}</style>
    </div>
  );
}
