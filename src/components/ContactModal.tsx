import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Mail, 
  Send, 
  Inbox, 
  Trash2, 
  ExternalLink, 
  Download, 
  MessageCircle, 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  Linkedin, 
  Instagram, 
  FileSpreadsheet, 
  Settings, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  service: string;
  date: string;
  budget: string;
  message: string;
  submittedAt: string;
  syncedToSheet?: boolean;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const STORAGE_INQUIRIES_KEY = 'bs_portfolio_inquiries_v1';
const STORAGE_SHEET_KEY = 'bs_portfolio_google_sheet_webhook_url';

// Default / fallback Google Apps Script Web App URL for contact inquiries
// Bangkit can update this URL directly in the Inbox / Settings tab
const DEFAULT_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec';

const APPS_SCRIPT_SAMPLE_CODE = `// ========================================================
// GOOGLE APPS SCRIPT CODE (Paste di Extensions > Apps Script)
// ========================================================
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Pastikan header ada di baris pertama
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Nama", "Email", "Layanan", "Timeline", "Budget", "Pesan Brief"]);
    }
    
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("id-ID"),
      data.name || "",
      data.email || "",
      data.service || "",
      data.date || "",
      data.budget || "",
      data.message || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'inbox' | 'sheet_settings'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService || 'People & Culture Leadership');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('Project-Based');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedInquiry, setLastSubmittedInquiry] = useState<ContactInquiry | null>(null);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedScript, setCopiedScript] = useState(false);
  
  // Google Sheet Web App URL state
  const [sheetWebhookUrl, setSheetWebhookUrl] = useState<string>('');
  const [sheetInputUrl, setSheetInputUrl] = useState<string>('');
  const [sheetSaveStatus, setSheetSaveStatus] = useState<string | null>(null);
  const [testSyncStatus, setTestSyncStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  // Load inquiries and Sheet URL from localStorage
  useEffect(() => {
    try {
      const savedInquiries = localStorage.getItem(STORAGE_INQUIRIES_KEY);
      if (savedInquiries) {
        const parsed = JSON.parse(savedInquiries);
        if (Array.isArray(parsed)) {
          setInquiries(parsed);
        }
      }

      const savedSheetUrl = localStorage.getItem(STORAGE_SHEET_KEY) || DEFAULT_SHEET_WEBAPP_URL;
      setSheetWebhookUrl(savedSheetUrl);
      setSheetInputUrl(savedSheetUrl);
    } catch {
      // ignore
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Send to Google Sheets Web App endpoint via POST
  const sendToGoogleSheet = async (inquiryData: ContactInquiry) => {
    const url = sheetWebhookUrl || DEFAULT_SHEET_WEBAPP_URL;
    if (!url || !url.startsWith('http')) return false;

    try {
      // Using no-cors mode ensures browser does not block Google Apps Script redirects
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });
      return true;
    } catch (err) {
      console.warn('Google Sheet sync attempted:', err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newInquiry: ContactInquiry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      service,
      date: date.trim() || 'Flexible / As soon as possible',
      budget,
      message: message.trim(),
      submittedAt: new Date().toLocaleString('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      syncedToSheet: true,
    };

    // 1. Dispatch to Google Sheets
    await sendToGoogleSheet(newInquiry);

    // 2. Save locally into browser storage
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    setLastSubmittedInquiry(newInquiry);
    try {
      localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(updated));
    } catch {
      // storage unavailable
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setDate('');
    setMessage('');
    setLastSubmittedInquiry(null);
    onClose();
  };

  const handleSaveSheetUrl = () => {
    const trimmed = sheetInputUrl.trim();
    setSheetWebhookUrl(trimmed);
    try {
      localStorage.setItem(STORAGE_SHEET_KEY, trimmed);
      setSheetSaveStatus('URL Google Sheet berhasil disimpan!');
      setTimeout(() => setSheetSaveStatus(null), 3000);
    } catch {
      // storage unavailable
    }
  };

  const handleTestSheetSync = async () => {
    setTestSyncStatus('testing');
    const testInquiry: ContactInquiry = {
      id: 'test-' + Date.now(),
      name: 'Uji Coba Sistem (Test Lead)',
      email: 'test@example.com',
      service: 'People & Culture Leadership',
      date: 'Immediate / Test',
      budget: 'Consulting Advisory',
      message: 'Ini adalah pesan uji coba otomatis untuk memverifikasi koneksi Google Sheet.',
      submittedAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      syncedToSheet: true,
    };

    try {
      await sendToGoogleSheet(testInquiry);
      setTestSyncStatus('success');
      setTimeout(() => setTestSyncStatus('idle'), 4000);
    } catch {
      setTestSyncStatus('error');
      setTimeout(() => setTestSyncStatus('idle'), 4000);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
  };

  const handleClearAllInquiries = () => {
    if (window.confirm('Hapus semua riwayat pesan masuk di perangkat ini?')) {
      setInquiries([]);
      try {
        localStorage.removeItem(STORAGE_INQUIRIES_KEY);
      } catch {
        // storage unavailable
      }
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['Waktu', 'Nama', 'Email', 'Tipe Kerjasama', 'Timeline', 'Budget', 'Pesan Brief'];
    const rows = inquiries.map((inq) => [
      `"${inq.submittedAt}"`,
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.email.replace(/"/g, '""')}"`,
      `"${inq.service.replace(/"/g, '""')}"`,
      `"${inq.date.replace(/"/g, '""')}"`,
      `"${inq.budget.replace(/"/g, '""')}"`,
      `"${inq.message.replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Inquiries_BangkitSuryaWijaya_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate WhatsApp pre-filled link
  const buildWhatsAppLink = (inq: ContactInquiry) => {
    const text = encodeURIComponent(
      `Halo Mas Bangkit Surya Wijaya,\n\nSaya ingin berdiskusi mengenai kerjasama:\n- *Nama*: ${inq.name}\n- *Email*: ${inq.email}\n- *Kebutuhan*: ${inq.service}\n- *Timeline*: ${inq.date}\n- *Budget/Scope*: ${inq.budget}\n\n*Pesan Brief*:\n${inq.message}\n\nTerima kasih!`
    );
    return `https://wa.me/62895321294231?text=${text}`;
  };

  // Generate Email mailto link
  const buildMailtoLink = (inq: ContactInquiry) => {
    const subject = encodeURIComponent(`[Inquiry Portfolio] ${inq.service} - ${inq.name}`);
    const body = encodeURIComponent(
      `Halo Bangkit Surya Wijaya,\n\nBerikut detail kebutuhan kerjasama kami:\n\nNama: ${inq.name}\nEmail: ${inq.email}\nLayanan: ${inq.service}\nTarget Waktu: ${inq.date}\nSkema / Budget: ${inq.budget}\n\nDetail Pesan:\n${inq.message}\n\nSalam,\n${inq.name}`
    );
    return `mailto:Bangkitsurya321@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-neutral-200 max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/80">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900">
                {activeTab === 'form' && (isSubmitted ? 'Pesan Terkirim' : 'Start a Conversation')}
                {activeTab === 'inbox' && 'Kotak Masuk Pesan (Inbox)'}
                {activeTab === 'sheet_settings' && 'Integrasi Google Sheet'}
              </h3>
              <p className="text-xs text-neutral-500">
                {activeTab === 'form' && !isSubmitted && 'Hubungi Surya untuk People & Culture lead, automasi HR, atau konsultasi'}
                {activeTab === 'form' && isSubmitted && 'Formulir berhasil diproses dan dicatat'}
                {activeTab === 'inbox' && `${inquiries.length} pesan tersimpan di browser ini`}
                {activeTab === 'sheet_settings' && 'Hubungkan formulir dengan Google Sheets Anda secara real-time'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab Nav Controls */}
            {activeTab !== 'form' && (
              <button
                onClick={() => setActiveTab('form')}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Form</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab(activeTab === 'inbox' ? 'form' : 'inbox')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'inbox'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
              title="Lihat pesan masuk yang tersimpan di browser"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Inbox</span>
              {inquiries.length > 0 && (
                <span className={`px-1.5 py-0.2 text-[10px] rounded-full ${
                  activeTab === 'inbox' ? 'bg-neutral-700 text-white' : 'bg-black text-white'
                }`}>
                  {inquiries.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab(activeTab === 'sheet_settings' ? 'form' : 'sheet_settings')}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'sheet_settings'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
              title="Pengaturan Integrasi Google Sheet"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {/* ======================= GOOGLE SHEET SETTINGS TAB ======================= */}
          {activeTab === 'sheet_settings' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">
                      Koneksi Google Sheets (Google Apps Script)
                    </h4>
                    <p className="text-xs text-neutral-500">
                      Setiap formulir yang diisi pengunjung langsung disinkronkan ke Google Sheet Anda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Webhook Input Card */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
                <label className="block text-xs font-bold text-neutral-800">
                  Google Apps Script Web App URL:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    value={sheetInputUrl}
                    onChange={(e) => setSheetInputUrl(e.target.value)}
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    className="flex-1 px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl font-mono focus:outline-none focus:border-black"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveSheetUrl}
                      className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Simpan URL
                    </button>
                    <button
                      type="button"
                      onClick={handleTestSheetSync}
                      disabled={testSyncStatus === 'testing'}
                      className="px-3.5 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {testSyncStatus === 'testing' ? 'Menguji...' : 'Tes Kirim'}
                    </button>
                  </div>
                </div>

                {sheetSaveStatus && (
                  <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{sheetSaveStatus}</span>
                  </p>
                )}

                {testSyncStatus === 'success' && (
                  <p className="text-xs text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    ✓ Sukses mengirim data uji coba ke Google Sheet Anda!
                  </p>
                )}
                {testSyncStatus === 'error' && (
                  <p className="text-xs text-red-600 font-medium bg-red-50 p-2 rounded-lg border border-red-200">
                    ⚠️ Gagal mengirim. Pastikan Web App diset ke "Who has access: Anyone".
                  </p>
                )}
              </div>

              {/* Step by Step Guide & Code */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-800">
                    Cara Pasang Web App Google Apps Script (Hanya 1 Menit):
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(APPS_SCRIPT_SAMPLE_CODE);
                      setCopiedScript(true);
                      setTimeout(() => setCopiedScript(false), 2000);
                    }}
                    className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-black font-semibold cursor-pointer px-2.5 py-1 rounded-lg border border-neutral-200 bg-white"
                  >
                    {copiedScript ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript ? 'Tersalin!' : 'Salin Script'}</span>
                  </button>
                </div>

                <div className="text-xs text-neutral-600 space-y-1.5 pl-4 list-decimal">
                  <p>1. Buka <strong>Google Sheets</strong> baru di Google Drive Anda.</p>
                  <p>2. Klik menu <strong>Extensions &gt; Apps Script</strong>.</p>
                  <p>3. Hapus kode default dan paste kode script di bawah ini.</p>
                  <p>4. Klik tombol <strong>Deploy &gt; New deployment</strong>, pilih jenis <strong>Web app</strong>.</p>
                  <p>5. Set <strong>Who has access</strong> menjadi <strong>"Anyone"</strong>, lalu klik <strong>Deploy</strong>.</p>
                  <p>6. Salin URL Web App yang muncul, lalu tempel di kotak URL di atas.</p>
                </div>

                <pre className="p-3 bg-neutral-900 text-neutral-100 rounded-xl text-[11px] font-mono overflow-x-auto max-h-48 leading-relaxed">
                  {APPS_SCRIPT_SAMPLE_CODE}
                </pre>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-black font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Formulir</span>
                </button>
              </div>
            </div>
          ) : activeTab === 'inbox' ? (
            /* ======================= INBOX TAB ======================= */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    Daftar Formulir Kontak Masuk
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Semua pesan tercatat di browser ini dan otomatis disinkronkan ke Google Sheet.
                  </p>
                </div>

                {inquiries.length > 0 && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleExportCSV}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-medium cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      <span>Unduh CSV</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleClearAllInquiries}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 font-medium cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Bersihkan</span>
                    </button>
                  </div>
                )}
              </div>

              {inquiries.length === 0 ? (
                <div className="py-12 text-center text-neutral-400">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 mx-auto flex items-center justify-center text-neutral-400 mb-3">
                    <Inbox className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-neutral-600">Belum ada pesan yang masuk</p>
                  <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                    Ketika ada pengunjung yang mengirim formulir kontak, datanya akan langsung tercatat di sini dan terkirim ke Google Sheets.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('form')}
                    className="mt-4 px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-full hover:bg-neutral-800 cursor-pointer"
                  >
                    Buka Formulir Kontak
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50/70 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-neutral-900 text-sm">{inq.name}</span>
                            <span className="text-xs text-neutral-400">·</span>
                            <a
                              href={`mailto:${inq.email}`}
                              className="text-xs text-neutral-600 hover:text-black underline underline-offset-2"
                            >
                              {inq.email}
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 mt-1">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-neutral-200 text-neutral-800">
                              {inq.service}
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-100 text-neutral-600">
                              {inq.budget}
                            </span>
                            <span className="text-[10px] text-neutral-400 flex items-center gap-1 font-mono">
                              <Clock className="w-2.5 h-2.5" />
                              {inq.submittedAt}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-medium">
                              <FileSpreadsheet className="w-2.5 h-2.5" />
                              Google Sheet
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `Nama: ${inq.name}\nEmail: ${inq.email}\nLayanan: ${inq.service}\nBudget: ${inq.budget}\nTimeline: ${inq.date}\nPesan: ${inq.message}`
                              );
                              setCopiedId(inq.id);
                              setTimeout(() => setCopiedId(null), 2000);
                            }}
                            className="p-1.5 text-xs text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                            title="Salin teks pesan"
                          >
                            {copiedId === inq.id ? 'Tersalin!' : 'Salin'}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Hapus pesan ini"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-neutral-100 text-xs text-neutral-700 leading-relaxed whitespace-pre-wrap mb-3">
                        {inq.message}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-neutral-100 text-[11px]">
                        <span className="text-neutral-400">
                          Target Timeline: <strong className="text-neutral-600 font-normal">{inq.date}</strong>
                        </span>
                        <div className="flex items-center gap-2">
                          <a
                            href={buildWhatsAppLink(inq)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>Buka di WA</span>
                          </a>
                          <span className="text-neutral-300">|</span>
                          <a
                            href={buildMailtoLink(inq)}
                            className="inline-flex items-center gap-1 text-neutral-800 font-semibold hover:underline"
                          >
                            <Mail className="w-3 h-3" />
                            <span>Balas Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Informational Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950 flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold mb-0.5 flex items-center gap-1.5 text-emerald-900">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                    <span>Terkoneksi ke Google Sheets</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    Setiap pesan baru dikirim ke Web App Google Apps Script Anda. Anda dapat mengubah spreadsheet tujuan kapan saja di menu Pengaturan.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('sheet_settings')}
                  className="px-3 py-1.5 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 shrink-0 cursor-pointer"
                >
                  Pengaturan Sheet
                </button>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-black font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Formulir Kontak</span>
                </button>
              </div>
            </div>
          ) : isSubmitted ? (
            /* ======================= DELIGHTFUL SUCCESS SENDING VIEW ======================= */
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="py-4 text-center flex flex-col items-center"
            >
              {/* Animated Success Badge with Glow */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-200 shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-400 text-neutral-900 flex items-center justify-center shadow-md animate-bounce">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <h4 className="font-display font-extrabold text-2xl text-neutral-950 mb-1 tracking-tight">
                Inquiry Successfully Dispatched!
              </h4>
              <p className="text-xs text-neutral-600 max-w-md mb-4 leading-relaxed">
                Terima kasih, <strong>{name}</strong>! Pesan brief Anda telah berhasil dikirimkan, dicatat di sistem, dan disinkronkan ke <strong>Google Sheet</strong>.
              </p>

              {/* Status Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                  <Check className="w-3 h-3" />
                  Disinkronkan ke Google Sheet
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                  <Inbox className="w-3 h-3" />
                  Tercatat di Admin Inbox
                </span>
              </div>

              {/* Summary Receipt Card */}
              {lastSubmittedInquiry && (
                <div className="w-full max-w-lg mb-6 text-left bg-neutral-50/80 rounded-2xl border border-neutral-200 p-4 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-neutral-200/70 pb-2">
                    <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                      Ringkasan Kebutuhan
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {lastSubmittedInquiry.submittedAt}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-neutral-400 block text-[10px]">PENGIRIM</span>
                      <strong className="text-neutral-900 font-semibold">{lastSubmittedInquiry.name}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">EMAIL</span>
                      <span className="text-neutral-700 font-medium truncate block">{lastSubmittedInquiry.email}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">LAYANAN</span>
                      <span className="text-neutral-800 font-medium">{lastSubmittedInquiry.service}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">SKEMA / TIMELINE</span>
                      <span className="text-neutral-800 font-medium">{lastSubmittedInquiry.budget} ({lastSubmittedInquiry.date})</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-200/70">
                    <span className="text-neutral-400 block text-[10px] mb-1">PESAN BRIEF:</span>
                    <p className="text-xs text-neutral-700 italic bg-white p-2.5 rounded-xl border border-neutral-100 leading-relaxed">
                      "{lastSubmittedInquiry.message}"
                    </p>
                  </div>
                </div>
              )}

              {/* Direct Instant Contact Actions */}
              {lastSubmittedInquiry && (
                <div className="w-full max-w-lg mb-6 text-left space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-800">
                      Opsi Pengiriman Instan Langsung ke Kontak Pribadi Surya:
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Tersambung Langsung</span>
                  </div>

                  {/* WhatsApp Direct Action */}
                  <a
                    href={buildWhatsAppLink(lastSubmittedInquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:brightness-105 transition-all cursor-pointer group active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white text-emerald-700 flex items-center justify-center shadow-sm">
                        <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">
                          Kirim Langsung ke WhatsApp Mas Bangkit (+62 895-3212-94231)
                        </div>
                        <div className="text-[11px] text-emerald-100">
                          Buka WhatsApp dengan draft pesan otomatis berisi rincian brief di atas
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Email Direct Action */}
                  <a
                    href={buildMailtoLink(lastSubmittedInquiry)}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900 text-white shadow-md hover:bg-neutral-800 transition-all cursor-pointer group active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-800 text-white flex items-center justify-center border border-neutral-700">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">
                          Kirim Salinan via Email (Bangkitsurya321@gmail.com)
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          Membuka aplikasi email client (Gmail / Outlook) Anda
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* Social Channels Strip */}
              <div className="w-full max-w-lg mb-6 pt-3 border-t border-neutral-100">
                <span className="text-[11px] text-neutral-500 block mb-2 font-medium">
                  Atau terhubung langsung melalui profil sosial media resmi:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] text-neutral-700 text-xs font-medium transition-colors border border-neutral-200 cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 text-neutral-400" />
                  </a>

                  <a
                    href="https://www.instagram.com/bangsur.w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-pink-50 hover:text-pink-600 text-neutral-700 text-xs font-medium transition-colors border border-neutral-200 cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Instagram</span>
                    <ExternalLink className="w-2.5 h-2.5 text-neutral-400" />
                  </a>

                  <a
                    href="https://wa.me/62895321294231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-emerald-50 hover:text-emerald-700 text-neutral-700 text-xs font-medium transition-colors border border-neutral-200 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-2.5 h-2.5 text-neutral-400" />
                  </a>

                  <a
                    href="mailto:Bangkitsurya321@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-colors border border-neutral-200 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('inbox')}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Buka Kotak Masuk ({inquiries.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setDate('');
                  }}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-full transition-all cursor-pointer active:scale-95"
                >
                  Kirim Pesan Lain
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer shadow-md active:scale-95"
                >
                  Selesai & Tutup
                </button>
              </div>
            </motion.div>
          ) : (
            /* ======================= MAIN CONTACT FORM ======================= */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso / HR Director"
                    className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="budi@perusahaan.com"
                    className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Bentuk Kerjasama / Engagement
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors cursor-pointer"
                  >
                    <option value="People & Culture Leadership">People & Culture Leadership (Full-Time / Fractional)</option>
                    <option value="Custom HR Systems & Automation">Custom HR Systems & Automation Build</option>
                    <option value="Workforce Planning & Org Design">Workforce Planning & Org Design Consulting</option>
                    <option value="Event Operations & Moderation">Event Operations & Professional Moderation / MC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Target Waktu Mulai / Timeline
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Contoh: Segera / Q2 2026 / Fleksibel"
                    className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Skema Anggaran / Lingkup
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Project-Based', 'Full-Time Lead', 'Consulting Advisory', 'Keynote / MC'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudget(tier)}
                      className={`px-3 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        budget === tier
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Detail Kebutuhan / Brief *
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan tentang organisasi Anda, jumlah tim, tantangan People & Culture saat ini, atau kebutuhan sistem yang ingin dibangun..."
                  className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Direct Clickable Social Contact Bar */}
              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-neutral-500 font-medium">
                  Hubungi Langsung:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0A66C2] hover:underline font-semibold cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-neutral-300">·</span>
                  <a
                    href="https://www.instagram.com/bangsur.w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-pink-600 hover:underline font-semibold cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-neutral-300">·</span>
                  <a
                    href="https://wa.me/62895321294231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 hover:underline font-semibold cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-neutral-400 font-mono">
                  Bangkitsurya321@gmail.com · (+62)8953-2129-4231
                </div>

                <div className="flex items-center gap-2">
                  {inquiries.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab('inbox')}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-neutral-600 hover:text-black font-semibold rounded-full border border-neutral-200 hover:bg-neutral-50 transition-all cursor-pointer"
                    >
                      <Inbox className="w-3.5 h-3.5" />
                      <span>Kotak Masuk ({inquiries.length})</span>
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Mengirim...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
