// Nepali months
const nepaliMonths = [
  'Baishakh', 'Jestha', 'Ashadh', 'Shrawan',
  'Bhadra', 'Ashwin', 'Kartik', 'Mangsir',
  'Poush', 'Magh', 'Falgun', 'Chaitra'
];

const englishMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// BS calendar data: days in each month for each year (BS 2000 - 2090)
const bsCalendarData = {
  2000: [30,32,31,32,31,30,30,30,29,30,29,31],
  2001: [31,31,32,31,31,31,30,29,30,29,30,30],
  2002: [31,31,32,32,31,30,30,29,30,29,30,30],
  2003: [31,32,31,32,31,30,30,30,29,29,30,31],
  2004: [30,32,31,32,31,30,30,30,29,30,29,31],
  2005: [31,31,32,31,31,31,30,29,30,29,30,30],
  2006: [31,31,32,32,31,30,30,29,30,29,30,30],
  2007: [31,32,31,32,31,30,30,30,29,29,30,31],
  2008: [31,31,31,32,31,31,29,30,30,29,29,31],
  2009: [31,31,32,31,31,31,30,29,30,29,30,30],
  2010: [31,31,32,32,31,30,30,29,30,29,30,30],
  2011: [31,32,31,32,31,30,30,30,29,29,30,31],
  2012: [31,31,31,32,31,31,29,30,30,29,30,30],
  2013: [31,31,32,31,31,31,30,29,30,29,30,30],
  2014: [31,31,32,32,31,30,30,29,30,29,30,30],
  2015: [31,32,31,32,31,30,30,30,29,29,30,31],
  2016: [31,31,31,32,31,31,29,30,30,29,30,30],
  2017: [31,31,32,31,31,31,30,29,30,29,30,30],
  2018: [31,32,31,32,31,30,30,29,30,29,30,30],
  2019: [31,32,31,32,31,30,30,30,29,30,29,31],
  2020: [31,31,31,32,31,31,30,29,30,29,30,30],
  2021: [31,31,32,31,31,31,30,29,30,29,30,30],
  2022: [31,32,31,32,31,30,30,30,29,29,30,30],
  2023: [31,32,31,32,31,30,30,30,29,30,29,31],
  2024: [31,31,31,32,31,31,30,29,30,29,30,30],
  2025: [31,31,32,31,31,31,30,29,30,29,30,30],
  2026: [31,32,31,32,31,30,30,30,29,29,30,30],
  2027: [31,32,31,32,31,30,30,30,29,30,29,31],
  2028: [31,31,32,31,31,31,30,29,30,29,30,30],
  2029: [31,31,32,31,32,30,30,29,30,29,30,30],
  2030: [31,32,31,32,31,30,30,30,29,29,30,31],
  2031: [30,32,31,32,31,30,30,30,29,30,29,31],
  2032: [31,31,32,31,31,31,30,29,30,29,30,30],
  2033: [31,31,32,32,31,30,30,29,30,29,30,30],
  2034: [31,32,31,32,31,30,30,30,29,29,30,31],
  2035: [30,32,31,32,31,31,29,30,30,29,29,31],
  2036: [31,31,32,31,31,31,30,29,30,29,30,30],
  2037: [31,31,32,32,31,30,30,29,30,29,30,30],
  2038: [31,32,31,32,31,30,30,30,29,29,30,31],
  2039: [31,31,31,32,31,31,29,30,30,29,30,30],
  2040: [31,31,32,31,31,31,30,29,30,29,30,30],
  2041: [31,31,32,32,31,30,30,29,30,29,30,30],
  2042: [31,32,31,32,31,30,30,30,29,29,30,31],
  2043: [31,31,31,32,31,31,29,30,30,29,30,30],
  2044: [31,31,32,31,31,31,30,29,30,29,30,30],
  2045: [31,32,31,32,31,30,30,29,30,29,30,30],
  2046: [31,32,31,32,31,30,30,30,29,29,30,31],
  2047: [31,31,31,32,31,31,30,29,30,29,30,30],
  2048: [31,31,32,31,31,31,30,29,30,29,30,30],
  2049: [31,32,31,32,31,30,30,30,29,29,30,30],
  2050: [31,32,31,32,31,30,30,30,29,30,29,31],
  2051: [31,31,31,32,31,31,30,29,30,29,30,30],
  2052: [31,31,32,31,31,31,30,29,30,29,30,30],
  2053: [31,32,31,32,31,30,30,30,29,29,30,30],
  2054: [31,32,31,32,31,30,30,30,29,30,29,31],
  2055: [31,31,32,31,31,31,30,29,30,29,30,30],
  2056: [31,31,32,32,31,30,30,29,30,29,30,30],
  2057: [31,32,31,32,31,30,30,30,29,29,30,31],
  2058: [30,32,31,32,31,30,30,30,29,30,29,31],
  2059: [31,31,32,31,31,31,30,29,30,29,30,30],
  2060: [31,31,32,32,31,30,30,29,30,29,30,30],
  2061: [31,32,31,32,31,30,30,30,29,29,30,31],
  2062: [30,32,31,32,31,31,29,30,29,30,29,31],
  2063: [31,31,32,31,31,31,30,29,30,29,30,30],
  2064: [31,31,32,32,31,30,30,29,30,29,30,30],
  2065: [31,32,31,32,31,30,30,30,29,29,30,31],
  2066: [31,31,31,32,31,31,29,30,30,29,29,31],
  2067: [31,31,32,31,31,31,30,29,30,29,30,30],
  2068: [31,31,32,32,31,30,30,29,30,29,30,30],
  2069: [31,32,31,32,31,30,30,30,29,29,30,31],
  2070: [31,31,31,32,31,31,29,30,30,29,30,30],
  2071: [31,31,32,31,31,31,30,29,30,29,30,30],
  2072: [31,32,31,32,31,30,30,29,30,29,30,30],
  2073: [31,32,31,32,31,30,30,30,29,29,30,31],
  2074: [31,31,31,32,31,31,30,29,30,29,30,30],
  2075: [31,31,32,31,31,31,30,29,30,29,30,30],
  2076: [31,32,31,32,31,30,30,29,30,29,30,30],
  2077: [31,32,31,32,31,30,30,30,29,29,30,31],
  2078: [31,31,31,32,31,31,30,29,30,29,30,30],
  2079: [31,31,32,31,31,31,30,29,30,29,30,30],
  2080: [31,32,31,32,31,30,30,30,29,29,30,30],
  2081: [31,31,32,32,31,30,30,30,29,30,30,30],
  2082: [30,32,31,32,31,30,30,30,29,30,30,30],
  2083: [31,31,32,31,31,30,30,30,29,30,30,30],
  2084: [31,31,32,31,31,30,30,30,29,30,30,30],
  2085: [31,32,31,32,30,31,30,30,29,30,30,30],
  2086: [30,32,31,32,31,30,30,30,29,30,30,30],
  2087: [31,31,32,31,31,31,30,30,29,30,30,30],
  2088: [30,31,32,32,30,31,30,30,29,30,30,30],
  2089: [30,32,31,32,31,30,30,30,29,30,30,30],
  2090: [30,32,31,32,31,30,30,30,29,30,30,30]
};

