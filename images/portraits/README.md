# Standardised portraits

These files are non-destructive derivatives of the individual photographs in
`images/`. They are used only for the Current Group and Alumni portrait cards;
historical group photographs are excluded.

- Output: 800 × 1000 px WebP (4:5)
- Background: neutral near-white (`#fafafc`)
- Processing: orientation correction, face-aware manual framing, Lanczos
  resizing and modest output sharpening
- Rebuild command: `./scripts/build-portraits.sh`

The source files for Lazumla Sherpa, Sayan Paul and most alumni are only
151–173 × 227 px. Their derivatives preserve the available information and do
not reconstruct missing detail, but higher-resolution originals should replace
them when available. The original files must remain unchanged.
