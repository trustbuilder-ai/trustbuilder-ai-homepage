#!/usr/bin/env node

/**
 * Simple Font Download Script for TrustBuilder AI Homepage
 * Downloads fonts using direct URLs and curl/wget
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FONTS_DIR = path.join(__dirname, "public", "fonts");

// Ensure fonts directory exists
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// Font download URLs (these are stable URLs for specific font files)
const FONT_URLS = [
  // Inter Font Family
  {
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
    filename: "Inter-Regular.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2",
    filename: "Inter-Medium.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2",
    filename: "Inter-SemiBold.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff2",
    filename: "Inter-Bold.woff2",
  },

  // Outfit Font Family
  {
    url: "https://fonts.gstatic.com/s/outfit/v11/QGYsz_wNahGiVjsVxzkz-HHKtAWxPEpHWAHlIH0-JZJQ.woff2",
    filename: "Outfit-Regular.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/outfit/v11/QGYsz_wNahGiVjsVxzkz-HHKV42xPEpHWAHlIH0-JZJQ.woff2",
    filename: "Outfit-Medium.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/outfit/v11/QGYsz_wNahGiVjsVxzkz-HHKOo2xPEpHWAHlIH0-JZJQ.woff2",
    filename: "Outfit-SemiBold.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/outfit/v11/QGYsz_wNahGiVjsVxzkz-HHKBY2xPEpHWAHlIH0-JZJQ.woff2",
    filename: "Outfit-Bold.woff2",
  },

  // Plus Jakarta Sans Font Family
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IAqTAtTYCWmyaXRCfAJhP9q.woff2",
    filename: "PlusJakartaSans-Regular.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA7TAtTYCWmyaXRCfAJhP9q.woff2",
    filename: "PlusJakartaSans-Medium.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IAMTAtTYCWmyaXRCfAJhP9q.woff2",
    filename: "PlusJakartaSans-SemiBold.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IAzTAtTYCWmyaXRCfAJhP9q.woff2",
    filename: "PlusJakartaSans-Bold.woff2",
  },

  // JetBrains Mono Font Family
  {
    url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxR4xJemI.woff2",
    filename: "JetBrainsMono-Regular.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxRYxJemI.woff2",
    filename: "JetBrainsMono-Medium.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxRWRJemI.woff2",
    filename: "JetBrainsMono-SemiBold.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxRZhJemI.woff2",
    filename: "JetBrainsMono-Bold.woff2",
  },
];

async function downloadFont(url, filename) {
  const filePath = path.join(FONTS_DIR, filename);

  try {
    console.log(`⬇️  Downloading ${filename}...`);

    // Use curl to download the font file
    execSync(`curl -s -L "${url}" -o "${filePath}"`, { stdio: "inherit" });

    // Verify the file was downloaded and has content
    const stats = fs.statSync(filePath);
    if (stats.size > 0) {
      console.log(
        `✅ Downloaded: ${filename} (${Math.round(stats.size / 1024)}KB)`,
      );
      return true;
    } else {
      console.log(`❌ Failed: ${filename} (empty file)`);
      fs.unlinkSync(filePath);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error downloading ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log("🚀 Starting simple font download process...\n");

  let successCount = 0;
  let totalCount = FONT_URLS.length;

  for (const { url, filename } of FONT_URLS) {
    const success = await downloadFont(url, filename);
    if (success) successCount++;
  }

  console.log("\n📊 Download Summary:");
  console.log(`✅ Successful: ${successCount}/${totalCount}`);
  console.log(`❌ Failed: ${totalCount - successCount}/${totalCount}`);

  if (successCount === totalCount) {
    console.log("\n🎉 All fonts downloaded successfully!");
    console.log("📋 Next steps:");
    console.log("1. Local fonts are now active in the website");
    console.log("2. No external font requests will be made");
    console.log("3. Test the website to verify fonts load correctly");
  } else {
    console.log("\n⚠️  Some fonts failed to download.");
    console.log(
      "   The website will fall back to system fonts for missing files.",
    );
  }
}

main().catch(console.error);
