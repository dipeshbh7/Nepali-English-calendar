# Nepali (BS) to English (AD) Date Converter

A simple web tool to convert Bikram Sambat (BS) dates to Gregorian (AD) dates. It is built with plain HTML, CSS, and vanilla JavaScript, so there are no dependencies or build steps.

## Features

- Converts BS dates (years 2000 to 2090) to AD.
- Displays the corresponding day of the week.
- Red and blue color scheme.
- Responsive layout that works on mobile and desktop.
- Dynamic day dropdown that updates based on the selected BS month/year.

## How to Run

Since it's a single static file, you don't need a local server or Node.js.

1. Download or clone the `index.html` file.
2. Double-click it to open it in your browser. 

That's it. If you want to host it, just drop the file into Netlify, Vercel, GitHub Pages, or any standard web server.

## Tech Stack

- **HTML/CSS/JS**: 100% vanilla. 
- **Fonts**: Uses the Inter font via jsDelivr CDN. 

## How the Conversion Works

The Nepali calendar doesn't follow a strict mathematical formula like the Gregorian calendar, so the month lengths have to be hardcoded. 

The script uses a reference date of **BS 2000/01/01 = AD 1943/04/14**. When you select a BS date, it calculates the total number of days between your selected date and the reference date using the hardcoded month data, then adds those days to the reference AD date.

## Limitations

- **Year Range**: Only supports BS 2000 to 2090. 
- **Hardcoded Data**: The calendar data array in the JS needs to be manually updated if you want to support years beyond 2090.


## Project Structure

```text
.
├── index.html   # Page layout and structure
├── style.css    # Styling and layout
├── app.js       # Conversion logic and calendar data
└── README.md    # This file
```