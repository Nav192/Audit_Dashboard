import { chartColors } from '../utils/chartConfig'

export default function Overview({ data, assessment }) {
  const scoreEntries = Object.entries(data.scores)
  const maxScore = 100

  const getStatusColor = (status) => {
    switch (status) {
      case 'Baik': return chartColors.low
      case 'Cukup': return chartColors.high
      case 'Kurang': return chartColors.critical
      default: return chartColors.neutral[3]
    }
  }

  const getOverallStatusColor = (status) => {
    switch (status) {
      case 'Baik': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      case 'Cukup': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'Kurang': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Ringkasan Eksekutif
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getOverallStatusColor(data.overallStatus)}`}>
          Status: {data.overallStatus}
        </span>
      </div>

      {/* Capability Level & Kondisi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L9 10.586l-1.293 1.293a1 1 0 01-1.414 0L5 10.586 3.707 12H7a1 1 0 110-2z" clipRule="evenodd" />
            </svg>
            <div className="ml-4">
              <p className="text-sm text-blue-800">Tingkat Kapabilitas</p>
              <p className="text-lg font-bold text-blue-900">{data.currentCapabilityLevel}</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="ml-4">
              <p className="text-sm text-purple-800">Kondisi Sistem</p>
              <p className="text-lg font-bold text-purple-900">{data.executiveSummary.condition}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Temuan Utama</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.executiveSummary.keyFindings.map((finding, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Average Score */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-amber-800">Rata-rata Skor Penilaian</p>
            <p className="text-2xl font-bold text-amber-900">{assessment.averageScore}/5.0</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-amber-800">Status Keseluruhan</p>
            <p className="text-lg font-bold text-amber-900">{data.overallStatus}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
