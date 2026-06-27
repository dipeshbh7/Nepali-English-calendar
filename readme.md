# Nepali (BS) ⇄ English (AD) Date Converter

A web tool to convert between Bikram Sambat (BS) and Gregorian (AD) dates. Built with plain HTML, CSS, and vanilla JavaScript — no dependencies or build step.

## Features

- **Bidirectional conversion**: BS → AD and AD → BS.
- "Today" shortcut on both panels, computed dynamically (not hardcoded).
- Displays the corresponding day of the week.
- Copy result to clipboard.
- Keyboard support: press Enter to convert.
- Dynamic day dropdown that updates based on the selected BS month/year.
- Responsive layout for mobile and desktop.

## How to Run

Since it's a static site, no local server or Node.js is needed.

1. Download or clone the files.
2. Open `index.html` in your browser.

To host it, drop the files into Netlify, Vercel, GitHub Pages, or any static web server.

## Tech Stack

- **HTML/CSS/JS**: 100% vanilla.
- **Fonts**: Inter via jsDelivr CDN.

## How the Conversion Works

The Nepali calendar doesn't follow a strict mathematical formula like the Gregorian calendar, so month lengths are hardcoded per year.

The script uses a reference date of **BS 2000/01/01 = AD 1943/04/14**.

- **BS → AD**: counts the total days between the selected BS date and the reference date using the hardcoded month data, then adds those days to the reference AD date.
- **AD → BS**: computes the day offset between the selected AD date and the reference AD date, then walks forward through the hardcoded BS month data to find the matching BS year/month/day.

## Limitations

- **Year range**: Only supports BS 2000–2090 (≈ AD 1943–2034).
- **Hardcoded data**: The calendar data array in `app.js` needs to be manually extended to support years beyond this range.

## Project Structure

```text
.
├── index.html   # Page layout and structure
├── style.css    # Styling and layout
├── app.js       # Conversion logic and calendar data
└── README.md    # This file
```
