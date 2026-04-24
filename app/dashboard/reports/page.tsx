'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Eye, Trash2 } from 'lucide-react'

const reports = [
  {
    id: 1,
    name: 'Monthly Sales Report',
    type: 'Sales',
    dateCreated: '2024-04-15',
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'Q1 Analytics Summary',
    type: 'Analytics',
    dateCreated: '2024-04-10',
    size: '1.8 MB',
  },
  {
    id: 3,
    name: 'User Activity Report',
    type: 'Activity',
    dateCreated: '2024-04-05',
    size: '3.2 MB',
  },
  {
    id: 4,
    name: 'Revenue Forecast',
    type: 'Forecast',
    dateCreated: '2024-03-28',
    size: '1.5 MB',
  },
]

export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-2">Access and manage your business reports</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Generate Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border-2 border-dashed">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold mb-1">Create New Report</h3>
            <p className="text-sm text-muted-foreground mb-4">Generate custom reports</p>
            <Button variant="outline" size="sm">Create</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Monthly Reports</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-sm text-muted-foreground mt-2">Generated this year</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Storage</h3>
          <p className="text-2xl font-bold text-purple-600">45.2 MB</p>
          <p className="text-sm text-muted-foreground mt-2">of 100 MB used</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{report.name}</h3>
                <div className="flex gap-4 mt-1">
                  <span className="text-xs text-muted-foreground">{report.type}</span>
                  <span className="text-xs text-muted-foreground">{report.dateCreated}</span>
                  <span className="text-xs text-muted-foreground">{report.size}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-100"
                  title="View"
                >
                  <Eye size={18} className="text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-green-100"
                  title="Download"
                >
                  <Download size={18} className="text-green-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-red-100"
                  title="Delete"
                >
                  <Trash2 size={18} className="text-red-600" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
