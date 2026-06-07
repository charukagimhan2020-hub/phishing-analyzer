import { useState } from "react";

// ════════════════════════════════════════════════
//  SAMPLE EMAILS
// ════════════════════════════════════════════════
const SAMPLES = [
  {
    tag: "high", label: "URGENT", title: "Nigerian Prince Inheritance",
    sender: "prince.adewale@gmail-secure.net",
    body: `From: H.R.H Prince Adewale Okonkwo <prince.adewale@gmail-secure.net>
To: undisclosed-recipients
Subject: URGENT: Confidential Business Proposal — $45.5 Million USD

Dearest Friend,

I am Prince Adewale Okonkwo, son of late King Emmanuel Okonkwo of Nigeria. I write to you in confidence regarding a STRICTLY CONFIDENTIAL business proposal worth $45,500,000.00 USD.

Due to political instability, I need to transfer this sum to a foreign account URGENTLY. I have chosen you as a trusted partner. You will receive 30% ($13,650,000) for your assistance.

Please reply IMMEDIATELY with:
- Full Name
- Bank Account Details
- Phone Number
- Copy of Passport

This is 100% RISK FREE and LEGAL. Time is critical. God bless you.

Yours faithfully,
Prince Adewale Okonkwo
Tel: +234-803-555-0192`,
  },
  {
    tag: "high", label: "PHISHING", title: "PayPal Account Suspended",
    sender: "support@paypa1-secure.com",
    body: `From: PayPal Security <support@paypa1-secure.com>
To: user@email.com
Subject: ⚠️ Your PayPal Account Has Been SUSPENDED — Immediate Action Required

Dear Valued Customer,

We have detected UNUSUAL ACTIVITY on your PayPal account. Your account has been temporarily SUSPENDED for security reasons.

To restore access IMMEDIATELY, click the link below within 24 hours or your account will be permanently closed:

http://paypal-account-restore.xyz/verify?token=8f3kd9

You will need to verify:
✓ Full name and date of birth
✓ Credit card number and CVV
✓ Social Security Number
✓ Mother's maiden name

Failure to verify within 24 HOURS will result in PERMANENT account closure and fund seizure.

PayPal Security Team
© PayPal Inc. — This is an automated security message.`,
  },
  {
    tag: "high", label: "PHISHING", title: "IT Dept — Password Expires Today",
    sender: "it-helpdesk@company-internal.support",
    body: `From: IT Helpdesk <it-helpdesk@company-internal.support>
To: All Staff
Subject: ACTION REQUIRED: Your password expires in 2 hours

Dear Employee,

Our system records show your network password will EXPIRE in 2 hours. If not renewed, you will be locked out of all company systems including email, VPN, and payroll.

Click here to renew your password NOW:
http://company-portal-reset.ru/staff/login

Enter your:
— Current username and password
— New password (twice)
— Employee ID number
— Date of birth (for verification)

This link expires at 5:00 PM today.

IT Helpdesk Team
Internal Systems Support`,
  },
  {
    tag: "high", label: "PHISHING", title: "Microsoft 365 Verification",
    sender: "microsoft-support@ms365-verify.info",
    body: `From: Microsoft Support <microsoft-support@ms365-verify.info>
To: account@domain.com
Subject: Your Microsoft 365 license has expired — verify now

MICROSOFT ACCOUNT ALERT

Your Microsoft 365 subscription has EXPIRED. To continue using Word, Excel, Outlook and Teams, you must verify your account immediately.

VERIFY ACCOUNT: http://microsoft365-renewal.biz/login?ref=urgent

Without verification in the next 12 hours:
• All your files in OneDrive will be DELETED
• Your Outlook email will stop working
• You will lose access to all Microsoft apps

Enter your Microsoft email and password to reactivate.

Microsoft Customer Support
One Microsoft Way, Redmond, WA`,
  },
  {
    tag: "high", label: "PHISHING", title: "Amazon Package Delivery Failed",
    sender: "delivery@amazon-parcel-support.net",
    body: `From: Amazon Delivery <delivery@amazon-parcel-support.net>
To: customer@email.com
Subject: Your package could not be delivered — update address NOW

AMAZON DELIVERY NOTIFICATION

We attempted to deliver your package (Order #AMZ-8472930) but were UNABLE to complete delivery.

To reschedule delivery, please update your address and pay a small redelivery fee of $1.99:

http://amazon-redelivery-portal.xyz/update

You will need to enter:
- Full delivery address
- Payment card details (for $1.99 fee)
- Card CVV and expiry date

Your package will be returned to sender in 48 hours if not claimed.

Amazon Logistics Team`,
  },
  {
    tag: "med", label: "SUSPICIOUS", title: "IRS Tax Refund Pending",
    sender: "refunds@irs-gov-refunds.com",
    body: `From: IRS Refund Department <refunds@irs-gov-refunds.com>
To: taxpayer@email.com
Subject: Tax Refund of $2,847.00 Pending — Claim Before Deadline

Dear Taxpayer,

The Internal Revenue Service has processed your tax return and identified a refund of $2,847.00 owed to you.

To claim your refund, please visit our secure portal and provide your banking details:

http://irs-tax-refund-claim.org/portal

Required information:
- Social Security Number
- Bank routing number and account number
- Date of birth

Your refund will expire if not claimed within 7 days.

Internal Revenue Service
Department of Treasury`,
  },
  {
    tag: "med", label: "SUSPICIOUS", title: "You've Won a Gift Card",
    sender: "rewards@survey-winner-2024.com",
    body: `From: Rewards Program <rewards@survey-winner-2024.com>
To: winner@email.com
Subject: Congratulations! You've been selected for a $500 Amazon Gift Card

Hello,

You have been RANDOMLY SELECTED to receive a $500 Amazon Gift Card as part of our customer satisfaction survey!

To claim your prize, complete a short 2-minute survey:
http://gift-card-winner-claim.net/survey?id=58392

After completing, you will need to pay a $4.99 shipping and handling fee for your gift card to be mailed.

This offer expires in 24 hours. Only 3 gift cards remaining!

Customer Rewards Team`,
  },
  {
    tag: "med", label: "SUSPICIOUS", title: "Bank Account Unusual Sign-In",
    sender: "security@chase-alerts.support",
    body: `From: Chase Bank Security <security@chase-alerts.support>
To: customer@email.com
Subject: Unusual sign-in attempt detected on your account

Chase Online Banking

We detected a sign-in attempt from an unrecognized device in Romania at 2:47 AM.

If this was not you, secure your account immediately:
http://chase-secure-account.info/verify

You must verify your:
- Online banking username and password
- Debit card number and PIN
- One-time passcode (we will send via SMS)

If you do not respond within 2 hours, your account will be frozen.

Chase Bank Security Team`,
  },
  {
    tag: "low", label: "SAFE", title: "LinkedIn Connection Request",
    sender: "notifications@linkedin.com",
    body: `From: LinkedIn <notifications@linkedin.com>
To: member@email.com
Subject: Sarah Chen wants to connect with you on LinkedIn

Hi there,

Sarah Chen (Senior Product Manager at Acme Corp) wants to connect with you on LinkedIn.

Accept or ignore this invitation:
https://www.linkedin.com/comm/invi/accept?invitationId=abc123

You are receiving this email as a registered LinkedIn member. To unsubscribe from these emails: https://www.linkedin.com/e/v2?e=unsubscribe

LinkedIn Corporation, 1000 West Maude Avenue, Sunnyvale, CA 94085`,
  },
  {
    tag: "low", label: "SAFE", title: "GitHub Pull Request Review",
    sender: "notifications@github.com",
    body: `From: GitHub <notifications@github.com>
To: developer@email.com
Subject: [my-project] Pull request #47: Add dark mode support

Review requested: alex-dev requested your review on pull request #47 in my-org/my-project.

Add dark mode support
This PR implements system-level dark mode detection using prefers-color-scheme and updates all component styles accordingly.

Files changed: 12  |  +347  −89

View pull request: https://github.com/my-org/my-project/pull/47

You can view, comment on, or merge this pull request online at GitHub.
Manage your notification settings: https://github.com/settings/notifications`,
  },
];

