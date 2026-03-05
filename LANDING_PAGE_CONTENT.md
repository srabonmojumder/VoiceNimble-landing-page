# Voice Nimble — Landing Page Content Document
> Marketing site content for the core product page. Everything below is structured for a full-page layout.

---

## BRAND IDENTITY

- **Product Name:** Voice Nimble
- **Tagline:** *"Intelligent Voice AI That Works While You Sleep"*
- **Sub-tagline:** *"Automate outbound calls, manage inbound AI agents, broadcast at scale — all from one powerful platform."*
- **Brand Voice:** Professional, modern, confident, human-centered
- **Target Audience:** SMBs, call centers, marketing teams, sales teams, SaaS companies, enterprises running contact-heavy workflows

---

## HEADER (Sticky / Fixed Top)

### Logo
- **Voice Nimble** (wordmark + microphone/waveform icon)

### Navigation Menu (Desktop)
| Label | Anchor / Page |
|-------|---------------|
| Features | #features |
| Use Cases | #use-cases |
| Integrations | #integrations |
| Pricing | #pricing |
| API Docs | /docs |
| Blog | /blog |
| Contact | #contact |

### Header CTA Buttons
- `Start Free Trial` (primary, filled)
- `Book a Demo` (secondary, outlined)
- `Login` (ghost/text link, top-right)

### Header Extras
- Language switcher (multi-language support exists)
- Small badge: `Now with RAG-Powered AI Knowledge Base`

---

## HERO SECTION (Full-width, above the fold)

### Headline
**"Your AI Voice Agent — Available 24/7, Scalable to Millions"**

### Sub-headline
> Voice Nimble lets you deploy AI-powered voice assistants for outbound campaigns, inbound support, and intelligent follow-ups — with zero hold times, zero missed calls, and complete control over every conversation.

### Hero Visual
- Animated waveform / call dashboard mockup
- Live call status widget floating on the right
- Stats ticker: `1M+ Calls Processed | 99.9% Uptime | 50+ Countries`

### Hero CTA
- `Get Started Free` (primary button — no credit card required)
- `Watch 2-Minute Demo` (with play icon)

### Social Proof Bar (below CTA)
> *Trusted by 500+ businesses across 50+ countries*
- Logos of notable clients or industry categories (Healthcare, Real Estate, eCommerce, Finance, BPO)

---

## FEATURE HIGHLIGHT BAR (Horizontal icon strip)

Quick 6-icon strip just below the hero:

| Icon | Label |
|------|-------|
| 📞 | AI Outbound Calling |
| 📥 | Inbound AI Agent |
| 📡 | Broadcast Campaigns |
| 💬 | WhatsApp + SMS + Email |
| 🧠 | RAG Knowledge Base |
| 📊 | Real-time Analytics |

---

## SECTION 1 — THE CORE PROBLEM (Pain Points)

### Headline
**"Your business can't afford to lose a single lead to a missed call."**

### Problem Cards (3 columns)

**Card 1 — Manual Calling is Broken**
> Sales reps spend 80% of their time on manual dialing, hold music, and voicemails. Hiring more agents doesn't scale — costs spiral with no proportional gain.

**Card 2 — Inbound Goes Unanswered**
> Prospects calling after hours, during peak loads, or on weekends hit voicemail or hold queues. Every missed call is a lost opportunity.

**Card 3 — Campaigns Are Disconnected**
> Running SMS, WhatsApp, email, and voice as separate silos means fragmented data, duplicated effort, and zero unified reporting.

---

## SECTION 2 — WHAT IS VOICE NIMBLE?

### Headline
**"One Platform. Every Voice Touchpoint."**

### Description
> Voice Nimble is an all-in-one AI Voice Communication Platform. It combines intelligent outbound calling, inbound call handling, multi-channel messaging, and a powerful visual chatbot builder — orchestrated by AI that understands natural conversation, accesses your knowledge base, and completes tasks autonomously.

### 3-Column Value Props

| **Automate** | **Engage** | **Scale** |
|---|---|---|
| Let AI handle repetitive outbound calls, follow-ups, and appointment reminders — fully automated, zero agent hours. | Respond to inbound callers in real-time with AI agents that understand intent and take action. | Broadcast campaigns to thousands of contacts simultaneously, with intelligent scheduling across timezones. |

---

## SECTION 3 — CORE FEATURES (Main Feature Deep-Dive)

### Headline
**"Everything You Need to Run Intelligent Voice Operations"**

---

### Feature 1 — AI-Powered Outbound Calling
**"Make thousands of intelligent calls — without lifting a finger."**

