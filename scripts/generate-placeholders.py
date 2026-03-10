#!/usr/bin/env python3
"""
Generate placeholder SVG images for all peptide products, heroes, blog, and guide images.
These will display until real images are downloaded.
Run: python3 scripts/generate-placeholders.py
"""
import os
import json
import re

def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")

def make_product_svg(name, category, color="#00d4ff"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060612;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0c0c20;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <rect x="0" y="0" width="400" height="2" fill="url(#accent)" opacity="0.6"/>
  <!-- Flask icon -->
  <g transform="translate(170, 100)">
    <rect x="20" y="0" width="20" height="60" rx="3" fill="url(#accent)" opacity="0.3"/>
    <polygon points="0,60 60,60 50,110 10,110" fill="url(#accent)" opacity="0.2"/>
    <polygon points="5,110 55,110 60,130 0,130" rx="5" fill="url(#accent)" opacity="0.3"/>
    <circle cx="15" cy="90" r="8" fill="{color}" opacity="0.6"/>
    <circle cx="40" cy="105" r="5" fill="{color}" opacity="0.4"/>
    <circle cx="22" cy="110" r="4" fill="{color}" opacity="0.3"/>
  </g>
  <text x="200" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="white">{name[:25]}</text>
  <text x="200" y="305" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="{color}">{category[:30]}</text>
  <text x="200" y="330" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">Research Peptide</text>
  <!-- Grid dots -->
  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.8" fill="{color}" opacity="0.06"/>
  </pattern>
  <rect width="400" height="400" fill="url(#dots)"/>
</svg>'''

def make_hero_svg(title, subtitle, color="#00d4ff"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="680" viewBox="0 0 1920 680">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060612;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0c0c20;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="50%">
      <stop offset="0%" style="stop-color:{color};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:{color};stop-opacity:0" />
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="680" fill="url(#bg)"/>
  <rect width="1920" height="680" fill="url(#glow)"/>
  <!-- Grid dots pattern -->
  <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="{color}" opacity="0.05"/>
  </pattern>
  <rect width="1920" height="680" fill="url(#dots)"/>
  <!-- Decorative circles -->
  <circle cx="1400" cy="340" r="300" fill="{color}" opacity="0.04"/>
  <circle cx="1500" cy="200" r="200" fill="#7c3aed" opacity="0.04"/>
  <text x="100" y="320" font-family="system-ui, sans-serif" font-size="96" font-weight="900" fill="white" opacity="0.9">{title}</text>
  <text x="100" y="380" font-family="system-ui, sans-serif" font-size="28" fill="{color}">{subtitle}</text>
</svg>'''

def make_blog_svg(title, color="#00d4ff"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060612" />
      <stop offset="100%" style="stop-color:#0c0c20" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:{color}" />
      <stop offset="100%" style="stop-color:#7c3aed" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>
  <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.8" fill="{color}" opacity="0.05"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <circle cx="900" cy="315" r="350" fill="{color}" opacity="0.04"/>
  <text x="80" y="280" font-family="system-ui, sans-serif" font-size="42" font-weight="bold" fill="white" opacity="0.9">{title[:50]}</text>
  <text x="80" y="340" font-family="system-ui, sans-serif" font-size="42" font-weight="bold" fill="white" opacity="0.9">{title[50:100] if len(title) > 50 else ""}</text>
  <rect x="80" y="390" width="120" height="4" rx="2" fill="url(#accent)"/>
  <text x="80" y="440" font-family="system-ui, sans-serif" font-size="20" fill="rgba(255,255,255,0.45)">PeptideLab Research Blog</text>
</svg>'''

# Load products
with open("data/products.json") as f:
    products = json.load(f)["products"]

CATEGORY_COLORS = {
    "Recovery & Repair": "#06b6d4",
    "Growth Hormone Peptides": "#8b5cf6",
    "Anti-Aging & Longevity": "#f59e0b",
    "Cognitive & Nootropic": "#10b981",
    "Body Composition": "#ef4444",
    "Sexual Health": "#ec4899",
    "Anti-Inflammatory": "#0ea5e9",
}

# Product placeholders
os.makedirs("public/images/products", exist_ok=True)
for p in products:
    s = slug(p["name"])
    path = f"public/images/products/{s}.webp"
    color = CATEGORY_COLORS.get(p["categories"][0], "#00d4ff") if p["categories"] else "#00d4ff"
    svg = make_product_svg(p["name"], p["categories"][0] if p["categories"] else "Research Peptide", color)
    with open(path.replace(".webp", ".svg"), "w") as f:
        f.write(svg)
    # Copy as webp path with svg content (Next.js Image with unoptimized will serve it)
    with open(path, "w") as f:
        f.write(svg)
    print(f"Created placeholder: {path}")

# Hero carousel placeholders
os.makedirs("public/images/hero", exist_ok=True)
heroes = [
    ("bpc-157-hero", "BPC-157", "The Premier Tissue Repair Peptide", "#06b6d4"),
    ("ipamorelin-hero", "Ipamorelin", "The Cleanest GH Secretagogue", "#8b5cf6"),
    ("epithalon-hero", "Epithalon", "35 Years of Longevity Research", "#f59e0b"),
    ("semax-hero", "Semax", "The BDNF-Maximizing Nootropic", "#10b981"),
    ("ghk-cu-hero", "GHK-Cu", "4000+ Gene Activating Copper Peptide", "#f59e0b"),
]
for name, title, subtitle, color in heroes:
    path = f"public/images/hero/{name}.webp"
    svg = make_hero_svg(title, subtitle, color)
    with open(path, "w") as f:
        f.write(svg)
    print(f"Created hero: {path}")

# Blog placeholders
os.makedirs("public/images/blog", exist_ok=True)
blogs = [
    ("bpc-157-guide", "BPC-157 Complete Research Guide", "#06b6d4"),
    ("ipamorelin-cjc-stack", "Ipamorelin + CJC-1295 Stack Guide", "#8b5cf6"),
    ("epithalon-longevity", "Epithalon & Telomere Science", "#f59e0b"),
    ("semax-nootropic", "Semax: The BDNF Nootropic", "#10b981"),
    ("ghk-cu-research", "GHK-Cu: 4000-Gene Activator", "#f59e0b"),
    ("best-recovery-peptides", "Best Recovery Peptides 2026", "#06b6d4"),
]
for name, title, color in blogs:
    path = f"public/images/blog/{name}.webp"
    svg = make_blog_svg(title, color)
    with open(path, "w") as f:
        f.write(svg)
    print(f"Created blog placeholder: {path}")

# Guide placeholders
os.makedirs("public/images/guides", exist_ok=True)
guide_list = [
    ("peptide-storage", "Peptide Storage & Reconstitution Guide", "#00d4ff"),
    ("gh-peptide-stacking", "GH Peptide Stacking Guide", "#8b5cf6"),
    ("peptide-purity", "Peptide Purity Testing Guide", "#10b981"),
    ("longevity-protocols", "Longevity Peptide Protocols 2026", "#f59e0b"),
]
for name, title, color in guide_list:
    path = f"public/images/guides/{name}.webp"
    svg = make_blog_svg(title, color)
    with open(path, "w") as f:
        f.write(svg)
    print(f"Created guide placeholder: {path}")

print("\n✓ All placeholders generated!")
print("Run 'python3 scripts/download-images.py' to download real images from Peptide Sciences.")
