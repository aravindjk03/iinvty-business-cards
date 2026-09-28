const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Admin/.gemini/antigravity/scratch/iinvty-business-card';
const logoBuf = fs.readFileSync(path.join(baseDir, 'logo.png'));
const logoBase64 = 'data:image/png;base64,' + logoBuf.toString('base64');

const TEAM_MEMBERS = [
  {
    id: 'sathya',
    filename: 'sathya.html',
    name: 'Sathya Narayan',
    title: 'Audit and Training Wing Head',
    email: 'iinvtycorporate@gmail.com',
    phone: '+91 94441 00968',
    website: 'https://iinvty.com',
    linkedin: 'https://www.linkedin.com/company/iinvt',
    instagram: 'https://www.instagram.com/iinvtycorporate',
    photo: '',
    initials: 'SN',
    firstName: 'Sathya'
  },
  {
    id: 'prabhakaran',
    filename: 'prabhakaran.html',
    name: 'Prabhakaran',
    title: 'Customer Relationship Head',
    email: 'iinvtycorporate@gmail.com',
    phone: '+91 94441 00968',
    website: 'https://iinvty.com',
    linkedin: 'https://www.linkedin.com/company/iinvt',
    instagram: 'https://www.instagram.com/iinvtycorporate',
    photo: '',
    initials: 'P',
    firstName: 'Prabhakaran'
  },
  {
    id: 'aravind',
    filename: 'aravind.html',
    name: 'Aravind J',
    title: 'Design & Innovation Lead',
    email: 'iinvtycorporate@gmail.com',
    phone: '+91 94441 00968',
    website: 'https://iinvty.com',
    linkedin: 'https://www.linkedin.com/company/iinvt',
    instagram: 'https://www.instagram.com/iinvtycorporate',
    photo: '',
    initials: 'AJ',
    firstName: 'Aravind'
  }
];

