export default function CobitMapping({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        COBIT 2019 Domain Mapping
      </h2>

      {/* Info Banner */}
      <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-bold text-indigo-900 mb-1">Domain Prioritas Penelitian</h4>
            <p className="text-sm text-indigo-800">
              <strong>DSS06</strong> (Business Process Control) dan <strong>APO12</strong> (Risk Management)
              <span className="block mt-1">
                Maturity Level saat ini: <strong>Level 1-2</strong> (Performed – Managed Process)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Domain Cards - Sederhana */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((domain, idx) => {
          const scoreColor = domain.currentScore >= 50 ? '#10B981' : domain.currentScore >= 30 ? '#F59E0B' : '#DC2626'
          const gap = domain.targetScore - domain.currentScore

          return (
            <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col">
              {/* Domain Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs mb-2">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{domain.domain}</h3>
                </div>
                <div className="text-right ml-4">
                  <div className="text-3xl font-bold" style={{ color: scoreColor }}>
                    {typeof domain.currentScore === 'number' && domain.currentScore % 1 !== 0 
                      ? domain.currentScore.toFixed(1) 
                      : domain.currentScore}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Current Score</div>
                </div>
              </div>

              {/* Progress & Gap Info */}
              <div className="mb-6">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-medium text-gray-600">Target: {domain.targetScore}</span>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    Gap: -{typeof gap === 'number' ? gap.toFixed(1) : gap}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000" 
                    style={{ 
                      width: `${domain.currentScore}%`,
                      backgroundColor: scoreColor 
                    }}
                  ></div>
                </div>
                {/* Calculation Breakdown - Detail sumber nilai */}
                <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-wider">Sumber Nilai (Skala 1-5)</h4>
                  <div className="space-y-2">
                    {domain.breakdown.map((item, bidx) => (
                      <div key={bidx} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{item.label}</span>
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                            <div className="bg-indigo-400 h-1.5 rounded-full" style={{ width: `${(item.value / 5) * 100}%` }}></div>
                          </div>
                          <span className="text-xs font-bold text-gray-800">{item.value}</span>
                        </div>
                      </div>
                    ))}
                    <div className="pt-2 mt-1 border-t border-gray-200 flex justify-between items-center italic">
                      <span className="text-[10px] text-gray-500">Rata-rata: {(domain.currentScore / 20).toFixed(2)}</span>
                      <span className="text-[10px] text-gray-500">× 20 = {domain.currentScore}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Findings Saja */}
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mt-auto">
                <h4 className="font-semibold text-red-800 mb-2 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Temuan Utama
                </h4>
                <ul className="space-y-1.5">
                  {domain.findings.slice(0, 4).map((finding, fidx) => (
                    <li key={fidx} className="flex items-start text-xs text-red-800">
                      <span className="inline-block w-1 h-1 mt-1.5 rounded-full bg-red-400 mr-2 flex-shrink-0"></span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
