'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const lineData = [
  { month: 'Jan', users: 400, revenue: 2400 },
  { month: 'Feb', users: 600, revenue: 2210 },
  { month: 'Mar', users: 800, revenue: 2290 },
  { month: 'Apr', users: 1000, revenue: 2000 },
  { month: 'May', users: 1200, revenue: 2181 },
  { month: 'Jun', users: 1400, revenue: 2500 },
]

const barData = [
  { name: 'Product A', sales: 4000 },
  { name: 'Product B', sales: 3000 },
  { name: 'Product C', sales: 2000 },
  { name: 'Product D', sales: 2780 },
  { name: 'Product E', sales: 1890 },
]

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
]

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899']

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Monitor your business metrics and performance data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Visitors</h3>
          <p className="text-3xl font-bold">28,456</p>
          <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold">3.24%</p>
          <p className="text-xs text-green-600 mt-2">↑ 0.5% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg. Order Value</h3>
          <p className="text-3xl font-bold">$287</p>
          <p className="text-xs text-red-600 mt-2">↓ 5% from last month</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Growth Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Sales by Product</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Device Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Top Pages</h2>
          <div className="space-y-4">
            {[
              { page: '/dashboard', views: 4521, users: 2123 },
              { page: '/products', views: 3421, users: 1832 },
              { page: '/about', views: 2341, users: 1023 },
              { page: '/contact', views: 1234, users: 832 },
              { page: '/pricing', views: 823, users: 621 },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{item.page}</p>
                  <p className="text-xs text-muted-foreground">{item.users} users</p>
                </div>
                <p className="font-bold text-sm">{item.views}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