function generateVCardContent(member) {
  const nameParts = member.name.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
  
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${member.name}`,
    `N:${lastName};${firstName};;;`,
    'ORG:IINVTY',
    `TITLE:${member.title || ''}`,
    `TEL;TYPE=WORK,VOICE,PREF:${member.phone || '+91 94441 00968'}`,
    `EMAIL;TYPE=INTERNET,WORK,PREF:${member.email || 'iinvtycorporate@gmail.com'}`,
    `URL;TYPE=WORK:${member.website || 'https://iinvty.com'}`,
    `URL;TYPE=LinkedIn:${member.linkedin || 'https://www.linkedin.com/company/iinvt'}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${member.linkedin || 'https://www.linkedin.com/company/iinvt'}`,
    `URL;TYPE=Instagram:${member.instagram || 'https://www.instagram.com/iinvtycorporate'}`,
    `X-SOCIALPROFILE;TYPE=instagram:${member.instagram || 'https://www.instagram.com/iinvtycorporate'}`,
    'NOTE:IINVTY - INVENT • INNOVATE • INSPIRE (Sustainable Workplace Solutions & ESG Consulting)',
    `REV:${new Date().toISOString()}`,
    'END:VCARD'
  ];
  return lines.join('\r\n') + '\r\n';
}

function generateCardHtml(member) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>${member.name} | IINVTY Digital Business Card</title>

  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <style>
    /* ==========================================================
       THEME VARIABLES & RESET
       Color Palette: Blue #0a3cff, Navy #061a5c, White #ffffff, Light Sky #e8efff
       Company Name: IINVTY
       Motto: INVENT • INNOVATE • INSPIRE
       ========================================================== */
    :root {
      --color-blue: #0a3cff;
      --color-navy: #061a5c;
      --color-white: #ffffff;
      --color-sky: #e8efff;
      --color-muted: #64748b;
      --color-watermark: #8a9bb2;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      margin: 0;
      padding: 24px 16px 50px 16px;
      background: linear-gradient(135deg, #061a5c 0%, #1548ff 100%);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Top Brand Badge */
    .top-brand-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
      padding: 8px 20px;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 9999px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 16px rgba(6, 26, 92, 0.25);
    }

    .top-brand-badge img {
      width: 22px;
      height: 22px;
      object-fit: contain;
    }

    .top-brand-badge span {
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: #ffffff;
    }

    /* Container Query Card Wrapper */
    .card-outer-scene {
      width: 100%;
      max-width: 660px;
      container-type: inline-size;
      container-name: cardbox;
      margin: 0 auto;
    }

    .card-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Faint decorative ambient circles */
    .faint-circle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
    }

    .circle-top-left {
      background: radial-gradient(circle, rgba(232, 239, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 65%, transparent 100%);
    }

    .circle-bottom-right {
      background: radial-gradient(circle, rgba(232, 239, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 70%, transparent 100%);
    }

    /* ==========================================================
       DESKTOP & TABLET VIEW (Container query cqw, 7:4 landscape)
       ========================================================== */
    @media (min-width: 581px) {
      .business-card {
        width: 100%;
        aspect-ratio: 7 / 4;
        background: #ffffff;
        border-radius: 3cqw;
        box-shadow:
          0 2.2cqw 5cqw -0.5cqw rgba(6, 26, 92, 0.45),
          0 0 0 1px rgba(255, 255, 255, 0.2);
        display: flex;
        position: relative;
        overflow: hidden;
        user-select: none;
      }

      .card-left {
        width: 37cqw;
        height: 100%;
        background: linear-gradient(155deg, #0a3cff 0%, #061a5c 100%);
        position: relative;
        overflow: hidden;
        border-top-right-radius: 6.5cqw;
        border-bottom-right-radius: 6.5cqw;
        box-shadow: 1.2cqw 0 2.8cqw rgba(6, 26, 92, 0.28);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 3.5cqw 2.4cqw 3cqw 2.4cqw;
        box-sizing: border-box;
        z-index: 2;
      }

      .circle-top-left {
        width: 25cqw;
        height: 25cqw;
        top: -7cqw;
        left: -6cqw;
      }

      .circle-bottom-right {
        width: 30cqw;
        height: 30cqw;
        bottom: -11cqw;
        right: -8cqw;
      }

      .brand-group {
        align-self: flex-start;
        display: flex;
        align-items: center;
        gap: 1.2cqw;
        z-index: 3;
      }

      .logo-square {
        width: 4.6cqw;
        height: 4.6cqw;
        background: #ffffff;
        border-radius: 1cqw;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0.4cqw 1cqw rgba(6, 26, 92, 0.25);
        overflow: hidden;
        padding: 0.35cqw;
        box-sizing: border-box;
        flex-shrink: 0;
      }

      .logo-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .logo-i-fallback {
        display: none;
        font-size: 2.9cqw;
        font-weight: 800;
        color: #0a3cff;
        line-height: 1;
      }

      .brand-name-text {
        font-size: 2.5cqw;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: 0.06cqw;
        text-shadow: 0 0.2cqw 0.5cqw rgba(6, 26, 92, 0.4);
      }

      .photo-area {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        margin: auto 0;
      }

      .photo-frame {
        width: 17cqw;
        height: 17cqw;
        border-radius: 50%;
        border: 0.6cqw solid #ffffff;
        box-shadow: 0 1cqw 2.5cqw rgba(6, 26, 92, 0.4);
        background: #e8efff;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-shrink: 0;
        position: relative;
      }

      .employee-photo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .employee-initials {
        font-size: 6.2cqw;
        font-weight: 800;
        color: #0a3cff;
        line-height: 1;
        letter-spacing: 0.08cqw;
        user-select: none;
      }

      .brand-tagline-motto {
        font-size: 1.3cqw;
        font-weight: 800;
        letter-spacing: 0.1cqw;
        text-transform: uppercase;
        color: #e8efff;
        opacity: 0.95;
        z-index: 3;
        text-align: center;
        white-space: nowrap;
        text-shadow: 0 0.2cqw 0.4cqw rgba(6, 26, 92, 0.4);
      }

      .card-right {
        width: 63cqw;
        height: 100%;
        background: #ffffff;
        padding: 4.4cqw 4.8cqw 3.6cqw 4.8cqw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        z-index: 1;
        overflow: hidden;
      }

      /* Centered Background Watermark */
      .white-layer-watermark {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 32cqw;
        height: 32cqw;
        opacity: 0.07;
        pointer-events: none;
        user-select: none;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .white-layer-watermark img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .emp-meta-block {
        display: flex;
        flex-direction: column;
      }

      .emp-name {
        font-size: 4.4cqw;
        font-weight: 800;
        color: #061a5c;
        line-height: 1.15;
        margin: 0 0 0.8cqw 0;
        letter-spacing: -0.02cqw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .emp-title {
        font-size: 2.2cqw;
        font-weight: 600;
        color: #64748b;
        margin: 0 0 1.8cqw 0;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .blue-accent-line {
        width: 5.5cqw;
        height: 0.45cqw;
        background: #0a3cff;
        border-radius: 0.25cqw;
        margin: 0 0 2.2cqw 0;
      }

      .emp-email-link {
        display: inline-flex;
        align-items: center;
        gap: 1.1cqw;
        font-size: 2.1cqw;
        font-weight: 500;
        color: #061a5c;
        text-decoration: none;
        margin: 0 0 2.8cqw 0;
        width: fit-content;
        max-width: 100%;
        transition: color 0.2s ease;
      }

      .email-svg-icon {
        width: 2.4cqw;
        height: 2.4cqw;
        stroke: #0a3cff;
        flex-shrink: 0;
      }

      .email-label-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Row of Four Round Blue Buttons (Website, LinkedIn, Instagram, Email) */
      .icon-button-row {
        display: flex;
        align-items: center;
        gap: 1.4cqw;
      }

      .round-blue-btn {
        width: 5.4cqw;
        height: 5.4cqw;
        border-radius: 50%;
        background: #0a3cff;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        box-shadow: 0 0.5cqw 1.3cqw rgba(10, 60, 255, 0.28);
        transition: background-color 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
        cursor: pointer;
      }

      .round-blue-btn:hover {
        background: #061a5c;
        transform: translateY(-0.4cqw);
        box-shadow: 0 1cqw 2.2cqw rgba(6, 26, 92, 0.38);
      }

      .round-blue-btn:focus-visible {
        outline: 0.38cqw solid #061a5c;
        outline-offset: 0.35cqw;
      }

      .round-blue-btn svg {
        width: 2.6cqw;
        height: 2.6cqw;
        stroke: #ffffff;
        fill: none;
      }

      .bottom-right-domain {
        position: absolute;
        bottom: 2.8cqw;
        right: 4.8cqw;
        font-size: 1.9cqw;
        font-weight: 800;
        color: #8a9bb2;
        letter-spacing: 0.08cqw;
        user-select: none;
      }
    }

    /* ==========================================================
       MOBILE VIEW (Phones <= 580px width)
       Touch-friendly vertical card layout with 46px+ touch targets
       ========================================================== */
    @media (max-width: 580px) {
      body {
        padding: 18px 12px 40px 12px;
        justify-content: flex-start;
      }

      .top-brand-badge {
        margin-bottom: 16px;
        padding: 6px 16px;
      }

      .card-outer-scene {
        max-width: 400px;
      }

      .business-card {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        border-radius: 24px;
        box-shadow: 0 14px 40px rgba(6, 26, 92, 0.42);
        overflow: hidden;
      }

      .card-left {
        width: 100%;
        background: linear-gradient(155deg, #0a3cff 0%, #061a5c 100%);
        position: relative;
        padding: 22px 18px 20px 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
        box-shadow: 0 8px 24px rgba(6, 26, 92, 0.3);
        z-index: 2;
        overflow: hidden;
      }

      .circle-top-left {
        width: 140px;
        height: 140px;
        top: -40px;
        left: -40px;
      }

      .circle-bottom-right {
        width: 180px;
        height: 180px;
        bottom: -60px;
        right: -50px;
      }

      .brand-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        margin-bottom: 14px;
        z-index: 3;
      }

      .logo-square {
        width: 32px;
        height: 32px;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        box-sizing: border-box;
      }

      .logo-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .logo-i-fallback {
        display: none;
        font-size: 18px;
        font-weight: 800;
        color: #0a3cff;
      }

      .brand-name-text {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: 0.05em;
      }

      .photo-area {
        margin: 6px 0 14px 0;
        z-index: 3;
      }

      .photo-frame {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        border: 4px solid #ffffff;
        box-shadow: 0 8px 22px rgba(6, 26, 92, 0.4);
        background: #e8efff;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .employee-photo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .employee-initials {
        font-size: 32px;
        font-weight: 800;
        color: #0a3cff;
      }

      .brand-tagline-motto {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.14em;
        color: #e8efff;
        text-transform: uppercase;
        text-align: center;
        z-index: 3;
      }

      .card-right {
        width: 100%;
        background: #ffffff;
        padding: 24px 20px 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }

      /* Centered Background Watermark on Mobile */
      .white-layer-watermark {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 190px;
        height: 190px;
        opacity: 0.06;
        pointer-events: none;
        user-select: none;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .white-layer-watermark img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .emp-meta-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .emp-name {
        font-size: 23px;
        font-weight: 800;
        color: #061a5c;
        margin-bottom: 4px;
        line-height: 1.2;
      }

      .emp-title {
        font-size: 14px;
        font-weight: 600;
        color: #64748b;
        margin-bottom: 12px;
      }

      .blue-accent-line {
        width: 44px;
        height: 3px;
        background: #0a3cff;
        border-radius: 2px;
        margin-bottom: 14px;
      }

      .emp-email-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #061a5c;
        text-decoration: none;
        margin-bottom: 22px;
        padding: 7px 14px;
        background: #e8efff;
        border-radius: 10px;
        max-width: 100%;
      }

      .email-svg-icon {
        width: 18px;
        height: 18px;
        stroke: #0a3cff;
        flex-shrink: 0;
      }

      .email-label-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* 4 Large touch buttons for mobile */
      .icon-button-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        width: 100%;
        margin-bottom: 14px;
      }

      .round-blue-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #0a3cff;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        box-shadow: 0 4px 14px rgba(10, 60, 255, 0.28);
        transition: transform 0.2s ease, background-color 0.2s ease;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      .round-blue-btn:active {
        transform: scale(0.92);
        background: #061a5c;
      }

      .round-blue-btn svg {
        width: 22px;
        height: 22px;
        stroke: #ffffff;
        fill: none;
      }

      .bottom-right-domain {
        font-size: 13px;
        font-weight: 800;
        color: #8a9bb2;
        letter-spacing: 0.1em;
        margin-top: 8px;
      }
    }

    /* Common Hover & Focus states */
    .emp-email-link:hover {
      color: #0a3cff;
      text-decoration: underline;
    }

    /* Save Contact Button */
    .save-contact-container {
      width: 100%;
      margin-top: 18px;
    }

    .save-contact-button {
      width: 100%;
      padding: 16px 24px;
      background: #ffffff;
      color: #061a5c;
      border: none;
      border-radius: 14px;
      font-family: inherit;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 8px 24px rgba(6, 26, 92, 0.28);
      transition: all 0.22s ease;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .save-contact-button:hover {
      background: #e8efff;
      color: #0a3cff;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(6, 26, 92, 0.4);
    }

    .save-contact-button:focus-visible {
      outline: 3px solid #ffffff;
      outline-offset: 3px;
    }

    /* Share bar */
    .share-info-bar {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
    }

    .copy-link-btn {
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.35);
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 6px;
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .copy-link-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: #ffffff;
    }

    /* Bottom Sheet Modal */
    .sheet-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(6, 26, 92, 0.65);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.35s ease, visibility 0.35s ease;
    }

    .sheet-backdrop.active {
      opacity: 1;
      visibility: visible;
    }

    .bottom-sheet {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      max-width: 440px;
      background: #ffffff;
      border-radius: 24px 24px 0 0;
      padding: 14px 24px 28px 24px;
      z-index: 1001;
      box-shadow: 0 -10px 35px rgba(6, 26, 92, 0.3);
      transform: translateY(105%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    .bottom-sheet.open {
      transform: translateY(0);
    }

    .sheet-grabber {
      width: 42px;
      height: 4px;
      background: #d8e2f0;
      border-radius: 2px;
      margin: 0 auto 16px auto;
    }

    .sheet-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .sheet-badge-wrap {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: #e8efff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      border: 1px solid rgba(10, 60, 255, 0.15);
      padding: 6px;
      box-sizing: border-box;
    }

    .sheet-badge-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .sheet-title {
      font-size: 19px;
      font-weight: 700;
      color: #061a5c;
      margin: 0 0 6px 0;
    }

    .sheet-subtitle {
      font-size: 13.5px;
      color: #64748b;
      margin: 0 0 22px 0;
      line-height: 1.45;
    }

    .sheet-actions {
      display: flex;
      gap: 12px;
      width: 100%;
    }

    .sheet-btn {
      flex: 1;
      padding: 13px 18px;
      border-radius: 12px;
      font-family: inherit;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
    }

    .sheet-btn-later {
      background: #e8efff;
      color: #061a5c;
    }

    .sheet-btn-later:hover {
      background: #d7e4ff;
    }

    .sheet-btn-save {
      background: #0a3cff;
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(10, 60, 255, 0.35);
    }

    .sheet-btn-save:hover {
      background: #061a5c;
      box-shadow: 0 6px 18px rgba(6, 26, 92, 0.45);
    }

    .toast-notice {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%) translateY(-30px);
      background: #061a5c;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 10px 20px;
      border-radius: 30px;
      font-size: 13.5px;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 2000;
    }

    .toast-notice.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
      visibility: visible;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
        transform: none !important;
      }
    }
  </style>
</head>
<body>

  <!-- TOP BRAND BADGE: IINVTY -->
  <aside class="top-brand-badge" aria-label="Company Branding">
    <img src="${logoBase64}" alt="IINVTY" />
    <span>IINVTY</span>
  </aside>

  <!-- BUSINESS CARD CONTAINER -->
  <main class="card-outer-scene">
    <div class="card-wrap">
      
      <!-- BUSINESS CARD (Responsive: 7:4 landscape on desktop, tailored vertical on mobile) -->
      <article class="business-card" id="businessCard" aria-label="Digital Business Card for ${member.name}">
        
        <!-- LEFT / TOP BLUE PANEL -->
        <div class="card-left">
          <!-- Two faint translucent decorative circles -->
          <div class="faint-circle circle-top-left" aria-hidden="true"></div>
          <div class="faint-circle circle-bottom-right" aria-hidden="true"></div>

          <!-- Top-Left: Logo Square with uploaded IINVTY Logo + IINVTY -->
          <div class="brand-group">
            <div class="logo-square" title="IINVTY">
              <img src="${logoBase64}" alt="i" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
              <span class="logo-i-fallback" aria-hidden="true">i</span>
            </div>
            <span class="brand-name-text">IINVTY</span>
          </div>

          <!-- Center: Employee Round Photo (White border, soft shadow) or Initials -->
          <div class="photo-area">
            <div class="photo-frame">
              ${
                member.photo
                  ? `<img id="cardPhotoImg" class="employee-photo-img" src="${member.photo}" alt="${member.name}" />`
                  : `<span id="cardInitials" class="employee-initials">${member.initials}</span>`
              }
            </div>
          </div>

          <!-- FULL MOTTO: INVENT • INNOVATE • INSPIRE -->
          <div class="brand-tagline-motto" aria-label="Company Motto">INVENT &bull; INNOVATE &bull; INSPIRE</div>
        </div>

        <!-- RIGHT / BOTTOM WHITE PANEL -->
        <div class="card-right">
          <!-- Centered Background IINVTY Logo Watermark on the White Layer -->
          <div class="white-layer-watermark" aria-hidden="true">
            <img src="${logoBase64}" alt="" />
          </div>

          <div class="emp-meta-block">
            <h1 class="emp-name" id="cardName">${member.name}</h1>
            <div class="emp-title" id="cardTitle">${member.title}</div>
            <div class="blue-accent-line" aria-hidden="true"></div>

            <!-- Email with Mail Icon -->
            <a href="mailto:${member.email}" class="emp-email-link" id="cardEmailLink" title="Send Email">
              <svg class="email-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#0a3cff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span class="email-label-text" id="cardEmail">${member.email}</span>
            </a>
          </div>

          <!-- Row of Four Round Blue Icon Buttons (Website, LinkedIn, Instagram, Email) -->
          <div class="icon-button-row">
            <!-- 1. Separate Website Icon (Globe) -->
            <a href="${member.website}" id="btnWebsite" class="round-blue-btn" aria-label="Visit IINVTY Website" target="_blank" rel="noopener noreferrer" title="Website: iinvty.com">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>

            <!-- 2. LinkedIn (Official IINVTY Company Profile) -->
            <a href="${member.linkedin}" id="btnLinkedin" class="round-blue-btn" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" title="LinkedIn: IINVTY">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <!-- 3. Instagram -->
            <a href="${member.instagram}" id="btnInstagram" class="round-blue-btn" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" title="Instagram: @iinvtycorporate">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <!-- 4. Email (direct mailto) -->
            <a href="mailto:${member.email}" id="btnMailto" class="round-blue-btn" aria-label="Send Email Direct" title="Email: ${member.email}">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>

          <!-- Bottom Right Brand: IINVTY -->
          <div class="bottom-right-domain">IINVTY</div>
        </div>
      </article>

      <!-- FULL-WIDTH SAVE CONTACT BUTTON (UNDER THE CARD) -->
      <div class="save-contact-container">
        <a href="${member.id}.vcf" download="${member.name}.vcf" class="save-contact-button" id="btnSaveContact" onclick="handleSaveContact(event, '${member.id}.vcf')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <span>Save ${member.firstName}'s Contact</span>
        </a>

        <div class="share-info-bar">
          <span>Card Link: <code>${member.filename}</code></span>
          <button type="button" class="copy-link-btn" onclick="copyCardUrl()" title="Copy direct link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy Link</span>
          </button>
        </div>
      </div>

    </div>
  </main>

  <!-- BOTTOM SHEET MODAL (SLIDES UP 0.7 SECONDS AFTER PAGE LOAD) -->
  <div class="sheet-backdrop" id="sheetBackdrop" onclick="closeBottomSheet()" aria-hidden="true"></div>
  
  <div class="bottom-sheet" id="bottomSheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-body">
      <div class="sheet-badge-wrap">
        <img src="${logoBase64}" alt="IINVTY" class="sheet-badge-img" />
      </div>
      <h2 class="sheet-title" id="sheetTitle">Add ${member.firstName} to your contacts?</h2>
      <p class="sheet-subtitle">Save ${member.name}'s contact details directly to your phone.</p>
      
      <div class="sheet-actions">
        <button type="button" class="sheet-btn sheet-btn-later" onclick="closeBottomSheet()">Later</button>
        <a href="${member.id}.vcf" download="${member.name}.vcf" class="sheet-btn sheet-btn-save" onclick="handleSaveContact(event, '${member.id}.vcf'); closeBottomSheet();">Save</a>
      </div>
    </div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div class="toast-notice" id="toastNotice">Card link copied to clipboard!</div>

  <!-- ==========================================================
       JAVASCRIPT
       ========================================================== -->
  <script>
    const EMPLOYEE = {
      id: ${JSON.stringify(member.id)},
      name: ${JSON.stringify(member.name)},
      title: ${JSON.stringify(member.title)},
      email: ${JSON.stringify(member.email)},
      phone: ${JSON.stringify(member.phone)},
      website: ${JSON.stringify(member.website)},
      linkedin: ${JSON.stringify(member.linkedin)},
      instagram: ${JSON.stringify(member.instagram)},
      photo: ${JSON.stringify(member.photo)}
    };

    /* VCARD 3.0 STRING BUILDER (.VCF) */
    function getVCardString() {
      const nameParts = EMPLOYEE.name.trim().split(/\\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        \`FN:\${EMPLOYEE.name}\`,
        \`N:\${lastName};\${firstName};;;\`,
        'ORG:IINVTY',
        \`TITLE:\${EMPLOYEE.title || ''}\`,
        \`TEL;TYPE=WORK,VOICE,PREF:\${EMPLOYEE.phone || '+91 94441 00968'}\`,
        \`EMAIL;TYPE=INTERNET,WORK,PREF:\${EMPLOYEE.email || 'iinvtycorporate@gmail.com'}\`,
        \`URL;TYPE=WORK:\${EMPLOYEE.website || 'https://iinvty.com'}\`,
        \`URL;TYPE=LinkedIn:\${EMPLOYEE.linkedin || ''}\`,
        \`X-SOCIALPROFILE;TYPE=linkedin:\${EMPLOYEE.linkedin || ''}\`,
        \`URL;TYPE=Instagram:\${EMPLOYEE.instagram || ''}\`,
        \`X-SOCIALPROFILE;TYPE=instagram:\${EMPLOYEE.instagram || ''}\`,
        'NOTE:IINVTY - INVENT • INNOVATE • INSPIRE (Sustainable Workplace Solutions & ESG Consulting)',
        \`REV:\${new Date().toISOString()}\`,
        'END:VCARD'
      ];

      return lines.join('\\r\\n') + '\\r\\n';
    }

    /* UNIVERSAL SAVE CONTACT HANDLER */
    function handleSaveContact(event, vcfUrl) {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      // On iOS Safari, navigating directly to a data URI triggers the native Add Contact modal
      if (isIOS) {
        if (event) event.preventDefault();
        const vcardStr = getVCardString();
        const dataUri = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcardStr);
        window.location.href = dataUri;
        return;
      }

      // If opened locally via file://, download using Blob
      if (window.location.protocol === 'file:') {
        if (event) event.preventDefault();
        downloadVCardBlob();
        return;
      }

      // On standard HTTP/HTTPS (GitHub Pages), the <a> tag natively downloads the static .vcf file
    }

    /* BLOB DOWNLOAD FALLBACK (Local file:// or legacy desktop) */
    function downloadVCardBlob() {
      const vcardStr = getVCardString();
      const blob = new Blob([vcardStr], { type: 'text/vcard;charset=utf-8;' });
      const filename = \`\${EMPLOYEE.name}.vcf\`;

      if (typeof navigator !== 'undefined' && navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(link.href), 3000);
      }
    }

    /* BOTTOM SHEET SLIDE-UP */
    function openBottomSheet() {
      const sheet = document.getElementById('bottomSheet');
      const backdrop = document.getElementById('sheetBackdrop');
      if (sheet && backdrop) {
        sheet.classList.add('open');
        backdrop.classList.add('active');
      }
    }

    function closeBottomSheet() {
      const sheet = document.getElementById('bottomSheet');
      const backdrop = document.getElementById('sheetBackdrop');
      if (sheet && backdrop) {
        sheet.classList.remove('open');
        backdrop.classList.remove('active');
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeBottomSheet();
    });

    /* COPY CARD URL */
    function copyCardUrl() {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(showToast);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast();
      }
    }

    function showToast() {
      const toast = document.getElementById('toastNotice');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
      }
    }

    /* SLIDE UP BOTTOM SHEET AFTER 0.7 SECONDS */
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        openBottomSheet();
      }, 700);
    });
  </script>
</body>
</html>`;
}

