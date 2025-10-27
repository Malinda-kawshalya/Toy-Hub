# Script to remove price lines from TypeScript toy data
$filePath = "app\toys\[category]\page.tsx"
$content = Get-Content $filePath

# Remove lines that contain price: followed by any number
$newContent = $content | Where-Object { $_ -notmatch "^\s*price:\s*[\d.]+,?\s*$" }

# Write back to file
$newContent | Set-Content $filePath
Write-Host "Price lines removed from $filePath"