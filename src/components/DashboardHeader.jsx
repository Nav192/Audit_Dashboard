export default function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Dashboard Audit Tata Kelola TI
            </h1>
            <p className="text-blue-200 text-sm md:text-base mt-1">
              Kerangka Kerja COBIT 2019 | PT Batu Karang Group
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="inline-flex items-center px-4 py-2 bg-blue-800 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">April 2025</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
