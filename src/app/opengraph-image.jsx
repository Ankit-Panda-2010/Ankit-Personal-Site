import { ImageResponse } from 'next/og'

export const alt = 'Ankit — curious builder and product-minded developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f1efe9',
          color: '#11110f',
          padding: '58px 64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#11110f',
                color: '#f1efe9',
                fontSize: 27,
                fontWeight: 800,
              }}
            >
              A
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2.5 }}>ANKIT / PORTFOLIO</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, letterSpacing: 1.5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#35bd6b' }} />
            OPEN TO GOOD CONVERSATIONS
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 0.9, letterSpacing: -7 }}>
            I turn messy ideas
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26 }}>
            <div style={{ color: '#ff4d1c', fontSize: 108, fontWeight: 700, lineHeight: 0.95, letterSpacing: -7 }}>
              into useful things.
            </div>
            <div style={{ width: 22, height: 22, marginBottom: 17, borderRadius: 999, background: '#11110f' }} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid rgba(17,17,15,.25)',
            paddingTop: 20,
            fontSize: 17,
            color: '#5f5d57',
          }}
        >
          <div>PRODUCT THINKING · DEVELOPMENT · CREATIVE DIRECTION</div>
          <div>BUILDING WITH CURIOSITY →</div>
        </div>
      </div>
    ),
    size,
  )
}
