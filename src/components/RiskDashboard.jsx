import { Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { chartColors } from '../utils/chartConfig'

ChartJS.register(
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export default function RiskDashboard({ risks }) {
  // Filter hanya Critical & High (prioritas utama)
  const criticalHighRisks = risks.filter(r => r.category === 'Critical' || r.category === 'High')

  // Data untuk risk matrix
  const scatterData = {
    datasets: [
      {
        label: 'Critical (1)',
        data: criticalHighRisks.filter(r => r.category === 'Critical').map(r => ({
          x: r.likelihood,
          y: r.impact,
          name: r.name,
          id: r.id
        })),
        backgroundColor: chartColors.critical,
        pointRadius: 14,
        pointHoverRadius: 16
      },
      {
        label: 'High (6)',
        data: criticalHighRisks.filter(r => r.category === 'High').map(r => ({
          x: r.likelihood,
          y: r.impact,
          name: r.name,
          id: r.id
        })),
        backgroundColor: chartColors.high,
        pointRadius: 12,
        pointHoverRadius: 14
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, padding: 10 }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const point = context.raw
            return `${point.id}: ${point.name} (L:${point.x}, I:${point.y})`
          }
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Likelihood (1-5)' },
        min: 0.5,
        max: 5.5,
        ticks: { stepSize: 1 }
      },
      y: {
        title: { display: true, text: 'Impact (1-5)' },
        min: 0.5,
        max: 5.5,
        ticks: { stepSize: 1 }
      }
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        Risk Dashboard
      </h2>


      {/* Risk Matrix */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Risk Matrix (Impact vs Likelihood)</h3>
        <div className="chart-container" style={{ height: '400px' }}>
          <Scatter data={scatterData} options={options} />
        </div>
      </div>

      {/* Risk Table (Critical & High only) */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risiko Utama</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Likelihood</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Impact</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Kategori</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {criticalHighRisks
              .sort((a, b) => b.impact - a.impact || b.likelihood - a.likelihood)
              .map((risk) => (
                <tr key={risk.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-bold text-gray-900">{risk.id}</td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-900">{risk.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{risk.description}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-4 rounded-sm ${i < risk.likelihood ? 'bg-red-500' : 'bg-gray-200'}`}
                        />
                      ))}
                      <span className="ml-2">{risk.likelihood}/5</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-4 rounded-sm ${i < risk.impact ? 'bg-red-500' : 'bg-gray-200'}`}
                        />
                      ))}
                      <span className="ml-2">{risk.impact}/5</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className="inline-flex px-3 py-1 text-sm font-bold rounded-full"
                      style={{
                        backgroundColor: risk.category === 'Critical' ? `${chartColors.critical}20` : `${chartColors.high}20`,
                        color: risk.category === 'Critical' ? chartColors.critical : chartColors.high
                      }}
                    >
                      {risk.category}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
