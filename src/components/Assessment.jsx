import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { chartColors } from '../utils/chartConfig'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Assessment({ data }) {
  const categories = data.categories

  // Bar chart horizontal
  const barData = {
    labels: categories.map(c => c.name),
    datasets: [
      {
        label: 'Skor Penilaian (dari 5)',
        data: categories.map(c => c.score),
        backgroundColor: categories.map(c =>
          c.status === 'Baik' ? chartColors.low :
          c.status === 'Cukup' ? chartColors.high : chartColors.critical
        ),
        borderColor: categories.map(c =>
          c.status === 'Baik' ? chartColors.low :
          c.status === 'Cukup' ? chartColors.high : chartColors.critical
        ),
        borderWidth: 1
      }
    ]
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Skor: ${context.raw}/5`
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1 }
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Baik': return chartColors.low
      case 'Cukup': return chartColors.high
      case 'Kurang': return chartColors.critical
      default: return chartColors.neutral[3]
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Hasil Penilaian (Assessment)
      </h2>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-600 font-medium">Rata-rata Skor</p>
          <p className="text-3xl font-bold text-blue-900">{data.averageScore}<span className="text-lg">/5.0</span></p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-600 font-medium">Aspek Terbaik</p>
          <p className="text-xl font-bold text-green-900">
            {categories.find(c => c.score === Math.max(...categories.map(c => c.score))).name}
          </p>
          <p className="text-lg font-bold text-green-700">Skor: {Math.max(...categories.map(c => c.score))}/5</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600 font-medium">Aspek Terendah</p>
          <p className="text-xl font-bold text-red-900">
            {categories.find(c => c.score === Math.min(...categories.map(c => c.score))).name}
          </p>
          <p className="text-lg font-bold text-red-700">Skor: {Math.min(...categories.map(c => c.score))}/5</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-container mb-6" style={{ height: '450px' }}>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Legend */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Interpretasi Skor</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartColors.low }}></div>
            <span><strong>Baik (4-5):</strong> Kinerja baik, pertahankan</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartColors.high }}></div>
            <span><strong>Cukup (3):</strong> Perlu peningkatan bertahap</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartColors.critical }}></div>
            <span><strong>Kurang (1-2):</strong> Perlu tindakan segera</span>
          </div>
        </div>
      </div>
    </div>
  )
}