// Generate the 3 separate files (HTML + static VCF for each member)
TEAM_MEMBERS.forEach(m => {
  const filePath = path.join(baseDir, m.filename);
  fs.writeFileSync(filePath, generateCardHtml(m), 'utf8');
  console.log('Successfully generated HTML:', m.filename);

  const vcfPath = path.join(baseDir, `${m.id}.vcf`);
  fs.writeFileSync(vcfPath, generateVCardContent(m), 'utf8');
  console.log('Successfully generated VCF:', `${m.id}.vcf`);
});

// Update index.html directory hub
const indexHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IINVTY - Team Digital Business Cards</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      background: linear-gradient(135deg, #061a5c 0%, #1548ff 100%);
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 16px;
    }
    .hub-container {
      width: 100%;
      max-width: 580px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 26px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 38px 28px;
      box-shadow: 0 16px 48px rgba(6, 26, 92, 0.5);
      text-align: center;
    }
    .hub-logo-wrap {
      width: 72px;
      height: 72px;
      background: #ffffff;
      border-radius: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      margin-bottom: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
    }
    .hub-logo-wrap img { width: 100%; height: 100%; object-fit: contain; }
    .hub-title { font-size: 28px; font-weight: 800; letter-spacing: 0.04em; margin-bottom: 6px; }
    .hub-subtitle { font-size: 13.5px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #e8efff; opacity: 0.9; margin-bottom: 28px; }
    .cards-list { display: flex; flex-direction: column; gap: 14px; width: 100%; }
    .member-card-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      color: #061a5c;
      text-decoration: none;
      padding: 16px 20px;
      border-radius: 16px;
      font-weight: 700;
      transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 6px 18px rgba(6, 26, 92, 0.25);
    }
    .member-card-link:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 12px 28px rgba(6, 26, 92, 0.38);
      background: #e8efff;
      color: #0a3cff;
    }
    .member-info { display: flex; align-items: center; gap: 14px; text-align: left; }
    .member-avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #0a3cff;
      color: #ffffff;
      font-size: 16px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .member-name { font-size: 17px; font-weight: 800; }
    .member-role { font-size: 13px; color: #64748b; font-weight: 600; margin-top: 2px; }
    .arrow-icon { width: 22px; height: 22px; stroke: currentColor; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
  </style>
</head>
<body>
  <div class="hub-container">
    <div class="hub-logo-wrap">
      <img src="${logoBase64}" alt="IINVTY logo" />
    </div>
    <h1 class="hub-title">IINVTY</h1>
    <div class="hub-subtitle">INVENT &bull; INNOVATE &bull; INSPIRE</div>

    <div class="cards-list">
      <a href="sathya.html" class="member-card-link">
        <div class="member-info">
          <div class="member-avatar">SN</div>
          <div>
            <div class="member-name">Sathya Narayan</div>
            <div class="member-role">Audit and Training Wing Head</div>
          </div>
        </div>
        <svg class="arrow-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>

      <a href="prabhakaran.html" class="member-card-link">
        <div class="member-info">
          <div class="member-avatar">P</div>
          <div>
            <div class="member-name">Prabhakaran</div>
            <div class="member-role">Customer Relationship Head</div>
          </div>
        </div>
        <svg class="arrow-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>

      <a href="aravind.html" class="member-card-link">
        <div class="member-info">
          <div class="member-avatar">AJ</div>
          <div>
            <div class="member-name">Aravind J</div>
            <div class="member-role">Design & Innovation Lead</div>
          </div>
        </div>
        <svg class="arrow-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'index.html'), indexHubHtml, 'utf8');
console.log('Successfully generated: index.html');
