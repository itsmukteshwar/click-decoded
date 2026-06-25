# Click Decoded — Git setup + commit + Vercel deploy
# Run this from Warp/PowerShell in the project folder:
#   cd "C:\Users\mukte\Claude\Projects\Click DECODED"
#   .\push-update.ps1

param([string]$Message = "chore: update website content")

$ErrorActionPreference = "Stop"
Set-Location "C:\Users\mukte\Claude\Projects\Click DECODED"

Write-Host "`n🔄 Click Decoded Deploy Script`n" -ForegroundColor Cyan

# First-time git setup
if (-not (Test-Path ".git")) {
    Write-Host "🛠  Setting up git for the first time..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/itsmukteshwar/click-decoded.git
    git fetch origin
    Write-Host "✅ Git initialized and remote set." -ForegroundColor Green
}

# Commit and push
git add .
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "⚠  No changes to commit." -ForegroundColor Yellow
} else {
    git commit -m $Message
    git push -u origin HEAD:main --force
    Write-Host "✅ Pushed to GitHub → Vercel will auto-deploy in ~60s" -ForegroundColor Green
}

Write-Host "`n🌐 Live URL: https://click-decoded.vercel.app`n" -ForegroundColor Cyan