Voice Nimble's AI voice agent dials contacts automatically, speaks naturally, handles objections, captures responses, and routes escalations to live agents — all in real time.

**Key Capabilities:**
- AI-generated dynamic voice conversations with human-like TTS
- Outbound call initiation via dashboard or REST API
- Call status tracking: completed, failed, busy, canceled
- Call recording with playback
- Real-time call attempt monitoring
- Customizable greeting messages and conversation flows
- Direct one-off calls or bulk campaigns

---

### Feature 2 — Inbound AI Call Handling
**"Never miss a call. Let AI answer, qualify, and route."**

Configure inbound call agents that pick up every call, greet callers by context, answer questions from your knowledge base, and forward to the right team when needed.

**Key Capabilities:**
- Assign AI prompts to specific inbound phone numbers
- Automatic call routing based on conversation intent
- Real-time inbound call status tracking
- Multiple inbound configurations per account
- Webhook-based call event processing
- Works 24/7 — no hold times, no voicemail

---

### Feature 3 — Broadcast Campaign Manager
**"Reach thousands in minutes. Track every result."**

Schedule and launch voice broadcast campaigns to large contact lists. Set your timezone, pick your audience, and let Voice Nimble handle the rest — with full reporting on every call attempt.

**Key Capabilities:**
- Campaign title, description, and metadata management
- Schedule broadcasts for specific dates and times
- Full timezone support (all global timezones)
- Batch processing for large-volume campaigns
- Tag-based and list-based contact targeting
- Campaign validation — prevent sending to empty lists
- Campaign success rate tracking
- Per-contact delivery status reporting
- Broadcast template library (reusable scripts)
- SMS and WhatsApp broadcast in same campaign workflow

---

### Feature 4 — AI Prompt Studio
**"Build your AI agent's personality and knowledge — in minutes."**

The Prompt Studio is where your AI voice agent gets its brain. Define what it says, how it responds, what it knows, and what actions it can take — without writing any code.

**Key Capabilities:**
- Create custom AI prompts with title, message, and greeting
- Configure collection names for RAG-based knowledge retrieval
- Assign prompts to outbound campaigns or inbound numbers
- Prompt tool / action configuration (trigger external actions from conversation)
- Manage multiple prompt profiles per use case
- AI provider API key management
- Customizable voice model selection
- Prompt versioning and reuse

---

### Feature 5 — RAG Knowledge Base
**"Give your AI agent the answers your customers need."**

Upload your documentation, FAQs, product catalogs, or SOPs. Voice Nimble's RAG (Retrieval-Augmented Generation) engine makes this knowledge available to your AI agent during every conversation — with accuracy and context.

**Key Capabilities:**
- Upload PDF documents and knowledge files
- Organize documents into named collections
- Link knowledge collections to specific AI prompts
- Dynamic document retrieval during live calls
- Context-aware responses grounded in your data
- No hallucinations — AI cites from your uploaded material
- Update knowledge base without retraining models

---

### Feature 6 — Visual Chatbot Flow Builder
**"Design your conversation flows visually. No code needed."**

Build sophisticated multi-step conversation flows using a drag-and-drop visual editor. Define branches, conditionals, and actions that guide callers or chat users through any workflow.

**Key Capabilities:**
- Node-based visual flow editor (powered by React Flow)
- Node types: message, question, condition, action, handoff
- Edge connections for conditional routing
- Full JSON-based flow storage for portability
- Assign flows to specific triggers (keywords, inbound numbers)
- Keyword-to-chatflow mapping for automation
- Preview and test flows before going live
- Save and reuse flow templates

---

### Feature 7 — Multi-Channel Communication Hub
**"Voice, WhatsApp, SMS, and Email — unified."**

Voice Nimble is not just a calling platform. Manage all customer communications from a single inbox — voice, WhatsApp, SMS, and email — with unified conversation history and templates.

**Key Capabilities:**

**WhatsApp:**
- Meta WhatsApp Business API integration
- Send and receive WhatsApp messages
- WhatsApp template messages (approved by Meta)
- Quick reply buttons
- Media attachments (images, audio, documents)
- Incoming message webhook handling
- Session management

**SMS:**
- Group SMS campaigns
- Multiple SMS provider support (Nexmo/Vonage, SSL Wireless, Robi, Grameenphone, Blink)
- SMS delivery tracking and reporting
- SMS templates with variable substitution
- SMS via API

**Email:**
- Gmail SMTP integration
- Send emails from workflows
- Email configuration management
- Email via REST API (`/v1.0/send/email`)

