#!/usr/bin/env python3
"""
Download product images from Peptide Sciences.
Run: python3 scripts/download-images.py
"""

import subprocess
import json
import re
import os

def generate_slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")

with open("data/products.json") as f:
    data = json.load(f)

os.makedirs("public/images/products", exist_ok=True)

for product in data["products"]:
    slug = generate_slug(product["name"])
    out_path = f"public/images/products/{slug}.webp"

    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        print(f"✓ Already exists: {out_path}")
        continue

    print(f"Downloading: {product['name']} → {out_path}")
    result = subprocess.run([
        "curl", "-L", "-o", out_path,
        "-H", "Referer: https://www.peptidesciences.com/",
        "-H", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        product["image_url"]
    ], capture_output=True)

    if result.returncode == 0 and os.path.getsize(out_path) > 1000:
        print(f"  ✓ Downloaded ({os.path.getsize(out_path)} bytes)")
        product["image_url"] = f"/images/products/{slug}.webp"
    else:
        print(f"  ✗ Failed (returncode={result.returncode})")
        os.remove(out_path) if os.path.exists(out_path) else None

with open("data/products.json", "w") as f:
    json.dump(data, f, indent=2)

print("\nDone! Image paths updated in data/products.json")
