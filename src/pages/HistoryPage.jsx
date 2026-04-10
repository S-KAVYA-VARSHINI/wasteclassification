import { useState } from 'react'
import './HistoryPage.css'

const HISTORY_DATA = [
  { id: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3w7Fxp2Af1hsNrusaImVpK9qrstdEx17uqtak85xnvrLxyIgjdDFuvy46f0uT5y_5uIdxSQMq0uVgmMNk06rqU4VSR5ylXPDnu0A0YqoH8jv7S_2-KJgDjT-MvSRdCReXNE9mvBoB8x6f0AvzkEeuWNXe98T8ATp9I_vNyhL0juQC3yyK8AgGaCZAKr2q5RB-S75xjibPe2j42VQ2b5ihpJhSgwXJks8JUJs-3gtrQMJmITyiCI6Xgt6v10-6grHAAh93pY_beiEQ', category: 'Non-Organic', material: 'Plastic (PET)', bin: 'Recyclable Bin', confidence: 99.2, date: 'Oct 24, 2024', time: '14:22 PM' },
  { id: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkaHBMOVAAGcGXrAOsPs5BQ2szBGXiud39289vszDX0HBO9doZLxOnTbDwomBOvhwa_na7b6NdvGt7WhKywBY1WqAnVVrQWeTWHYZqyTQzKYXSTCdCP72jo_CSxDwH2VGZ6jaainE7ND7RxHCe6zkBHYCStzJmbPjT7_BBOO8xp9nsp6SEXzAjDZn_f9CIGDhF9G9thGZ5DoVwNvu6Wgt_znv0rMJe74k_JqrQvpbr3UWS5djRgIErJcSxRoTwOJz3HXfhaDcaxpuA', category: 'Organic', material: 'Food Waste', bin: 'Compost Bin', confidence: 98.5, date: 'Oct 24, 2024', time: '12:05 PM' },
  { id: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH7H_WEkAb2p1DrvWNnJj9uu4E86RvvqiiiqeNFJ4jcTtaWN6qMWFGCguIaoT2YdxrzByHVuFAR23WXVuU6rJv5oiMI43ir1YUOtYa7atRtoS4z6KeFA3YREkIRPa9Pfx2CiHArMEklsDmoCp2XtaJ79x5imtXXXFDRjKZoRD4iWurR6E0HhIs0obSBFOP3CTVmKt-XU1wAYynlJKamEXr1hjv_E1EAjXh2gjCbFo5a4ONP5Ml5D5oASgaLhYuZhuc6AK4IMCpUhsW', category: 'Non-Organic', material: 'Glass', bin: 'Glass Bin', confidence: 94.1, date: 'Oct 23, 2024', time: '18:45 PM' },
  { id: 4, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxbnGlrdS4KhFnz5AHnvcrwogKqX4S0Wk5Xr48v7UFFHXvFX5KX8T7HiJZvDRC1RzZqKTaclKW8KQOp3TocXKm18tcRvidb-mpbYuodFCAXRkyIRAnLdujrBArYdHa2CRLNKcAFgSMoFyKKUMY7PArKuFuEOEBJYEnOYGmXJLy0IpVduKgyZtTEKKRGcrxNg4zvlnDRJlRq58a07tjMGAJTse14kVPfxEBjf0GJhcvEwW1Rs4S_uKbw6J352c-qLvtfkEeCoHvXY5z', category: 'Non-Organic', material: 'Cardboard', bin: 'Paper Bin', confidence: 97.8, date: 'Oct 23, 2024', time: '09:12 AM' },
  { id: 5, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfdHWUgdAFAPN136ZY0_flk_zhlu0n9xe5g8vkGMfDTqNQ1uCsnJMLg6Cni0SZjwdMS5ZGR8p3Nk4vaIhsjcPzpxoiYfDcRSKlT8TPtSApnMUDa4HKvcWp33gT1bPXph-kb3Yi8_vP8PFN2ZI1R1q7BGthT9g7AREWqBW8_R_a22yCp49BS5qMFpHZxqsFsgXycTYXzjtpBg85V8RskKxyqe4w-5cycfBNN656EPlnPTERtFucAlNbxRTtry_MimvfSPT6zGwBlLQ2', category: 'Non-Organic', material: 'Metal', bin: 'Metal Bin', confidence: 96.3, date: 'Oct 22, 2024', time: '16:30 PM' },
]

const FILTERS = [
  { label: 'All Materials', count: 128, color: 'var(--primary)' },
  { label: 'Organic', count: 54, color: '#F59E0B' },
  { label: 'Non-Organic', count: 74, color: '#8B5CF6' },
]

const MATERIAL_TYPES = ['Plastic', 'Metal', 'Glass', 'Paper', 'Electronic']

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState('All Materials')

  const filtered = activeFilter === 'All Materials'
    ? HISTORY_DATA
    : HISTORY_DATA.filter(h => h.category === activeFilter)

  return (
    <main className="history-page">
      <div className="history-header">
        <div>
          <h1>Classification History</h1>
          <p>Review and export your waste sorting journey.</p>
        </div>
        <button className="btn-download">
          <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>download</span>
          <span>Download Report</span>
        </button>
      </div>

      <div className="history-layout">
        {/* Sidebar */}
        <aside className="history-sidebar">
          <section className="filter-section">
            <h3 className="filter-title">Filter by Category</h3>
            <div className="filter-list">
              {FILTERS.map(f => (
                <label
                  key={f.label}
                  className={`filter-item ${activeFilter === f.label ? 'filter-item--active' : ''}`}
                  onClick={() => setActiveFilter(f.label)}
                >
                  <span className="filter-item__left">
                    <span className="filter-dot" style={{ background: f.color, boxShadow: `0 0 8px ${f.color}` }}></span>
                    <span>{f.label}</span>
                  </span>
                  <span className="mono filter-count">{f.count}</span>
                </label>
              ))}
            </div>

            <div className="material-types-section">
              <h3 className="material-types-title">Material Types</h3>
              <div className="material-chips">
                {MATERIAL_TYPES.map(m => (
                  <span key={m} className="material-chip">{m}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="efficiency-card">
            <div className="efficiency-bg">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '5rem' }}>eco</span>
            </div>
            <div className="efficiency-content">
              <div className="efficiency-label">Sorting Efficiency</div>
              <div className="mono efficiency-value">94.2%</div>
              <div className="efficiency-trend">
                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', color: 'var(--primary)' }}>trending_up</span>
                <span>+2.4% from last month</span>
              </div>
            </div>
          </section>
        </aside>

        {/* Table */}
        <div className="history-table-wrap glass-card eco-glow-border">
          <table className="history-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Category</th>
                <th>Material</th>
                <th style={{ textAlign: 'center' }}>Confidence</th>
                <th style={{ textAlign: 'right' }}>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id} className="history-row">
                  <td>
                    <div className="history-thumb">
                      <img src={item.image} alt={item.material} />
                    </div>
                  </td>
                  <td>
                    <span className={`category-badge ${item.category === 'Organic' ? 'category-badge--organic' : 'category-badge--non-organic'}`}>
                      {item.category}
                    </span>
                  </td>
                  <td>
                    <div className="material-name">{item.material}</div>
                    <div className="material-bin">{item.bin}</div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="mono confidence-val">{item.confidence}%</div>
                    <div className="confidence-bar-track">
                      <div className="confidence-bar" style={{ width: `${item.confidence}%` }}></div>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div className="timestamp-date">{item.date}</div>
                    <div className="timestamp-time">{item.time}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <span className="mono pagination-info">Showing 1-{filtered.length} of 128 entries</span>
            <div className="pagination-controls">
              <button className="page-btn"><span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>chevron_left</span></button>
              <button className="page-btn page-btn--active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn"><span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>chevron_right</span></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
