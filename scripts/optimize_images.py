"""Convert the clearly labeled concept images to optimized WebP assets.

Run with a Python environment that has Pillow installed.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "source-images"
DESTINATION = ROOT / "dist" / "assets"
DESTINATION.mkdir(parents=True, exist_ok=True)

for name in ("concept-exterior", "concept-staircase", "concept-living-room", "concept-kitchen"):
    source = SOURCE / f"{name}.png"
    target = DESTINATION / f"{name}.webp"
    with Image.open(source) as image:
        image.convert("RGB").save(target, "WEBP", quality=82, method=6)
        print(f"{source.name} {image.width}x{image.height} -> {target.name} ({target.stat().st_size:,} bytes)")