**Unified Inbox:**
- All messages from all channels in one view
- Conversation threading per contact
- Message notes and internal comments
- Conversation status tracking
- Chat widget for web embedding

---

### Feature 8 — Contact & Phonebook Management
**"Organize every contact. Reach the right ones every time."**

A full-featured CRM-lite contact management system with phonebooks, folders, lists, tags, and custom fields — built to support large-scale outreach with surgical precision.

**Key Capabilities:**
- Contact fields: first name, last name, phone, email, address, country, city, area, zone
- Custom field definitions per company
- Additional metadata per contact
- Bulk import/export
- Multiple phonebooks per account
- Folder-based phonebook organization
- Contact lists and list associations
- Segment contacts by tags
- Tag-based campaign targeting
- Contact activity history

---

### Feature 9 — Team & Agent Management
**"Manage your team. Track performance. Assign work."**

Voice Nimble includes a full workforce management layer — create agents, assign tasks, track activity, and control what each team member can see and do.

**Key Capabilities:**
- Create and manage agents with individual logins
- Agent performance tracking
- Task creation, assignment, and status management
- Task comments and collaboration
- Task priorities and due dates
- Role-based access control (RBAC)
- Granular permission assignments per role
- Admin staff management
- Agent-level dashboards

---

### Feature 10 — Real-Time Analytics & Reporting
**"Know what's working. Fix what isn't. Instantly."**

Every call, message, and campaign generates detailed analytics. Voice Nimble surfaces these in real-time dashboards so you always know your campaign performance, agent productivity, and system health.

**Key Capabilities:**
- Campaign-level: total calls, success rate, failure rate
- Per-contact delivery and call status
- Call duration aggregation
- SMS delivery tracking per recipient
- Broadcast schedule performance reports
- Admin dashboard: revenue, users, system stats
- Real-time notification feed
- Recent message and activity tracking
- Export reports per campaign

---

### Feature 11 — Order Management
**"Connect voice outcomes to business transactions."**

Track orders linked to call outcomes. Voice Nimble can create orders from API, track their status, and connect call results to downstream business processes.

**Key Capabilities:**
- Create orders via REST API (`/v1.0/orders/create`)
- Order status tracking and history
- Link orders to specific calls and agents
- CSV export of order data
- Order API token authentication

---

### Feature 12 — Developer API
**"Plug Voice Nimble into anything. Build anything."**

A comprehensive REST API gives developers full programmatic access to every feature. Trigger calls, manage contacts, upload audio, send messages, and receive webhooks — all via clean endpoints.

**Key Endpoints:**
| Endpoint | Purpose |
|----------|---------|
| `POST /v1.0/generate/call` | Trigger an outbound AI call |
| `POST /v1.0/orders/create` | Create a new order |
| `GET /v1.0/call/call-keys` | Retrieve authentication keys |
| `POST /v1.0/call/call-status-update` | Update call status |
| `POST /v1.0/send/email` | Send an email |
| `POST /v1.0/audios/` | Upload audio file |
| `GET /v1.0/audio/proxy` | CORS-safe audio proxy |
| `POST /v1.0/inbound_call/call/status` | Inbound call status webhook |
| `POST /inbox/webhook/{token}` | Meta WhatsApp webhook |

**API Features:**
- Bearer token authentication
- Per-user API token generation and management
- Webhook support with token-based security
- HMAC signing for webhook payloads
- RESTful JSON API throughout
- API access control per account

---

## SECTION 4 — USE CASES

### Headline
**"Voice Nimble Powers Teams Across Every Industry"**

### Use Case Cards (grid layout, 6 cards)

**1. Sales Teams**
> Auto-dial leads from your CRM, qualify prospects with AI, and route hot leads directly to closers — while your reps focus on closing, not dialing.

**2. Customer Support**
> Deploy inbound AI agents to handle FAQs, order status, troubleshooting, and escalations 24/7 — reduce support ticket volume by 60%.

**3. Healthcare & Clinics**
> Send automated appointment reminders, follow-up calls, and post-visit surveys. Let patients confirm or reschedule via voice — no staff time required.

**4. Real Estate**
> Instantly follow up on every inquiry, qualify buyer intent, and book showing appointments — all with an AI agent that sounds like your best agent.

**5. eCommerce & Retail**
> Proactively notify customers about order updates, delivery windows, and returns — at scale, across voice, SMS, and WhatsApp simultaneously.

