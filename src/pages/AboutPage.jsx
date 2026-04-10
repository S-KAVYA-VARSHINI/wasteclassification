import './AboutPage.css'

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <header className="about-hero">
        <div className="about-badge mono">Technical Backbone</div>
        <h1 className="about-title">
          The Intelligence behind <span className="eco-gradient-text">Sustainability</span>
        </h1>
        <p className="about-subtitle">
          EcoSort AI utilizes state-of-the-art computer vision to bridge the gap between complex waste streams and circular economy precision.
        </p>
      </header>

      {/* Architecture Bento */}
      <section className="arch-bento">
        {/* Diagram Card */}
        <div className="arch-diagram glow-border">
          <div className="arch-diagram-header">
            <div>
              <h2>Model Architecture</h2>
              <p>EfficientNetV2S: Optimized for speed and accuracy in classification.</p>
            </div>
            <span className="arch-version mono">VERSION 2.4.1</span>
          </div>

          <div className="arch-flow">
            <div className="arch-block arch-block--input">
              <div className="arch-bar"></div>
              <div className="arch-bar arch-bar--short"></div>
              <div className="arch-bar"></div>
            </div>
            <span className="material-symbols-outlined arch-arrow">arrow_forward</span>
            <div className="arch-blocks-col">
              <div className="arch-block arch-block--conv">
                <span className="mono">Fused-MBConv</span>
              </div>
              <div className="arch-block arch-block--conv2">
                <span className="mono">MBConv Block</span>
              </div>
            </div>
            <span className="material-symbols-outlined arch-arrow">arrow_forward</span>
            <div className="arch-block arch-block--brain">
              <div className="arch-brain-blur"></div>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '2.5rem' }}>psychology</span>
              <span className="mono" style={{ color: 'var(--secondary)', fontSize: '0.625rem', textAlign: 'center' }}>Progressive Learning Stage</span>
            </div>
            <span className="material-symbols-outlined arch-arrow">arrow_forward</span>
            <div className="arch-blocks-col">
              <div className="arch-block arch-block--out">
                <span className="mono">98.2%</span>
              </div>
              <div className="arch-block arch-block--out2">
                <span className="mono">CAT_01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Card */}
        <div className="arch-metrics">
          <h3 className="metrics-title">Performance Metrics</h3>
          <div className="metrics-list">
            <div className="metric-item">
              <div className="metric-header">
                <span>Precision</span>
                <span className="mono metric-val" style={{ color: 'var(--primary)' }}>0.992</span>
              </div>
              <div className="metric-bar-track"><div className="metric-bar" style={{ width: '99.2%', background: 'var(--primary)' }}></div></div>
            </div>
            <div className="metric-item">
              <div className="metric-header">
                <span>Recall</span>
                <span className="mono metric-val" style={{ color: 'var(--tertiary)' }}>0.987</span>
              </div>
              <div className="metric-bar-track"><div className="metric-bar" style={{ width: '98.7%', background: 'var(--tertiary)' }}></div></div>
            </div>
            <div className="metric-item">
              <div className="metric-header">
                <span>F1-Score</span>
                <span className="mono metric-val" style={{ color: 'var(--secondary)' }}>0.989</span>
              </div>
              <div className="metric-bar-track"><div className="metric-bar" style={{ width: '98.9%', background: 'var(--secondary)' }}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Lifecycle */}
      <section className="training-section">
        <div className="training-header">
          <div>
            <h2>The Training Lifecycle</h2>
            <p>We don't just train on data; we cultivate neural pathways through organic progressive learning cycles.</p>
          </div>
          <div className="dataset-badge">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>data_thresholding</span>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Dataset Size</p>
              <p className="mono" style={{ fontWeight: 700, color: 'var(--primary)' }}>1.2M Samples</p>
            </div>
          </div>
        </div>

        <div className="lifecycle-grid">
          <div className="lifecycle-card">
            <div className="lifecycle-number" style={{ color: '#a78bfa', borderColor: 'rgba(167, 139, 250, 0.2)' }}>01</div>
            <div className="lifecycle-icon" style={{ background: 'rgba(167, 139, 250, 0.1)' }}>
              <span className="material-symbols-outlined" style={{ color: '#a78bfa', fontSize: '2rem' }}>potted_plant</span>
            </div>
            <h4 style={{ color: '#a78bfa' }}>Organic Seeding</h4>
            <p>Raw waste images are curated from diverse environments, ensuring the model recognizes materials in varied lighting and degradation states.</p>
          </div>

          <div className="lifecycle-card">
            <div className="lifecycle-number" style={{ color: '#22d3ee', borderColor: 'rgba(34, 211, 238, 0.2)' }}>02</div>
            <div className="lifecycle-icon" style={{ background: 'rgba(34, 211, 238, 0.1)' }}>
              <span className="material-symbols-outlined" style={{ color: '#22d3ee', fontSize: '2rem' }}>hub</span>
            </div>
            <h4 style={{ color: '#22d3ee' }}>Neural Synthesis</h4>
            <p>Utilizing EfficientNetV2's progressive learning, the model starts with low-res feature extraction and scales to complex material identification.</p>
          </div>

          <div className="lifecycle-card">
            <div className="lifecycle-number" style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.2)' }}>03</div>
            <div className="lifecycle-icon" style={{ background: 'rgba(52, 211, 153, 0.1)' }}>
              <span className="material-symbols-outlined" style={{ color: '#34d399', fontSize: '2rem' }}>eco</span>
            </div>
            <h4 style={{ color: '#34d399' }}>Eco-Validation</h4>
            <p>The final layer is fine-tuned on real-world sorting facility data to minimize false positives in high-stakes organic/non-organic sorting.</p>
          </div>
        </div>
      </section>

      {/* Hardware Optimization */}
      <section className="hardware-section">
        <div className="hardware-bg-img">
          <img
            alt="Technical background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm5UH5JwT1eHbtrFHScWHYxwqAhe9qMqCUSrM0h94IaSXU86e_rdV77BLQseUfrGoQhswrhmh6rgygAOFd8XlrR6rjwIKnS0FZtMnb6uO31UQesC_GpFZZkH5fWa4D2YKQZXf3KKI2pn4h2nWeJbF-L_QCTJK54imHaCDlOLv5RVu-vhgyxYfg49KT2DoNn6gJnENYfo_ghjXMGhqo2pfsSbR6iUSNNkkCGp4HaCSRZY0oLC95s5cglUARrsX-IJgrxqXmcJvKTp8x"
          />
        </div>
        <div className="hardware-grid">
          <div className="hardware-content">
            <h2>Hardware Optimization</h2>
            <div className="hardware-features">
              <div className="hardware-feature">
                <div className="hw-icon"><span className="material-symbols-outlined" style={{ color: 'var(--tertiary)' }}>memory</span></div>
                <div>
                  <h5>TensorRT Inference</h5>
                  <p>Reduced latency to &lt;120ms per scan by leveraging 16-bit precision kernels for mobile-edge deployment.</p>
                </div>
              </div>
              <div className="hardware-feature">
                <div className="hw-icon"><span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>cloud_done</span></div>
                <div>
                  <h5>Distributed Sync</h5>
                  <p>Model weights are synchronized via a global edge network, ensuring every scanner learns from the collective network intelligence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="terminal-card">
            <div className="terminal-dots">
              <div className="dot dot--red"></div>
              <div className="dot dot--amber"></div>
              <div className="dot dot--green"></div>
              <span className="mono terminal-filename">ecosort_v2_logs.sys</span>
            </div>
            <div className="terminal-body mono">
              <p><span style={{ color: '#a78bfa' }}>[0.001s]</span> Initializing EfficientNetV2S backbone...</p>
              <p><span style={{ color: '#a78bfa' }}>[0.142s]</span> Loading weights from remote_origin/main_shards...</p>
              <p><span style={{ color: '#a78bfa' }}>[0.455s]</span> Quantization: FLOAT16 mapping active.</p>
              <p><span style={{ color: '#34d399' }}>[READY]</span> Model operational at 98.9% confidence floor.</p>
              <p className="terminal-comment">// Latency test result:</p>
              <div className="terminal-latency">
                <div className="latency-bar-track">
                  <div className="latency-bar"></div>
                </div>
                <span>114ms</span>
              </div>
              <p className="terminal-comment">// Heatmap visualization:</p>
              <div className="heatmap-grid">
                {[0.2, 0.4, 0.6, 0.8, 0.6, 0.3, 0.1, 0.05].map((opacity, i) => (
                  <div key={i} className="heatmap-cell" style={{ opacity }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
