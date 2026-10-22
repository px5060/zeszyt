"""Ikony ZESZYT: kartka w kratkę ze spiralą, czerwone linie tercji, napis ZESZYT."""
import pathlib
from PIL import Image, ImageDraw, ImageFont
out = pathlib.Path(__file__).resolve().parent
for size in (192, 512):
    s = size / 512
    im = Image.new('RGB', (size, size), '#b8902e'); d = ImageDraw.Draw(im)
    d.rounded_rectangle([96*s, 40*s, 456*s, 380*s], radius=int(14*s), fill='white')
    for x in range(120, 456, 24):
        d.line([x*s, 40*s, x*s, 380*s], fill='#b9cdea', width=max(1, int(2*s)))
    for y in range(64, 380, 24):
        d.line([96*s, y*s, 456*s, y*s], fill='#b9cdea', width=max(1, int(2*s)))
    for y in (160, 280):
        d.line([96*s, y*s, 456*s, y*s], fill='#d9302c', width=max(2, int(6*s)))
    d.line([276*s, 40*s, 276*s, 380*s], fill='#16181f', width=max(2, int(5*s)))
    for y in range(64, 380, 40):
        d.ellipse([66*s, (y-12)*s, 118*s, (y+12)*s], outline='#e8ebf2', width=max(2, int(7*s)))
    f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', int(84*s))
    d.text((256*s, 446*s), 'ZESZYT', font=f, fill='white', anchor='mm')
    im.save(out / f'zeszyt-{size}.png')
print('ikony zapisane')
