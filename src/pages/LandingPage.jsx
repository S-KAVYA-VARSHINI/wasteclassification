import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <main className="landing">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__glow hero__glow--left"></div>
        <div className="hero__glow hero__glow--right"></div>
        <div className="hero__grid">
          <div className="hero__content animate-fade-in-up">
            <span className="hero__badge">Powered by Next-Gen Neural Networks</span>
            <h1 className="hero__title">
              The Future of <span className="eco-gradient-text">Waste Management</span>
            </h1>
            <p className="hero__subtitle">
              Snap a photo of any waste item and let our AI classify it instantly. Know exactly whether it's recyclable, compostable, or belongs in the trash.
            </p>
            <div className="hero__actions">
              <Link to="/classify" className="btn-gradient-lg">Start Classifying</Link>
              <Link to="/classify" className="btn-outline-lg">Live Demo</Link>
            </div>
          </div>

          <div className="hero__visual animate-fade-in-up delay-200">
            <div className="hero__card">
              <img
                alt="Eco-Tech AI Core"
                className="hero__image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDY8y4t30OuSR3Px7E8IGgpkrT7sVu_9d1nLgKAzs8sxZ_X4AV9BRa7nxk7NXwPHKreyiyVUQUcM2S_SN1-CHatUKPrDrxti0ZteI4pOvwIei6JsN4DMmTrp-cKqar-xAp6FSGvbDUltlyt5LXFVWH9VbpOkTeWAhXGP9BjVUjO7O82cqE3wbKrRwDKe4fiDk8MfOQIMod8X1-RCW_QnwXcFndHQec95X7rXbgP6AA7r8mK_BJPq4A5PnYLR-H1OrjWN1l5KfEl-7y"
              />
              <div className="hero__confidence glass">
                <div className="mono" style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700 }}>94.2%</div>
                <div style={{ fontSize: '0.625rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Model Confidence</div>
              </div>
            </div>
            <div className="hero__floating glass">
              <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '2rem' }}>eco</span>
              <div style={{ fontSize: '0.625rem', fontWeight: 700, marginTop: '0.5rem' }}>REAL-TIME ANALYSIS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bento Grid ──────────────────────────────── */}
      <section className="bento-section">
        <div className="container-main">
          <div className="bento-header">
            <h2>System Performance</h2>
            <p>Our CNN model trained on thousands of waste images delivers fast and accurate classification across 6 categories.</p>
          </div>

          <div className="bento-grid">
            {/* Accuracy Card */}
            <div className="bento-card bento-card--wide">
              <div className="bento-card__content">
                <h3>Precision Metric</h3>
                <div className="mono bento-stat" style={{ color: 'var(--primary)' }}>94.2%</div>
                <p className="bento-desc">Three-tier classification accuracy across organic, plastic, and complex materials.</p>
              </div>
              <div className="eco-ring-wrap">
                <div className="eco-glow-ring eco-ring--outer"></div>
                <div className="eco-glow-ring eco-ring--inner"></div>
                <div className="eco-ring__label mono">A++</div>
              </div>
            </div>

            {/* Latency Card */}
            <div className="bento-card bento-card--narrow">
              <div className="bento-card__icon">
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>bolt</span>
              </div>
              <h3>Latency &lt; 120ms</h3>
              <p className="bento-desc">Instant recognition on edge devices without the need for high-bandwidth cloud processing.</p>
            </div>

            {/* Classification Categories */}
            <div className="bento-card bento-card--full">
              <div className="bento-card__split">
                <div className="bento-card__text">
                  <h3 style={{ fontSize: '1.75rem' }}>Smart Classification</h3>
                  <p className="bento-desc" style={{ fontSize: '1.125rem' }}>Upload any waste image and get instant AI-powered classification with detailed disposal instructions and recycling guidance.</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                      <span>6 waste categories: Cardboard, Glass, Metal, Paper, Plastic, Trash</span>
                    </div>
                    <div className="feature-item">
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                      <span>Detailed recycling & disposal guidance per category</span>
                    </div>
                    <div className="feature-item">
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>check_circle</span>
                      <span>Classification history with confidence tracking</span>
                    </div>
                  </div>
                </div>
                <div className="bento-card__img-wrap">
                  <img
                    alt="Classification Preview"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx6wZZT_PKSv8_byCRArd5fAJEkGDx_aPJLrVyaB_3mIXhUQB9uYieP6Lxq76_m-Fwx6vbBtv09r6NeJWKiglY0roI6LLc72E0bNXBhrWiR6Hs1VyPTdOlb_QzRSh2hxkdR8-3U1WSeixxA4phO3jR71oTf_LHVM31qMkn8qON2uiHNSzXbC-258XgaRBQOUYUb7HybuFKrYBL_bsjHSZ2ZMkTDHT7DDNizX726w1gQWdHuGChUkanlUFx98HuclgTgoex2lErVQHE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Model Stats Section ────────────────────────────── */}
      <section className="impact-section">
        <div className="container-main">
          <div className="impact-header">
            <h2>Model Performance</h2>
            <p>Our CNN model trained on diverse waste image datasets delivers reliable classification across all supported categories.</p>
          </div>
          <div className="impact-grid">
            <div className="impact-card animate-fade-in-up">
              <div className="mono impact-value" style={{ color: 'var(--primary)' }}>94.2%</div>
              <div className="impact-label">Classification Accuracy</div>
              <p className="impact-desc">Across 6 waste categories</p>
            </div>
            <div className="impact-card animate-fade-in-up delay-100">
              <div className="mono impact-value" style={{ color: 'var(--secondary)' }}>6</div>
              <div className="impact-label">Waste Categories</div>
              <p className="impact-desc">Cardboard, Glass, Metal, Paper, Plastic, Trash</p>
            </div>
            <div className="impact-card animate-fade-in-up delay-200">
              <div className="mono impact-value" style={{ color: 'var(--tertiary)' }}>&lt;2s</div>
              <div className="impact-label">Classification Speed</div>
              <p className="impact-desc">Instant results from image upload</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-card glass">
          <div className="cta-bg"></div>
          <div className="cta-content">
            <h2>Ready to classify <br/>your waste smarter?</h2>
            <p>Upload a photo of any waste item and let our AI instantly identify the category and guide you on proper disposal.</p>
            <div className="cta-actions">
              <Link to="/classify" className="btn-gradient-xl">Try the Classifier</Link>
              <Link to="/about" className="btn-outline-xl">Learn How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
