import { useState } from "react";
import "./ClassifyPage.css"

const API_URL = " https://reliant-connaturally-marquita.ngrok-free.dev/predict";

export default function ClassifyPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", f);

      const response = await fetch(API_URL + "?t=" + Date.now(), {
        method: "POST",
        body: formData,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
        cache: "no-store",
      });

      const data = await response.json();
      console.log("API RESPONSE:", data);

      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="classify-page">

      {/* HERO */}
      <div className="classify-hero">
        <h1 className="classify-title">Waste Classifier</h1>
        <p className="classify-subtitle">
          Upload an image to classify waste into categories
        </p>
      </div>

      {/* UPLOAD */}
      <div className="upload-section">
        <label className="upload-zone-wrapper">
          <div className="upload-zone-glow"></div>

          <div className={`upload-zone ${file ? "upload-zone--has-file" : ""}`}>

            {!preview ? (
              <>
                <div className="upload-icon-wrap">📁</div>
                <p className="upload-text">Click to upload image</p>
                <p className="upload-formats">PNG, JPG supported</p>
              </>
            ) : (
              <div className="upload-preview-inline">
                <img src={preview} alt="preview" />

                {loading && (
                  <div className="upload-analyzing">
                    <div className="spinner"></div>
                    Analyzing...
                  </div>
                )}
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              hidden
            />
          </div>
        </label>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* RESULTS */}
      {result && result.success && (
        <div className="results-section">
          <div className="results-grid">

            {/* IMAGE */}
            <div className="result-image-card">
              <div className="result-image-wrap">
                <img src={preview} alt="result" />
                <div className="result-badge">RESULT</div>
              </div>
            </div>

            {/* RESULT PANEL */}
            <div className="result-panel">
              <h2 className="result-panel-title">Results</h2>

              {/* LEVEL 1 */}
              <div className="tier-result">
                <div className="tier-header">
                  <div>
                    <div className="tier-label">Level 1</div>
                    <div className="tier-value">
                      {result.predictions.level1.class}
                    </div>
                  </div>
                  <div className="tier-conf">
                    {result.predictions.level1.confidence}%
                  </div>
                </div>
                <div className="tier-bar-track">
                  <div
                    className="tier-bar tier-bar--primary"
                    style={{
                      width: `${result.predictions.level1.confidence}%`,
                    }}
                  />
                </div>
              </div>

              {/* LEVEL 2 */}
              <div className="tier-result">
                <div className="tier-header">
                  <div>
                    <div className="tier-label">Level 2</div>
                    <div className="tier-value">
                      {result.predictions.level2.class}
                    </div>
                  </div>
                  <div className="tier-conf">
                    {result.predictions.level2.confidence}%
                  </div>
                </div>
                <div className="tier-bar-track">
                  <div
                    className="tier-bar tier-bar--secondary"
                    style={{
                      width: `${result.predictions.level2.confidence}%`,
                    }}
                  />
                </div>
              </div>

              {/* LEVEL 3 */}
             {result.predictions.level2.class.toLowerCase() !== "food" && (
  <div className="tier-result">
    <div className="tier-header">
      <div>
        <div className="tier-label">Level 3</div>
        <div className="tier-value">
          {result.predictions.level3.class}
        </div>
      </div>
      <div className="tier-conf">
        {result.predictions.level3.confidence}%
      </div>
    </div>

    <div className="tier-bar-track">
      <div
        className="tier-bar tier-bar--tertiary"
        style={{
          width: `${result.predictions.level3.confidence}%`,
        }}
      />
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}