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

export default function StrengthsWeaknesses({ data }) {
  const allItems = [...data.strengths, ...data.weaknesses]
  const sortedItems = allItems.sort((a, b) => b.score - a.score)

  const barData = {
    labels: sortedItems.map(item => item.area),
    datasets: [
      {
        label: 'Skor (1-5)',
        data: sortedItems.map(item => item.score),
        backgroundColor: sortedItems.map(item =>
          item.score >= 4 ? chartColors.low :
          item.score >= 3 ? chartColors.high : chartColors.critical
        ),
        borderColor: sortedItems.map(item =>
          item.score >= 4 ? chartColors.low :
          item.score >= 3 ? chartColors.high : chartColors.critical
        ),
        borderWidth: 1
      }
    ]
  }

  const options = {
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Strengths vs Weaknesses
      </h2>

      {/* Bar Chart */}
      <div className="chart-container mb-6" style={{ height: '400px' }}>
        <Bar data={barData} options={options} />
      </div>

      {/* Summary boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="border-2 border-green-200 bg-green-50 rounded-lg p-5">
          <h3 className="font-bold text-green-900 mb-4 flex items-center text-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Kekuatan (Strengths)
          </h3>
          <div className="space-y-3">
            {data.strengths.map((item, idx) => (
              <div key={idx} className="bg-white rounded p-3 border border-green-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-800">{item.area}</span>
                  <span className="font-bold text-green-600 text-lg">{item.score}/5</span>
                </div>
                <p className="text-xs text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="border-2 border-red-200 bg-red-50 rounded-lg p-5">
          <h3 className="font-bold text-red-900 mb-4 flex items-center text-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Kelemahan (Weaknesses)
          </h3>
          <div className="space-y-3">
            {data.weaknesses.map((item, idx) => (
              <div key={idx} className="bg-white rounded p-3 border border-red-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-800">{item.area}</span>
                  <span className="font-bold text-red-600 text-lg">{item.score}/5</span>
                </div>
                <p className="text-xs text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
