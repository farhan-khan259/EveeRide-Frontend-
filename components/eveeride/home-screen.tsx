'use client'

import Link from 'next/link'
import { FaArrowDown, FaArrowTrendUp, FaArrowUp, FaCamera, FaChartLine, FaComments, FaGift, FaMoneyBillWave, FaPiggyBank, FaTelegram, FaWhatsapp } from 'react-icons/fa6'
import { BellButton, BottomNav, BrandMark } from './app-shell'
import { BottomSpacing, IconTile, MenuRow, ProgressBar } from './shared'

const quick: [string, string, React.ReactNode, string][] = [
  ['Deposit', '/deposit', <FaArrowDown />, 'green'], ['Salary', '/salary', <FaMoneyBillWave />, 'purple'], ['Withdraw', '/withdraw-funds', <FaArrowUp />, 'green'],
  ['Promo Code', '/promo', <FaGift />, 'gold'], ['WD Proof', '/withdrawal-proofs', <FaCamera />, 'teal'], ['Pools', '/pools', <FaPiggyBank />, 'pink'],
]

export function HomeScreen() { return <>
  <section className="home-hero"><div className="home-top"><div className="home-brand"><BrandMark /><div><p>Good afternoon</p><h1>Muhammad Farhan</h1></div></div><div className="home-actions"><BellButton /><Link href="/profile" className="avatar">MF</Link></div></div><div className="balance-card"><div><small>Withdrawable Balance</small><strong>Rs. 0</strong><span>Available to withdraw</span></div><Link href="/profile">View wallet →</Link></div></section>
  <main className="content home-content"><div className="quick-grid">{quick.map(([label, href, icon, tone]) => <Link href={href} className="quick-card" key={label}><IconTile tone={tone}>{icon}</IconTile><strong>{label}</strong></Link>)}</div>
    <div className="promo-card"><div><strong>INVEST TODAY<br />GROW TOMORROW</strong><small>A small investment today can bring big returns tomorrow</small></div><FaArrowTrendUp /></div><div className="dots"><i /><b /></div>
    <div className="social-links"><Link href="/news"><span className="social whatsapp"><FaComments /></span><strong>Live Chat</strong></Link><Link href="/news"><span className="social whatsapp"><FaWhatsapp /></span><strong>WA Channel</strong></Link><Link href="/news"><span className="social telegram"><FaTelegram /></span><strong>TG Channel</strong></Link></div>
    <Link href="/rewards" className="team-reward-card"><IconTile tone="purple"><FaGift /></IconTile><div><strong>Team Rewards</strong><span>Next: Starter at Rs. 10,000</span></div><b>0/9 <FaArrowTrendUp /></b><ProgressBar /></Link>
    <div className="profile-menu-card"><MenuRow href="/salary" icon={<FaMoneyBillWave />} title="Weekly Salary" description="L1 team salary progress" /><MenuRow href="/commissions" icon={<FaGift />} tone="gold" title="Referral Rewards" description="Earn from referrals" /></div>
    <div className="profile-menu-card"><MenuRow href="/withdrawal-proofs" icon={<FaCamera />} title="Withdrawal Proofs" description="Community proof feed" /><MenuRow href="/achievement" icon={<FaGift />} tone="purple" title="Achievement Card" description="Share your investor card" /><MenuRow href="/notifications" icon={<FaComments />} tone="pink" title="Notifications" description="Alerts & updates" /><MenuRow href="/news" icon={<FaArrowTrendUp />} tone="gold" title="News & Updates" description="Platform announcements" /><MenuRow href="/support" icon={<FaComments />} tone="blue" title="Help & Support" description="Contact support team" /><MenuRow href="/about" icon={<FaChartLine />} tone="purple" title="About EveeRide" description="Our story, mission & values" /></div>
  </main><BottomSpacing /><BottomNav />
</> }
