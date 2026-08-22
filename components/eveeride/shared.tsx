import Link from 'next/link'
import { FaArrowRight, FaCheck, FaCircleInfo, FaLock, FaUsers } from 'react-icons/fa6'

export function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="section-label">{children}</div> }

export function IconTile({ children, tone = 'green' }: { children: React.ReactNode; tone?: string }) { return <span className={`icon-tile ${tone}`}>{children}</span> }

export function MenuRow({ href = '#', icon, tone = 'green', title, description }: { href?: string; icon: React.ReactNode; tone?: string; title: string; description: string }) {
  return <Link href={href} className="menu-row"><IconTile tone={tone}>{icon}</IconTile><span className="menu-copy"><strong>{title}</strong><small>{description}</small></span><FaArrowRight className="row-arrow" /></Link>
}

export function EmptyState({ icon = <FaUsers />, title, description = '' }: { icon?: React.ReactNode; title: string; description?: string }) { return <div className="empty-state"><div className="empty-icon">{icon}</div><h2>{title}</h2><p>{description}</p></div> }

export function InfoCallout({ title, children }: { title: string; children: React.ReactNode }) { return <div className="info-callout"><IconTile tone="blue"><FaCircleInfo /></IconTile><div><strong>{title}</strong><div>{children}</div></div></div> }

export const levels = [
  ['Level 1', 'Rs. 100K – 199K', 'Rs. 1,500'], ['Level 2', 'Rs. 200K – 349K', 'Rs. 3,000'], ['Level 3', 'Rs. 350K – 499K', 'Rs. 5,000'], ['Level 4', 'Rs. 500K – 749K', 'Rs. 8,000'], ['Level 5', 'Rs. 750K – 999K', 'Rs. 12,000'], ['Level 6', 'Rs. 1,000K – 1,499K', 'Rs. 18,000'], ['Level 7', 'Rs. 1,500K – 1,999K', 'Rs. 25,000'], ['Level 8', 'Rs. 20L+', 'Rs. 35,000'],
]

export function SalaryLevelList({ compact = false }: { compact?: boolean }) { return <div className="level-list">{levels.slice(0, compact ? 4 : 8).map(([name, range, amount], index) => <div className="level-card" key={name}><span className="level-badge">L{index + 1}</span><div><strong>{name}</strong><small>{range}</small></div><div className="level-pay"><strong>{amount}</strong><small>per week</small></div><span className="lock"><FaLock /></span></div>)}</div> }

export function ProgressBar({ value = 0 }: { value?: number }) { return <div className="progress-track"><span style={{ width: `${value}%` }} /></div> }

export function UpdateItem({ icon, tone = 'blue', title, children }: { icon: React.ReactNode; tone?: string; title: string; children: React.ReactNode }) { return <div className="update-item"><IconTile tone={tone}>{icon}</IconTile><div><strong>{title}</strong><p>{children}</p></div></div> }

export function BottomSpacing() { return <div className="bottom-spacing" /> }
