# Create leader placeholders
1..6 | ForEach-Object {
    $leaderPath = "public\images\leaders\leader$_.jpg"
    Write-Output "Creating $leaderPath"
    Set-Content -Path $leaderPath -Value "Placeholder for leader$_.jpg"
}

# Create partner placeholders
$partners = @(
    "tech-africa",
    "adb",
    "uct",
    "drf",
    "savannah",
    "wadc",
    "lbs",
    "atv",
    "padc",
    "din"
)

foreach ($partner in $partners) {
    $partnerPath = "public\images\partners\$partner.png"
    Write-Output "Creating $partnerPath"
    Set-Content -Path $partnerPath -Value "Placeholder for $partner.png"
}

Write-Output "All placeholder files created!" 