**6. BPO & Call Centers**
> Replace repetitive manual dialing with AI-powered voice bots. Agents handle only escalations — dramatically increasing throughput with fewer resources.

---

## SECTION 5 — HOW IT WORKS (3-Step Process)

### Headline
**"Up and running in under 30 minutes."**

### Steps

**Step 1 — Build Your AI Agent**
> Create an AI prompt in the Prompt Studio. Define its greeting, conversation style, and what it knows. Upload your documents to the Knowledge Base for RAG-powered accuracy.

**Step 2 — Connect Your Contacts**
> Import your contact list or connect via API. Organize into phonebooks, apply tags, and segment for precise targeting.

**Step 3 — Launch & Monitor**
> Schedule a broadcast or trigger calls via API. Watch real-time analytics update with every call — success rates, durations, and per-contact status.

---

## SECTION 6 — INTEGRATIONS

### Headline
**"Connect the tools your team already uses."**

### Integration Grid

| Category | Integrations |
|----------|-------------|
| **Voice & Telephony** | Twilio, custom SIP |
| **AI Providers** | OpenAI, ElevenLabs, Vapi, custom AI endpoints |
| **Messaging** | WhatsApp Business API (Meta), Nexmo/Vonage, SSL Wireless, Robi, Grameenphone, Blink |
| **Email** | Gmail SMTP |
| **Payments** | Stripe |
| **Auth & SSO** | Google OAuth, Facebook OAuth |
| **Storage** | AWS S3, DigitalOcean Spaces |
| **CRM / Data** | REST API (connect any CRM) |

### Integration CTA
> Don't see your tool? Our open API connects to anything.
> `View API Docs →`

---

## SECTION 7 — PRICING

### Headline
**"Transparent Pricing. No Surprises."**

### Pricing Tiers (3 columns + enterprise)

**Starter**
- Perfect for small teams
- Monthly / Annual / Lifetime options
- Core calling features
- Limited contacts and broadcasts
- Email support

**Growth**
- For scaling businesses
- Higher volume limits
- Multi-channel (WhatsApp + SMS + Voice)
- Team management
- API access
- Priority support

**Enterprise**
- Custom limits
- Dedicated AI model
- Custom integrations
- SLA guarantee
- Account manager
- On-premise option

### Pricing Extras
- Coupon/discount code field
- Trial period badge: *"14-day free trial on all plans"*
- Annual billing discount badge: *"Save 30% with annual billing"*
- Feature comparison table (expandable)

---

## SECTION 8 — TESTIMONIALS

### Headline
**"Businesses that switched to Voice Nimble don't go back."**

### Testimonial Cards (3 cards)

*(Placeholders — replace with real quotes)*

> "We reduced our outbound calling team from 12 people to 3 — and our contact rate went UP by 40%. Voice Nimble is the best investment we've made this year."
> — *Head of Sales, Regional Insurance Firm*

> "The inbound AI agent now handles 70% of our support calls without a single human touch. Our customers can't even tell the difference."
> — *CTO, Healthcare Technology Startup*

> "We sent 50,000 voice broadcast messages in a single day for a product launch. Zero infrastructure headaches. The analytics were instant."
> — *Marketing Director, eCommerce Brand*

---

## SECTION 9 — SECURITY & COMPLIANCE

### Headline
**"Enterprise-grade security. Built in from day one."**

### Security Features (icon list)

- Role-based access control (RBAC) with granular permissions
- Bearer token API authentication
- HMAC-signed webhook payloads
- Per-user API token generation and revocation
- Encrypted data storage (AWS S3 / DigitalOcean Spaces)
- Google OAuth 2.0 SSO support
- Activity logging and audit trails
- Subscription-based feature access control
- Plan feature limits enforced server-side

---

## SECTION 10 — FAQ

### Headline
**"Common Questions"**

**Q: Does Voice Nimble use real human voices?**
> Your AI agent uses high-quality TTS (Text-to-Speech) models that sound natural and conversational. You can choose from multiple voice models and customize the tone.

**Q: How does the RAG Knowledge Base work?**
> You upload your documents (PDFs, manuals, FAQs). Our system indexes them into a vector knowledge base. When a caller asks a question, the AI retrieves the most relevant answer from your documents — not from generic training data.

**Q: Can I use my existing phone numbers?**
> Yes. Voice Nimble supports number setup with your existing telephony provider, or you can provision numbers through the platform.

**Q: Is there an API?**
> Absolutely. Voice Nimble has a full REST API for calls, contacts, orders, audio, and messaging. See the API docs for full reference.

