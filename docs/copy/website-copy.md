# Cr8v — website copy

> **Status:** Draft v1 · 9 Nov 2026 · UK English
> **Source of truth for claims:** `docs/BLUEPRINT.md`. Anything marked **[TBC]** depends on a decision that isn't final (fees, Stripe hold limits, launch dates). Don't ship those lines until the number is confirmed.
> **Release scope:** written for **MVP 1**. There's no chat at launch, so the copy says "questions", "quote revisions" and "order updates", not "message". Lines marked **[MVP 2]** go live with messaging.

---

## 0. Voice

**Cr8v** (say "creative") is for anyone who makes, fixes, styles, shoots, builds or moves things for a living, and for the people who hire them.

| We are | We aren't |
|---|---|
| Plain-spoken and local. "Your money's held until the job's done." | Corporate. "Leveraging a secure escrow framework." |
| Confident about the craft. Pros are skilled people, not "taskers". | Gig-economy cheap. No "hustle", no "side gig". |
| Fair, and we show the numbers. | Vague on money or full of small print. |
| Warm, with a light touch of wit. | Jokey about money, safety or someone's home. |

**Rules**
- Say "pro" (or the trade: electrician, stylist). Never "worker", "tasker" or "freelancer" as the catch-all.
- Say "held safely until the work is done". Use "escrow" only in the legal and help pages.
- Show the total price including fees, every time (DMCC Act 2024).
- Don't play on "Cr8v = creative" in every line. Once on a page is plenty.
- Sentence case for headings and buttons.

**Taglines (pick one; the first is the recommendation)**
1. **Skilled people for every job.** (already on the site, and it works)
2. Made, fixed, styled, sorted.
3. From a logo to a loft conversion.
4. Your town's best hands, in one place.

**`lib/config/brand.ts` values**
- `name`: `Cr8v`
- `tagline`: `Skilled people for every job.`
- `description`: `Hire trusted tradespeople, stylists and creatives. Compare quotes, book in minutes and pay safely: your money is held until the work is done.`

---

## 1. Global

### Header nav
- How it works · Categories · For pros · Sign in · **Join**

### Footer
- **Strapline:** Skilled people for every job. On-site in Doncaster, Sheffield and Manchester. Remote work across the UK.
- **Hire:** How it works · Categories · Payment protection · Cost guides
- **Work:** Become a pro · Founding Pro offer · Fees for pros · Pro help
- **Cr8v:** About · Trust & safety · Help centre · Contact
- **Legal:** Terms · Privacy · Cookies · Community rules
- **Small print:** © 2026 Cr8v. Payments processed by Stripe.

### Cookie banner
> We use essential cookies to keep you signed in and your payments secure. With your OK, we'd also use analytics cookies to see what's working.
> **Buttons:** Essential only · Accept all · Choose

---

## 2. Home page

Section order matches `app/(marketing)/page.tsx`.

### Hero
- **Eyebrow:** Founding Pros wanted · South Yorkshire & Manchester
- **H1:** Skilled people for every job.
- **Sub:** Trusted tradespeople, stylists and creatives near you. Compare quotes, book in minutes and pay safely: your money is held until the work is done.
- **Primary CTA:** Find a pro
- **Secondary CTA:** I'm a pro
- **Floating tags:** `@sam.sparks` · `@leah.styles` · `3 quotes in 2 hours`
  - Note: "3 quotes in 2 hours" reads as a claim. Keep it clearly illustrative, or swap to "Quotes, not callouts" until we have real data.

### Search box (when it ships)
- **Label:** What do you need done?
- **Placeholder (rotating):** "Fix a dripping tap in Doncaster this weekend" · "Logo for my new café" · "Man with a van, Saturday morning" · "Bridal hair for six, in Sheffield"
- **Helper:** Describe it in your own words. We'll find the right pros.

### Three ways to hire
- **Eyebrow:** Your job, your way
- **H2:** Three ways to hire. One safe way to pay.

