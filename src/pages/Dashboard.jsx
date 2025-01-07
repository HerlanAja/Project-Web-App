import { useState } from 'react'
import { Search, Bell, Settings } from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const dailyActivity = [
  { day: 'Monday', mengurangi: 30, menambah: 45 },
  { day: 'Tuesday', mengurangi: 40, menambah: 30 },
  { day: 'Wednesday', mengurangi: 25, menambah: 65 },
  { day: 'Thursday', mengurangi: 50, menambah: 35 },
  { day: 'Friday', mengurangi: 35, menambah: 40 },
  { day: 'Saturday', mengurangi: 45, menambah: 50 },
  { day: 'Sunday', mengurangi: 55, menambah: 30 },
]

const monthlyHistory = [
  { month: 'Maret', amount: '1658.00', trend: 'up', label: 'Grafik Naik' },
  { month: 'April', amount: '1351.00', trend: 'down', label: 'Grafik Turun' },
  { month: 'Mei', amount: '1855.00', trend: 'up', label: 'Grafik Naik' },
]

const navItems = [
  { icon: '📊', label: 'Dashboard', active: true },
  { icon: '📝', label: 'Riwayat Tabungan' },
  { icon: '➕', label: 'Rencana baru' },
  { icon: '🎯', label: 'Target acara' },
  { icon: '✓', label: 'Validasi' },
]

const eventCards = [
  {
    title: 'Pernikahan',
    image: '../src/assets/pernikahan.jpg',
    description: 'Pintar Dalam Mengatur Keuangan Anda'
  },
  {
    title: 'Ulang Tahun',
    image: '/placeholder.svg?height=150&width=250',
    description: 'Pintar Dalam Mengatur Keuangan Anda'
  },
  {
    title: 'Rumah Impian',
    image: '/placeholder.svg?height=150&width=250',
    description: 'Pintar Dalam Mengatur Keuangan Anda'
  },
  {
    title: 'Reuni',
    image: '/placeholder.svg?height=150&width=250',
    description: 'Pintar Dalam Mengatur Keuangan Anda'
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            E<span className="text-blue-500">V</span>ENT
            <span className="block">FUNDLY</span>
          </h1>
        </div>

        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium ${item.active
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-4 w-full px-3">
          <button className="flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <span className="mr-3">🚪</span>
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Top Navigation */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
          <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="ml-2 bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Dashboard</span>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Event Cards */}
          <div className="mb-6 rounded-lg bg-[#1e1b4b] p-6 text-white">
            <h2 className="mb-2 text-xl font-semibold">Berbagai Keuangan Acara Telah Di Atur Disini</h2>
            <p className="mb-4 text-sm text-gray-300">Pintar Dalam Mengatur Keuangan Anda</p>
            <div className="grid grid-cols-4 gap-4">
              {eventCards.map((card, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-32 w-full object-cover"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="font-medium">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {/* Goals Tabungan */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-sm font-medium">Goals Tabungan</h3>
              <div className="relative aspect-square">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { name: "Acara A", value: 60 },
                      { name: "Acara B", value: 20 },
                      { name: "Acara C", value: 20 },
                    ]}
                  >
                    <Area
                      type="pie"
                      dataKey="value"
                      stroke="#2563eb"
                      fill="#3b82f6"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-sm text-gray-500">Progress</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Tabungan */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-sm font-medium">Progress Tabungan</h3>
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="stroke-current text-gray-200"
                      strokeWidth="10"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="stroke-current text-blue-500"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                      strokeDasharray="283"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-sm text-gray-500">Terkumpul</span>
                    <span className="text-lg font-bold">Rp300.000</span>
                    <span className="text-sm text-gray-500">Kurang</span>
                    <span className="text-lg font-bold">Rp100.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Pencapaian */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-sm font-medium">Timeline Pencapaian Target Tabungan</h3>
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="stroke-current text-gray-200"
                      strokeWidth="10"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="stroke-current text-blue-500"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-bold">138/300</div>
                    <div className="text-sm">
                      <div>Hari Capai: 138 HARI</div>
                      <div>Kurang Hari: 162 HARI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Chart and Monthly History */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Daily Activity Chart */}
            <div className="md:col-span-2 rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-sm font-medium">Aktivitas Tabungan Harian</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyActivity} margin={{ top: 20 }}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Bar dataKey="mengurangi" fill="#3b82f6" />
                    <Bar dataKey="menambah" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly History */}
            <div className="rounded-lg border bg-white p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Monthly History</h3>
                <button className="text-sm text-gray-500">More</button>
              </div>
              <div className="space-y-4">
                {monthlyHistory.map((item) => (
                  <div key={item.month} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.month}</p>
                      <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{item.amount}</span>
                      <span className={item.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {item.trend === 'up' ? '↑' : '↓'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full rounded-lg bg-indigo-900 py-2 text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


