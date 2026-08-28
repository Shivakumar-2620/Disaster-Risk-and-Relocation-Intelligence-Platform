/**
 * Final Recommendation Report & Executive Cabinet Dossier Screen
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { openCabinetApprovalModal } from '../components/Modal.js';
import { showToast } from '../components/Toast.js';

export function renderFinalReportScreen() {
  const { governmentOrder, candidateResettlementSites } = WAYANAD_DATA;
  const siteAlpha = candidateResettlementSites[0];
  const { cabinetApprovalSubmitted } = appState.getState();

  return `
    <div class="p-4 md:p-margin-desktop max-w-5xl mx-auto flex flex-col gap-6" id="printable-dossier">
      <!-- Action Bar (Hidden during print) -->
      <div class="no-print flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold">
            <span class="material-symbols-outlined text-sm">verified_user</span>
            STATUTORY CABINET DOSSIER • READY FOR GAZETTE NOTIFICATION
          </div>
          <h2 class="font-display-md text-lg font-bold text-primary">Executive Relocation Clearance Package</h2>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          <button id="btn-download-geojson" class="bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold px-3.5 py-2 rounded-xl border border-outline-variant transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">download</span>
            <span>Export GeoJSON</span>
          </button>
          <button id="btn-print-dossier" class="bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold px-3.5 py-2 rounded-xl border border-outline-variant transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">print</span>
            <span>Print Official Dossier</span>
          </button>
          <button id="btn-submit-cabinet" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">stamp</span>
            <span>Affix Seal & Submit</span>
          </button>
        </div>
      </div>

      <!-- Government Order Document Card (Print Styled) -->
      <div class="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant shadow-xl space-y-8 print:p-0 print:border-none print:shadow-none">
        <!-- Official Seal & Header -->
        <div class="text-center border-b-2 border-slate-900 dark:border-slate-300 pb-6 space-y-2">
          <div class="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center shadow-md mb-2">
            <span class="material-symbols-outlined text-3xl">shield_with_heart</span>
          </div>
          <h2 class="font-serif font-bold text-xl md:text-2xl text-slate-900 dark:text-white uppercase tracking-wider">
            Government of Kerala
          </h2>
          <h3 class="font-serif text-sm font-semibold text-slate-700 dark:text-slate-300">
            ${governmentOrder.department}
          </h3>
          <p class="text-xs text-slate-500 font-serif">${governmentOrder.secretariat}</p>
          <div class="pt-2 flex justify-between items-center text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-4">
            <span><strong>Order No:</strong> ${governmentOrder.orderNumber}</span>
            <span><strong>Dated:</strong> ${governmentOrder.date}</span>
          </div>
        </div>

        <!-- Subject -->
        <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant text-xs space-y-1">
          <div class="font-bold uppercase text-slate-500 text-[10px]">Subject:</div>
          <p class="font-serif font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
            ${governmentOrder.subject}
          </p>
        </div>

        <!-- Executive Summary -->
        <div class="space-y-3 text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-serif">
          <h4 class="font-sans font-bold text-sm text-primary uppercase tracking-wide border-b border-outline-variant pb-1">
            1. Preamble & Relocation Mandate
          </h4>
          <p>
            Following the catastrophic debris flow and massive regolith failure in the Meppadi Panchayat (affecting Mundakkai, Chooralmala, Attamala, and Vellarmala), the District Disaster Management Authority (DDMA) and Geological Survey of India (GSI) have conducted comprehensive multi-criteria slope stability and hazard zonation surveys.
          </p>
          <p>
            Based on forensic borehole data and 100-year return period climate stress testing, <strong>${siteAlpha.name}</strong> has been unanimously recommended and validated across Revenue, Forest, PWD, and Disaster Management statutory domains.
          </p>
        </div>

        <!-- Sanctioned Financial Allocation Table -->
        <div class="space-y-3 text-xs font-data-tabular">
          <h4 class="font-sans font-bold text-sm text-primary uppercase tracking-wide border-b border-outline-variant pb-1">
            2. Sanctioned Financial Package
          </h4>
          <div class="overflow-x-auto rounded-xl border border-outline-variant">
            <table class="w-full text-left">
              <thead class="bg-surface-container-high text-slate-700 dark:text-slate-300 font-semibold">
                <tr>
                  <th class="py-2.5 px-4">Component</th>
                  <th class="py-2.5 px-4 text-right">Financial Sanction</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant">
                <tr>
                  <td class="py-2 px-4">Land Acquisition (64.5 Acres Vested Estate)</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${governmentOrder.financialAllocation.landAcquisition}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Phase 1 Residential Construction (1,200 Climate-Resilient Units)</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${governmentOrder.financialAllocation.residentialUnitsPhase1}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Arterial Roads, Power Substation & Water Treatment</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${governmentOrder.financialAllocation.infrastructureAndUtilities}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Livelihood Rehabilitation & Community Cooperative Fund</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${governmentOrder.financialAllocation.livelihoodRehabilitation}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Ecological Buffer Planting & Storm Drainage Network</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${governmentOrder.financialAllocation.ecologicalBufferAndDrainage}</td>
                </tr>
                <tr class="bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200">
                  <td class="py-3 px-4 text-sm">Total Sanctioned Rehabilitation Outlay</td>
                  <td class="py-3 px-4 text-right text-sm font-mono">${governmentOrder.financialAllocation.totalBudget}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Housing Specifications & Milestones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-serif">
          <div class="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <h5 class="font-sans font-bold text-primary text-xs uppercase">Model Housing Standards:</h5>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• <strong>Plinth Area:</strong> ${governmentOrder.housingSpecifications.plinthArea}</li>
              <li>• <strong>Plot Size:</strong> ${governmentOrder.housingSpecifications.landPerFamily}</li>
              <li>• <strong>Foundation:</strong> ${governmentOrder.housingSpecifications.foundation}</li>
              <li>• <strong>Superstructure:</strong> ${governmentOrder.housingSpecifications.superstructure}</li>
            </ul>
          </div>

          <div class="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <h5 class="font-sans font-bold text-primary text-xs uppercase">Phased Implementation Milestones:</h5>
            <ul class="space-y-1.5 text-slate-700 dark:text-slate-300">
              ${governmentOrder.implementationPhases.map(p => `
                <li>• <strong>${p.phase}:</strong> ${p.description}</li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Signatures & Authority Seals -->
        <div class="pt-8 border-t-2 border-slate-900 dark:border-slate-300 grid grid-cols-2 gap-8 text-xs font-serif">
          <div class="space-y-1">
            <div class="font-bold text-slate-900 dark:text-white">Dr. Rachel Thomas, Ph.D.</div>
            <div class="text-slate-500">Chief Hazard Geologist, Geological Survey of India</div>
            <div class="text-[10px] font-mono text-emerald-700">Digital Hash: SHA256-GSI-89102-WYD</div>
          </div>
          <div class="text-right space-y-1">
            <div class="font-bold text-slate-900 dark:text-white">Dr. A. K. Vasudevan, IAS</div>
            <div class="text-slate-500">District Magistrate & Chairman, DDMA Wayanad</div>
            <div class="text-[10px] font-mono text-emerald-700">Digital Seal: KSDMA-EXEC-2026-OK</div>
          </div>
        </div>

        <!-- Cabinet Seal (Appears when signed) -->
        <div id="cabinet-seal-indicator" class="${cabinetApprovalSubmitted ? 'flex' : 'hidden'} items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-2xl border-2 border-dashed border-emerald-500 font-bold text-sm uppercase tracking-widest gap-2">
          <span class="material-symbols-outlined text-2xl">verified</span>
          <span>OFFICIALLY ATTESTED & SUBMITTED TO CABINET OF MINISTERS</span>
        </div>
      </div>
    </div>
  `;
}

export function setupFinalReportEvents() {
  document.getElementById('btn-submit-cabinet')?.addEventListener('click', () => {
    openCabinetApprovalModal();
  });

  document.getElementById('btn-print-dossier')?.addEventListener('click', () => {
    window.print();
  });

  document.getElementById('btn-download-geojson')?.addEventListener('click', () => {
    const geojson = {
      type: "FeatureCollection",
      name: "Wayanad_Relocation_Sites_KSDMA_2026",
      crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
      features: [
        ...WAYANAD_DATA.settlements.map(s => ({
          type: "Feature",
          properties: {
            name: s.name,
            type: "Affected Settlement",
            riskLevel: s.riskLevel,
            riskScore: s.riskScore,
            displacedFamilies: s.displacedFamilies,
            recommendedAction: s.recommendedAction
          },
          geometry: {
            type: "Point",
            coordinates: [s.coordinates[1], s.coordinates[0]]
          }
        })),
        ...WAYANAD_DATA.candidateResettlementSites.map(site => ({
          type: "Feature",
          properties: {
            name: site.name,
            code: site.code,
            type: "Candidate Resettlement Site",
            areaAcres: site.availableAreaAcres,
            capacityHouseholds: site.capacityHouseholds,
            status: site.status,
            stabilityScore: site.soilStabilityScore
          },
          geometry: {
            type: "Point",
            coordinates: [site.coordinates[1], site.coordinates[0]]
          }
        }))
      ]
    };

    const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Wayanad_Relocation_Package_2026.geojson';
    a.click();
    URL.revokeObjectURL(url);
    showToast('GeoJSON shapefile exported successfully.', 'success', 'GIS DATA READY');
  });
}
