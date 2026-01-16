'use client';

interface VinylProps {
  title: string;
  artist: string;
  image: string;
}

export function Vinyl({ title, artist, image }: VinylProps) {
    return (
        <div style={{maxWidth: '300px', margin: 'auto', marginBottom: '4rem'}}>
            <p style={{
                fontFamily: 'monospace',
                textAlign: 'center',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                color: '#ededed'
            }}>
                [ON REPEAT AT THE TIME OF WRITING]
            </p>
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
                    background: 'radial-gradient(circle at 35% 35%, #1a1a1a 0%, #0a0a0a 40%, #000 100%)',
                    transition: 'right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '-4px 4px 16px rgba(0,0,0,0.4), inset 2px -2px 8px rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 0
                }}
                     className="vinyl-disc">
                    {/* Vinyl grooves effect */}
                    <div style={{
                        position: 'absolute',
                        inset: '10%',
                        borderRadius: '50%',
                        background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 3px)',
                        pointerEvents: 'none'
                    }}/>

                    {/* Center label */}
                    <div style={{
                        width: '30%',
                        height: '30%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 40% 40%, #2a2a2a, #1a1a1a, #0a0a0a)',
                        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5), 0 1px 2px rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        {/* Center hole */}
                        <div style={{
                            width: '25%',
                            height: '25%',
                            borderRadius: '50%',
                            background: '#000',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)'
                        }}/>
                    </div>
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
                        src={image}
                        alt={`${title} by ${artist}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        className="vinyl-cover"
                    />
                    {/* Grainy retro overlay */}
                    <div className="grain-overlay" style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        pointerEvents: 'none',
                        opacity: 0.12,
                        mixBlendMode: 'overlay'
                    }} />
                </div>
            </div>
            <p style={{
                fontFamily: 'monospace',
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: '#ededed',
                textTransform: "uppercase",
            }}>
                [{title} – {artist}]
            </p>
            <style jsx global>{`
                @keyframes grain {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-2%, -3%); }
                    20% { transform: translate(-3%, 2%); }
                    30% { transform: translate(2%, -2%); }
                    40% { transform: translate(-3%, 3%); }
                    50% { transform: translate(-2%, 1%); }
                    60% { transform: translate(3%, 0); }
                    70% { transform: translate(0, 2%); }
                    80% { transform: translate(-3%, -1%); }
                    90% { transform: translate(2%, 1%); }
                }
                
                .grain-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    animation: grain 8s steps(10) infinite;
                }
            `}</style>
            <style jsx>{`
                div:hover .vinyl-disc {
                    right: -40% !important;
                }
            `}</style>
        </div>
    );
}
