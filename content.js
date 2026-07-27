/* BINUO NG ADMIN — huwag i-edit nang manu-mano.
   Huling update: 2026-07-27 05:56:01 */
window.SITE = {
    "theme": {
        "--bg": "#0E1012",
        "--surface": "#16191C",
        "--line": "#2A3036",
        "--text": "#E9ECE8",
        "--muted": "#89929A",
        "--accent": "#C9F24D",
        "--flag": "#E8A33D",
        "--sync": "#C9F24D"
    },
    "meta": {
        "title": "Gio Asuncion — E-Commerce Systems Architect",
        "description": "I connect Shopee, Lazada, TikTok Shop and your own site to the ERP, warehouse and accounting systems you already run."
    },
    "brand": "gio.asuncion",
    "nav": [
        {
            "label": "expertise",
            "href": "#expertise"
        },
        {
            "label": "work",
            "href": "#work"
        },
        {
            "label": "experience",
            "href": "#experience"
        },
        {
            "label": "trainings",
            "href": "#trainings"
        },
        {
            "label": "contact",
            "href": "#contact"
        }
    ],
    "hero": {
        "name": "Gio Asuncion",
        "role": "E-Commerce Systems Architect · ERP, Inventory &amp; Marketplace Integration",
        "lede": "I connect Shopee, Lazada, TikTok Shop and your own site to the ERP, warehouse and accounting systems you already run — so your stock tells the truth everywhere at once. Thirty years of enterprise systems, pointed at marketplaces.",
        "buttons": [
            {
                "label": "Book an integration review",
                "href": "#contact",
                "style": "solid"
            },
            {
                "label": "See the work",
                "href": "#work",
                "style": "ghost"
            }
        ],
        "photo": "photo-20260727055545.jpg",
        "photoAlt": "Gio Asuncion",
        "photoLeft": "Pasig City, PH",
        "photoRight": "I Am +"
    },
    "expertise": {
        "label": "expertise",
        "heading": "Back-office plumbing,<br>not storefronts.",
        "lede": "Agencies handle your ads and your listings. I handle what happens after the order comes in.",
        "items": [
            {
                "title": "Inventory synchronisation",
                "text": "One stock figure across every marketplace and your own site, with a single system holding the truth."
            },
            {
                "title": "Order &amp; fulfilment automation",
                "text": "Orders reach your warehouse and accounting systems without anyone retyping them into a spreadsheet."
            },
            {
                "title": "Marketplace API integration",
                "text": "Shopee, Lazada, TikTok Shop, Meta Commerce, Shopify and WooCommerce, wired into the ERP you already run."
            }
        ]
    },
    "work": {
        "label": "work",
        "heading": "Integrations, with the numbers.",
        "lede": "Client names withheld under NDA. Every figure below was measured after cutover.",
        "cases": [
            {
                "draft": false,
                "meta": "Consumer products &amp; general merchandise · 5,000+ SKUs · 8,000 orders/month · 2 warehouses",
                "title": "One inventory across Shopee, Lazada, TikTok Shop and Facebook",
                "caption": "Measured over 90 days after cutover. Later absorbed 13,500 orders/month and carried 11.11 and 12.12 without added operations headcount.",
                "body": [
                    "Stock was managed separately on each of five channels and reconciled by hand through Excel uploads, so the counts drifted apart within hours. Steady overselling, marketplace penalties for late shipment, roughly 400 delayed or cancelled orders a month.",
                    "I built a central synchronisation layer with the ERP inventory database as the single source of truth — webhooks for speed, scheduled polling behind them so nothing is lost when a marketplace drops an event. Validation rules, retry queues and transaction logging keep the counts consistent through peak sale volume. I left the warehouse system alone; their existing WMS already did its job.",
                    "Delivered in 10 weeks, four phases, team of four. Parallel run before cutover."
                ],
                "metrics": [
                    {
                        "k": "Oversell / cancellation",
                        "before": "12%",
                        "after": "1.2%"
                    },
                    {
                        "k": "Order processing time",
                        "before": "15 min",
                        "after": "3 min"
                    },
                    {
                        "k": "Stock accuracy",
                        "before": "78%",
                        "after": "99.5%"
                    },
                    {
                        "k": "Manual encoding",
                        "before": "42 hrs/wk",
                        "after": "4 hrs/wk"
                    }
                ],
                "tags": [
                    "Laravel",
                    "MySQL",
                    "Shopee Open API",
                    "Lazada Open Platform",
                    "TikTok Shop API",
                    "Meta Commerce",
                    "Webhooks",
                    "Docker",
                    "AWS"
                ]
            },
            {
                "draft": true,
                "meta": "",
                "title": "Marketplace API integration across six platforms",
                "caption": "",
                "body": [
                    "<em>Client type and scale, what was breaking, what it cost them, the core design decision, delivery, then at least three before/after numbers.</em>"
                ],
                "metrics": [
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    },
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    },
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    }
                ],
                "tags": []
            },
            {
                "draft": true,
                "meta": "",
                "title": "POS and e-commerce on one stock ledger",
                "caption": "",
                "body": [
                    "<em>Physical stores plus online marketplaces sharing real-time inventory. Strongest third story — it extends the first two into the offline side.</em>"
                ],
                "metrics": [
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    },
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    },
                    {
                        "k": "Metric",
                        "before": "before",
                        "after": "after"
                    }
                ],
                "tags": []
            }
        ],
        "filters": [
            "Inventory sync 01",
            "Marketplace APIs 01",
            "POS &amp; retail 01"
        ]
    },
    "experience": {
        "label": "experience",
        "heading": "Thirty years<br>of systems.",
        "jobs": [
            {
                "when": "2018 — Present",
                "title": "E-Commerce Systems Architect · Independent",
                "text": "Marketplace and back-office integration for multi-channel sellers, distributors and retailers across the Philippines. Inventory synchronisation, order automation and ERP connectivity.",
                "tags": [
                    "Laravel",
                    "MySQL",
                    "REST APIs",
                    "AWS"
                ]
            },
            {
                "when": "2014 — 2016",
                "title": "Chief Operating Officer @ Team Global Inc.",
                "text": "[One or two lines. What you built, who used it, how big it was.]",
                "tags": [
                    "PHP",
                    "MySQL"
                ]
            },
            {
                "when": "2001 — 2010",
                "title": "Computer Professor @ AMA Computer College — Lipa",
                "text": "Taught computer science and IT subjects for nearly a decade. [Add the subjects you handled — programming, databases, systems analysis — and anything you led: curriculum, department, capstone supervision.",
                "tags": [
                    "Programming",
                    "Databases",
                    "Systems Analysis"
                ]
            },
            {
                "when": "2001 — 2010",
                "title": "MS Computer Science",
                "text": "AMA Computer University, Makati campus. Completed alongside teaching.",
                "tags": []
            },
            {
                "when": "1995 — 2000",
                "title": "BS Computer Science",
                "text": "De La Salle Lipa University.",
                "tags": []
            }
        ]
    },
    "quote": {
        "label": "client",
        "text": "Inventory became accurate across all platforms and order processing was much faster. The team could focus on growing the business instead of fixing inventory issues.",
        "cite": "Operations Manager — multi-channel retail"
    },
    "trainings": {
        "label": "trainings",
        "heading": "Corporate training<br>and workshops.",
        "lede": "Ten years teaching computer science, now delivered to operations and development teams in-house.",
        "items": [
            {
                "format": "Half-day · in-house",
                "title": "Why your stock never matches across channels",
                "text": "For operations and e-commerce teams. How marketplace inventory updates actually work, where the counts drift, and what a team can fix without writing code. [Adjust to what you actually run.]",
                "tags": [
                    "Operations",
                    "Inventory",
                    "Marketplaces"
                ]
            },
            {
                "format": "2 days · in-house",
                "title": "Marketplace API integration for in-house dev teams",
                "text": "For developers taking integration work in-house. Authentication, webhooks and polling, rate limits, retry queues, and reconciliation design. [Adjust to what you actually run.]",
                "tags": [
                    "Developers",
                    "APIs",
                    "Architecture"
                ]
            },
            {
                "format": "[Format · duration]",
                "title": "[Program name]",
                "text": "[Who it's for, what they leave with, and how it's delivered.]",
                "tags": []
            }
        ]
    },
    "contact": {
        "label": "contact",
        "availability": "Available for select consulting engagements",
        "heading": "Losing track of stock across channels?",
        "lede": "Book a 30-minute review. Bring your channel list, roughly how many SKUs you carry, and what's breaking. You'll leave with a straight answer on whether integration is worth it for you — including if the answer is no.",
        "buttons": [
            {
                "label": "Email me",
                "href": "mailto:hello@gioasuncion.com",
                "style": "solid"
            },
            {
                "label": "Book a call",
                "href": "#",
                "style": "ghost"
            }
        ],
        "links": [
            {
                "label": "hello@gioasuncion.com",
                "href": "mailto:hello@gioasuncion.com"
            },
            {
                "label": "LinkedIn",
                "href": "#"
            },
            {
                "label": "GitHub",
                "href": "#"
            },
            {
                "label": "WhatsApp",
                "href": "#"
            }
        ]
    },
    "footer": {
        "left": "© 2026 Gio Asuncion",
        "right": "Quezon City, Philippines"
    },
    "marquee": [
        "Shopee",
        "Lazada",
        "TikTok Shop",
        "Meta Commerce",
        "Shopify",
        "WooCommerce",
        "ERP",
        "Warehouse",
        "Accounting",
        "Inventory sync"
    ]
};
