'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, Users, BarChart3, Activity } from 'lucide-react'
import StatsCard from '@/components/dashboard/stats-card'

const stats = [
  {
    label: 'Total Users',
    value: '2,543',
    change: '+12%',
    icon: Users,
    color: 'from-blue-400 to-blue-600',
  },
  {
    label: 'Revenue',
    value: '$45,231',
    change: '+23%',
    icon: TrendingUp,
    color: 'from-green-400 to-green-600',
  },
  {
    label: 'Active Projects',
    value: '18',
    change: '+5',
    icon: BarChart3,
    color: 'from-purple-400 to-purple-600',
  },
  {
    label: 'Engagement Rate',
    value: '68%',
    change: '+8%',
    icon: Activity,
    color: 'from-orange-400 to-orange-600',
  },
]

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to your admin dashboard. Here&apos;s your business overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Activity Item {i}</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Completed</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="font-bold text-lg">3.2%</span>
              </div>
              <hr className="border-slate-200" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Avg Session</span>
                <span className="font-bold text-lg">2m 45s</span>
              </div>
              <hr className="border-slate-200" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Bounce Rate</span>
                <span className="font-bold text-lg">42%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
