// Chart configuration constants
export const chartColors = {
  critical: '#DC2626',
  high: '#F59E0B',
  moderate: '#FBBF24',
  low: '#10B981',
  primary: '#3B82F6',
  secondary: '#6366F1',
  neutral: ['#9CA3AF', '#6B7280', '#4B5563', '#374151']
}

export const gradientColors = {
  red: ['#FEE2E2', '#DC2626'],
  yellow: ['#FEF3C7', '#F59E0B'],
  green: ['#D1FAE5', '#10B981'],
  blue: ['#DBEAFE', '#3B82F6']
}

export const riskMatrixConfig = {
  xAxis: { label: 'Likelihood', min: 1, max: 5 },
  yAxis: { label: 'Impact', min: 1, max: 5 }
}

export const statusConfig = {
  Critical: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
  High: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' },
  Moderate: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
  Low: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' }
}
