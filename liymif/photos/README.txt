FOTO - Our Little World (Mifzal & Aliyah)
========================================

CUKUP TARUH FOTO DI SATU FOLDER INI:  photos/
Kalau fotonya ada di folder ini, website di root DAN di our-little-world/
otomatis nampil (nggak perlu nyalin dua kali).

NAMA FILE (WAJIB PERSIS, huruf kecil):
  hero.jpg  -> foto utama di hero, pasangan kalian
  1.jpg     -> first date, Sajenak Coffee
  2.jpg     -> nonton lomba bareng
  3.jpg     -> photobooth #1, Sajenak Coffee
  4.jpg     -> photobooth #2, Buaran Plaza
  5.jpg     -> sajenak coffee (koleksi bareng)
  6.jpg     -> kanvas & cetakan tangan

Kalau foto belum ada, otomatis muncul placeholder heart (nggak error, nggak
pengganti layout). Mau ganti foto -> tinggal ganti nama file / caption di
file script.js bagian CONFIG -> photos.

FORMAT: JPG atau PNG, sisi panjang minimal 900px, rasio 1:1 (buat square)
biar polaroid-nya rapi.

PENTING: jangan rename extension (.jpeg / .webp). Kalau formatnya lain,
buka script.js bagian CONFIG -> photos lalu ganti src-nya, contoh:
  { src: "photos/1.webp", ... }
