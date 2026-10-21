# Salin website + foto ke folder "our-little-world" supaya dua copy selalu sama.
# Jalankan:  .\sync.ps1   (atau klik double-click sync.bat)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dst  = Join-Path $root "our-little-world"

if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Path $dst | Out-Null }
if (-not (Test-Path (Join-Path $dst "photos"))) { New-Item -ItemType Directory -Path (Join-Path $dst "photos") | Out-Null }

Copy-Item (Join-Path $root "index.html") (Join-Path $dst "index.html") -Force
Copy-Item (Join-Path $root "style.css")  (Join-Path $dst "style.css")  -Force
Copy-Item (Join-Path $root "script.js")  (Join-Path $dst "script.js")  -Force
Copy-Item (Join-Path $root "photos\*")    (Join-Path $dst "photos")    -Force

Write-Host ""
Write-Host "Selesai! our-little-world sudah sama dengan folder utama." -ForegroundColor Green
Write-Host "Foto yang disalin:"
Get-ChildItem (Join-Path $root "photos") -File | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' } | ForEach-Object {
  Write-Host ("  - " + $_.Name)
}
