#!/usr/bin/env bash
set -euo pipefail

# Non-destructive portrait derivatives for the Current Group and Alumni pages.
# Originals remain in images/. Outputs are 800 × 1000 WebP files in
# images/portraits/. The height and vertical offset values below are manually
# tuned for consistent headroom, eye line and face scale after visual review.

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_dir="$repo_dir/images"
output_dir="$source_dir/portraits"
background="#fafafc"

mkdir -p "$output_dir"

build_portrait() {
  local source_name="$1"
  local output_name="$2"
  local scaled_height="$3"
  local vertical_offset="$4"

  convert -size 800x1000 "xc:$background" \
    \( "$source_dir/$source_name" \
       -auto-orient \
       -colorspace sRGB \
       -filter Lanczos \
       -resize "x${scaled_height}" \
       -unsharp 0x0.45+0.45+0.008 \
    \) \
    -gravity north \
    -geometry "+0${vertical_offset}" \
    -composite \
    -strip \
    -define webp:method=6 \
    -quality 88 \
    "$output_dir/$output_name"
}

build_portrait "anoop.png"               "anoop.webp"               825  "+0"
build_portrait "bhrigu-chakraborty.jpg"  "bhrigu-chakraborty.webp"  1050 "+50"
build_portrait "lazumla-sherpa.png"      "lazumla-sherpa.webp"      1100 "+25"
build_portrait "sayan-paul.png"          "sayan-paul.webp"          1100 "+20"
build_portrait "saibal-jana.png"         "saibal-jana.webp"         1050 "+0"
build_portrait "subhajit-mandal.png"     "subhajit-mandal.webp"     1100 "-10"
build_portrait "surajit-nandi.png"       "surajit-nandi.webp"       1000 "+0"
build_portrait "yogeswara-rao.png"       "yogeswara-rao.webp"       1100 "-5"
build_portrait "eshani-das.png"          "eshani-das.webp"          1000 "+50"
build_portrait "maya-khatun.png"         "maya-khatun.webp"         1000 "+0"
build_portrait "saikat-roy.png"          "saikat-roy.webp"          1050 "-5"
build_portrait "sunanda-panda.png"       "sunanda-panda.webp"       1000 "+0"
build_portrait "moumita-banerjee.png"    "moumita-banerjee.webp"    1000 "-10"
build_portrait "arpita-poddar.png"       "arpita-poddar.webp"       980  "+20"
build_portrait "pratik-sarkar.png"       "pratik-sarkar.webp"       930  "+50"
build_portrait "sandip-giri.png"         "sandip-giri.webp"         1000 "+0"

identify -format '%f %wx%h %[mime]\n' "$output_dir"/*.webp