| Mode | Lead | Body |
|---|---|---|
| **Book** | Pick a time, done. | Choose a pro and a free slot at a clear fixed or hourly price. Ideal for cleaning, handyman jobs and haircuts. |
| **Buy** | Packages, priced up front. | A logo, a product shoot, a website: choose a ready-made package with the price and delivery date shown. |
| **Brief** | Describe it, compare quotes. | Post your project, get a handful of structured quotes from vetted pros, and pay in stages as the work gets done. |

### Categories
- **Eyebrow:** Eight categories · one account
- **H2:** Every kind of skilled work.
- **Sub:** From a rewire to a wedding DJ. On-site pros in Doncaster, Sheffield and Manchester; remote work UK-wide.

| Category | Card line |
|---|---|
| Building & Trades | Electricians, plumbers, decorators |
| Home Services | Handymen, cleaners, gardeners |
| Hair & Beauty | Mobile and salon stylists, barbers |
| Hire & Transport | Van & driver, small removals |
| Creative & Design | Photographers, designers, videographers |
| Digital & Tech | Web design, development, marketing |
| Artisans & Makers | Bespoke furniture, signwriting |
| Events & Lifestyle | DJs, caterers, tutors |

### Payment protection
- **H2:** Paid safely, every time.
- **Body:** You pay into a secure holding account, and the pro is paid when you confirm the job's done. No cash in hand, no chasing invoices, no awkward conversations.
- **Promise cards:**
  - **Customers · £0** to post a job or ask for quotes
  - **Founding Pros · 0%** commission for 6 months or your first £3,000 · badge: Limited
  - **Every job · 100%** of your payment held until the work is done

### The "one account" story (new section, optional)
- **Eyebrow:** One account. Every trade.
- **H2:** Opening a café? That's six pros, not six apps.
- **Body:** A shopfitter, an electrician, a signwriter, a photographer, a web designer and someone to bake the first batch. Hire all of them here, pay them all the same safe way, and keep every receipt in one place.

### For pros
- **Image card H2:** Grow your business.
- **Image card body:** Free to join. No paying for leads or to quote: you only pay commission when you earn.
- **CTA:** Become a Founding Pro
- **Panel eyebrow:** Founding Pro offer · limited places
- **Panel H2:** Everything you need to win work.
- **Benefits:**
  - A professional profile and portfolio
  - Quotes, bookings and staged payments in one place
  - Verified badges for ID, insurance and trade cards
  - AI help writing your profile and quotes
- **CTA:** Create a free account

### Closing band (new, optional)
- **H2:** Got a job in mind?
- **Body:** Tell us about it in a sentence. It's free, and there's no obligation to hire.
- **CTAs:** Post a job · Browse pros

---

## 3. How it works (`/how-it-works`)

- **H1:** Hiring, sorted in four steps.
- **Sub:** Whether it's a 30-minute trim or a three-month extension, it works the same way.

1. **Tell us what you need.** Describe the job in your own words and add a photo or two. Our job assistant turns it into a clear brief and asks anything a pro would want to know.
2. **Choose your pro.** Book a slot, buy a package, or compare quotes side by side. See reviews, portfolios and verified badges before you decide.
3. **Pay safely.** Your payment is held, not handed over. Big jobs are split into stages, so you only fund the next bit when you're happy with the last.
4. **Confirm and review.** When the work's done, confirm it and the pro is paid. Then you both leave a review.

**Good to know**
- **Questions before you hire.** Pros can ask about your job, and your answers are shared with everyone quoting, so you only explain once.
- **Want a different price?** Ask for a revised quote with a short note.
- **On the day.** Once you've hired, you'll both see each other's phone number for things like parking or running late.
- **[MVP 2]** Message pros directly, from the first question to the final sign-off.

**Price guidance**
> When you post a job, we show a rough price range for that kind of work in your area. It's a guide only, not a quote, so the pros will price your actual job.

---

## 4. Categories

### Hub (`/categories`)
- **H1:** What do you need done?
- **Sub:** Eight categories, hundreds of skills, one account.

