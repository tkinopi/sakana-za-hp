import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '炭と土鍋 魚座 | 福岡・薬院の海鮮居酒屋',
  description: '福岡市薬院の海鮮居酒屋「炭と土鍋 魚座」。市場直送の鮮魚と炭火焼き、名物の土鍋ご飯。いけすから取り出す活魚料理をご堪能ください。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
