'use client'

import { usePathname } from 'next/navigation'
import { HomeScreen } from './home-screen'
import { AboutScreen, CommissionsScreen, DepositScreen, EditProfileScreen, NewsScreen, RewardsScreen, SalaryScreen, SessionsScreen } from './screens'
import { AccountsScreen, InvestmentsScreen, InviteScreen, LeagueScreen, NotificationsScreen, PromoScreen, RanksScreen, WelcomeAboutScreen } from './remaining-screens'
import { FinalWhatsNew, FullLeague, LeaguePodium, ProfileSecurity, SalaryLevels, Support, Transactions, WithdrawalHistory, WithdrawalProofs } from './final-screens'
import { AchievementScreen, CommunityScreen, ValuesAboutScreen } from './reference-screens'
import DashboardRoute from './routes/dashboard/dashboard'
import { Deposit as DepositRoute, DepositHistory as DepositHistoryRoute } from './routes/deposit/deposit'
import { Withdrawals as WithdrawalsRoute } from './routes/withdrawals/withdrawals'
import { TeamScreen as TeamRoute, TeamRewardsFull as TeamRewardsRoute } from './routes/team/team'
import { ProfileScreen as ProfileRoute } from './routes/profile/profile'
import { PoolsScreen as PoolsRoute, InvestmentsScreen as InvestmentsRoute, PoolDetailScreen as PoolDetailRoute, PoolConfirm as PoolConfirmRoute } from './routes/pools/pools'
import { SalaryScreen as SalaryRoute } from './routes/salary/salary'
import { RewardsScreen as RewardsRoute } from './routes/rewards/rewards'
import { CommunityScreen as CommunityRoute } from './routes/community/community'
import { AboutScreen as AboutRoute, ValuesAboutScreen as ValuesAboutRoute, WelcomeAboutScreen as WelcomeRoute } from './routes/about/about'
import { LeagueScreen as LeagueRoute, FullLeague as FullLeagueRoute, LeaguePodium as LeaguePodiumRoute } from './routes/league/league'
import { Support as SupportRoute } from './routes/support/support'

/** Single source of truth for pages served by / and the catch-all route. */
export function RouteScreen() {
  const pathname = usePathname()
  const routes: Record<string, React.ComponentType> = {
    '/': HomeScreen,
    '/pools': PoolsRoute,
    '/salary': SalaryRoute,
    '/rewards': RewardsRoute,
    '/commissions': CommissionsScreen,
    '/news': NewsScreen,
    '/whats-new': NewsScreen,
    '/sessions': SessionsScreen,
    '/deposit-history': DepositHistoryRoute,
    '/profile': ProfileRoute,
    '/edit-profile': EditProfileScreen,
    '/about': AboutRoute,
    '/promo': PromoScreen,
    '/accounts': AccountsScreen,
    '/invite': InviteScreen,
    '/league': LeagueRoute,
    '/investments': InvestmentsRoute,
    '/notifications': NotificationsScreen,
    '/deposit': DepositRoute,
    '/pool-detail': PoolDetailRoute,
    '/team-rewards': TeamRewardsRoute,
    '/ranks': RanksScreen,
    '/team': TeamRoute,
    '/welcome': WelcomeRoute,
    '/whats-new-full': FinalWhatsNew,
    '/league-full': FullLeagueRoute,
    '/league-podium': LeaguePodiumRoute,
    '/transactions': Transactions,
    '/withdrawal-history': WithdrawalHistory,
    '/withdrawal-proofs': WithdrawalProofs,
    '/support': SupportRoute,
    '/salary-levels': SalaryLevels,
    '/pool-confirm': PoolConfirmRoute,
    '/team-rewards-full': TeamRewardsRoute,
    '/profile-security': ProfileSecurity,
    '/dashboard-detail': DashboardRoute,
    '/community': CommunityRoute,
    '/achievement': AchievementScreen,
    '/values-about': ValuesAboutRoute,
    '/withdraw-funds': WithdrawalsRoute,
  }
  const Screen = routes[pathname] ?? HomeScreen
  return <Screen />
}
