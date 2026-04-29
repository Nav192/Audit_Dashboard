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

export default function RootCauseInsight({ data }) {
  const sortedData = [...data].sort((a, b) => b.count - a.count)

  const impactColors = {
    Tinggi: chartColors.critical,
    Sedang: chartColors.high,
    Rendah: chartColors.low
  }

  const chartData = {
    labels: sortedData.map(item => item.cause),
    datasets: [
      {
        label: 'Tingkat Dampak',
        data: sortedData.map(item => item.count),
        backgroundColor: sortedData.map(item => impactColors[item.impact]),
        borderColor: sortedData.map(item => impactColors[item.impact]),
        borderWidth: 1
      }
    ]
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Tingkat Dampak: ${context.raw}`,
          afterLabel: (context) => {
            const item = sortedData[context.dataIndex]
            return `Impact: ${item.impact}`
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Root Cause Analysis (Akar Masalah)
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Horizontal Bar Chart */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">5 Penyebab Utama</h3>
          <div className="chart-container">
            <Bar data={chartData} options={options} />
          </div>
        </div>

        {/* Root Cause List */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Detail Akar Masalah</h3>
          <div className="space-y-3">
            {sortedData.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm mr-3"
                            style={{ backgroundColor: impactColors[item.impact] }}>
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-gray-900">{item.cause}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <span
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: `${impactColors[item.impact]}20`,
                          color: impactColors[item.impact]
                        }}
                      >
                        Impact: {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
