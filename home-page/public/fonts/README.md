# Local Fonts Directory

This directory should contain the following font files for optimal performance:

## Inter Font Files:

- Inter-Regular.woff2
- Inter-Regular.woff
- Inter-Medium.woff2
- Inter-Medium.woff
- Inter-SemiBold.woff2
- Inter-SemiBold.woff
- Inter-Bold.woff2
- Inter-Bold.woff

## Outfit Font Files:

- Outfit-Regular.woff2
- Outfit-Regular.woff
- Outfit-Medium.woff2
- Outfit-Medium.woff
- Outfit-SemiBold.woff2
- Outfit-SemiBold.woff
- Outfit-Bold.woff2
- Outfit-Bold.woff

## Plus Jakarta Sans Font Files:

- PlusJakartaSans-Regular.woff2
- PlusJakartaSans-Regular.woff
- PlusJakartaSans-Medium.woff2
- PlusJakartaSans-Medium.woff
- PlusJakartaSans-SemiBold.woff2
- PlusJakartaSans-SemiBold.woff
- PlusJakartaSans-Bold.woff2
- PlusJakartaSans-Bold.woff

## JetBrains Mono Font Files:

- JetBrainsMono-Regular.woff2
- JetBrainsMono-Regular.woff
- JetBrainsMono-Medium.woff2
- JetBrainsMono-Medium.woff
- JetBrainsMono-SemiBold.woff2
- JetBrainsMono-SemiBold.woff
- JetBrainsMono-Bold.woff2
- JetBrainsMono-Bold.woff

## How to Obtain Fonts:

### Option 1: Automated Script (Recommended)

The easiest way to download all fonts is using our automated script:

```bash
# From the project root directory
npm run download-fonts
```

This script will:

- ✅ Download all 16 required font files automatically
- ✅ Save them to the correct `/public/fonts/` directory
- ✅ Verify file integrity and report download status
- ✅ Show progress and file sizes for each font

**Note**: The script is located at `/scripts/download-fonts-simple.js` and uses direct URLs to download WOFF2 files from Google Fonts CDN.

### Option 2: Manual Download from Google Fonts

1. Visit https://fonts.google.com/
2. Search for each font family
3. Select the required weights (400, 500, 600, 700)
4. Download as WOFF2/WOFF format

### Option 3: Use Font Download Tool

```bash
# Install google-fonts-downloader
npm install -g google-fonts-downloader

# Download fonts
google-fonts-downloader "Inter:400,500,600,700" --out ./fonts/ --formats woff2,woff
google-fonts-downloader "Outfit:400,500,600,700" --out ./fonts/ --formats woff2,woff
google-fonts-downloader "Plus Jakarta Sans:400,500,600,700" --out ./fonts/ --formats woff2,woff
google-fonts-downloader "JetBrains Mono:400,500,600,700" --out ./fonts/ --formats woff2,woff
```

### Option 4: Extract from Google Fonts API

Use the direct API URLs to download the WOFF2/WOFF files.

## Benefits of Local Fonts:

- ✅ Faster loading (no external requests)
- ✅ Better privacy (no Google tracking)
- ✅ Offline functionality
- ✅ More reliable (no CDN dependencies)
- ✅ Better caching control
