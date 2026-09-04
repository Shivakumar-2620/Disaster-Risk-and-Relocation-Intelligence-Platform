/**
 * Public Landing Page Component
 * Wayanad Disaster Risk & Model Relocation Intelligence System
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { showToast } from '../components/Toast.js';
import { renderHighlightGroup, initHighlightGroup } from '../components/highlightGroup.js';

export function renderLandingScreen() {
  const { overviewStats } = WAYANAD_DATA.district;
  const siteAlpha = WAYANAD_DATA.candidateResettlementSites[0];
  const settlements = WAYANAD_DATA.settlements;

  // Spring-glide highlight group for the Four Pillars section (vanilla port of
  // the unlumen-ui Highlight mode="parent" primitive).
  const pillarsHighlightHtml = renderHighlightGroup({
    id: 'pillars-highlight',
    items: [
      { value: '1', label: 'Hazard Zonation', icon: 'radar' },
      { value: '2', label: 'MCDA Matching', icon: 'tune' },
      { value: '3', label: 'Climate Stress', icon: 'thunderstorm' },
      { value: '4', label: 'Dept. Audit', icon: 'fact_check' },
    ],
  });

  return `
    <div class="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-secondary-container selection:text-on-secondary-container">
      <!-- Top Institutional Banner -->
      <div class="bg-primary text-on-primary py-2 px-4 text-xs font-mono border-b border-primary-container">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GOVERNMENT OF KERALA • DISASTER MANAGEMENT (REVENUE-KSDMA) DEPARTMENT</span>
          </div>
          <div class="flex items-center gap-4 text-[11px] text-emerald-100">
            <span>🔴 DEOC Wayanad Helpline: <strong>1077</strong> / <strong>04936-204151</strong></span>
            <span class="hidden md:inline">|</span>
            <span class="hidden md:inline">G.O. (Ms) No. 114/2026/DMD Active</span>
          </div>
        </div>
      </div>

      <!-- Public Navigation Header -->
      <header class="sticky top-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <!-- Logo & Title -->
          <a href="#landing" class="flex items-center gap-3.5 group">
            <div class="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <span class="material-symbols-outlined text-2xl">shield_with_heart</span>
            </div>
            <div>
              <div class="font-display-md text-base sm:text-lg font-bold text-primary tracking-tight leading-tight">
                Wayanad Decision Portal
              </div>
              <div class="text-[11px] font-label-md text-on-surface-variant tracking-wider uppercase">
                Model Resettlement & Risk Intelligence
              </div>
            </div>
          </a>

          <!-- Navigation Links -->
          <nav class="hidden lg:flex items-center gap-8 text-xs font-semibold text-on-surface-variant">
            <a href="#impact" class="hover:text-primary transition-colors">Relief Telemetry</a>
            <a href="#features" class="hover:text-primary transition-colors">Intelligence Modules</a>
            <a href="#simulator-preview" class="hover:text-primary transition-colors">Risk Simulator</a>
            <a href="#township-blueprint" class="hover:text-primary transition-colors">Model Township</a>
            <a href="#governance" class="hover:text-primary transition-colors">Government Order</a>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-3">
            <a href="#map" class="hidden sm:inline-flex items-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold px-4 py-2.5 rounded-xl border border-outline-variant transition shadow-sm">
              <span class="material-symbols-outlined text-base text-primary">map</span>
              <span>Public GIS Map</span>
            </a>
            <a href="#dashboard" class="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg hover:shadow-emerald-900/20 active:scale-95 transition-all">
              <span class="material-symbols-outlined text-base">login</span>
              <span>Officer Command Center</span>
            </a>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-outline-variant bg-gradient-to-b from-surface-container-low/40 to-background">
        <!-- Background Decorative Grid Texture -->
        <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 50% 50%, #1b6850 1px, transparent 1px); background-size: 32px 32px;"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column: Hero Copy & Value Proposition -->
            <div class="lg:col-span-7 space-y-6 text-left">
              <!-- Live State Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-semibold shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Statutory Resettlement Action Plan • Phase 1 Execution</span>
              </div>

              <!-- Main Hero Title -->
              <h1 class="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.15]">
                Rebuilding Lives With Precision Science & Compassion.
              </h1>

              <!-- Subtitle -->
              <p class="font-serif text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                An algorithmic disaster response and model resettlement decision platform for Wayanad. Integrating <strong>Geological Survey of India (GSI)</strong> borehole telemetry, 1:500 LiDAR slope modeling, and multi-criteria site matching for <strong>3,420 affected families</strong>.
              </p>

              <!-- Dual CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#dashboard" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white text-sm font-bold px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-emerald-900/30 active:scale-95 transition-all">
                  <span class="material-symbols-outlined text-lg">dashboard</span>
                  <span>Enter Officer Command Portal</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href="#map" class="inline-flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface text-sm font-bold px-5 py-3.5 rounded-2xl border border-outline-variant shadow-md active:scale-95 transition-all">
                  <span class="material-symbols-outlined text-lg text-emerald-700">travel_explore</span>
                  <span>Explore GIS Topography Map</span>
                </a>
              </div>

              <!-- High-Level Clearance Indicators -->
              <div class="pt-6 grid grid-cols-3 gap-4 border-t border-outline-variant text-xs">
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">verified</span>
                    <span>Class A Plateau</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">100% GSI Safe Rating</div>
                </div>
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">domain</span>
                    <span>1,200 Villas</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">Climate-Resilient Units</div>
                </div>
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">payments</span>
                    <span>₹428.50 Cr</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">Sanctioned by Cabinet</div>
                </div>
              </div>
            </div>

            <!-- Right Column: Visual Hero Banner with Image -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface-container group">
                <img 
                  src="/images/township.png" 
                  alt="Wayanad Model Resettlement Township Concept" 
                  class="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span class="inline-block bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 w-max">
                    SITE ALPHA • KALPETTA NORTH
                  </span>
                  <h3 class="font-display-md text-xl font-bold text-white leading-snug">
                    Model Township Masterplan (64.5 Acres)
                  </h3>
                  <p class="text-xs text-slate-200 mt-1 font-serif">
                    Gentle 4.5° slope, crystalline bedrock foundation, dedicated 8-cent family plots with solar microgrids.
                  </p>
                </div>
              </div>

              <!-- Floating Live Card Overlay -->
              <div class="absolute -bottom-6 -left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl border border-outline-variant shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">biotech</span>
                </div>
                <div class="text-xs">
                  <div class="font-bold text-slate-900 dark:text-white">Borehole Core BH-04</div>
                  <div class="text-[11px] text-slate-500">SPT N-Value > 50 (Zero Liquefaction)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Disaster Relief & Telemetry Metric Bar -->
      <section id="impact" class="py-12 bg-surface-container-lowest border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="font-label-md text-xs uppercase tracking-widest text-slate-500 font-bold">
              Real-Time Disaster Mitigation & Relief Accounting
            </h2>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Displaced Households</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-primary">${overviewStats.displacedHouseholds.toLocaleString()}</div>
              <div class="mt-2 text-xs text-rose-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">priority_high</span> 100% Relocation Mandated
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Active Relief Shelters</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-on-surface">${overviewStats.activeReliefCamps}</div>
              <div class="mt-2 text-xs text-emerald-700 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">check_circle</span> Rationed & Medical Staffed
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Safe Resettlement Plateau</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400">64.5 <span class="text-lg">Acres</span></div>
              <div class="mt-2 text-xs text-slate-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">pin_drop</span> Kalpetta North (Site Alpha)
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Cabinet Approved Budget</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-on-surface">₹${overviewStats.allocatedBudgetCr} <span class="text-lg">Cr</span></div>
              <div class="mt-2 text-xs text-slate-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">receipt_long</span> G.O. (Ms) No. 114/2026 Cleared
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Core Intelligence Modules Section -->
      <section id="features" class="py-16 lg:py-24 bg-background border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-bold text-xs">
              <span class="material-symbols-outlined text-sm">hub</span> SCIENTIFIC INTELLIGENCE ARCHITECTURE
            </div>
            <h2 class="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              Four Pillars of Algorithmic Relocation
            </h2>
            <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Replacing arbitrary guesswork with rigorous geological survey data, LiDAR slope zonation, and mathematical decision matrices.
            </p>
          </div>

          <!-- Interactive pillar selector — gliding highlight pill -->
          <div class="flex justify-center pt-1">
            ${pillarsHighlightHtml}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Pillar 1 -->
            <div data-pillar-card="1" class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">radar</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">1. Forensic Hazard Zonation</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Debris flow velocity tracking (42 km/h), >35° slope polygon mapping, and rainfall saturation indices across Mundakkai and Chooralmala.
                </p>
              </div>
              <a href="#map" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>View GIS Layer</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 2 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group" data-pillar-card="2">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">2. Multi-Criteria MCDA Matching</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Algorithmic ranking weighting geological stability (35%), evacuation distance (25%), land cost (20%), and utility readiness (20%).
                </p>
              </div>
              <a href="#relocation-tool" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Run Decision Tool</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 3 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group" data-pillar-card="3">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">thunderstorm</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">3. Climate Stress Simulation</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time precipitation surge testing up to +100% extreme cloudburst events, ensuring structural resilience against future climate shocks.
                </p>
              </div>
              <a href="#recommendation" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Simulate Surges</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 4 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group" data-pillar-card="4">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">fact_check</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">4. Inter-Departmental Audit</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Unified digital sign-offs connecting Revenue (Title), Forest (Eco-Buffer), PWD (Roads), and Disaster Management (Contour Safe).
                </p>
              </div>
              <a href="#site-revalidation" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Verify Clearances</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Live Interactive On-Page Simulator Section -->
      <section id="simulator-preview" class="py-16 bg-surface-container-low/50 border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Info -->
            <div class="lg:col-span-5 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <span class="material-symbols-outlined text-sm">science</span> LIVE GEOTECHNICAL SIMULATION
              </div>
              <h2 class="font-display-lg text-2xl sm:text-3xl font-bold text-primary">
                Test Site Resilience Against Extreme Monsoon Surges
              </h2>
              <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Interact with the dynamic rainfall surge controller below to observe how Site Alpha (Kalpetta North) maintains its Class-A safety margin compared to other prospective settlement zones.
              </p>
              <div class="pt-2">
                <a href="#recommendation" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition">
                  <span>Open Full Simulation Suite</span>
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            <!-- Right Interactive Widget -->
            <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant shadow-xl space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white">Rainfall Surge Controller</h4>
                  <p class="text-[11px] text-slate-500">24-Hour Precipitation Simulation</p>
                </div>
                <span id="landing-sim-badge" class="font-mono font-bold text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Base Line (Normal Monsoon)
                </span>
              </div>

              <!-- Interactive Slider -->
              <div class="space-y-2">
                <input type="range" id="landing-rain-slider" min="0" max="100" step="25" value="0" class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
                <div class="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>0% (Base)</span>
                  <span>+25%</span>
                  <span>+50%</span>
                  <span>+75%</span>
                  <span>+100% (Cloudburst)</span>
                </div>
              </div>

              <!-- Live Comparison Outcome Cards -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs" id="landing-sim-results">
                <div class="p-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <div class="font-bold">Site Alpha (Kalpetta)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-emerald-700">100% Stable</strong></div>
                  <div class="text-[10px] text-emerald-600 mt-1">Crystalline Plateau</div>
                </div>
                <div class="p-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <div class="font-bold">Site Beta (Mananthavady)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-emerald-700">98% Stable</strong></div>
                  <div class="text-[10px] text-emerald-600 mt-1">Terrace Overburden</div>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                  <div class="font-bold">Site Gamma (Nedumbala)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-amber-700">75% (Conditional)</strong></div>
                  <div class="text-[10px] text-amber-600 mt-1">Moderate Incline</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Model Resettlement Township Blueprint Section -->
      <section id="township-blueprint" class="py-16 lg:py-24 bg-background border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Visual -->
            <div class="lg:col-span-6 relative">
              <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest h-80 sm:h-96 flex items-center justify-center" style="background: linear-gradient(145deg, #ecfdf5 0%, #d1fae5 45%, #a7f3d0 100%);">
                <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 30% 20%, #059669 1.5px, transparent 1.5px), radial-gradient(circle at 70% 70%, #059669 1.5px, transparent 1.5px); background-size: 48px 48px;"></div>
                <div class="relative z-10 text-center px-8">
                  <span class="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-emerald-700 text-white shadow-lg mb-4">
                    <span class="material-symbols-outlined text-3xl">cottage</span>
                  </span>
                  <div class="font-display-md text-xl sm:text-2xl font-bold text-emerald-900">Sustainable Model Township</div>
                  <p class="text-xs text-emerald-800/80 mt-1.5 font-serif max-w-md mx-auto">
                    Climate-resilient masterplan at Kalpetta North — bedrock-anchored villas, solar microgrids, and community infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="lg:col-span-6 space-y-6">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <span class="material-symbols-outlined text-sm">cottage</span> MODEL TOWNSHIP ARCHITECTURE
              </div>
              
              <h2 class="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                A Climate-Resilient Sustainable Sanctuary at Kalpetta North
              </h2>

              <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                The 64.5-acre Kalpetta North resettlement township is planned not merely as houses, but as a complete socio-economic ecosystem ensuring dignity, security, and sustainable livelihoods for displaced plantation and hillside communities.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">home</span>
                    <span>780 Sq. Ft. Modular Villas</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">8 Cents land per family, G+1 expandable structure anchored to bedrock.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">solar_power</span>
                    <span>Solar Microgrid & Energy</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">Rooftop solar integration with 100% net-metered clean power.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">local_hospital</span>
                    <span>Primary Health Centre</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">24x7 emergency medical trauma unit & community telemedicine.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">storefront</span>
                    <span>Cooperative Tea Bazaar</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">Direct marketing and livelihood rehabilitation fund of ₹45 Crores.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- Government Gazette Transparency & Download Section -->
      <section id="governance" class="py-16 bg-surface-container-lowest border-b border-outline-variant">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="text-center space-y-2">
            <h2 class="font-display-md text-2xl sm:text-3xl font-bold text-primary">
              Statutory Government Order & Gazette Dossier
            </h2>
            <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Government of Kerala G.O. (Ms) No. 114/2026/DMD • Complete administrative and financial transparency
            </p>
          </div>

          <div class="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant pb-4">
              <div>
                <span class="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">ORDER NO: G.O. (Ms) No. 114/2026/DMD</span>
                <h4 class="font-bold text-base text-slate-900 dark:text-white mt-0.5">Wayanad Landslide Rehabilitation & Relocation Project</h4>
              </div>
              <div class="flex items-center gap-2">
                <a href="#final-report" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow">
                  <span class="material-symbols-outlined text-sm">description</span>
                  <span>View Official Gazette</span>
                </a>
              </div>
            </div>

            <!-- Financial Table Summary -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Land Acquisition</span>
                <span class="font-bold text-slate-900 dark:text-white">₹42.00 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Housing Construction</span>
                <span class="font-bold text-slate-900 dark:text-white">₹185.00 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Utilities & Roads</span>
                <span class="font-bold text-slate-900 dark:text-white">₹118.50 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Livelihood & Buffer</span>
                <span class="font-bold text-emerald-700 dark:text-emerald-400">₹83.00 Cr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Emergency Helpline Footer -->
      <footer class="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 text-xs">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-white font-bold text-sm">
              <span class="material-symbols-outlined text-emerald-500">shield_with_heart</span>
              <span>KSDMA Wayanad Portal</span>
            </div>
            <p class="text-slate-400 text-[11px] leading-relaxed">
              District Disaster Management Authority (DDMA), Collectorate, Kalpetta, Wayanad District, Kerala - 673122.
            </p>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Emergency Helplines</div>
            <ul class="space-y-1.5 text-slate-400">
              <li>• District Control Room: <strong class="text-white font-mono">1077</strong></li>
              <li>• Collectorate Helpline: <strong class="text-white font-mono">04936-204151</strong></li>
              <li>• NDRF Rapid Response: <strong class="text-white font-mono">0471-2331645</strong></li>
            </ul>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Intelligence Links</div>
            <ul class="space-y-1.5 text-slate-400">
              <li><a href="#dashboard" class="hover:text-white transition">Officer Command Dashboard</a></li>
              <li><a href="#map" class="hover:text-white transition">Interactive GIS Risk Map</a></li>
              <li><a href="#relocation-tool" class="hover:text-white transition">Relocation Planning Engine</a></li>
              <li><a href="#site-revalidation" class="hover:text-white transition">GSI Site Revalidation</a></li>
            </ul>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Statutory Partners</div>
            <p class="text-slate-400 text-[11px] leading-relaxed">
              Geological Survey of India (GSI), National Institute of Rock Mechanics (NIRM), Department of Revenue, and PWD Kerala.
            </p>
          </div>
        </div>

        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>© 2026 Kerala State Disaster Management Authority (KSDMA). All Rights Reserved.</div>
          <div class="flex items-center gap-4">
            <span>Security Clearance: LEVEL 5 AES-256</span>
            <span>Version 2.4-PROD</span>
          </div>
        </div>
      </footer>
    </div>
  `;
}

export function setupLandingEvents() {
  const slider = document.getElementById('landing-rain-slider');
  const badge = document.getElementById('landing-sim-badge');
  const resultsContainer = document.getElementById('landing-sim-results');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const stressData = WAYANAD_DATA.monsoonStressMatrix.find(m => m.rainfallIntensity === val) || WAYANAD_DATA.monsoonStressMatrix[0];

      if (badge) {
        badge.textContent = stressData.label;
        badge.className = `font-mono font-bold text-xs px-3 py-1 rounded-full ${
          val === 0 ? 'bg-emerald-100 text-emerald-800' :
          val < 50 ? 'bg-blue-100 text-blue-800' :
          val < 100 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
        }`;
      }

      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <div class="p-3.5 rounded-xl border ${stressData.siteASafetyClass}">
            <div class="font-bold">Site Alpha (Kalpetta)</div>
            <div class="text-[11px] mt-1">Status: <strong>${stressData.siteASafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Crystalline Plateau</div>
          </div>
          <div class="p-3.5 rounded-xl border ${stressData.siteBSafetyClass}">
            <div class="font-bold">Site Beta (Mananthavady)</div>
            <div class="text-[11px] mt-1">Status: <strong>${stressData.siteBSafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Terrace Overburden</div>
          </div>
          <div class="p-3.5 rounded-xl border ${stressData.siteCSafetyClass}">
            <div class="font-bold">Site Gamma (Nedumbala)</div>
            <div class="text-[11px] mt-1">Status: <strong>${stressData.siteCSafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Moderate Incline</div>
          </div>
        `;
      }
    });
  }

  // Four Pillars gliding-highlight selector — emphasise the matching card
  const pillarsHighlight = document.getElementById('pillars-highlight');
  if (pillarsHighlight) {
    initHighlightGroup(pillarsHighlight, {
      onValueChange: (val) => {
        document.querySelectorAll('[data-pillar-card]').forEach((card) => {
          const on = val != null && card.getAttribute('data-pillar-card') === val;
          card.classList.toggle('ring-2', on);
          card.classList.toggle('ring-emerald-500/70', on);
          card.classList.toggle('shadow-xl', on);
          card.classList.toggle('-translate-y-1', on);
        });
      },
    });
  }

  // Fix: plain #section anchors are hijacked by the hash router, so the five
  // module-section links (Relief Telemetry, Intelligence Modules, Risk
  // Simulator, Model Township, Government Order) never scrolled. Smooth-scroll instead.
  const SCROLL_SECTIONS = ['impact', 'features', 'simulator-preview', 'township-blueprint', 'governance'];
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute('href').slice(1);
    if (SCROLL_SECTIONS.includes(targetId)) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
}
