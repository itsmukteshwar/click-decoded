# Click Decoded — One-time Git + Vercel Setup Script
# Run this ONCE in Warp from the project folder:
#   cd "C:\Users\mukte\Claude\Projects\Click DECODED"
#   .\setup-deploy.ps1

$ErrorActionPreference = "Stop"
$ProjectDir = "C:\Users\mukte\Claude\Projects\Click DECODED"
$RepoName   = "click-decoded-website"

Write-Host "`n🚀 Click Decoded — Git & Vercel Setup`n" -ForegroundColor Cyan

# 1. Clean any broken .git from previous attempts
if (Test-Path "$ProjectDir\.git") {
    Write-Host "Removing old .git directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "$ProjectDir\.git"
}

Set-Location $ProjectDir

# 2. Git init
Write-Host "Initialising Git repository..." -ForegroundColor Green
git init -b main
git config user.name  "Mukteshwar"
git config user.email "itsmukteshwar@gmail.com"

# 3. .gitignore
@"
.DS_Store
Thumbs.db
*.log
node_modules/
.vercel/
"@ | Out-File -Encoding utf8 .gitignore

# 4. Stage & commit
git add .
git commit -m "feat: initial Click Decoded website launch"

# 5. Create GitHub repo (requires gh CLI — install with: winget install --id GitHub.cli)
Write-Host "`nCreating GitHub repository '$RepoName'..." -ForegroundColor Green
gh repo create $RepoName --public --source=. --remote=origin --push

Write-Host "`nGitHub push complete!" -ForegroundColor Cyan

# 6. Deploy to Vercel (requires vercel CLI — install with: npm i -g vercel)
Write-Host "`nDeploying to Vercel..." -ForegroundColor Green
vercel --prod --yes --name click-decoded

Write-Host "`n✅ Done! Your site is live on Vercel.`n" -ForegroundColor Cyan