// ════════════════════════════════════════════════
//  HEURISTIC ENGINE — ZERO API DEPENDENCIES
// ════════════════════════════════════════════════

// Known legitimate sending domains (exact match on the domain part after @)
const LEGIT_DOMAINS = new Set([
  "gmail.com","yahoo.com","outlook.com","hotmail.com","live.com","icloud.com","me.com",
  "protonmail.com","proton.me",
  "paypal.com","amazon.com","amazon.co.uk","ebay.com",
  "apple.com","microsoft.com","google.com","facebook.com","instagram.com",
  "twitter.com","x.com","linkedin.com","github.com","gitlab.com","bitbucket.org",
  "netflix.com","spotify.com","dropbox.com","slack.com","zoom.us","notion.so",
  "irs.gov","gov.uk","gov.au","canada.ca",
  "chase.com","bankofamerica.com","wellsfargo.com","citibank.com","hsbc.com","barclays.co.uk",
  "sampath.lk","hnb.lk","boc.lk","nsb.lk","dfcc.lk","seylan.lk","peoples.lk",
  "dialog.lk","mobitel.lk","airtel.lk","slt.lk",
  "fedex.com","ups.com","dhl.com","usps.com",
  "noreply.github.com","notifications.github.com",
  "mail.linkedin.com",
]);

// Suspicious / phishing-only TLDs — high weight
const SUSPICIOUS_TLDS = new Set([
  ".xyz",".tk",".ml",".ga",".cf",".gq",".pw",".ru",".cn",".top",".work",".click",
  ".info",".biz",".loan",".win",".review",".party",".racing",".download",
  ".stream",".gdn",".icu",".online","vip",".fun",".live",".website",".space",
]);

// Brand names that should ONLY appear in specific domains
const BRAND_DOMAIN_MAP = {
  paypal:   ["paypal.com"],
  amazon:   ["amazon.com","amazon.co.uk","amazon.ca","amazon.de","amazon.in","amazon.com.au"],
  microsoft:["microsoft.com","outlook.com","live.com","hotmail.com"],
  apple:    ["apple.com","icloud.com"],
  google:   ["google.com","gmail.com"],
  facebook: ["facebook.com","fb.com"],
  instagram:["instagram.com"],
  netflix:  ["netflix.com"],
  linkedin: ["linkedin.com","mail.linkedin.com"],
  github:   ["github.com","noreply.github.com","notifications.github.com"],
  irs:      ["irs.gov"],
  chase:    ["chase.com"],
  "bank of america":["bankofamerica.com"],
  wellsfargo:["wellsfargo.com"],
  citibank: ["citi.com","citibank.com"],
  sampath:  ["sampath.lk","sampathbank.lk"],
  hnb:      ["hnb.lk","hattonbank.lk"],
  boc:      ["boc.lk"],
  seylan:   ["seylan.lk"],
  dialog:   ["dialog.lk"],
  fedex:    ["fedex.com"],
  ups:      ["ups.com"],
  dhl:      ["dhl.com"],
};

// Urgency / pressure keywords
const URGENCY_WORDS = [
  "urgent","immediately","immediately","expire","expires","expiring","within 24 hours","within 48 hours",
  "act now","action required","last chance","limited time","today only","deadline",
  "suspended","account locked","verify now","confirm now","update now","click now",
  "respond immediately","time sensitive","hours remaining","minutes remaining",
  "permanently closed","will be deleted","will be terminated","account will be closed",
];

// Threat / consequence keywords
const THREAT_WORDS = [
  "permanently closed","account suspended","account terminated","legal action",
  "law enforcement","arrest","warrant","irs audit","tax fraud","criminal",
  "seized","frozen","blocked","deleted","permanently","penalty","fine",
  "fund seizure","law suit","prosecuted","reported","deactivated",
];

// Reward / prize bait keywords
const REWARD_WORDS = [
  "you have won","you've won","you have been selected","winner","prize","gift card",
  "free iphone","congratulations","claim your prize","lottery","jackpot",
  "reward","bonus","cashback","refund pending","unclaimed funds","inheritance",
  "million dollars","million usd","million pounds","business proposal",
  "confidential proposal","foreign account","transfer funds",
];

// Sensitive data requests
const SENSITIVE_DATA_WORDS = [
  "social security","ssn","credit card","cvv","cvc","card number","bank account",
  "routing number","account number","pin number","date of birth","mother's maiden",
  "passport","full name","identity","tax id","employee id","national id",
  "username and password","your password","current password","banking details",
  "payment details","billing information","verify identity","confirm identity",
];

// Impersonation / spoofed identity patterns
const IMPERSONATION_PATTERNS = [
  /undisclosed.?recipients/i,
  /to:\s*undisclosed/i,
  /bcc:/i,
  /reply.?to.*differ/i,
];

