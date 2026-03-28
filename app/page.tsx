'use client'
import { useState } from 'react'

export default function Home() {
  const [tab, setTab] = useState('top')

  const navItems = [
    { id: 'top', label: 'トップ' },
    { id: 'menu', label: 'メニュー' },
    { id: 'info', label: '店舗情報' },
    { id: 'reserve', label: 'ご予約' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── HEADER ── */}
      <header style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100, padding: '0 40px' }}>
        <div className="site-header-inner">
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)' }}>炭と土鍋</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--text-muted)', marginTop: '-2px' }}>魚　座</div>
          </div>
          <nav className="site-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: tab === item.id ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  padding: '8px 18px',
                  cursor: 'pointer',
                  borderBottom: tab === item.id ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── TOP TAB ── */}
      {tab === 'top' && (
        <main>
          {/* Hero */}
          <section className="hero-grid" style={{ minHeight: '520px', background: 'var(--bg2)' }}>
            <div className="hero-pad" style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.4em', marginBottom: '20px' }}>FUKUOKA · YAKUIN</div>
              <h1 className="hero-title" style={{ color: 'var(--text)' }}>
                炭火と生簀、<br />旬の海鮮を。
              </h1>
              <p style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.9, maxWidth: '360px' }}>
                市場直送の鮮魚を炭火でじっくり焼き上げ、<br />
                土鍋で炊いたご飯とともにどうぞ。<br />
                薬院の路地裏に灯る、一夜限りの食卓。
              </p>
              <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setTab('reserve')}
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 32px',
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ご予約はこちら
                </button>
                <button
                  onClick={() => setTab('menu')}
                  style={{
                    background: 'none',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    padding: '14px 32px',
                    fontSize: '14px',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  メニューを見る
                </button>
              </div>
            </div>
            <div className="hero-deco" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative flame/ember pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 60% 70%, rgba(232,88,32,0.25) 0%, transparent 60%)',
              }} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '12px',
              }}>
                <div style={{ fontSize: '80px', opacity: 0.15 }}>🐟</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.4em' }}>SUMIYAKI · IKESSU · DONABE</div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="main-pad" style={{ paddingTop: '80px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.4em', marginBottom: '10px' }}>OUR FEATURES</div>
              <h2 className="section-title" style={{ color: 'var(--text)' }}>魚座の三つのこだわり</h2>
            </div>
            <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginBottom: '48px' }} />
            <div className="grid-3">
              {[
                { en: '01', title: '市場直送の鮮魚', body: '毎朝、地元・全国各地の市場から直送される鮮魚。生簀から取り出したばかりの活魚料理が自慢です。' },
                { en: '02', title: '炭火焼きの技', body: '備長炭でじっくり焼き上げることで引き出される、素材本来の旨味。香ばしい炭火の香りとともにどうぞ。' },
                { en: '03', title: '土鍋炊きご飯', body: '炊き立ての土鍋ご飯はもちもちふっくら。厳選した銘柄米を、一釜ずつ丁寧に炊き上げています。' },
              ].map(f => (
                <div key={f.en} style={{ background: 'var(--surface)', padding: '32px 28px', borderTop: '2px solid var(--accent)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dim)', marginBottom: '16px' }}>{f.en}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.1em' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.85 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Info bar */}
          <section style={{ background: 'var(--surface)', padding: '32px 40px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="info-bar">
              {[
                { label: '営業時間', value: '15:00 〜 深夜0:00（L.O. 23:30）' },
                { label: '定休日', value: '不定休' },
                { label: '住所', value: '福岡市中央区薬院4-3-10 1F' },
                { label: '電話', value: '092-400-1064' },
              ].map(i => (
                <div key={i.label}>
                  <div style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.3em', marginBottom: '4px' }}>{i.label}</div>
                  <div style={{ fontSize: '15px', color: 'var(--text)', letterSpacing: '0.05em', wordBreak: 'break-all' }}>{i.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 40px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', letterSpacing: '0.3em', marginBottom: '24px' }}>RESERVATION</p>
            <h2 className="section-title" style={{ color: 'var(--text)', marginBottom: '32px' }}>ご予約・お問い合わせ</h2>
            <button
              onClick={() => setTab('reserve')}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                padding: '18px 56px',
                fontSize: '15px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              お席を予約する
            </button>
          </section>
        </main>
      )}

      {/* ── MENU TAB ── */}
      {tab === 'menu' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.4em', marginBottom: '10px' }}>MENU</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>お品書き</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginTop: '16px' }} />
          </div>

          {[
            {
              category: '刺身・鮮魚',
              items: [
                { name: '本日の刺身盛り合わせ', price: '1,580', note: '旬の鮮魚3〜5種' },
                { name: '活イカの活き造り', price: '時価', note: '生簀から直接' },
                { name: '鯛のお造り', price: '880', note: '' },
                { name: 'カルパッチョ', price: '980', note: '本日の白身魚使用' },
              ],
            },
            {
              category: '炭火焼き',
              items: [
                { name: '真鯛の炭火塩焼き', price: '1,280', note: '' },
                { name: '大エビの炭火焼き', price: '1,480', note: '2尾' },
                { name: '牡蠣の炭火焼き', price: '880', note: '2個' },
                { name: '野菜の炭火焼き盛り', price: '680', note: '7種' },
              ],
            },
            {
              category: '土鍋ご飯',
              items: [
                { name: '鯛ご飯（土鍋）', price: '1,480', note: '2〜3人前' },
                { name: '牡蠣ご飯（土鍋）', price: '1,580', note: '2〜3人前' },
                { name: '白ご飯（小釜）', price: '280', note: '一人前' },
              ],
            },
            {
              category: 'おつまみ・一品',
              items: [
                { name: 'タコの唐揚げ', price: '680', note: '' },
                { name: 'レバパテとデニッシュ', price: '780', note: '' },
                { name: '車海老の塩焼き', price: '1,280', note: '2尾' },
                { name: 'きんきの塩辛', price: '580', note: '' },
              ],
            },
            {
              category: 'コースプラン',
              items: [
                { name: 'おまかせコース', price: '4,500', note: '8品／お一人様' },
                { name: 'プレミアムコース', price: '6,800', note: '10品／お一人様' },
                { name: '飲み放題プラン追加', price: '1,980', note: '120分' },
              ],
            },
          ].map(cat => (
            <div key={cat.category} style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                ── {cat.category}
              </h3>
              <div className="grid-2-menu">
                {cat.items.map(item => (
                  <div key={item.name} style={{ background: 'var(--surface)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '15px', color: 'var(--text)', letterSpacing: '0.05em' }}>{item.name}</div>
                      {item.note && <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>{item.note}</div>}
                    </div>
                    <div style={{ fontSize: '15px', color: 'var(--accent)', whiteSpace: 'nowrap' }}>¥{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '24px' }}>※ 表示価格は税込みです。</p>
        </main>
      )}

      {/* ── INFO TAB ── */}
      {tab === 'info' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.4em', marginBottom: '10px' }}>SHOP INFO</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>店舗情報・アクセス</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginTop: '16px' }} />
          </div>
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              {[
                { label: '店名', value: '炭と土鍋 魚座' },
                { label: '業種', value: '海鮮居酒屋' },
                { label: '住所', value: '〒810-0022 福岡県福岡市中央区薬院4丁目3−10 1F' },
                { label: '最寄り駅', value: '福岡市地下鉄七隈線「薬院大通」駅 徒歩5分' },
                { label: '電話', value: '092-400-1064' },
                { label: '営業時間', value: '月〜日 15:00〜深夜0:00' },
                { label: '定休日', value: '不定休（Instagramでご確認ください）' },
                { label: '席数', value: '半個室・テーブル席 完備' },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', gap: '24px', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.15em', minWidth: '80px', paddingTop: '2px' }}>{r.label}</div>
                  <div style={{ fontSize: '15px', color: 'var(--text)', wordBreak: 'break-all' }}>{r.value}</div>
                </div>
              ))}
            </div>
            <div>
              {/* Map embed placeholder */}
              <div style={{ width: '100%', height: '320px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>📍</div>
                  <a
                    href="https://maps.google.com/?q=福岡市中央区薬院4-3-10"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={          rel="noopener noreferrer"
                    style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.1em' }}
                  >
                    Google マップで開く
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '24px', background: 'var(--surface)', padding: '24px', borderLeft: '3px solid var(--accent)' }}>
                <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '8px' }}>ACCESS</div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.9 }}>
                  福岡市地下鉄七隈線「薬院大通」駅4番出口より徒歩約5分。<br />
                  薬院エリアの静かな路地、アバンティ薬院1階にございます。
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ── RESERVE TAB ── */}
      {tab === 'reserve' && (
        <main className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.4em', marginBottom: '10px' }}>RESERVATION</div>
            <h2 className="section-title" style={{ color: 'var(--text)' }}>ご予約・お問い合わせ</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginTop: '16px' }} />
          </div>
          <div className="contact-grid">
            <div style={{ background: 'var(--surface)', padding: '40px 32px', borderTop: '2px solid var(--accent)' }}>
              <h3 style={{ fontSize: '17px', color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.1em' }}>お電話でのご予約</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
                ご予約はお電話が確実です。コース・飲み放題など、ご要望もお気軽にどうぞ。
              </p>
              <a
                href="tel:092-400-1064"
                style={{
                  display: 'block',
                  background: 'var(--accent)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '16px',
                  textDecoration: 'none',
                  fontSize: '22px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                }}
              >
                092-400-1064
              </a>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '12px', textAlign: 'center' }}>
                営業時間中（15:00〜23:30）
              </p>
            </div>
            <div style={{ background: 'var(--surface)', padding: '40px 32px', borderTop: '2px solid var(--border)' }}>
              <h3 style={{ fontSize: '17px', color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.1em' }}>Instagramからのご予約</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
                InstagramのDMでもご予約を承っております。写真で雰囲気もご確認ください。
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  textAlign: 'center',
                  padding: '16px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  letterSpacing: '0.15em',
                  whiteSpace: 'nowrap',
                }}
              >
                Instagram を開く
              </a>
            </div>
          </div>
          <div style={{ marginTop: '48px', background: 'var(--surface)', padding: '32px', borderLeft: '3px solid var(--gold)' }}>
            <h4 style={{ fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '16px' }}>ご予約の際のお願い</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '人数・希望日時・お名前をお知らせください',
                '誕生日・記念日など特別なご要望もお気軽にどうぞ',
                'コース・飲み放題は前日までのご予約をお勧めします',
                'キャンセルの際はお早めにご連絡をお願いいたします',
              ].map(item => (
                <li key={item} style={{ fontSize: '14px', color: 'var(--text-muted)', paddingLeft: '16px', borderLeft: '2px solid var(--text-dim)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '8px' }}>炭と土鍋 魚座</div>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
          〒810-0022 福岡市中央区薬院4-3-10 1F｜TEL: 092-400-1064
        </p>
        <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '16px' }}>© 2026 炭と土鍋 魚座 All rights reserved.</p>
      </footer>
    </div>
  )
}
