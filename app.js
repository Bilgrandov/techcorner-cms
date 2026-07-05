/**
 * app.js — TechCorner CMS
 * Shared logic: Supabase client, auth helpers, toast
 */

// Init Supabase client (menggunakan CDN global `supabase`)
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Cek apakah user sudah login.
 * Kalau belum, redirect ke halaman login.
 */
async function requireAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) {
    window.location.href = 'index.html';
    return null;
  }
  return session;
}

/**
 * Tampilkan email user di sidebar
 */
async function renderUserInfo() {
  const { data: { user } } = await sb.auth.getUser();
  const emailEl = document.getElementById('user-email');
  const avatarEl = document.getElementById('user-avatar');
  if (user && emailEl) {
    emailEl.textContent = user.email;
    if (avatarEl) avatarEl.textContent = user.email[0].toUpperCase();
  }
}

/**
 * Logout
 */
async function logout() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
}

/**
 * Tampilkan toast notification
 * @param {string} message
 * @param {'success'|'error'|''} type
 */
function showToast(message, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/**
 * Format ISO timestamp ke "2026-07-05 10:30"
 */
function formatDate(isoStr) {
  if (!isoStr) return '-';
  return isoStr.slice(0, 16).replace('T', ' ');
}

/**
 * Map type ke CSS badge class
 */
function badgeClass(type) {
  const map = { journal: 'badge-journal', blog: 'badge-blog', cp: 'badge-cp' };
  return map[type] || 'badge-journal';
}

// Bind logout button jika ada di halaman
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);
});