const MIN_BS_YEAR = 2000;
const MAX_BS_YEAR = 2090;

// Reference date: BS 2000/01/01 = AD 1943/04/14 (Wednesday)
const referenceBs = { year: 2000, month: 1, day: 1 };
const referenceAd = new Date(1943, 3, 14); // April 14, 1943

// Total days spanned by the supported BS range (used to bound AD->BS conversion)
function totalDaysInRange() {
  let total = 0;
  for (let y = MIN_BS_YEAR; y <= MAX_BS_YEAR; y++) {
    for (let m = 0; m < 12; m++) total += bsCalendarData[y][m];
  }
  return total;
}

const maxAdDate = (() => {
  const d = new Date(referenceAd);
  d.setDate(d.getDate() + totalDaysInRange() - 1);
  return d;
})();

// ---------- BS -> AD ----------
function bsToAd(bsYear, bsMonth, bsDay) {
  if (!bsCalendarData[bsYear]) return null;
  if (bsMonth < 1 || bsMonth > 12) return null;
  if (bsDay < 1 || bsDay > bsCalendarData[bsYear][bsMonth - 1]) return null;

  let totalDays = 0;
  for (let y = referenceBs.year; y < bsYear; y++) {
    for (let m = 0; m < 12; m++) totalDays += bsCalendarData[y][m];
  }
  for (let m = 0; m < bsMonth - 1; m++) totalDays += bsCalendarData[bsYear][m];
  totalDays += bsDay - referenceBs.day;

  const adDate = new Date(referenceAd);
  adDate.setDate(adDate.getDate() + totalDays);
  return adDate;
}

// ---------- AD -> BS ----------
function adToBs(adDate) {
  const target = new Date(adDate.getFullYear(), adDate.getMonth(), adDate.getDate());
  if (target < referenceAd || target > maxAdDate) return null;

  const dayDiff = Math.round((target - referenceAd) / 86400000);
  let remaining = dayDiff;
  let year = referenceBs.year;
  let month = 0;

  outer:
  for (year = referenceBs.year; year <= MAX_BS_YEAR; year++) {
    for (month = 0; month < 12; month++) {
      const daysInMonth = bsCalendarData[year][month];
      if (remaining < daysInMonth) break outer;
      remaining -= daysInMonth;
    }
  }

  return { year, month: month + 1, day: remaining + 1 };
}

