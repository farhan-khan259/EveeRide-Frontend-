'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowLeft, FaBell, FaChartColumn, FaHouse, FaPeopleGroup, FaUser } from 'react-icons/fa6'

// Keep the brand asset local so it works in every environment and offline installs.
export const logoUrl = '/logo.png'

const tabs = [
  { label: 'Home', href: '/', icon: FaHouse },
  { label: 'Pools', href: '/pools', icon: FaChartColumn },
  { label: 'Team', href: '/team', icon: FaPeopleGroup, floating: true },
  { label: 'Invite', href: '/commissions', icon: FaPeopleGroup },
  { label: 'Profile', href: '/profile', icon: FaUser },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="app-shell"><div className="app-frame">{children}</div></div>
}

export function BottomNav() {
  const pathname = usePathname()
  return <nav className="bottom-nav" aria-label="Primary navigation">
    {tabs.map(({ label, href, icon: Icon, floating }) => {
      const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
      return <Link key={label} href={href} className={`nav-item ${active ? 'active' : ''} ${floating ? 'nav-float' : ''}`}>
        <span className="nav-icon"><Icon /></span><span>{label}</span>
      </Link>
    })}
  </nav>
}

export function PageHeader({ title, subtitle, back = true, action }: { title: string; subtitle?: string; back?: boolean; action?: React.ReactNode }) {
  return <header className="page-header">
    <div className="header-leading">{back ? <Link href="/" aria-label="Back to home" className="back-button"><FaArrowLeft aria-hidden="true" /></Link> : <img className="header-logo" src={logoUrl} alt="EveeRide" />}</div>
    <div className="header-copy"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
    <div className="header-action">{action ?? <span />}</div>
  </header>
}

export function BrandMark() { return <img className="brand-mark" src={logoUrl} alt="EveeRide logo" /> }

export function BellButton() { return <Link className="icon-button" href="/notifications" aria-label="Notifications"><FaBell /><i /></Link> }
