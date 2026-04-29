# Dashboard Audit Tata Kelola TI - COBIT 2019
## PT Batu Karang Group

Dashboard interaktif hasil audit tata kelola Teknologi Informasi berdasarkan COBIT 2019 — versi sederhana untuk manajemen.

---

## 📊 Isi Dashboard (7 Section)

### 1. Ringkasan Utama (Executive Summary)
- **Capability Level:** Level 1–2 (Performed – Managed Process)
- **Status:** Belum Optimal
- **Kondisi:** Masih manual & Excel, belum terintegrasi, belum ada SOP formal
- **Rata-rata Skor:** 2.9/5.0 (Cukup)

### 2. Hasil Penilaian (Assessment)
10 aspek penilaian dengan **bar chart horizontal**:

| Aspek | Skor | Status |
|-------|------|--------|
| Layanan & Bisnis | 4/5 | ✅ Baik |
| Strategi TI | 3/5 | 🟡 Cukup |
| Infrastruktur | 3/5 | 🟡 Cukup |
| Teknologi TI | 3/5 | 🟡 Cukup |
| Kepatuhan | 3/5 | 🟡 Cukup |
| Peran TI | 3/5 | 🟡 Cukup |
| Keamanan TI | 2/5 | 🔴 Kurang |
| SDM TI | 2/5 | 🔴 Kurang |
| Metode Implementasi | 2/5 | 🔴 Kurang |
| Inovasi Digital | 2/5 | 🔴 Kurang |

### 3. Strengths vs Weaknesses

**Kekuatan:**
- Kesadaran pentingnya TI (4/5)
- Kepatuhan regulasi (4/5)
- Fokus layanan pelanggan (4/5)
- Dukungan manajemen (3/5)
- Produktivitas SDM (3/5)

**Kelemahan:**
- Tidak ada sistem terstruktur (1/5)
- Tidak ada SOP (1/5)
- Tidak ada audit rutin (1/5)
- Tidak ada BCP (1/5)
- Transformasi digital rendah (2/5)
- Ketergantungan proses manual (2/5)
- Kekurangan SDM TI (2/5)
- Keamanan siber lemah (2/5)

### 4. Risk Dashboard (Prioritas: Critical & High)

| ID | Risiko | L | I | Kategori |
|----|--------|---|---|----------|
| R1 | Kehilangan data | 4 | 5 | 🔴 Critical |
| R2 | Gangguan operasional server | 4 | 4 | 🟠 High |
| R3 | Kesalahan rekap data | 5 | 3 | 🟠 High |
| R4 | Ketergantungan individu | 4 | 3 | 🟠 High |
| R5 | Gangguan komunikasi | 3 | 4 | 🟠 High |
| R6 | Virus/kerusakan file | 3 | 3 | 🟠 High |
| R7 | Kebocoran data | 2 | 4 | 🟡 Moderate |
| R8 | Proses tidak teratur | 3 | 2 | 🟡 Moderate |
| R9 | Keterlambatan data eksternal | 3 | 2 | 🟡 Moderate |
| R10 | Ketertinggalan teknologi | 4 | 2 | 🟠 High |

**Total:** 1 Critical + 6 High = **7 risiko prioritas tinggi**

### 5. Root Cause Analysis (RCA)

5 penyebab utama masalah:

1. **Pencatatan manual** (Excel/paper) — 9 insiden, Impact Tinggi
2. **Tidak ada sistem terintegrasi** — 8 insiden, Impact Tinggi
3. **Tidak ada SOP** — 8 insiden, Impact Tinggi
4. **Kekurangan SDM TI** — 6 insiden, Impact Tinggi
5. **Tidak ada kontrol data** — 5 insiden, Impact Sedang

### 6. COBIT 2019 Domain Mapping

Hanya 2 domain prioritas penelitian:

| Domain | Current | Target | Gap | Maturity |
|--------|---------|--------|-----|----------|
| DSS06 - Business Process Control | 45 | 80 | 35 | L1-2 |
| APO12 - Risk Management | 40 | 75 | 35 | L1-2 |

**Progress:** 50-56% menuju best practice.

### 7. Rekomendasi Prioritas (Top 5)

5 tindakan prioritas tinggi:

| No | Rekomendasi |
|----|-------------|
| 1 | Implementasi Sistem Terpusat (ERP/CRM) |
| 2 | Penyusunan & Implementasi SOP Formal |
| 3 | Penerapan Business Continuity Plan (BCP) |
| 4 | Penguatan Keamanan Data & Infrastructure |
| 5 | Pelatihan & Pengembangan SDM TI |

---

## 🎨 Color Scheme

- 🔴 **Critical / High Risk:** `#DC2626` — Tindakan segera
- 🟠 **High / Medium-High:** `#F59E0B` — Prioritas tinggi
- 🟡 **Moderate / Medium:** `#FBBF24` — Monitoring berkala
- 🟢 **Low / Good:** `#10B981` — Dalam target
- 🔵 **Primary:** `#3B82F6` — Aksen & info

---

## 🚀 Menjalankan Dashboard

```bash
# 1. Install dependencies
npm install

# 2. Development server
npm run dev
# → http://localhost:3000

# 3. Build produksi
npm run build

# 4. Preview build
npm run preview
```

---

## 📁 Struktur Project (Simplified)

```
Audit/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx                    # No filters, all sections directly
    ├── data/
    │   └── auditData.js           # Data penelitian
    ├── utils/
    │   └── chartConfig.js
    └── components/
        ├── DashboardHeader.jsx
        ├── Overview.jsx           # Ringkasan eksekutif
        ├── Assessment.jsx         # Bar chart 10 kriteria
        ├── StrengthsWeaknesses.jsx
        ├── RiskDashboard.jsx      # Hanya Critical & High
        ├── RootCauseInsight.jsx   # 5 penyebab utama
        ├── CobitMapping.jsx       # DSS06 & APO12
        └── Recommendations.jsx    # Top 5 high priority
```

---

## ✏️ Edit Data

Data lengkap ada di:

```
src/data/auditData.js
```

Edit sesuai laporan audit perusahaan Anda.

---

## 🛠️ Tech Stack

- **React 18** + Vite
- **Tailwind CSS 3.4** — utility-first styling
- **Chart.js 4.4** + react-chartjs-2 — visualisasi grafik

---

## 📋 Perubahan dari Versi Sebelumnya

❌ **Dihapus:**
- Filter Controls (departemen, kategori, timeline)
- Semua chart kompleks (radar, pie, multi-line detailed)
- Moderate/Low risk table (focus hanya Critical & High)
- Medium/Low priority recommendations

✅ **Disederhanakan:**
- Overview: hanya key highlights
- Assessment: bar chart horizontal saja
- Risk: focus 7 risiko tinggi + risk matrix sederhana
- RCA: 5 penyebab utama
- Recommendations: 5 prioritas tinggi (sangat ringkas)

**Tujuan:** Presentasi manajemen — cepat dipahami, fokus pada prioritas.

---

**Dashboard siap untuk presentasi ke manajemen PT Batu Karang Group.**