### Category page template (`/categories/[slug]`)
- **H1:** {Category} in {Area}
- **Sub:** {Example line}. Compare verified pros, book in minutes and pay safely.
- **Trust strip:** ID-checked pros · Payment held until the job's done · Reviews from real, paid jobs only
- **Empty area (supply not live):** We're still signing up {category} pros in {area}. Leave your email and we'll tell you the moment they're bookable.
- **Waitlist CTA:** Tell me when it's live

### Category intros

**Building & Trades**
> Rewires, leaks, plastering and full redecorations. Our trades show their credentials up front: Gas Safe, NICEIC or NAPIT, CSCS and public liability insurance, checked by us. Bigger jobs can be paid in stages.

**Home Services**
> Cleaners, handymen, gardeners and flat-pack heroes. Book a time that suits you at a clear price, or post the job and get quotes.

**Hair & Beauty**
> Stylists, barbers, makeup artists and nail techs, at their chair or at your door. See their work, pick a slot and secure it with a small deposit if they ask for one.

**Hire & Transport**
> A van and a driver for a move, a tip run or that sofa you bought online. Book by the hour and know the price before they turn up.
> *(Self-drive van hire is coming later. Don't promise it yet.)*

**Creative & Design**
> Logos, brand identities, illustration, photography, video and music. Buy a package, or brief a creative for something bespoke and pay by milestone.

**Digital & Tech**
> Websites, development, marketing, copywriting and IT support, from pros anywhere in the UK. Files delivered and approved on the order, payment released when you're happy.

**Artisans & Makers**
> Bespoke furniture, ceramics, signwriting, upholstery and metalwork. One-off pieces from people who make things properly.

**Events & Lifestyle**
> DJs, caterers, event stylists, tutors and personal trainers. Everything for the big day, or the everyday.

---

## 5. For pros (`/pros`)

- **Eyebrow:** For tradespeople, stylists, makers and creatives
- **H1:** More work. No lead fees.
- **Sub:** Cr8v is free to join. You never pay to quote, list or receive a job. We only take a cut when you get paid.
- **CTA:** Become a Founding Pro · **Secondary:** See how fees work

### Why pros join
- **No pay-to-quote.** Every job takes a limited number of quotes, ranked by fit, not by who's fastest to the button. No race to the bottom.
- **Guaranteed payment.** The customer pays before you start. The money's held, and released to you when the work is confirmed, or automatically 5 days after you mark it delivered if they don't respond.
- **Better briefs.** Our job assistant gets customers to explain the job properly, with photos, so you waste fewer site visits.
- **Your credentials, front and centre.** Verified badges for ID, insurance and trade cards show customers you're the real deal.
- **Run your business here.** Quotes, bookings, staged payments and earnings in one dashboard.
- **Writing help.** Turn a few bullet points into a profile, a service description or a quote.

### Founding Pro offer
- **H2:** Be one of the first. Keep everything you earn.
- **Body:** Join in Doncaster, Sheffield or Manchester before we open to customers and you'll pay 0% commission for your first 6 months, or on your first £3,000 earned, whichever comes first.
- **Perks:**
  - 0% commission for 6 months / first £3,000
  - A permanent Founding Pro badge
  - Priority placement at launch
  - A direct line to the team to shape what we build
  - A referral link: earn a bonus when a pro you invite gets verified and completes their first job **[TBC: amount]**
- **Scarcity line:** Limited places in each city. **[TBC: e.g. 300 per city]**
- **CTA:** Claim my Founding Pro place

### How it works for pros
1. **Build your profile.** Add your photo, services, prices, portfolio and where you work.
2. **Get verified.** Quick ID check, plus your insurance and trade cards if your work needs them.
3. **Win work.** Quote on jobs that match you, sell packages, or open your diary for bookings.
4. **Get paid.** Payouts go straight to your bank after each job or stage.

### Bring your own clients
> Send your existing customers your own booking link. You'll pay a lower commission on clients you bring yourself. **[TBC: rate, e.g. 3%]**

---

## 6. Fees (`/fees`)

> All numbers here are **[TBC]**. The structure is decided (commission only, total shown up front); the rates aren't.

### For customers
- **H2:** Free to post. One small fee to protect your payment.
- **Body:** Posting a job, asking questions and getting quotes is free. When you hire, a service fee of {5%} **[TBC]** is added, capped at {£50} **[TBC]** per order. It pays for payment protection and support, and it's always shown in the total before you pay.

### For pros
- **H2:** Free to join. We earn when you do.
- **Body:** No sign-up fee, no subscription and no paying for leads. Commission comes off what you earn, and it goes down the more work you do with the same client.

| Earned with one client | Commission **[TBC]** |
|---|---|
| First £500 | 12% |
| £500 to £5,000 | 8% |
| Over £5,000 | 5% |
| Clients you bring yourself | 3% |
| Founding Pros | 0% for 6 months or the first £3,000 |

- **Note:** Rates can vary by category. You'll always see your commission on a quote before you send it.

---

## 7. Trust & safety (`/trust`)

- **H1:** Safe to hire. Safe to work.
- **Sub:** Here's what we do, so you don't have to cross your fingers.

- **Payment held until the work is done.** Customers pay up front, pros know the money's there, and nobody hands over cash on the doorstep.
- **ID-checked pros.** Every pro passes an identity check before they can take work.
- **Credentials we've looked at.** Gas Safe, NICEIC, NAPIT, CSCS, DBS and insurance documents are reviewed by our team, and we track when they expire.
- **Honest reviews.** Only customers who've paid for a completed job can leave one. Both sides review blind, so neither can tit-for-tat.
- **Contact details stay private until you hire.** We hide phone numbers and emails in questions and quotes, so everything stays protected.
- **Real people when it goes wrong.** If a job isn't right, tell us. We'll look at the evidence from both sides and decide on a full or partial release, or a refund.
- **Report and block.** On any profile, listing or review.

**Our one rule:** keep payment on Cr8v. If anyone asks you to pay outside the platform, say no and report it. Off-platform payments aren't protected.

---

## 8. About (`/about`)

- **H1:** Built for people who make things happen.
- **Body:**
> Opening a café takes a shopfitter, an electrician, a signwriter, a photographer and a web designer. Today, that's four or five different apps, each with its own account, its own way of paying and its own reviews.
>
> Cr8v puts every kind of skilled work in one place: the trades, the stylists, the makers and the creatives. One account, one way to pay safely, and one reputation that follows a pro from job to job.
>
> We're starting in Doncaster, Sheffield and Manchester, with remote work open across the UK. We're signing pros up first, so when you post a job, there's someone great ready to quote.

- **Why "Cr8v"?** Because creating isn't only for designers. A new kitchen, a perfect fade and a first-dance playlist all get made by someone skilled.

---

## 9. FAQ

**For customers**
- **Does it cost anything to post a job?** No. Posting, asking questions and getting quotes are free. You only pay when you hire.
- **When does the pro get paid?** When you confirm the job, or the stage, is done. If you don't respond within 5 days of the pro marking it delivered, the payment is released automatically.
- **What if I'm not happy?** Ask for changes first. If you can't agree, open a dispute and our team will step in before any money is released.
- **Can I pay cash?** No. Paying through Cr8v is what protects you. Cash and bank transfers outside the platform aren't covered.
- **Are you in my area?** On-site jobs are live in Doncaster, Sheffield and Manchester. Remote work (design, web, marketing and more) is open across the UK. Elsewhere, join the waitlist and we'll tell you when we arrive.
- **Can I get a VAT invoice?** **[TBC: Phase 2]**

**For pros**
- **Do I pay to quote?** Never. No lead fees, no credits, no subscription.
- **How many pros quote on a job?** A limited number, ranked by how well they fit the job, so it's never a free-for-all.
- **When do I get my money?** After each job or stage is confirmed. Payouts go to your bank via Stripe. **[TBC: payout timing]**
- **What do I need to sign up?** Photo ID, your bank details for payouts, and any trade cards or insurance your work needs.
- **Can I hire on Cr8v too?** Yes. One account can do both.

---

## 10. Sign-up, sign-in and onboarding

**Sign up**
- **H1:** Join Cr8v
- **Sub:** Free for customers and pros.
- **Role choice:** I want to hire · I want to work · Both
- **Buttons:** Continue with Google · Continue with Apple · Sign up with email
- **Consent line:** By joining, you agree to our Terms and Privacy policy.

**Sign in**
- **H1:** Welcome back
- **Link:** Forgotten your password?
- **Footer:** New to Cr8v? Join free

**Errors and validation**
- Email: "Enter an email address like name@example.com"
- Password: "Use at least 8 characters"
- Wrong details: "That email and password don't match. Try again or reset your password."

**Check your email**
- **H1:** Check your inbox
- **Body:** We've sent a link to {email}. Click it to finish setting up your account.

**Pro onboarding steps**
1. About you: "Tell customers who you are and what you do."
2. Your services: "What do you offer, and how much?"
3. Where you work: "Your postcode and how far you'll travel. Or tick 'remote'."
4. Your work: "Add photos of jobs you're proud of."
5. Get verified: "A quick ID check, plus any trade cards or insurance."
6. Get paid: "Connect your bank account through Stripe."

---

## 11. Empty states and system messages

- **No quotes yet:** Pros are looking at your job. Most first quotes arrive within a day. **[TBC: replace with real figure]**
- **No jobs yet (pro):** No matching jobs right now. Make sure your categories and travel distance are set, and we'll email you as soon as one comes in.
- **Area not live:** We're not in {town} yet. Join the waitlist and help us decide where to go next.
- **Payment held:** £{amount} is held safely. It'll be released to {pro} when you confirm the work is done.
- **Released:** Payment released to {pro}. Thanks for using Cr8v. How did it go?
- **AI unavailable:** Our assistant is taking a break. You can still fill in the details yourself below.
- **AI suggestion label:** Suggested by our assistant. Check it and edit anything that's not right.
- **Price guide label:** Guide only. Your actual quotes may differ.
- **404:** This page has gone walkabout. Back to the home page.

---

## 12. SEO metadata

| Page | Title (≤60) | Description (≤155) |
|---|---|---|
| Home | Cr8v · Skilled people for every job | Hire trusted tradespeople, stylists and creatives. Compare quotes, book in minutes and pay safely, with your money held until the job's done. |
| How it works | How Cr8v works · Book, buy or brief | Book a slot, buy a package or post a job for quotes. Your payment is held until the work is done. |
| For pros | Find work with no lead fees · Cr8v | Free to join, no paying to quote. Founding Pros pay 0% commission for 6 months in Doncaster, Sheffield and Manchester. |
| Category | {Category} in {Area} · Cr8v | Compare verified {category} pros in {Area}. See reviews, get quotes and pay safely. |
| Trust | Trust & safety · Cr8v | ID-checked pros, verified credentials, honest reviews and payment held until the work is done. |
| Fees | Fees · Cr8v | Free to post a job, free for pros to join. Here's exactly what we charge, and when. |

---

## 13. Pre-launch / recruitment page (`/founding`)

- **Eyebrow:** Doncaster · Sheffield · Manchester
- **H1:** Your trade. Your town. 0% commission.
- **Sub:** We're signing up the first pros before we open to customers. Join now and keep everything you earn for 6 months or your first £3,000.
- **CTA:** Claim my place
- **Proof strip:** Free to join · No lead fees · Guaranteed payment
- **Invite-link variant:** {Name} has saved you a Founding Pro place. It's yours if you join by {date}.
- **Social post (pros):** Sparkies, stylists, decorators, photographers: Cr8v is launching in Doncaster, Sheffield and Manchester. No lead fees, ever, and 0% commission for our Founding Pros. Limited places: {link}
