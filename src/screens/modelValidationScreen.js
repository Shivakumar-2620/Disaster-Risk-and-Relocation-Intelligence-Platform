/**
 * Model Performance & Validation Screen Component
 * SIH Round-2: Data-driven ML verification, benchmark comparison, confusion matrix, and feature importances.
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';

export function renderModelValidationScreen() {
  const mv = WAYANAD_DATA.modelValidation;
  const pm = mv.metrics.primaryModel;
  const bm = mv.metrics.baselineModel;
  const cm = mv.confusionMatrix;

  return `
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-purple-800 dark:text-purple-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">psychology</span>
            GEOTECHNICAL MACHINE LEARNING AUDIT & BENCHMARK SUITE
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">ML Risk Model Validation & Transparency</h1>
          <p class="text-xs text-on-surface-variant mt-1">Empirical evaluation of Random Forest Landslide Susceptibility Classifier against Logistic Regression Baseline</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 text-xs font-bold font-mono border border-purple-200 dark:border-purple-800">
            <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            MODEL v${mv.modelCard.version} • VERIFIED
          </span>
          <a href="#risk-profile" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            <span>Return to Risk Profile</span>
          </a>
        </div>
      </div>

      <!-- High-Level KPI Comparison Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <!-- ROC-AUC Score -->
        <div class="bg-surface-container-lowest p-4 rounded-2xl border-2 border-purple-500/40 shadow-sm space-y-1">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">ROC-AUC Score</span>
          <div class="flex items-baseline gap-1.5">
            <span class="font-display-md text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-300 font-mono">${pm.rocAuc}</span>
            <span class="text-[11px] text-emerald-600 font-semibold">+0.052 vs baseline</span>
          </div>
          <span class="text-[10px] text-slate-400 block">5-Fold CV Mean: ${mv.cvMean} (±${mv.cvStd})</span>
        </div>

        <!-- Accuracy -->
        <div class="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm space-y-1">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Classification Accuracy</span>
          <div class="flex items-baseline gap-1.5">
            <span class="font-display-md text-2xl md:text-3xl font-bold text-on-surface font-mono">${pm.accuracy}%</span>
            <span class="text-[11px] text-emerald-600 font-semibold">+6.0% gain</span>
          </div>
          <span class="text-[10px] text-slate-400 block">Baseline: ${bm.accuracy}% (Logistic Reg.)</span>
        </div>

        <!-- Precision -->
        <div class="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm space-y-1">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Precision (Positive)</span>
          <div class="flex items-baseline gap-1.5">
            <span class="font-display-md text-2xl md:text-3xl font-bold text-on-surface font-mono">${pm.precision}%</span>
            <span class="text-[11px] text-emerald-600 font-semibold">Low False Alarm</span>
          </div>
          <span class="text-[10px] text-slate-400 block">Only 1 False Positive on test set</span>
        </div>

        <!-- Recall -->
        <div class="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm space-y-1">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Sensitivity / Recall</span>
          <div class="flex items-baseline gap-1.5">
            <span class="font-display-md text-2xl md:text-3xl font-bold text-on-surface font-mono">${pm.recall}%</span>
            <span class="text-[11px] text-rose-600 font-semibold">Safety Critical</span>
          </div>
          <span class="text-[10px] text-slate-400 block">Captures 38 of 40 active slides</span>
        </div>

        <!-- F1-Score -->
        <div class="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm space-y-1">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Harmonic F1-Score</span>
          <div class="flex items-baseline gap-1.5">
            <span class="font-display-md text-2xl md:text-3xl font-bold text-on-surface font-mono">${pm.f1Score}</span>
            <span class="text-[11px] text-emerald-600 font-semibold">Balanced</span>
          </div>
          <span class="text-[10px] text-slate-400 block">Baseline F1: ${bm.f1Score}</span>
        </div>
      </div>

      <!-- Main Audit Layout: 2 Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left: Feature Importance & Confusion Matrix (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <!-- Feature Importance Attribution -->
          <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
            <div class="flex justify-between items-center border-b border-outline-variant pb-3">
              <div>
                <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
                  <span class="material-symbols-outlined text-purple-600">bar_chart</span>
                  Geomorphological Feature Importance Attribution
                </h3>
                <p class="text-xs text-slate-500">Gini-impurity reduction ranking across 100 decision trees</p>
              </div>
              <span class="text-[11px] font-mono text-slate-400 font-semibold">8 Calibrated Predictors</span>
            </div>

            <div class="space-y-3 pt-1">
              ${mv.featureImportances.map(f => `
                <div class="space-y-1 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-300 font-mono text-[10px] font-bold flex items-center justify-center">#${f.rank}</span>
                      <span>${f.name}</span>
                    </span>
                    <div class="flex items-center gap-2 font-mono">
                      <span class="text-slate-400 text-[10px] hidden sm:inline">${f.source}</span>
                      <strong class="text-purple-700 dark:text-purple-300">${f.importance}%</strong>
                    </div>
                  </div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div class="bg-gradient-to-r from-purple-500 to-primary h-full rounded-full transition-all duration-700" style="width: ${(f.importance / 30) * 100}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Confusion Matrix & Cross-Validation Folds -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Confusion Matrix Table -->
            <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3">
              <div class="border-b border-outline-variant pb-2">
                <h4 class="font-bold text-xs text-primary flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-base">grid_on</span>
                  Confusion Matrix (Holdout Test Set N=100)
                </h4>
              </div>

              <div class="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <span class="text-[10px] text-emerald-800 dark:text-emerald-300 block uppercase font-bold">True Negative</span>
                  <strong class="text-2xl text-emerald-700 dark:text-emerald-400">${cm.trueNegatives}</strong>
                  <span class="text-[10px] text-slate-400 block mt-0.5">Correctly Classified Stable</span>
                </div>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
                  <span class="text-[10px] text-amber-800 dark:text-amber-300 block uppercase font-bold">False Positive</span>
                  <strong class="text-2xl text-amber-700 dark:text-amber-400">${cm.falsePositives}</strong>
                  <span class="text-[10px] text-slate-400 block mt-0.5">False Landslide Alarm</span>
                </div>
                <div class="p-3 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900">
                  <span class="text-[10px] text-rose-800 dark:text-rose-300 block uppercase font-bold">False Negative</span>
                  <strong class="text-2xl text-rose-700 dark:text-rose-400">${cm.falseNegatives}</strong>
                  <span class="text-[10px] text-slate-400 block mt-0.5">Missed Hazard (Critical)</span>
                </div>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                  <span class="text-[10px] text-purple-800 dark:text-purple-300 block uppercase font-bold">True Positive</span>
                  <strong class="text-2xl text-purple-700 dark:text-purple-400">${cm.truePositives}</strong>
                  <span class="text-[10px] text-slate-400 block mt-0.5">Correct Landslide Trigger</span>
                </div>
              </div>
            </div>

            <!-- 5-Fold Cross Validation -->
            <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3">
              <div class="border-b border-outline-variant pb-2">
                <h4 class="font-bold text-xs text-primary flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-base">repeat</span>
                  5-Fold Stratified Cross-Validation
                </h4>
              </div>

              <div class="space-y-2 text-xs">
                ${mv.crossValidationFolds.map((score, i) => `
                  <div class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-mono">
                    <span class="text-slate-600 dark:text-slate-400 font-sans font-semibold">Fold ${i + 1} ROC-AUC:</span>
                    <strong class="text-purple-700 dark:text-purple-300">${score}</strong>
                  </div>
                `).join('')}
              </div>

              <div class="pt-2 border-t border-outline-variant flex justify-between text-xs font-mono">
                <span class="text-slate-500">Mean Score:</span>
                <strong class="text-emerald-600">${mv.cvMean} ± ${mv.cvStd}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Model Architecture, Baseline Comparison & Ethical Safeguards (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Baseline vs Primary Comparison Table -->
          <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3">
            <h4 class="font-bold text-xs text-primary flex items-center gap-1.5 border-b border-outline-variant pb-2">
              <span class="material-symbols-outlined text-base">compare_arrows</span>
              Primary Model vs Baseline Benchmark
            </h4>

            <table class="w-full text-left text-xs font-data-tabular">
              <thead class="bg-surface-container text-on-surface-variant text-[10px] uppercase font-semibold">
                <tr>
                  <th class="py-2 px-3">Metric</th>
                  <th class="py-2 px-3 text-slate-500">Baseline (Logistic Reg.)</th>
                  <th class="py-2 px-3 text-purple-700 dark:text-purple-300">Random Forest</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant font-mono text-[11px]">
                <tr>
                  <td class="py-2 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">Accuracy</td>
                  <td class="py-2 px-3 text-slate-500">${bm.accuracy}%</td>
                  <td class="py-2 px-3 font-bold text-purple-700 dark:text-purple-300">${pm.accuracy}%</td>
                </tr>
                <tr>
                  <td class="py-2 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">Precision</td>
                  <td class="py-2 px-3 text-slate-500">${bm.precision}%</td>
                  <td class="py-2 px-3 font-bold text-purple-700 dark:text-purple-300">${pm.precision}%</td>
                </tr>
                <tr>
                  <td class="py-2 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">Recall</td>
                  <td class="py-2 px-3 text-slate-500">${bm.recall}%</td>
                  <td class="py-2 px-3 font-bold text-purple-700 dark:text-purple-300">${pm.recall}%</td>
                </tr>
                <tr>
                  <td class="py-2 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">F1-Score</td>
                  <td class="py-2 px-3 text-slate-500">${bm.f1Score}</td>
                  <td class="py-2 px-3 font-bold text-purple-700 dark:text-purple-300">${pm.f1Score}</td>
                </tr>
                <tr>
                  <td class="py-2 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">ROC-AUC</td>
                  <td class="py-2 px-3 text-slate-500">${bm.rocAuc}</td>
                  <td class="py-2 px-3 font-bold text-emerald-600">${pm.rocAuc}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Model Card & Training Details -->
          <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-3 text-xs">
            <h4 class="font-bold text-xs text-primary flex items-center gap-1.5 border-b border-outline-variant pb-2">
              <span class="material-symbols-outlined text-base">badge</span>
              Formal Model Card & Specifications
            </h4>

            <div class="space-y-2 text-slate-700 dark:text-slate-300">
              <div class="flex justify-between py-1 border-b border-outline-variant/50">
                <span class="text-slate-500">Model Name:</span>
                <span class="font-semibold">${mv.modelCard.name}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-outline-variant/50">
                <span class="text-slate-500">Architecture:</span>
                <span class="font-mono text-purple-700 dark:text-purple-300">${mv.modelCard.type}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-outline-variant/50">
                <span class="text-slate-500">Training Samples:</span>
                <span class="font-mono">${mv.modelCard.trainingDataset}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-outline-variant/50">
                <span class="text-slate-500">Cross-Validation:</span>
                <span>${mv.modelCard.crossValidation}</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-500">Deployment Status:</span>
                <span class="font-bold text-emerald-600">${mv.modelCard.status}</span>
              </div>
            </div>
          </div>

          <!-- Ethical Safeguards & Decision-Support Notice -->
          <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/60 space-y-2 text-xs text-amber-950 dark:text-amber-100">
            <div class="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              <span class="material-symbols-outlined text-amber-600">gavel</span>
              Statutory Decision-Support Safeguard
            </div>
            <p class="leading-relaxed text-[11px] text-amber-900/90 dark:text-amber-200/90">
              This system acts strictly as an <strong>intelligent decision-support tool</strong> for district disaster management officers. 
              The machine learning model <strong>DOES NOT</strong> execute automated land acquisitions, evictions, or compensation allocations. 
              All relocation proposals require on-site borehole validation by GSI geologists and formal administrative clearance under Kerala Land Acquisition rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupModelValidationEvents() {
  // Read-only audit screen; interactions are handled via navigation
}
