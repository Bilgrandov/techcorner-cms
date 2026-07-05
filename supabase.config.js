/**
 * supabase.config.js — TechCorner CMS
 *
 * ✅ SUPABASE_ANON_KEY  = PUBLIC key. Aman untuk di-commit & diekspose di browser.
 *    Keamanannya dijaga oleh RLS (Row Level Security) policies di database.
 *
 * ❌ service_role key   = JANGAN PERNAH taruh di sini atau file apapun yang di-commit.
 *    Key itu bypass semua RLS dan bisa merusak/hapus semua data.
 *    Temukan di: Supabase > Settings > API > service_role key
 */
const SUPABASE_URL      = 'https://ddqpfmisiaswqiznxbsn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcXBmbWlzaWFzd3Fpem54YnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyMDg2NjMsImV4cCI6MjA5ODc4NDY2M30.RRo4oi4rYMTqflAEV-d2ixPvgoKRQ825jnH4zjiDldE';
