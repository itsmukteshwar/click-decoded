#!/usr/bin/env python3
# update_ga4_id.py — Run this after getting the new GA4 Measurement ID
# Usage: python update_ga4_id.py G-NEWMEASUREMENTID

import sys
from pathlib import Path

OLD_ID = "G-LEH1H9LH8E"
NEW_ID = sys.argv[1] if len(sys.argv) > 1 else input("Enter new Measurement ID (e.g. G-ABC123): ").strip()

if not NEW_ID.startswith("G-"):
    print("ERROR: Measurement ID must start with G-")
    sys.exit(1)

ROOT = Path(r"C:\Users\mukte\Claude\Projects\Click DECODED")
updated = []

for f in list(ROOT.rglob("*.html")) + list(ROOT.rglob("*.js")):
    try:
        text = f.read_text(encoding="utf-8", errors="ignore")
        if OLD_ID in text:
            f.write_text(text.replace(OLD_ID, NEW_ID), encoding="utf-8", newline="\n")
            updated.append(f.name)
    except Exception as e:
        print(f"  SKIP {f.name}: {e}")

print(f"\n✅ Updated {len(updated)} files:")
for name in updated:
    print(f"   {name}")

print(f"\nNow run:")
print(f'  git add -A && git commit -m "fix: update GA4 ID to {NEW_ID}" && git push')
