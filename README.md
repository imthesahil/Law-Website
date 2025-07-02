A centralized web platform to host and manage **Moot Court**, **ADR simulations**, **Debates**, and **Legal Training Programs** for law students across India. Built using **Next.js (App Router)** and **Tailwind CSS**.


🌟 Features

- ✅ Dynamic homepage with legal-focused UI/UX
- ✅ Portals for students, judges, and admins
- ✅ Pages for announcements, competitions, events
- ✅ Dedicated routes for registration and memorial submission
- ✅ Modular, scalable folder structure
- ✅ Optimized for responsiveness (mobile-first design)
- ✅ Git integrated for smooth CI/CD

---

<pre> ## 📁 Project Structure ```bash src/ ├── app/ # Next.js App Router structure │ ├── announcements/ # Announcement page │ ├── competitions/ # Competitions page │ ├── events/ # Events page (calendar, schedules) │ ├── portals/ # Judge/Team/Admin portals │ ├── register/ # Team registration form │ ├── submit-memorial/ # Document submission portal │ ├── layout.tsx # Root layout (navbar/footer) │ └── page.tsx # Home page ├── components/ # Reusable UI components ├── lib/ # Helper functions / utilities ├── public/ # Static assets (images, icons) ├── styles/ │ └── globals.css # Global Tailwind styles ``` </pre>

---

🚀 Getting Started

 1. Clone the repo
    
```bash
git clone https://github.com/imthesahil/Law-Website.git
cd Law-Website
2. Install dependencies
npm install
3. Run the dev server
npm run dev
Visit http://localhost:3000 in your browser.

🛠 Tech Stack

Tool	Purpose
Next.js	React framework with App Router
Tailwind CSS	Utility-first CSS framework
TypeScript	Strongly-typed JavaScript
ShadCN UI	(Optional) Accessible UI components
GitHub	Version control & collaboration

🧪 Available Scripts

Script	Command	Description
Dev	npm run dev	Start development server
Build	npm run build	Create production build
Lint	npm run lint	Check code style
Format	npx prettier .	Auto-format code (optional)

🧩 Planned Features (Roadmap)
✅ Judge scoring panel
✅ Admin dashboard for event management
⏳ Secure login system (NextAuth/Supabase)
⏳ Chatbot integration (OpenAI/Dialogflow)
⏳ One-on-one + group video calling (Daily.co or Jitsi)
⏳ Payment gateway for registrations (Razorpay)
⏳ CMS integration (Strapi/Sanity for dynamic events)

