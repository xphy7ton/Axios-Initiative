$docxPath = Join-Path $PSScriptRoot "Core Initiative 03.docx"
$zipPath = Join-Path $PSScriptRoot "doc_temp.zip"
$extractPath = Join-Path $PSScriptRoot "doc_extracted"

Copy-Item $docxPath $zipPath -Force
Expand-Archive $zipPath $extractPath -Force

$xmlContent = Get-Content (Join-Path $extractPath "word/document.xml") -Raw
[regex]$pRegex = "<w:p[^>]*>(.*?)</w:p>"
[regex]$tRegex = "<w:t[^>]*>(.*?)</w:t>"

$lines = @()
foreach ($pMatch in $pRegex.Matches($xmlContent)) {
    $tMatches = $tRegex.Matches($pMatch.Value)
    $pText = ($tMatches | ForEach-Object { $_.Groups[1].Value }) -join ""
    if ($pText.Trim().Length -gt 0) {
        $lines += $pText.Trim()
    }
}

Set-Content -Path (Join-Path $PSScriptRoot "full_docx_text.txt") -Value ($lines -join "`r`n") -Encoding utf8

Remove-Item $zipPath -Force -ErrorAction SilentlyContinue
Remove-Item $extractPath -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Extracted $($lines.Count) lines to full_docx_text.txt"
