/* BINUO NG ADMIN — huwag i-edit nang manu-mano.
   Huling update: 2026-08-02 10:01:39 */
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
        "title": "Gio Asuncion — Software Architect · AI, Enterprise Systems & Digital Commerce",
        "description": "I architect intelligent digital ecosystems — AI, enterprise software, e-commerce and automation — that transform how businesses run."
    },
    "brand": "gio.asuncion",
    "nav": [
        {
            "label": "expertise",
            "href": "#expertise"
        },
        {
            "label": "services",
            "href": "#services"
        },
        {
            "label": "work",
            "href": "#work"
        },
        {
            "label": "portfolio",
            "href": "#portfolio"
        },
        {
            "label": "contact",
            "href": "#contact"
        }
    ],
    "hero": {
        "name": "Gio Asuncion",
        "role": "Software Architect · AI, Enterprise Systems &amp; Digital Commerce",
        "lede": "I design and build intelligent digital ecosystems — connecting AI, enterprise software, e-commerce and automation into systems that run a business end to end. Thirty years of enterprise engineering, now pointed at what AI makes possible.",
        "buttons": [
            {
                "label": "Explore my work",
                "href": "#work",
                "style": "solid"
            },
            {
                "label": "Book a consultation",
                "href": "#contact",
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
        "heading": "Intelligent systems,<br>built to run a business.",
        "lede": "Five pillars I architect across — from AI and enterprise software to the automation that ties them together.",
        "items": [
            {
                "title": "Artificial Intelligence",
                "text": "AI consulting, chatbots, assistants, generative AI and prompt engineering — grounded in your own knowledge base and wired into real workflows."
            },
            {
                "title": "Enterprise Software",
                "text": "ERP, CRM, HRIS, inventory, warehouse, finance and procurement systems, architected to work as one."
            },
            {
                "title": "E-Commerce",
                "text": "Shopee, Lazada, TikTok Shop and your own store connected to order management, fulfilment and payments."
            },
            {
                "title": "Business Automation",
                "text": "Sales, marketing, workflow and document automation that removes the manual steps between systems."
            },
            {
                "title": "Digital Transformation",
                "text": "Technology strategy, enterprise architecture, system integration and cloud migration for organisations modernising at scale."
            }
        ]
    },
    "services": {
        "label": "services",
        "heading": "How I work with you.",
        "lede": "Advisory and delivery — from a single architecture review to fractional CTO leadership.",
        "items": [
            {
                "title": "Enterprise Consulting",
                "text": "Systems strategy and architecture for organisations scaling their operations."
            },
            {
                "title": "AI Consulting",
                "text": "Where AI actually fits in your business, and how to deploy it safely and usefully."
            },
            {
                "title": "Software Architecture",
                "text": "System design, data models and integration blueprints before a line of code is written."
            },
            {
                "title": "Fractional CTO",
                "text": "Senior technology leadership on a part-time basis for teams not ready to hire full-time."
            },
            {
                "title": "ERP &amp; Business Systems",
                "text": "Selecting, designing and integrating the back-office systems your operation runs on."
            },
            {
                "title": "E-Commerce Consulting",
                "text": "Multi-channel commerce architecture — from marketplace APIs to fulfilment."
            },
            {
                "title": "API Development &amp; Integration",
                "text": "Connecting the systems you already run so data moves without re-typing."
            },
            {
                "title": "Cloud Solutions",
                "text": "Cloud migration and infrastructure for reliability at scale."
            }
        ]
    },
    "framework": {
        "label": "framework",
        "heading": "How automation gets built.",
        "lede": "A five-step method — from finding the opportunity to optimising it with AI.",
        "steps": [
            {
                "title": "Assess",
                "text": "Analyze business processes and identify automation opportunities."
            },
            {
                "title": "Design",
                "text": "Create scalable workflows and system architecture."
            },
            {
                "title": "Develop",
                "text": "Build secure, reliable and integrated automation solutions."
            },
            {
                "title": "Integrate",
                "text": "Connect systems, data and external services."
            },
            {
                "title": "Optimize",
                "text": "Continuously improve performance through analytics and AI."
            }
        ]
    },
    "industries": {
        "label": "industries",
        "heading": "Industries I build for.",
        "lede": "The patterns repeat across sectors — the systems adapt to each.",
        "items": [
            "Real Estate",
            "Government / Public Sector",
            "Hospitality",
            "Vacation Membership",
            "Retail",
            "Wholesale",
            "Manufacturing",
            "Logistics",
            "Education",
            "Healthcare",
            "SMEs",
            "Startups"
        ]
    },
    "work": {
        "label": "work",
        "heading": "Proof, with the numbers.",
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
            }
        ],
        "filters": [
            "Inventory sync 01",
            "Marketplace APIs 01",
            "ERP integration 01"
        ]
    },
    "portfolio": {
        "label": "portfolio",
        "heading": "Systems I've architected.",
        "lede": "A selection of enterprise platforms delivered across commerce, property and operations.",
        "items": [
            {
                "kind": "ERP",
                "title": "Enterprise Resource Planning System",
                "text": "A modular ERP unifying inventory, accounting, procurement and reporting on one database — the operational backbone for a multi-warehouse business.",
                "tags": [
                    "Modules",
                    "Database",
                    "API",
                    "Reporting"
                ]
            },
            {
                "kind": "Membership",
                "title": "Vacation Membership Platform",
                "text": "A complete digital membership ecosystem — reservations, member portal, billing and loyalty for a vacation-club operator.",
                "tags": [
                    "Reservations",
                    "Member Portal",
                    "Billing"
                ]
            },
            {
                "kind": "Real Estate",
                "title": "Property Management Platform",
                "text": "Listings, tenancy, billing and maintenance workflows for property operators, with an admin CMS behind it.",
                "tags": [
                    "Listings",
                    "Billing",
                    "CMS"
                ]
            },
            {
                "kind": "Logistics",
                "title": "Warehouse Management System",
                "text": "Receiving, put-away, picking and stock control integrated with the ERP and e-commerce order flow.",
                "tags": [
                    "Inventory",
                    "Fulfilment",
                    "Integration"
                ]
            },
            {
                "kind": "Commerce",
                "title": "E-Commerce Management Platform",
                "text": "Multi-channel order, inventory and fulfilment management across marketplaces and an own-brand store.",
                "tags": [
                    "Marketplaces",
                    "Orders",
                    "Payments"
                ]
            },
            {
                "kind": "AI",
                "title": "AI Business Automation Platform",
                "text": "An AI layer that drafts proposals, SOPs and reports, and automates repetitive back-office workflows.",
                "tags": [
                    "Generative AI",
                    "Workflow",
                    "Automation"
                ]
            }
        ]
    },
    "experience": {
        "label": "experience",
        "heading": "Thirty years<br>of systems.",
        "jobs": [
            {
                "when": "2025 — Present",
                "title": "Realty Specialist @ 88 Mega Mars Realty Inc.",
                "text": "Real estate operations — property management, sales and marketing — modernised with digital systems: CRM, listings, online reservations, lead and marketing automation, and analytics dashboards.",
                "tags": [
                    "Real Estate",
                    "CRM",
                    "Automation",
                    "Digital Marketing"
                ]
            },
            {
                "when": "2011 — Present",
                "title": "Enterprise Solutions Architect · AI &amp; Automation Consultant",
                "text": "Independent consulting as Gio Asuncion Consulting &amp; Technology — AI, enterprise and marketplace integration for sellers, distributors and retailers across the Philippines. Systems architecture, business automation and ERP connectivity.",
                "tags": [
                    "AI",
                    "Automation",
                    "ERP",
                    "REST APIs",
                    "AWS"
                ]
            },
            {
                "when": "2019 — 2022",
                "title": "Founder &amp; Managing Director @ KLAC Consumer Goods Trading",
                "text": "Founded and led a consumer-goods trading company serving public and private sector clients — government procurement and public bidding end to end, plus the digital systems that ran inventory, documentation, procurement and fulfilment.",
                "tags": [
                    "Government Procurement",
                    "Public Bidding",
                    "Trading",
                    "Supply Chain",
                    "Operations"
                ]
            },
            {
                "when": "2014 — 2016",
                "title": "Chief Operating Officer @ Team Global Inc.",
                "text": "Led operations and technology for a distribution business — the systems, the processes and the teams that ran them.",
                "tags": [
                    "Operations",
                    "PHP",
                    "MySQL"
                ]
            },
            {
                "when": "2001 — 2010",
                "title": "Computer Professor @ AMA Computer College — Lipa",
                "text": "Taught programming, databases and systems analysis for nearly a decade, and supervised capstone projects.",
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
        "label": "speaking",
        "heading": "Speaking &amp; training.",
        "lede": "Talks and workshops for teams modernising their operations — from AI adoption to systems architecture.",
        "items": [
            {
                "format": "Keynote / talk",
                "title": "Architecting the future with AI",
                "text": "How organisations put AI to work across operations — what's real, what's hype, and where to start.",
                "tags": [
                    "AI",
                    "Strategy",
                    "Leadership"
                ]
            },
            {
                "format": "Workshop · in-house",
                "title": "AI adoption for operations teams",
                "text": "A practical session on where AI fits day-to-day, and how to deploy it without disrupting what already works.",
                "tags": [
                    "AI",
                    "Operations",
                    "Automation"
                ]
            },
            {
                "format": "2 days · in-house",
                "title": "Enterprise &amp; marketplace integration for dev teams",
                "text": "Authentication, webhooks, rate limits, retry queues and reconciliation design for teams taking integration in-house.",
                "tags": [
                    "Developers",
                    "APIs",
                    "Architecture"
                ]
            }
        ]
    },
    "contact": {
        "label": "contact",
        "availability": "Available for select consulting and architecture engagements",
        "heading": "Let's architect what's next.",
        "lede": "Book a 30-minute consultation. Tell me what you're building or what's breaking, and you'll leave with a straight answer on the right technical path — including if the answer is simpler than you think.",
        "buttons": [
            {
                "label": "Book a consultation",
                "href": "https://wa.me/639305013452?text=Hi%20Gio%2C%20I%27d%20like%20to%20book%20a%2030-minute%20consultation.",
                "style": "solid"
            },
            {
                "label": "Email me",
                "href": "https://mail.google.com/mail/?view=cm&fs=1&to=gio05051978@gmail.com&su=Consultation%20inquiry%20from%20gioasuncion.com",
                "style": "ghost"
            }
        ],
        "links": [
            {
                "label": "Portfolio",
                "href": "https://gioasuncion.com"
            },
            {
                "label": "GitHub",
                "href": "https://github.com/gioasuncion/portfolio"
            },
            {
                "label": "LinkedIn",
                "href": "https://www.linkedin.com/in/gio-asuncion-45415b218"
            },
            {
                "label": "WhatsApp",
                "href": "https://wa.me/639305013452"
            }
        ]
    },
    "footer": {
        "left": "© 2026 Gio Asuncion · Software Architect",
        "right": "Technology · Innovation · Leadership"
    },
    "marquee": [
        "Artificial Intelligence",
        "Enterprise Software",
        "ERP",
        "CRM",
        "E-Commerce",
        "Marketplace Integration",
        "Business Automation",
        "Cloud",
        "API Integration",
        "Digital Transformation"
    ]
};
