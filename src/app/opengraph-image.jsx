import { ImageResponse } from 'next/og'

export const alt = 'Ankit Panda — developer and IB Diploma student'
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
          background: '#000000',
          color: '#ededed',
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
                border: '1px solid #333333',
                background: '#ededed',
                color: '#000000',
                fontSize: 27,
                fontWeight: 800,
              }}
            >
              A
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2.5 }}>ANKIT PANDA</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, letterSpacing: 1.5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#ededed' }} />
            CHARLOTTE, NORTH CAROLINA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 0.9, letterSpacing: -7 }}>
            Developer.
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26 }}>
            <div style={{ color: '#8f8f8f', fontSize: 108, fontWeight: 700, lineHeight: 0.95, letterSpacing: -7 }}>
              Student. Builder.
            </div>
            <div style={{ width: 22, height: 22, marginBottom: 17, borderRadius: 999, background: '#ededed' }} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid #242424',
            paddingTop: 20,
            fontSize: 17,
            color: '#737373',
          }}
        >
          <div>SOFTWARE · APPLIED MATHEMATICS · QUANTITATIVE FINANCE</div>
          <div>CLASS OF 2028 →</div>
        </div>
      </div>
    ),
    size,
  )
}