**Q: What messaging channels does it support?**
> Voice calls (inbound + outbound), WhatsApp Business API, SMS (multiple providers), and email (Gmail SMTP). All from one unified inbox.

**Q: Can I schedule broadcasts across different timezones?**
> Yes. The broadcast scheduler supports all global timezones. Schedule once, and Voice Nimble delivers at the right local time.

**Q: Is there a free trial?**
> Yes — a 14-day free trial is available on all plans. No credit card required.

**Q: How do I handle inbound calls after hours?**
> Configure an AI inbound call agent that's always on. It handles calls 24/7, answers questions from your knowledge base, and can route to an on-call number if needed.

---

## SECTION 11 — FINAL CTA (Bottom of page, pre-footer)

### Headline
**"Start automating your voice communications today."**

### Sub-text
> Join hundreds of businesses using Voice Nimble to cut costs, increase reach, and deliver better customer experiences — all without adding headcount.

### CTA Buttons
- `Start Free Trial — No Credit Card Required` (primary, large)
- `Schedule a Live Demo` (secondary)

### Trust Signals
- 14-day free trial
- Cancel anytime
- Setup in under 30 minutes
- 99.9% uptime SLA

---

## SIDEBAR (If used — dashboard/docs layout)

> Note: The main marketing page is full-width. A sidebar is recommended for:
> - Documentation pages
> - API reference pages
> - Account/settings pages

### Sidebar Content (Docs / API Reference)
- **Getting Started**
  - Quick Start Guide
  - API Authentication
  - First Call in 5 Minutes
- **Core Concepts**
  - AI Prompts
  - Broadcasts
  - Contacts & Phonebooks
  - Inbound Call Config
- **API Reference**
  - Calls API
  - Contacts API
  - Orders API
  - Audio API
  - Messaging API
- **Integrations**
  - WhatsApp Setup
  - SMS Providers
  - Stripe Billing
  - Google OAuth
- **Support**
  - Help Center
  - Status Page
  - Contact Support

---

## FOOTER

### Footer Layout (4 columns + bottom bar)

**Column 1 — Brand**
- **Voice Nimble** logo
- *"Intelligent Voice AI for modern businesses."*
- Social links: LinkedIn, Twitter/X, YouTube, GitHub (if public)
- App badges (if mobile app exists)

**Column 2 — Product**
- Features
- Pricing
- API Docs
- Integrations
- Changelog
- Status Page

**Column 3 — Company**
- About Us
- Blog
- Careers
- Press
- Contact Us
- Partners

**Column 4 — Legal & Support**
- Privacy Policy
- Terms of Service
- Cookie Policy
- GDPR Compliance
- Security
- Help Center

**Footer Bottom Bar**
- © 2024 Voice Nimble. All rights reserved.
- Language selector (multi-language support)
- Payment badges: Stripe Secured

---

## META / SEO CONTENT

### Page Title
`Voice Nimble — AI Voice Agent Platform | Outbound Calls, Inbound AI, Broadcast Campaigns`

### Meta Description
`Voice Nimble is an AI-powered voice communication platform for outbound calling, inbound call handling, and multi-channel broadcasting. Deploy AI voice agents, manage contacts, and run campaigns at scale.`

### OG Image
- Clean brand visual: Voice Nimble logo + dashboard screenshot + tagline

### Keywords (Primary)
- AI voice agent
- Automated outbound calling
- Voice broadcast platform
- Inbound call AI
- AI chatbot for calls
- Voice AI SaaS
- Automated calling software
- WhatsApp broadcast platform

### Schema Markup
- SoftwareApplication schema
- FAQPage schema
- Organization schema
- PricingSpecification schema

---

## ADDITIONAL PAGE RECOMMENDATIONS

| Page | Purpose |
|------|---------|
| `/features` | Deep-dive on all 12 feature areas |
| `/use-cases/sales` | Industry-specific landing page |
| `/use-cases/support` | Industry-specific landing page |
| `/use-cases/healthcare` | Industry-specific landing page |
| `/pricing` | Full pricing page with feature comparison table |
| `/docs` | Developer documentation |
| `/api-reference` | Full API reference |
| `/integrations` | All integrations catalog |
| `/blog` | Content marketing / SEO |
| `/contact` | Sales + support contact form |
| `/demo` | Book a demo (Calendly embed or form) |
| `/login` | User login |
| `/register` | Free trial signup |

---

*Document generated: 2026-03-04*
*Based on full codebase analysis of Voice Nimble platform*
*Version: 1.0 — Initial draft for design handoff*
