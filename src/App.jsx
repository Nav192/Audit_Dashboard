import { useState, useMemo } from 'react'
import { auditData } from './data/auditData'
import DashboardHeader from './components/DashboardHeader'
import Overview from './components/Overview'
import Assessment from './components/Assessment'
import StrengthsWeaknesses from './components/StrengthsWeaknesses'
import RiskDashboard from './components/RiskDashboard'
import RootCauseInsight from './components/RootCauseInsight'
import CobitMapping from './components/CobitMapping'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 1. Ringkasan Utama */}
        <section className="mb-10">
          <Overview
            data={auditData.overview}
            assessment={auditData.assessment}
          />
        </section>

        {/* 2. Hasil Penilaian */}
        <section className="mb-10">
          <Assessment data={auditData.assessment} />
        </section>

        {/* 3. Strengths vs Weaknesses */}
        <section className="mb-10">
          <StrengthsWeaknesses data={auditData.strengthsWeaknesses} />
        </section>

        {/* 4. Risk Dashboard - hanya Critical & High */}
        <section className="mb-10">
          <RiskDashboard risks={auditData.risks} />
        </section>

        {/* 5. Root Cause Analysis */}
        <section className="mb-10">
          <RootCauseInsight data={auditData.rootCauses} />
        </section>

        {/* 6. COBIT 2019 Mapping */}
        <section className="mb-10">
          <CobitMapping data={auditData.cobitMapping} />
        </section>

        {/* 7. Recommendations Prioritas */}
        <section className="mb-10">
          <Recommendations data={auditData.recommendations} />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            Dashboard Audit Tata Kelola TI Berbasis COBIT 2019 | PT Batu Karang Group
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Capability Level 1-2 (Performed – Managed Process) | Data: Field Research 2025
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
