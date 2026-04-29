import { chartColors } from '../utils/chartConfig'

export default function Recommendations({ data }) {
  // Filter hanya High priority (5 rekomendasi utama)
  const highPriority = data.filter(rec => rec.priority === 'High').slice(0, 5)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Rekomendasi Prioritas
      </h2>

      {/* Simple numbered list */}
      <div className="space-y-3">
        {highPriority.map((rec, idx) => (
          <div
            key={rec.id}
            className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-800 font-bold text-sm flex items-center justify-center border-2 border-red-300">
              {idx + 1}
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">
                {rec.title}
              </h3>
              <p className="text-xs text-gray-500">
                {rec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
