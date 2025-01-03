import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Components
const Navbar = () => (
  <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
    <h1 className="text-xl font-semibold">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search"
        className="p-2 border rounded-md focus:outline-none"
      />
      <button className="text-gray-600 hover:text-gray-800">🔔</button>
      <button className="text-gray-600 hover:text-gray-800">⚙️</button>
    </div>
  </div>
);

const Sidebar = () => (
  <div className="w-64 h-screen bg-blue-900 text-white p-4">
    <h2 className="text-lg font-bold mb-6">EVENT FUNDLY</h2>
    <ul className="space-y-4">
      <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">Dashboard</li>
      <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">Riwayat Tabungan</li>
      <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">Rencana Baru</li>
      <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">Target Acara</li>
      <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">Validasi</li>
    </ul>
    <button className="mt-6 bg-red-500 p-2 rounded-md hover:bg-red-600">Sign out</button>
  </div>
);

const Card = ({ title, children }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const Dashboard = () => {
  const doughnutData = {
    labels: ['Acara A', 'Acara B', 'Acara C'],
    datasets: [
      {
        label: 'Goals Tabungan',
        data: [60, 20, 20],
        backgroundColor: ['#4F46E5', '#60A5FA', '#A5B4FC'],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Menambah',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: '#4F46E5',
      },
      {
        label: 'Mengurangi',
        data: [2, 3, 20, 5, 1, 4, 7],
        backgroundColor: '#F87171',
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Navbar />

        {/* Top Banner */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Card title="Berbagai Keuangan Acara Telah Di Atur Disini">
            <div className="grid grid-cols-4 gap-2">
              <div className="p-2 bg-blue-200 text-center rounded-md">Pernikahan</div>
              <div className="p-2 bg-blue-200 text-center rounded-md">Ulang Tahun</div>
              <div className="p-2 bg-blue-200 text-center rounded-md">Rumah Impian</div>
              <div className="p-2 bg-blue-200 text-center rounded-md">Reuni</div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card title="Goals Tabungan">
            <Doughnut data={doughnutData} />
          </Card>
          <Card title="Progres Tabungan">
            <p>Rp300.000 terkumpul</p>
            <p>Rp100.000 kurang</p>
          </Card>
          <Card title="Timeline Pencapaian Target Tabungan">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white">138/300</div>
            </div>
          </Card>
        </div>

        {/* Activity and History */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card title="Aktivitas Tabungan Harian">
            <Bar data={barData} />
          </Card>
          <Card title="Monthly History">
            <ul className="space-y-2">
              <li>Maret: 1658.00 ↑</li>
              <li>April: 1351.00 ↓</li>
              <li>Mei: 1855.00 ↑</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