function todayBs() {
  return adToBs(new Date());
}

function formatAdDate(date) {
  const day = date.getDate();
  const month = englishMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

function formatBsDate(bs) {
  return `${nepaliMonths[bs.month - 1]} ${bs.day}, ${bs.year}`;
}

function dateToInputValue(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ---------- UI: tabs ----------
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('active');
    hideResult();
  });
});

// ---------- UI: BS -> AD panel ----------
function populateBsDropdowns() {
  const yearSelect = document.getElementById('bsYear');
  const monthSelect = document.getElementById('bsMonth');

  for (let y = MIN_BS_YEAR; y <= MAX_BS_YEAR; y++) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  nepaliMonths.forEach((m, i) => {
    const opt = document.createElement('option');
    opt.value = i + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  updateBsDays();
  setBsToToday();
}

function updateBsDays() {
  const year = parseInt(document.getElementById('bsYear').value);
  const month = parseInt(document.getElementById('bsMonth').value);
  const daySelect = document.getElementById('bsDay');
  const currentDay = parseInt(daySelect.value) || 1;

  const maxDays = bsCalendarData[year] ? bsCalendarData[year][month - 1] : 32;

  daySelect.innerHTML = '';
  for (let d = 1; d <= maxDays; d++) {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  }
  daySelect.value = Math.min(currentDay, maxDays);
}

function setBsToToday() {
  const bs = todayBs();
  if (!bs) return;
  document.getElementById('bsYear').value = bs.year;
  document.getElementById('bsMonth').value = bs.month;
  updateBsDays();
  document.getElementById('bsDay').value = bs.day;
}

function convertBsToAd() {
  const year = parseInt(document.getElementById('bsYear').value);
  const month = parseInt(document.getElementById('bsMonth').value);
  const day = parseInt(document.getElementById('bsDay').value);

  const adDate = bsToAd(year, month, day);

  if (adDate) {
    showResult(true, 'English Date (AD)', formatAdDate(adDate), weekDays[adDate.getDay()]);
  } else {
    showResult(false, 'Error', 'Invalid Nepali date', 'Please check your selection and try again.');
  }
}

// ---------- UI: AD -> BS panel ----------
function populateAdPanel() {
  const input = document.getElementById('adDate');
  input.min = dateToInputValue(referenceAd);
  input.max = dateToInputValue(maxAdDate);
  input.value = dateToInputValue(new Date());
}

function convertAdToBs() {
  const input = document.getElementById('adDate');
  if (!input.value) {
    showResult(false, 'Error', 'Please select a date', '');
    return;
  }
  const [y, m, d] = input.value.split('-').map(Number);
  const adDate = new Date(y, m - 1, d);
  const bs = adToBs(adDate);

  if (bs) {
    showResult(true, 'Nepali Date (BS)', formatBsDate(bs), weekDays[adDate.getDay()]);
  } else {
    showResult(false, 'Error', 'Date out of supported range', `Supported: ${formatAdDate(referenceAd)} – ${formatAdDate(maxAdDate)}`);
  }
}

// ---------- Result display ----------
let lastResultText = '';

function showResult(success, label, value, day) {
  const result = document.getElementById('result');
  const resultLabel = document.getElementById('resultLabel');
  const resultValue = document.getElementById('resultValue');
  const resultDay = document.getElementById('resultDay');

  result.classList.add('show');
  result.classList.toggle('error', !success);

  resultLabel.textContent = label;
  resultValue.textContent = value;
  resultDay.textContent = day || '';

  lastResultText = success ? `${label}: ${value}${day ? ' (' + day + ')' : ''}` : '';
  document.getElementById('copyBtn').classList.toggle('visible', success);
}

function hideResult() {
  document.getElementById('result').classList.remove('show');
  document.getElementById('copyBtn').classList.remove('visible');
}

function copyResult() {
  if (!lastResultText) return;
  navigator.clipboard.writeText(lastResultText).then(() => {
    const btn = document.getElementById('copyBtn');
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
}

// ---------- Event listeners ----------
document.getElementById('bsYear').addEventListener('change', updateBsDays);
document.getElementById('bsMonth').addEventListener('change', updateBsDays);
document.getElementById('convertBsBtn').addEventListener('click', convertBsToAd);
document.getElementById('todayBsBtn').addEventListener('click', setBsToToday);

document.getElementById('convertAdBtn').addEventListener('click', convertAdToBs);
document.getElementById('todayAdBtn').addEventListener('click', () => {
  document.getElementById('adDate').value = dateToInputValue(new Date());
});

document.getElementById('copyBtn').addEventListener('click', copyResult);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const activePanel = document.querySelector('.panel.active').id;
  if (activePanel === 'bsToAdPanel') convertBsToAd();
  else convertAdToBs();
});

// ---------- Initialize ----------
populateBsDropdowns();
populateAdPanel();