// URL extraction
function extractUrls(text) {
  const urlRegex = /https?:\/\/[^\s<>"']+|www\.[^\s<>"']+/gi;
  return text.match(urlRegex) || [];
}

// Extract sender domain
function extractSenderDomain(text) {
  const match = text.match(/From:.*?<([^>]+)>|From:\s*([^\s<\n]+)/i);
  const email = match ? (match[1] || match[2] || "") : "";
  const domainMatch = email.match(/@([a-z0-9._-]+)/i);
  return domainMatch ? domainMatch[1].toLowerCase() : null;
}

// Extract subject line
function extractSubject(text) {
  const match = text.match(/Subject:\s*(.+)/i);
  return match ? match[1].trim() : "";
}

// Get TLD from domain
function getTLD(domain) {
  const parts = domain.split(".");
  if (parts.length < 2) return "";
  return "." + parts[parts.length - 1].toLowerCase();
}

// Check if domain is a typosquat of a known brand
function detectTyposquat(domain) {
  const d = domain.toLowerCase();
  for (const [brand, legitDomains] of Object.entries(BRAND_DOMAIN_MAP)) {
    if (legitDomains.includes(d)) continue; // it's the real one
    // Check if brand name appears in the domain but domain isn't legit
    if (d.includes(brand.replace(/\s+/g, "")) || d.includes(brand.replace(/\s+/g, "-"))) {
      return { brand, legitDomains };
    }
    // Homograph / character substitution: e.g. paypa1, micosoft, g00gle
    const clean = d.replace(/0/g,"o").replace(/1/g,"l").replace(/3/g,"e").replace(/4/g,"a").replace(/5/g,"s").replace(/\$/g,"s");
    const cleanBrand = brand.replace(/\s+/g,"");
    if (clean.includes(cleanBrand) && !legitDomains.includes(d)) {
      return { brand, legitDomains };
    }
  }
  return null;
}

// Check for URL shorteners
const URL_SHORTENERS = ["bit.ly","tinyurl.com","goo.gl","ow.ly","t.co","is.gd","buff.ly","adf.ly","shorte.st","rebrand.ly","cutt.ly"];

// Check for IP addresses used as hostnames in URLs
function hasIPUrl(urls) {
  return urls.some(u => /https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/i.test(u));
}

// Check for deceptive display URLs (mismatch between display text and href)
function hasLongSubdomainUrl(urls) {
  return urls.some(u => {
    try {
      const host = new URL(u.startsWith("http") ? u : "http://"+u).hostname;
      const parts = host.split(".");
      // 4+ subdomains is suspicious e.g. login.secure.paypal.account-restore.xyz
      return parts.length >= 4;
    } catch { return false; }
  });
}

// Excessive punctuation / CAPS in subject
function analyzeSubject(subject) {
  const caps = (subject.match(/[A-Z]/g) || []).length;
  const total = (subject.match(/[a-zA-Z]/g) || []).length;
  const capsRatio = total > 0 ? caps / total : 0;
  const hasExclam = (subject.match(/!/g) || []).length >= 2;
  const hasEmoji = /[\u{1F300}-\u{1FFFF}]/u.test(subject);
  return { capsRatio, hasExclam, hasEmoji };
}

// Count keyword hits
function countKeywords(text, list) {
  const lower = text.toLowerCase();
  const hits = [];
  for (const kw of list) {
    if (lower.includes(kw.toLowerCase())) hits.push(kw);
  }
  return hits;
}

// Detect mismatched To/From (BCC-style sending)
function detectBCC(text) {
  return /to:\s*undisclosed|to:\s*\[/i.test(text);
}

// Detect gratuitous monetary amounts
function detectMoneyMentions(text) {
  const matches = text.match(/\$[\d,]+(\.\d{2})?|\b\d[\d,]+\s*(usd|gbp|eur|dollars?|pounds?)\b/gi);
  return matches || [];
}

// Detect suspicious phone numbers (international premium)
function detectSuspiciousPhones(text) {
  const matches = text.match(/\+234|\+92|\+855|\+90\b/g);
  return matches || [];
}

// Detect requests for credentials/sensitive data
function detectCredentialRequest(text) {
  const lower = text.toLowerCase();
  return SENSITIVE_DATA_WORDS.filter(w => lower.includes(w));
}

// Check for HTML obfuscation indicators in plain text (encoded entities, base64 hints)
function detectObfuscation(text) {
  const hits = [];
  if (/&#x[0-9a-f]+;|&#\d+;/i.test(text)) hits.push("HTML entity encoding detected");
  if (/=3D|=20|=0A/i.test(text)) hits.push("Quoted-printable encoding patterns");
  if (/[A-Za-z0-9+/]{60,}={0,2}/.test(text) && !/github|linkedin|token|ref=/.test(text)) hits.push("Possible base64 encoded payload");
  return hits;
}

// Check if domain has suspicious keyword combos
function domainSuspicionLevel(domain) {
  const d = domain.toLowerCase();
  const keywords = ["secure","login","verify","account","update","support","restore","alert","bank","paypal","amazon","microsoft","apple","confirm","password","reset","renew","claim"];
  let hits = 0;
  for (const kw of keywords) if (d.includes(kw)) hits++;
  return hits;
}

// Main analysis function
function analyzeEmail(emailText) {
  const text = emailText;
  const lower = text.toLowerCase();
  const redFlags = [];
  const safeIndicators = [];
  let score = 0;

  // ── 1. SENDER DOMAIN ANALYSIS ──────────────────
  const senderDomain = extractSenderDomain(text);
  let senderAnalysis = "No sender domain detected.";
  let brandImpersonated = null;

  if (senderDomain) {
    const tld = getTLD(senderDomain);
    const typosquat = detectTyposquat(senderDomain);
    const isLegit = LEGIT_DOMAINS.has(senderDomain);
    const domainSuspScore = domainSuspicionLevel(senderDomain);

    senderAnalysis = `Sender domain: ${senderDomain}`;

    if (typosquat) {
      brandImpersonated = typosquat.brand;
      redFlags.push({
        label: "Brand Impersonation / Typosquat",
        detail: `Domain "${senderDomain}" mimics "${typosquat.brand}". Legitimate senders use: ${typosquat.legitDomains.join(", ")}`,
        severity: "danger",
      });
      score += 35;
      senderAnalysis += ` — TYPOSQUAT of "${typosquat.brand}"`;
    } else if (isLegit) {
      safeIndicators.push({
        label: "Recognized Sender Domain",
        detail: `"${senderDomain}" is a known legitimate domain.`,
      });
      score -= 10;
      senderAnalysis += " — recognized legitimate domain";
    }

    if (SUSPICIOUS_TLDS.has(tld)) {
      redFlags.push({
        label: `Suspicious TLD: ${tld}`,
        detail: `The domain extension "${tld}" is frequently abused in phishing campaigns.`,
        severity: "danger",
      });
      score += 20;
    }

    if (domainSuspScore >= 2 && !isLegit) {
      redFlags.push({
        label: "Suspicious Domain Keywords",
        detail: `Domain "${senderDomain}" contains ${domainSuspScore} security-related keywords — a common phishing tactic.`,
        severity: "warn",
      });
      score += domainSuspScore * 5;
    }

    // Spoofed display name vs domain
    const displayMatch = text.match(/From:\s*([^<\n]+)</i);
    if (displayMatch) {
      const displayName = displayMatch[1].trim().toLowerCase();
      for (const [brand, legitDomains] of Object.entries(BRAND_DOMAIN_MAP)) {
        if (displayName.includes(brand) && !legitDomains.includes(senderDomain)) {
          redFlags.push({
            label: "Display Name Spoofing",
            detail: `Display name claims to be "${displayMatch[1].trim()}" but sending domain is "${senderDomain}" (not an official ${brand} domain).`,
            severity: "danger",
          });
          score += 30;
          break;
        }
      }
    }
  }

  // ── 2. URL / LINK ANALYSIS ──────────────────────
  const urls = extractUrls(text);
  let linkAnalysis = urls.length === 0 ? "No URLs found in email." : `Found ${urls.length} URL(s).`;

  if (urls.length > 0) {
    // IP-based URLs
    if (hasIPUrl(urls)) {
      redFlags.push({
        label: "IP Address URL",
        detail: "Email contains links using raw IP addresses instead of domain names — a strong phishing indicator.",
        severity: "danger",
      });
      score += 30;
    }

    // URL shorteners
    const shortUrls = urls.filter(u => URL_SHORTENERS.some(s => u.includes(s)));
    if (shortUrls.length > 0) {
      redFlags.push({
        label: "URL Shortener Detected",
        detail: `Shortened URLs hide the real destination: ${shortUrls.join(", ")}`,
        severity: "warn",
      });
      score += 15;
    }

    // Long subdomain chains
    if (hasLongSubdomainUrl(urls)) {
      redFlags.push({
        label: "Deep Subdomain Nesting",
        detail: "URL(s) use multiple subdomain levels to embed a trusted brand name and obscure the true domain.",
        severity: "warn",
      });
      score += 20;
    }

    // Mixed HTTP/HTTPS
    const httpUrls = urls.filter(u => u.startsWith("http://"));
    if (httpUrls.length > 0) {
      redFlags.push({
        label: "Non-HTTPS Links (HTTP)",
        detail: `${httpUrls.length} link(s) use plain HTTP (unencrypted): ${httpUrls.slice(0,2).join(", ")}`,
        severity: "warn",
      });
      score += 15;
    }

    // Suspicious TLD in URLs
    const suspUrlTlds = urls.filter(u => {
      try {
        const host = new URL(u.startsWith("http") ? u : "http://"+u).hostname;
        return SUSPICIOUS_TLDS.has("."+host.split(".").pop());
      } catch { return false; }
    });
    if (suspUrlTlds.length > 0) {
      redFlags.push({
        label: "Suspicious TLD in Link(s)",
        detail: `Link(s) point to high-risk TLD domains: ${suspUrlTlds.slice(0,2).join(", ")}`,
        severity: "danger",
      });
      score += 20;
    }

    // Brand typosquat in URL
    for (const url of urls) {
      try {
        const host = new URL(url.startsWith("http") ? url : "http://"+url).hostname;
        const tq = detectTyposquat(host);
        if (tq) {
          redFlags.push({
            label: "Typosquat URL Detected",
            detail: `Link domain "${host}" mimics "${tq.brand}". This is not an official ${tq.brand} URL.`,
            severity: "danger",
          });
          score += 30;
          linkAnalysis += ` Typosquat of "${tq.brand}" found in URL.`;
          break;
        }
      } catch {}
    }

    // Domain keyword suspicion in URLs
    const suspUrlDomains = urls.filter(u => {
      try {
        const host = new URL(u.startsWith("http") ? u : "http://"+u).hostname;
        return domainSuspicionLevel(host) >= 2 && !LEGIT_DOMAINS.has(host);
      } catch { return false; }
    });
    if (suspUrlDomains.length > 0) {
      redFlags.push({
        label: "Suspicious Keywords in URL Domain",
        detail: `URL domain(s) contain multiple trust-baiting keywords: ${suspUrlDomains.slice(0,2).join(", ")}`,
        severity: "warn",
      });
      score += 10;
    }

    // Legitimate domain links — safe indicator
    const legitLinks = urls.filter(u => {
      try {
        const host = new URL(u.startsWith("http") ? u : "http://"+u).hostname;
        return LEGIT_DOMAINS.has(host);
      } catch { return false; }
    });
    if (legitLinks.length > 0 && urls.length === legitLinks.length) {
      safeIndicators.push({
        label: "All Links Point to Recognized Domains",
        detail: `All ${legitLinks.length} link(s) resolve to known legitimate domains.`,
      });
      score -= 15;
    }

    linkAnalysis += ` ${httpUrls.length > 0 ? httpUrls.length + " HTTP (insecure)." : "All HTTPS."} ${shortUrls.length > 0 ? shortUrls.length + " shortened URL(s)." : ""}`;
  } else {
    safeIndicators.push({ label: "No Suspicious Links", detail: "No URLs were detected in the email body." });
  }

  // ── 3. URGENCY / PRESSURE TACTICS ───────────────
  const urgencyHits = countKeywords(text, URGENCY_WORDS);
  if (urgencyHits.length >= 3) {
    redFlags.push({
      label: "High Urgency / Pressure Language",
      detail: `${urgencyHits.length} urgency trigger(s) found: "${urgencyHits.slice(0,4).join('", "')}"`,
      severity: "danger",
    });
    score += Math.min(urgencyHits.length * 4, 25);
  } else if (urgencyHits.length >= 1) {
    redFlags.push({
      label: "Urgency Language Detected",
      detail: `Trigger words: "${urgencyHits.join('", "')}"`,
      severity: "warn",
    });
    score += urgencyHits.length * 3;
  }

  // ── 4. THREAT / CONSEQUENCE LANGUAGE ────────────
  const threatHits = countKeywords(text, THREAT_WORDS);
  if (threatHits.length >= 2) {
    redFlags.push({
      label: "Threat / Consequence Language",
      detail: `${threatHits.length} threat phrase(s): "${threatHits.slice(0,3).join('", "')}"`,
      severity: "danger",
    });
    score += Math.min(threatHits.length * 5, 20);
  } else if (threatHits.length === 1) {
    redFlags.push({
      label: "Consequence Threat",
      detail: `Phrase: "${threatHits[0]}"`,
      severity: "warn",
    });
    score += 8;
  }

  // ── 5. REWARD / PRIZE BAIT ───────────────────────
  const rewardHits = countKeywords(text, REWARD_WORDS);
  if (rewardHits.length >= 2) {
    redFlags.push({
      label: "Reward / Prize Bait",
      detail: `${rewardHits.length} reward-bait phrase(s): "${rewardHits.slice(0,3).join('", "')}"`,
      severity: "danger",
    });
    score += Math.min(rewardHits.length * 5, 25);
  } else if (rewardHits.length === 1) {
    redFlags.push({
      label: "Suspicious Reward Mention",
      detail: `Phrase: "${rewardHits[0]}"`,
      severity: "warn",
    });
    score += 8;
  }

  // ── 6. SENSITIVE DATA REQUESTS ───────────────────
  const credHits = detectCredentialRequest(text);
  if (credHits.length >= 3) {
    redFlags.push({
      label: "Multiple Sensitive Data Requests",
      detail: `${credHits.length} sensitive data request(s): "${credHits.slice(0,4).join('", "')}"`,
      severity: "danger",
    });
    score += Math.min(credHits.length * 8, 35);
  } else if (credHits.length >= 1) {
    redFlags.push({
      label: "Sensitive Information Requested",
      detail: `Requests: "${credHits.join('", "')}"`,
      severity: "danger",
    });
    score += credHits.length * 7;
  }

  // ── 7. SUBJECT LINE ANALYSIS ─────────────────────
  const subject = extractSubject(text);
  if (subject) {
    const { capsRatio, hasExclam, hasEmoji } = analyzeSubject(subject);
    if (capsRatio > 0.5) {
      redFlags.push({
        label: "Excessive CAPS in Subject",
        detail: `Subject "${subject}" is predominantly uppercase — a manipulation tactic to create alarm.`,
        severity: "warn",
      });
      score += 8;
    }
    if (hasExclam) {
      redFlags.push({
        label: "Multiple Exclamation Marks in Subject",
        detail: `Subject contains multiple "!" characters to create false urgency.`,
        severity: "warn",
      });
      score += 5;
    }
    if (hasEmoji) {
      redFlags.push({
        label: "Emoji in Subject Line",
        detail: `Subject uses emoji (⚠️ ✓ etc.) — common phishing trick to stand out in inbox.`,
        severity: "warn",
      });
      score += 5;
    }
  }

  // ── 8. MONEY MENTIONS ────────────────────────────
  const moneyMentions = detectMoneyMentions(text);
  if (moneyMentions.length >= 3) {
    redFlags.push({
      label: "Multiple Large Money Amounts",
      detail: `${moneyMentions.length} financial figure(s) found: ${moneyMentions.slice(0,3).join(", ")}`,
      severity: "warn",
    });
    score += 10;
  }

  // ── 9. SUSPICIOUS PHONE NUMBERS ──────────────────
  const suspPhones = detectSuspiciousPhones(text);
  if (suspPhones.length > 0) {
    redFlags.push({
      label: "High-Risk Country Phone Numbers",
      detail: `International number(s) from known scam-associated country codes: ${suspPhones.join(", ")}`,
      severity: "warn",
    });
    score += 10;
  }

  // ── 10. RECIPIENT OBFUSCATION ─────────────────────
  if (detectBCC(text)) {
    redFlags.push({
      label: "Undisclosed Recipients / Mass Sending",
      detail: `Email addressed to "undisclosed-recipients" — indicates bulk phishing campaign.`,
      severity: "danger",
    });
    score += 20;
  }

  // ── 11. IMPERSONATION PATTERNS ───────────────────
  for (const pat of IMPERSONATION_PATTERNS) {
    if (pat.test(text)) {
      redFlags.push({
        label: "Impersonation Pattern",
        detail: `Email structure matches known phishing impersonation patterns.`,
        severity: "warn",
      });
      score += 10;
      break;
    }
  }

  // ── 12. OBFUSCATION / ENCODING ───────────────────
  const obfHits = detectObfuscation(text);
  for (const h of obfHits) {
    redFlags.push({ label: "Content Obfuscation", detail: h, severity: "warn" });
    score += 10;
  }

  // ── 13. REPLY-TO MISMATCH ────────────────────────
  const replyTo = text.match(/Reply-To:\s*([^\n]+)/i);
  const fromAddr = text.match(/From:.*?<([^>]+)>/i);
  if (replyTo && fromAddr) {
    const rtDomain = (replyTo[1].match(/@([a-z0-9._-]+)/i) || [])[1];
    const frDomain = (fromAddr[1].match(/@([a-z0-9._-]+)/i) || [])[1];
    if (rtDomain && frDomain && rtDomain !== frDomain) {
      redFlags.push({
        label: "Reply-To Mismatch",
        detail: `From domain "${frDomain}" differs from Reply-To domain "${rtDomain}" — replies go to a different attacker-controlled address.`,
        severity: "danger",
      });
      score += 25;
    }
  }

  // ── 14. GENERIC GREETING ─────────────────────────
  const genericGreetings = ["dear customer","dear user","dear valued customer","dear member","dear account holder","dear client","dear friend","hello there","to whom it may concern"];
  const greetHits = genericGreetings.filter(g => lower.includes(g));
  if (greetHits.length > 0) {
    redFlags.push({
      label: "Generic Impersonal Greeting",
      detail: `Uses "${greetHits[0]}" instead of recipient's actual name — suggests bulk phishing.`,
      severity: "warn",
    });
    score += 8;
  } else if (lower.includes("dear ") || lower.includes("hi ")) {
    safeIndicators.push({ label: "Uses a Greeting", detail: "Email has a greeting, though this alone is not conclusive." });
  }

  // ── 15. UNSUBSCRIBE / LEGAL FOOTER (safe signal) ─
  if (/unsubscribe|privacy policy|terms of service|opt.?out/i.test(text)) {
    safeIndicators.push({
      label: "Contains Unsubscribe / Legal Footer",
      detail: "Legitimate commercial emails typically include opt-out and legal information.",
    });
    score -= 8;
  }

  // ── 16. HTTPS + LEGIT DOMAIN (safe signal) ────────
  const allHttps = urls.length > 0 && urls.every(u => u.startsWith("https://"));
  if (allHttps) {
    safeIndicators.push({ label: "All Links Use HTTPS", detail: "All URLs use encrypted HTTPS connections." });
    score -= 5;
  }

  // ── 17. SPELLING / GRAMMAR ODDITIES ──────────────
  const spellingIssues = [
    /kindly do the needful/i, /revert back to us/i, /do the needful/i,
    /with immediate effect/i, /at the earliest/i, /your co-?operation is needed/i,
  ];
  const spellHits = spellingIssues.filter(p => p.test(text));
  if (spellHits.length > 0) {
    redFlags.push({
      label: "Non-Native English Phrasing",
      detail: `Phrases consistent with scam email templates from non-English-speaking regions.`,
      severity: "warn",
    });
    score += 8;
  }

  // ── 18. ATTACHMENT / MACRO WARNINGS ──────────────
  if (/\.exe|\.zip|\.js|\.vbs|\.bat|enable macros|enable content|open attachment/i.test(text)) {
    redFlags.push({
      label: "Suspicious Attachment / Macro Reference",
      detail: "Email references executable files, archives, or requests enabling macros — malware delivery vector.",
      severity: "danger",
    });
    score += 30;
  }

  // ── 19. LOOKALIKE UNICODE / HOMOGLYPHS ───────────
  if (/[\u0400-\u04FF\u0370-\u03FF]/.test(text)) {
    redFlags.push({
      label: "Non-Latin / Homoglyph Characters",
      detail: "Cyrillic or Greek characters detected — may be used to spoof Latin-looking domain names or text.",
      severity: "warn",
    });
    score += 15;
  }

  // ── 20. FEE / ADVANCE PAYMENT REQUEST ────────────
  if (/pay.*fee|shipping fee|handling fee|processing fee|advance fee|small fee|nominal fee|redelivery fee/i.test(text)) {
    redFlags.push({
      label: "Advance Fee / Small Payment Request",
      detail: "Requesting a small fee to 'unlock' a prize or delivery is a hallmark advance-fee fraud tactic.",
      severity: "danger",
    });
    score += 25;
  }

  // ── CLAMP & CLASSIFY ─────────────────────────────
  score = Math.max(0, Math.min(100, score));

  let verdict, threatLevel, recommendation;
  if (score >= 60) {
    verdict = "PHISHING";
    threatLevel = "HIGH";
    recommendation = "Do NOT click any links. Delete this email immediately. Report to IT/security team.";
  } else if (score >= 30) {
    verdict = "SUSPICIOUS";
    threatLevel = "MEDIUM";
    recommendation = "Treat with extreme caution. Verify sender through official channels before taking any action.";
  } else {
    verdict = "LEGITIMATE";
    threatLevel = "LOW";
    recommendation = "Email appears safe, but always stay vigilant and verify unexpected requests.";
  }

  // Confidence: more flags = higher confidence in verdict
  const totalSignals = redFlags.length + safeIndicators.length;
  const confidence = totalSignals >= 8 ? 97
    : totalSignals >= 5 ? 91
    : totalSignals >= 3 ? 83
    : totalSignals >= 1 ? 72
    : 60;

  // Build summary
  let summary = "";
  if (verdict === "PHISHING") {
    summary = `This email shows ${redFlags.length} phishing indicator(s) with a risk score of ${score}/100. `;
    if (brandImpersonated) summary += `It impersonates "${brandImpersonated}" using a lookalike domain. `;
    if (credHits.length > 0) summary += "It requests sensitive credentials or financial information. ";
    summary += "This is consistent with a credential harvesting or fraud campaign. Do not engage.";
  } else if (verdict === "SUSPICIOUS") {
    summary = `This email shows ${redFlags.length} warning sign(s) with a risk score of ${score}/100. `;
    summary += "Some characteristics are ambiguous — the email may be legitimate but warrants caution. ";
    summary += "Verify through official channels before clicking any links or providing information.";
  } else {
    summary = `This email shows ${safeIndicators.length} safe indicator(s) and only ${redFlags.length} minor concern(s) with a risk score of ${score}/100. `;
    summary += "No strong phishing indicators were detected. It appears to be a routine legitimate email.";
  }

  return {
    verdict,
    riskScore: score,
    confidenceScore: confidence,
    threatLevel,
    summary,
    recommendation,
    redFlags,
    safeIndicators,
    senderAnalysis,
    linkAnalysis,
    urlCount: urls.length,
  };
}

// ════════════════════════════════════════════════
//  STYLES & CONSTANTS
// ════════════════════════════════════════════════
const TAG_STYLES = {
  high: { background: "#ff4444", color: "#fff", border: "2.5px solid #000" },
  med:  { background: "#ffaa00", color: "#000", border: "2.5px solid #000" },
  low:  { background: "#22cc66", color: "#fff", border: "2.5px solid #000" },
};

const DOT_COLOR = { danger: "#ff4444", warn: "#ffaa00", safe: "#22cc66", info: "#3399ff" };

const VERDICT_PALETTE = {
  PHISHING:   { bg: "#fff0f0", border: "#ff4444", color: "#cc0000", emoji: "🚨" },
  SUSPICIOUS: { bg: "#fffbf0", border: "#ffaa00", color: "#cc7700", emoji: "⚠️" },
  LEGITIMATE: { bg: "#f0fff6", border: "#22cc66", color: "#007733", emoji: "✅" },
};

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Courier+Prime:wght@400;700&display=swap');

  * { box-sizing: border-box; }
  body { margin: 0; }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f0f0f0; border-left: 2px solid #000; }
  ::-webkit-scrollbar-thumb { background: #000; border-radius: 0; }

  @keyframes pop {
    0%   { transform: scale(0.92); }
    60%  { transform: scale(1.04); }
    100% { transform: scale(1); }
  }
  @keyframes scan {
    0%   { transform: translateY(0); opacity: 1; }
    50%  { opacity: 0.4; }
    100% { transform: translateY(8px); opacity: 1; }
  }

  .sample-row { cursor: pointer; transition: background 0.1s; }
  .sample-row:hover { background: #f5f5f5 !important; }

  .analyze-btn { transition: transform 0.1s, box-shadow 0.1s; }
  .analyze-btn:hover:not(:disabled) { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #000; }
  .analyze-btn:active:not(:disabled) { transform: translate(0,0); box-shadow: 2px 2px 0 #000; }

  .clear-btn { transition: transform 0.1s, box-shadow 0.1s; }
  .clear-btn:hover { transform: translate(-2px,-2px); box-shadow: 3px 3px 0 #000; }

  .scan-line { animation: scan 0.6s ease-in-out infinite; }
`;

// ════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════
export default function PhishingAnalyzer() {
  const [email, setEmail] = useState("");
  const [activeIdx, setActiveIdx] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function loadSample(i) {
    setActiveIdx(i);
    setEmail(SAMPLES[i].body);
    setResult(null);
  }

  function clearAll() {
    setEmail("");
    setActiveIdx(null);
    setResult(null);
  }

  function analyze() {
    if (!email.trim()) { alert("Please paste an email to analyze."); return; }
    setLoading(true);
    setResult(null);
    // Simulate brief processing delay for UX
    setTimeout(() => {
      setResult(analyzeEmail(email));
      setLoading(false);
    }, 600);
  }

  const vp = result ? (VERDICT_PALETTE[result.verdict] || VERDICT_PALETTE.LEGITIMATE) : null;
  const scoreColor = result
    ? result.riskScore >= 60 ? "#cc0000"
    : result.riskScore >= 30 ? "#cc7700"
    : "#007733"
    : "#000";

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{
        background: "#fff",
        minHeight: "100vh",
        color: "#000",
        fontFamily: "'Courier Prime', monospace",
        display: "flex",
        flexDirection: "column",
        border: "3px solid #000",
      }}>

        {/* Header */}
        <div style={{
          background: "#fff",
          borderBottom: "3px solid #000",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          boxShadow: "0 4px 0 #000",
        }}>
          <div style={{
            width: 44, height: 44,
            background: "#ffee00",
            border: "3px solid #000",
            borderRadius: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
            boxShadow: "4px 4px 0 #000",
            flexShrink: 0,
          }}>🛡️</div>
          <div>
            <span style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Bangers', cursive", letterSpacing: 1.5, color: "#000" }}>
              Phishing Email Analyzer
            </span>
            <span style={{ fontSize: 11, color: "#555", marginLeft: 10, fontFamily: "'Courier Prime', monospace", fontWeight: 700 }}>
              — 20-RULE LOCAL ENGINE · NO API
            </span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 10, height: 10, background: "#22cc66", border: "2px solid #000", borderRadius: "50%" }} />
            <span style={{ fontSize: 11, fontWeight: 700 }}>OFFLINE MODE</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "270px 1fr", flex: 1, overflow: "hidden", height: "calc(100vh - 76px)" }}>

          {/* Sidebar */}
          <div style={{ borderRight: "3px solid #000", overflowY: "auto", background: "#fff" }}>
            <div style={{
              padding: "10px 16px",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "'Bangers', cursive",
              letterSpacing: 2,
              textTransform: "uppercase",
              borderBottom: "2.5px solid #000",
              background: "#000",
              color: "#ffee00",
            }}>
              Sample Emails
            </div>
            {SAMPLES.map((s, i) => (
              <div
                key={i}
                className="sample-row"
                onClick={() => loadSample(i)}
                style={{
                  padding: "11px 14px",
                  borderBottom: "2px solid #000",
                  background: activeIdx === i ? "#ffee00" : "#fff",
                  borderLeft: activeIdx === i ? "5px solid #000" : "5px solid transparent",
                }}
              >
                <span style={{
                  ...TAG_STYLES[s.tag],
                  display: "inline-block",
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 0,
                  fontWeight: 700,
                  marginBottom: 4,
                  fontFamily: "'Bangers', cursive",
                  letterSpacing: 1,
                  boxShadow: "2px 2px 0 #000",
                }}>{s.label}</span>
                <div style={{ fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.sender}</div>
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Input */}
            <div style={{ padding: "18px 22px", borderBottom: "3px solid #000", background: "#fff" }}>
              <textarea
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Paste full email here (headers + body)...\n\nOr click a sample from the left panel."}
                style={{
                  width: "100%",
                  background: "#fafafa",
                  border: "2.5px solid #000",
                  borderRadius: 0,
                  color: "#000",
                  fontSize: 12,
                  padding: "12px 14px",
                  resize: "vertical",
                  minHeight: 130,
                  fontFamily: "'Courier Prime', monospace",
                  outline: "none",
                  boxShadow: "3px 3px 0 #000",
                }}
              />
              <div style={{ display: "flex", gap: 10, marginTop: 12, alignItems: "center" }}>
                <button
                  className="analyze-btn"
                  onClick={analyze}
                  disabled={loading}
                  style={{
                    background: loading ? "#ccc" : "#ffee00",
                    color: "#000",
                    border: "2.5px solid #000",
                    padding: "9px 22px",
                    borderRadius: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "'Bangers', cursive",
                    letterSpacing: 1,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", gap: 7,
                    boxShadow: "3px 3px 0 #000",
                  }}
                >
                  🔍 {loading ? "Scanning..." : "Analyze Email"}
                </button>
                <button
                  className="clear-btn"
                  onClick={clearAll}
                  style={{
                    background: "#fff",
                    border: "2.5px solid #000",
                    color: "#000",
                    padding: "9px 18px",
                    borderRadius: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "'Courier Prime', monospace",
                    cursor: "pointer",
                    boxShadow: "3px 3px 0 #000",
                  }}
                >
                  Clear
                </button>
                <span style={{ fontSize: 11, color: "#555", marginLeft: "auto", fontWeight: 700 }}>
                  ⚡ 20 detection rules · 0 API calls
                </span>
              </div>
            </div>

            {/* Results */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px 22px" }}>

              {!result && !loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 10 }}>
                  <div style={{
                    width: 80, height: 80,
                    background: "#f0f0f0",
                    border: "3px solid #000",
                    borderRadius: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36,
                    boxShadow: "5px 5px 0 #000",
                  }}>📧</div>
                  <div style={{ fontSize: 16, fontFamily: "'Bangers', cursive", letterSpacing: 1.2, color: "#000" }}>No Email Analyzed Yet</div>
                  <div style={{ fontSize: 13, color: "#666" }}>Paste an email or select a sample from the left panel</div>
                  <div style={{
                    marginTop: 10,
                    background: "#fafafa",
                    border: "2px solid #000",
                    borderRadius: 0,
                    padding: "12px 20px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#333",
                    boxShadow: "3px 3px 0 #000",
                    textAlign: "left",
                    maxWidth: 360,
                  }}>
                    <div style={{ fontFamily: "'Bangers', cursive", fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>DETECTION RULES ACTIVE:</div>
                    {[
                      "Sender domain & typosquat detection",
                      "Brand impersonation / display name spoofing",
                      "Suspicious TLD & IP-based URL detection",
                      "URL shortener & deep subdomain analysis",
                      "Credential & sensitive data request detection",
                      "Urgency / threat / reward language analysis",
                      "Subject line manipulation detection",
                      "Reply-To header mismatch detection",
                      "Advance fee fraud patterns",
                      "Generic greeting & mass-sending indicators",
                      "+ 10 more automated triggers",
                    ].map((r, i) => (
                      <div key={i} style={{ display: "flex", gap: 6, marginBottom: 3, alignItems: "center" }}>
                        <div style={{ width: 8, height: 8, background: "#000", borderRadius: "50%", flexShrink: 0 }} />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {loading && (
                <div style={{ padding: "24px 0", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Parsing sender headers...", "Extracting & validating URLs...", "Running 20 detection rules...", "Calculating risk score..."].map((msg, i) => (
                    <div key={i} className="scan-line" style={{ display: "flex", gap: 10, alignItems: "center", animationDelay: `${i * 120}ms` }}>
                      <div style={{ width: 10, height: 10, background: "#ffee00", border: "2px solid #000", flexShrink: 0, boxShadow: "1px 1px 0 #000" }} />
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{msg}</span>
                    </div>
                  ))}
                </div>
              )}

              {result && vp && (
                <div style={{ animation: "pop 0.3s ease-out" }}>

                  {/* Verdict Banner */}
                  <div style={{
                    background: vp.bg,
                    border: `3px solid ${vp.border}`,
                    borderRadius: 0,
                    padding: "16px 20px",
                    marginBottom: 18,
                    display: "flex", alignItems: "center", gap: 16,
                    boxShadow: "5px 5px 0 #000",
                  }}>
                    <div style={{
                      width: 50, height: 50,
                      background: "#fff",
                      border: "3px solid #000",
                      borderRadius: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                      boxShadow: "3px 3px 0 #000",
                    }}>{vp.emoji}</div>
                    <div>
                      <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Bangers', cursive", letterSpacing: 1.5, color: vp.color }}>{result.verdict}</div>
                      <div style={{ fontSize: 13, color: vp.color, fontWeight: 700, marginTop: 2 }}>
                        {result.threatLevel} THREAT — {result.recommendation}
                      </div>
                    </div>
                  </div>

                  {/* Score Cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }}>
                    {[
                      { label: "Risk Score", value: `${result.riskScore}/100`, color: scoreColor },
                      { label: "Confidence", value: `${result.confidenceScore}%`, color: "#000" },
                      { label: "Red Flags", value: `${result.redFlags.length}`, color: result.redFlags.length > 3 ? "#cc0000" : "#cc7700" },
                      { label: "URLs Found", value: `${result.urlCount}`, color: "#000" },
                    ].map((c) => (
                      <div key={c.label} style={{
                        background: "#fff",
                        border: "2.5px solid #000",
                        borderRadius: 0,
                        padding: "14px 16px",
                        boxShadow: "3px 3px 0 #000",
                      }}>
                        <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#555", marginBottom: 6, fontFamily: "'Bangers', cursive" }}>{c.label}</div>
                        <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Bangers', cursive", letterSpacing: 1, color: c.color }}>{c.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Risk Bar */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 11, fontWeight: 700 }}>
                      <span>RISK SCORE</span><span style={{ color: scoreColor }}>{result.riskScore}/100</span>
                    </div>
                    <div style={{ height: 16, background: "#f0f0f0", border: "2px solid #000", borderRadius: 0, overflow: "hidden", boxShadow: "2px 2px 0 #000" }}>
                      <div style={{
                        height: "100%",
                        width: `${result.riskScore}%`,
                        background: result.riskScore >= 60 ? "#ff4444" : result.riskScore >= 30 ? "#ffaa00" : "#22cc66",
                        transition: "width 0.5s ease",
                        borderRight: result.riskScore < 100 ? "2px solid #000" : "none",
                      }} />
                    </div>
                  </div>

                  {/* Summary */}
                  <Section title="📋 Analysis Summary">
                    <div style={{ fontSize: 13, lineHeight: 1.7, color: "#222" }}>{result.summary}</div>
                  </Section>

                  {result.redFlags?.length > 0 && (
                    <Section title={`🚩 Red Flags Detected (${result.redFlags.length})`}>
                      {result.redFlags.map((f, i) => (
                        <Indicator key={i} dot={DOT_COLOR[f.severity] || "#888"} label={f.label} detail={f.detail} last={i === result.redFlags.length - 1} />
                      ))}
                    </Section>
                  )}

                  {result.safeIndicators?.length > 0 && (
                    <Section title={`✅ Safe Indicators (${result.safeIndicators.length})`}>
                      {result.safeIndicators.map((f, i) => (
                        <Indicator key={i} dot="#22cc66" label={f.label} detail={f.detail} last={i === result.safeIndicators.length - 1} />
                      ))}
                    </Section>
                  )}

                  <Section title="🔗 Link & Sender Analysis">
                    <Indicator dot="#3399ff" label="Sender Domain" detail={result.senderAnalysis} />
                    <Indicator dot="#3399ff" label="Links Found" detail={result.linkAnalysis} last />
                  </Section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div style={{
      background: "#fff",
      border: "2.5px solid #000",
      borderRadius: 0,
      padding: "16px 18px",
      marginBottom: 14,
      boxShadow: "3px 3px 0 #000",
    }}>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "'Bangers', cursive",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#000",
        marginBottom: 12,
        borderBottom: "2px solid #000",
        paddingBottom: 8,
      }}>{title}</div>
      {children}
    </div>
  );
}

function Indicator({ dot, label, detail, last }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 10,
      padding: "8px 0",
      borderBottom: last ? "none" : "1.5px solid #eee",
    }}>
      <div style={{
        width: 12, height: 12,
        borderRadius: "50%",
        background: dot,
        border: "2px solid #000",
        flexShrink: 0,
        marginTop: 4,
        boxShadow: "1px 1px 0 #000",
      }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.5 }}>{label}</div>
        <div style={{ fontSize: 12, color: "#555", marginTop: 2, lineHeight: 1.5 }}>{detail}</div>
      </div>
    </div>
  );
}
