# Molinnus Plumbing & Heating — Design System

## Color Palette

### Brand Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| brand-950 | #0d0d0d | Reserved for overlays, modals, button backgrounds (never full section bg) |
| brand-900 | #1a1a1a | Primary dark sections, footer, accordion, service tabs, CTAs |
| brand-800 | #2a2a2a | Card borders on dark, stat widget bg |
| brand-700 | #3d3d3d | — |
| brand-600 | #555555 | — |
| brand-500 | #717171 | Body text on light backgrounds |
| brand-400 | #9a9a9a | Muted text, labels, secondary copy |
| brand-300 | #c4c4c4 | Faded text in statement blocks |
| brand-200 | #e0e0e0 | Light borders, dividers |
| brand-100 | #f0f0f0 | Hover backgrounds |
| brand-50  | #f8f8f8 | Section backgrounds (muted variant) |

**Rule**: No stark black (`brand-950`) for full section backgrounds. Use `brand-900` for all dark sections, footer, and CTAs.

### Gold Accent
| Token | Hex | Usage |
|-------|-----|-------|
| gold-600 | #d4b000 | Labels on light backgrounds |
| gold-500 | #FFD703 | Primary CTA buttons, icons, accents, border glow effects |
| gold-400 | #ffe23d | Button hover states |
| gold-300 | #ffeb70 | — |
| gold-200 | #fff3a8 | — |
| gold-100 | #fff9d6 | — |
| gold-50  | #fffceb | Hover background tint |

### Contextual Usage
- **CTA buttons**: gold-500 bg, brand-950 text; hover gold-400
- **Outlined buttons**: border-white/15 (dark bg) or border-brand-200 (light bg)
- **Dark section text**: white, white/50, white/40
- **Light section text**: brand-950 (headings), brand-500 (body), brand-400 (muted)
- **Borders on dark**: white/10 for dividers, white/[0.06] for subtle card borders
- **Borders on light**: brand-200 for dividers and card borders
- **Icons**: gold-500 (primary), brand-400 (muted)
- **Adjacent dark section dividers**: `border-white/10` (always add between touching dark sections)

---

## Typography

### Font Families
| Role | Stack |
|------|-------|
| Headings (h1-h6) | Inter, "Helvetica Neue", sans-serif |
| Body text | "Helvetica Neue", "Helvetica", "Arial", sans-serif |
| Monospace | "Courier New", monospace |

### Heading Scale
| Level | Mobile | Tablet | Desktop | Weight | Line Height |
|-------|--------|--------|---------|--------|-------------|
| h1 (home hero) | text-[2.5rem] (mobile) | text-[2.875rem]/text-[3.625rem] | text-[4.125rem] | font-bold | 1.08 |
| h1 (subpages) | text-3xl | text-4xl | text-[2.75rem] | font-bold | 1.1 |
| h2 | text-2xl/text-3xl | text-3xl/text-4xl | text-[2.75rem] | font-bold | 1.1 |
| h3 | text-xl | text-2xl | — | font-semibold | 1.2 |
| h4 | text-base/text-lg | — | — | font-bold | default |

All headings: `letter-spacing: -0.025em`, `text-wrap: balance`

### Text Sizes in Use
| Context | Size |
|---------|------|
| Section labels | text-[0.7rem] font-semibold uppercase tracking-[0.2em] |
| Nav links (desktop) | text-[0.82rem] font-semibold |
| Nav links (mobile) | text-[0.95rem] font-medium |
| Body copy | text-base, leading-relaxed |
| Small body | text-sm |
| Button text | text-sm font-semibold |
| Service tab cards | text-sm font-medium |
| Stat values | text-xs sm:text-sm font-semibold (stats bar) |
| Stat labels | text-[0.65rem] sm:text-xs uppercase tracking-wider |
| Footer links | text-sm |
| Copyright | text-xs |

### Copy Rules
- **No em dashes** in user-facing copy. Use commas or restructure sentences instead.
- Statement blocks use two-tone text: `text-brand-900` (bold primary) + `text-brand-300` (faded secondary)
- SEO copy should target service keywords, geographic regions (Durham, GTA, Peterborough, Kawarthas), and credentials (TSSA, Fulton)
- Form placeholders must be generic: "Your Name", "your@email.com", "(555) 555-5555"

---

## Logos

### Usage
| Context | Logo | File |
|---------|------|------|
| Navbar (transparent/dark bg) | White | /logo-white.png |
| Navbar (scrolled/white bg) | Black | /logo-black.png |
| Footer (dark bg) | White | /logo-white.png |
| Contact forms (dark bg) | White | /logo-white.png |
| Contact forms (light bg) | Black | /logo-black.png |

- Size: `width={125} height={125}` for navbar and footer
- Size: `width={100} height={100}` for contact form cards
- Navbar uses opacity crossfade between logos on scroll (`transition-opacity duration-300`)
- Logos remain as PNG. All other images are WebP.

---

## Spacing

### Container
- Max width: `max-w-[1400px]`
- Horizontal padding: `px-6 lg:px-10`
- Centering: `mx-auto`

### Section Padding
| Variant | Values |
|---------|--------|
| Standard | py-20 md:py-28 |
| Large (statement blocks) | py-20 md:py-28 lg:py-32 |
| Services accordion (home) | pt-20 pb-10 md:py-24 lg:py-27 |
| Compact (services tabs, contact hero) | py-16 md:py-20 |
| Contact hero | min-h-[55vh] (compact) |
| Footer CTA | py-16 md:py-20 |
| Stats bar | py-4 |
| Testimonials | py-14 md:py-16 |

### Common Gaps
| Size | Usage |
|------|-------|
| gap-1.5, gap-2 | Service tab cards, tight elements |
| gap-3 | Button groups, form fields |
| gap-4, gap-5 | Card grids, feature lists |
| gap-8 | Image+text split sections, accordion mobile gap |
| gap-10 lg:gap-16 | Testimonial columns |
| gap-8 lg:gap-20 | Accordion left/right columns |

---

## Border Radius

| Value | Usage |
|-------|-------|
| rounded-full | Buttons, badges, icon circles, nav pills, arrow buttons |
| rounded-[12px] | Image containers in tabbed sections |
| rounded-[10px] | Images, cards, accordion items, panels |
| rounded-[8px] | Icon containers, form inputs, service tab cards |
| rounded-[6px] | Small compact elements |
| rounded-2xl | Contact info cards, form container |
| rounded-xl | Testimonial cards |

---

## Component Patterns

### Navigation
- Height: `h-[72px]`
- Layout: Logo left, links center (`mx-auto`), CTAs right (`ml-auto`)
- Logo: 125x125px, crossfade between black/white versions on scroll
- Transparent state: `bg-transparent`, white text/logo
- Scrolled state: `bg-white/95 backdrop-blur-md`, dark text/logo
- Scroll threshold: 20px
- Services dropdown: `bg-brand-950 border border-white/10 w-[300px]`
- Services dropdown (scrolled): `rounded-b-[10px] rounded-t-none border-t-0` — sits flush under navbar
- Services dropdown (not scrolled): `rounded-[10px]` with `pt-3` gap
- Services link wrapper: `h-[72px]` to match full navbar height for correct dropdown alignment
- **Mobile menu behavior**:
  - Hamburger toggle with expandable accordion for Services
  - When menu opens: navbar switches to white background + dark logo + dark hamburger icon (same as scrolled state)
  - Triggered by `mobileOpen` state (treated same as `scrolled` for styling)
  - Bottom CTA section: "Get a Quote" gold button first, phone number outlined button below
  - Both CTAs are full-width, `rounded-full h-11`, centered text with icons
- **Desktop navbar CTAs**: "Get a Quote" (gold primary, first) + phone number (outline secondary, second)
- **Mobile navbar CTAs**: "Get a Quote" (gold primary, full-width) + phone number (outline, full-width)
- **"Get a Quote" button behavior (desktop)**:
  - On home page, within hero viewport: opens inline contact panel
  - On home page, scrolled past hero: navigates to `/contact`
  - On contact page: anchor scrolls to `#quote-form`
  - On all other pages: navigates to `/contact#quote-form`

### Hero Sections
- Homepage: `min-h-[70vh] sm:min-h-[90vh]` (shorter on mobile; dynamically expands when contact panel is open, measured via ResizeObserver), image `object-cover`, `objectPosition: "85% 100%"`
- Homepage cinematic overlay: dark base (`bg-black/45 sm:bg-black/70` — lighter on mobile to let image show through), gold tint (`bg-amber-900/15 mix-blend-multiply`), gradients (`from-black/40`, `from-black/50`), film grain (SVG noise at `opacity-[0.08]`)
- Homepage hero copy positioned closer to bottom: `pb-[45px] md:pb-16`
- Homepage mobile hero: description paragraph hidden (`hidden sm:block`), accent label rendered as frosted glass badge (`bg-white/10 backdrop-blur-sm rounded-full text-[0.6rem]`) instead of plain text
- Homepage mobile trust badges: TSSA + Fulton icon+text pills (`h-9 px-3 rounded-full bg-white/10 backdrop-blur-sm`) below CTAs with `mt-5` spacing, `sm:hidden`
- Subpages: `min-h-[75vh]`, fallback bg `bg-brand-900` (not brand-950)
- Subpages compact (individual service pages): `min-h-[64vh] md:min-h-[75vh]` — 15% shorter on mobile
- Contact page hero: `min-h-[65vh] md:min-h-[55vh]` (compact, taller on mobile for nav spacing), solid `bg-brand-900` (no image)
- Gradient overlays:
  - Horizontal: `from-black/60 via-black/30 to-transparent`
  - Vertical: `from-black/60 via-transparent to-black/20`
- Cinematic overlay (optional `cinematic` prop): adds gold tint + film grain on top of standard gradients
- Copy: bottom-left, `max-w-xl` or `max-w-2xl`
- Stats bar below hero: two separate renders — static centered on `sm+`, marquee animation on mobile
- Desktop stats bar: `hidden sm:flex items-center justify-center gap-8`, with icons
- Mobile stats bar: `flex sm:hidden`, tripled items with `animate-marquee-mobile` (20s linear infinite, stops at `sm`)
- Image positioning controlled via `imagePosition` prop (e.g., `"center"`, `"center right"`, `"center top"`)
- **Mobile CTA layout** (all heroes): Side-by-side row (`flex-row`), "Get a Free Quote" button with compact padding (`px-5`), phone button as icon-only circle (`w-12 h-12 rounded-full`, number hidden via `hidden sm:inline`). Desktop retains full phone number button.
- All services page hero includes `showBadges` prop for TSSA/Fulton trust badges on mobile
- **Mobile description truncation**: PageHero supports `mobileDescription` prop — shorter SEO-optimized copy shown on mobile via `sm:hidden`, full description on desktop via `hidden sm:block`

### Section Wrapper
Four variants:
- **default**: white background
- **muted**: `bg-brand-50`
- **dark**: `bg-brand-900 text-white` (changed from brand-950)
- **brand**: `bg-brand-900 text-white`

### Statement Blocks
- Layout: `flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start`
- Left: Gold label (`text-[0.7rem] uppercase tracking-[0.2em] text-gold-600`)
- Right: Two-tone heading text (`text-brand-900` + `text-brand-300`)
- Used on: home page, services page, projects page
- Wrapped in `ScrollReveal` for fade-up on scroll

### Image + Text Splits
- Grid: `lg:grid-cols-2 gap-8 items-stretch` or `lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center`
- Image container: `relative rounded-[10px] overflow-hidden`
- Image: `fill object-cover` with contextual `objectPosition` via inline style
- Text side: `lg:pl-6` (when image is left)
- Height: image matches text column height via `items-stretch`
- Image wrapped in `ScrollReveal variants={scaleIn}` for subtle scale-in animation
- Text wrapped in `ScrollReveal` for fade-up animation
- "Why Choose Us" plumber image uses `objectPosition: "center 60%"` to center the subject

### Services Tabbed Section (Services Page)
- Background: `bg-brand-900`
- Section padding: `pt-16 pb-0 md:py-20` (no bottom padding on mobile — pills sit at bottom)
- Grid: `lg:grid-cols-[1.15fr_1fr]` (60/40 text-to-image), `relative` for overlay positioning
- **Desktop**: Content area uses `lg:absolute lg:inset-0` for inactive tabs with opacity crossfade. Height measured dynamically via JS to prevent layout shifts.
- **Mobile**: Active tab uses normal document flow (`relative`), inactive tabs use `hidden`. No fixed height — section adapts to content naturally.
- **Mobile content centering**: All text, feature lists, and CTAs centered on mobile (`text-center lg:text-left`, `items-center lg:items-start`, `justify-center lg:justify-start`)
- **Mobile swipe navigation**: Passive touch event listeners on content area detect horizontal swipes (50px threshold). Swipe left = next service, swipe right = previous. Uses `{ passive: true }` to not block vertical scrolling.
- **Auto-advance (mobile only)**: Services cycle every 5 seconds. Active progress pill fills via CSS transition (`width 0% → 100%` over 5s linear). Stops permanently on any user interaction (swipe or tap). Controlled by `autoAdvance` + `fillActive` state.
- **Progress bar pills (mobile)**: Edge-to-edge at section bottom (`px-1.5 gap-1.5 pt-10 pb-5`), `h-[2px] rounded-full`. Active pill: `flex-[2] bg-gold-500` with fill animation. Inactive: `flex-1 bg-white/15`. Hidden when quote form is open (`opacity-0 pointer-events-none`). `lg:hidden`.
- Tab cards: `flex flex-wrap gap-2`, compact sizing (`px-2.5 py-1.5 text-sm`). Shown on both mobile and desktop (centered on mobile, left-aligned on desktop).
- Separated from content by `w-[70%] border-t border-white/10` divider (centered on mobile)
- Arrow buttons: Desktop only (`hidden lg:flex`), `w-10 h-10 rounded-full border border-white/10`, `hover:border-gold-500`
- Image crossfade: `transition-opacity duration-400 ease-in-out`
- CTA order: "Request a Quote" (primary gold) first, "Learn More" (outlined) second
- **Mobile service descriptions**: Truncated SEO-optimized copy via `MOBILE_DESCRIPTIONS` map, shown via `sm:hidden` span. Full descriptions on desktop via `hidden sm:inline`.
- **Desktop quote form**: Image stays in DOM as `invisible` when form shows. Form overlays with `absolute inset-0`. Tab cards and arrows remain visible. Cross-fade transition (`transition-all duration-400`).
- **Mobile quote form**: Left column content fully hides (`hidden lg:flex`). Form renders in normal flow. Section height animates smoothly via JS-driven height transition (3-frame `requestAnimationFrame` sequence: pin old height → measure new → animate with `height 500ms ease-in-out`). Cross-fade transition on form appearance.

### Services Accordion (Home Page)
- Background: `bg-brand-900`
- Layout: `lg:grid-cols-[1fr_1.15fr]`, gap `gap-8 lg:gap-20`, `items-start` on grid
- Items: `rounded-[10px] border border-white/[0.06]`
- Active: `bg-white/[0.04] border-white/10`
- Expand animation: `grid-rows-[0fr] -> grid-rows-[1fr]`, 500ms cubic-bezier
- **Scroll-in animation**: Each service item uses `useInView` (not `once`) with staggered delays (`0.08 + index * 0.07`s), slides up 30px with fade. Replays every time the section scrolls into view.
- **Mobile background image peek**: When an accordion item is active on mobile (`sm:hidden`), its service image fades in as a background behind the content with `bg-brand-900/85` overlay for readability. `transition-opacity duration-500`. Desktop uses the existing side thumbnail instead.
- **Height locking**: Accordion height measured on mount and locked via inline `style` to prevent section height changes when switching tabs or opening the form
- "Request a Quote" cross-fades to contact form (`transition-all duration-400`)
- **Desktop**: Accordion stays in DOM as `opacity-0 pointer-events-none` when form shows (holds height). Form overlays with `absolute inset-0`.
- **Mobile**: Accordion fully hides (`hidden`). Form renders in normal document flow.
- Team callout: "20+ Years of Expertise" badge at bottom of left column via `justify-between`. Left column height is independent of right column state.
- Contact form card: extra bottom padding `pb-12 md:pb-16` for button breathing room

### Contact Form Cards
Two themes, same structure:

**Dark theme** (services sections):
- Container: `rounded-[10px] bg-white/[0.04] border border-white/10 p-8 md:p-10`
- Logo: white version, `width={100}`
- Inputs: `border-white/10 bg-white/5 text-white placeholder:text-white/30`
- Select: `appearance-none` with custom `ChevronDown` icon at `right-3` or `right-4`
- Submit: `bg-gold-500 hover:bg-gold-400 text-brand-950`
- Close: `rounded-full bg-white/10 hover:bg-white/20`

**Light theme** (home hero contact panel, individual service pages):
- Home hero panel: `bg-white/95 backdrop-blur-sm rounded-[10px] shadow-2xl`, `max-w-[calc(100%-24px)] sm:max-w-[440px]`
- Home hero panel: centered on mobile (`justify-center`), right-aligned on desktop (`lg:justify-end`)
- Home hero panel: no quick contact info section (phone/email/24-7 removed)
- Home hero: section dynamically expands to fit contact panel height (measured via ResizeObserver on panel ref, `minHeight` set to `panelHeight + 88 + 24`px)
- Close button: absolute top-right (`top-4 right-4`)
- Inputs: `border-brand-200 bg-brand-50 text-brand-900 placeholder:text-brand-400`
- Select: `appearance-none` with custom `ChevronDown` at `right-3`
- Submit: `bg-brand-900 hover:bg-brand-800 text-white` (home) or `bg-brand-950 text-white` (service pages)
- Close: `rounded-[8px] bg-brand-50 hover:bg-brand-100`

**In-section card height rules** (desktop):
- Section height must NEVER change when opening/closing the contact card
- Content behind card stays in DOM as `invisible` or `opacity-0` to hold height
- Card overlays with `absolute inset-0` on desktop
- On mobile: content fully hides, card renders in normal flow (allowed to change section height)

All contact forms include: logo at top, "Get in Touch" label, full name, email/phone row, service selector, project details textarea, submit button.

**Cross-fade transitions**: All quote form cards site-wide use `transition-all duration-400` with `opacity-100 visible` / `opacity-0 invisible pointer-events-none` toggle instead of conditional mount/unmount. Forms stay in DOM when hidden to enable smooth opacity transitions.

**Mobile input zoom prevention**: All form inputs, textareas, and selects use `text-base md:text-sm` to prevent iOS Safari auto-zoom (requires ≥16px font on mobile). Matches the contact page form behavior.

### Form Validation & Submission System

**Shared hook**: `src/lib/use-form-validation.ts` — used by all 6 forms site-wide.

**Mandatory fields** (red asterisk `*` on label):
- Full Name (`name`)
- Email (`email`)
- Phone (`phone`)
- Project Details (`message`)

**Optional fields** (no asterisk):
- Service Needed (select dropdown)
- Company / Building (contact page only)
- Building Location (contact page only)

**Field labels**:
- Dark theme: `text-[0.65rem] font-medium text-white/50`
- Light theme: `text-xs font-medium text-brand-600` (hero panel) or `text-sm font-medium text-brand-700` (contact page)
- Textarea label is always "Project Details" across all forms

**Validation behavior**:
1. **Default state**: Submit button is always visible. No error indicators.
2. **User clicks submit with empty required fields**: Red border (`border-red-500`) appears on empty fields. Animated error message with info icon slides in below each invalid field. Submit button hides.
3. **User fills in fields**: Error clears per-field as user types (via `trackField`). Once all required fields have content, submit button reappears.
4. **Successful submit**: Form replaced with animated "Thank You!" confirmation (checkmark pop-in + fade-up text). "Submit another request" link resets form.

**Error animation** (defined in `globals.css`):
- `fieldError`: `opacity 0→1, translateY -4px→0` over 0.3s ease-out
- `fieldPing`: info icon `scale 0.5→1.3→1` over 0.4s ease-out

**Error component**: `src/components/field-error.tsx` — renders animated `<Info>` icon (red, `h-3 w-3`) + error text (`text-xs text-red-500 font-medium`)

**Submit button visibility logic** (`showButton`):
- Before first submit attempt: always visible
- After failed submit: hidden until all required fields are filled
- Computed as: `!hasAttempted || allRequiredFilled`

**Loading state**: Button text changes to "Sending...", arrow icon hidden, button disabled with `disabled:opacity-60 disabled:cursor-not-allowed`

**Success component**: `src/components/form-success.tsx`
- Checkmark icon: `h-8 w-8` in `w-16 h-16 rounded-full` container
- Dark theme: `bg-gold-500/20`, icon `text-gold-500`
- Light theme: `bg-green-50`, icon `text-green-500`
- Title: "Thank You!" (`text-xl font-bold`)
- Subtitle: "Your request has been submitted..." (`text-sm max-w-xs`)
- Reset link: `text-xs font-medium underline`

**Server action**: `src/lib/actions.ts`
- Logs all submissions to `submissions.csv` (auto-created with headers)
- Sends HTML email notification to business email via Resend
- CSV columns: Timestamp, Name, Email, Phone, Service, Message, Company, Location
- Requires `RESEND_API_KEY` env var for email (CSV logging works without it)

### Featured Project (Projects Page)
- Background: `bg-brand-900`
- Grid: `lg:grid-cols-[1fr_1fr]` with `items-stretch`
- Left: project metadata (location, category), description, feature checklist, CTAs
- Right: image visible on all screen sizes (`min-h-[250px] lg:min-h-[300px]`)
- **Desktop quote form**: Image stays in DOM as `invisible` when form shows (holds height). Form overlays with `absolute inset-0`. Section height never changes.
- **Mobile quote form**: Image fully hides. Form renders in normal flow with reduced padding (`p-6 sm:p-8 md:p-10`).
- Featured project image: `/p12.webp` (converted from `molinnus images/p12.png`)

### Project Slider
- Cards: `w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]` (responsive widths)
- Aspect ratio: `aspect-[3/4]`
- Desktop: hover overlay with project details
- Mobile: tap-to-reveal overlay (toggle via `activeIndex` state, tap again to dismiss)
- "Scroll to see more" button: `whitespace-nowrap shrink-0` to stay on one line
- Snap scrolling: `snap-x snap-mandatory`, cards `snap-start`

### Testimonials
- Section padding: `py-14 md:py-16`
- Grid: `md:grid-cols-2 gap-10 lg:gap-16`
- Card: `bg-card border shadow-lg rounded-xl p-6`
- Min height: `min-h-[360px] sm:min-h-[300px] md:min-h-[320px]` (taller on mobile to prevent text overlap)
- Card container: `mr-0 md:mr-10` (no right margin on mobile for wider cards)
- Stars: `h-4 w-4 fill-yellow-500`
- Avatar: `h-10 w-10` with initial fallback (Unsplash headshots for testimonials only)
- Quote text: `text-sm sm:text-base font-medium` (smaller on mobile to fit cards)
- Auto-rotate: 6000ms
- Indicators: `h-2.5 rounded-full`, active `w-10`, inactive `w-2.5`

### Certifications Marquee (in Testimonials)
- Title: `text-base font-semibold text-muted-foreground text-left`
- Items: `text-lg font-semibold text-muted-foreground/50` with contextual icons
- Animation: `marquee 15s linear infinite` on mobile, `marquee 30s linear infinite` on `md+` (2x faster on mobile)
- Responsive speed via `@media (min-width: 768px)` override in globals.css
- Edge fades: gradient overlays `w-16` on both sides
- Icons per certification: ShieldCheck (TSSA), GraduationCap (College of Trades), HardHat (WSIB), Award (Fulton), Flame (Gas Fitter), Wrench (Steamfitter)

### Conversion Text Blocks (Service Pages)
- Layout: matches statement block style (label left, text right)
- Copy: SEO-optimized, conversion-focused with two-tone heading
- CTA: "Get a Free Quote" with gold hover glow (`hover:shadow-[0_0_12px_rgba(255,215,3,0.3)]`)
- Text flows full width (no max-w constraint)
- **No redundant bottom CTAs**: The "Ready to Get Started?" CTA was removed from individual service pages (conversion text block serves as the sole bottom CTA). The "Not Sure What You Need?" CTA was removed from the all services page (tabbed section has built-in quote functionality).

### Buttons
| Variant | Classes |
|---------|---------|
| Primary (gold) | `bg-gold-500 hover:bg-gold-400 text-brand-950 font-semibold text-sm px-6 py-3 rounded-full` |
| Primary large | Same + `px-7 py-3.5` |
| Outlined (light bg) | `border border-brand-200 text-brand-700 hover:bg-brand-50` |
| Outlined (dark bg) | `border border-white/15 text-white/70 hover:text-white hover:bg-white/5` |
| Dark solid | `bg-brand-900 hover:bg-brand-800 text-white` |
| Dark solid + glow | Same + `hover:shadow-[0_0_12px_rgba(255,215,3,0.3)]` |
| Nav CTA (transparent) | `border border-white/60 text-white hover:bg-white hover:text-brand-900` |
| Nav CTA (scrolled) | `border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white` |
| Footer CTA primary | `bg-gold-500 hover:bg-gold-400 text-brand-950` ("Get a Quote", listed first) |
| Footer CTA secondary | `border border-white/20 text-white hover:bg-white/10` (phone number, listed second) |
| Arrow nav | `w-10 h-10 rounded-full border border-white/10 hover:border-gold-500 hover:bg-white/[0.06]` |
| Mobile CTA (home hero) | Side-by-side row, quote button `px-5`, phone as `w-12 h-12` icon circle, trust badges below |
| Mobile CTA (other heroes) | Side-by-side row, quote button `px-5`, phone as `w-12 h-12` icon circle, no badges |
| Arrow nav (mobile) | `w-12 h-12` with `h-5 w-5` icons (larger touch targets) |

### Forms (Select Dropdowns)
- Always use `appearance-none` to remove native browser chevron
- Add custom `ChevronDown` icon positioned `absolute right-4 top-1/2 -translate-y-1/2`
- Right padding: `pr-12` minimum for breathing room

### About Page Certifications
- Dark section: `bg-brand-900 border-b border-white/10`
- Cards: `rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10`
- Context-aware icons per certification (not generic checkmarks)
- No redundant CTA section — the footer "Ready to start your project?" CTA directly follows

### Service Page Feature Icons
- Each feature in "What's Included" uses a context-relevant icon instead of generic CheckCircle2
- Icon mapping defined in `FEATURE_ICONS` record in service-page-content.tsx

---

## Scroll Animations

### System
- Utility file: `src/lib/animations.ts` — reusable framer-motion variant objects
- Components: `src/components/scroll-reveal.tsx` — `ScrollReveal` and `StaggerReveal` wrappers
- Most animations use `once: true` (fire once on scroll, never re-trigger)
- Exception: Services accordion items on home page replay on every scroll into view
- Easing: `[0.25, 0.1, 0.25, 1.0]` — firm ease-out, no bounce/spring

### Variant Presets
| Name | Effect | Duration | Usage |
|------|--------|----------|-------|
| fadeUp | opacity 0→1, y 24→0 | 0.6s | Text blocks, section headers, CTAs |
| fadeIn | opacity 0→1 | 0.5s | Elements that appear without movement |
| scaleIn | opacity 0→1, scale 0.97→1 | 0.7s | Images in two-column layouts |
| staggerContainer | Staggers children | 0.08s delay per child | Card grid wrappers |
| staggerItem | opacity 0→1, y 20→0 | 0.5s | Individual cards within a stagger group |

### Where Applied
| Page | Element | Animation |
|------|---------|-----------|
| Home | "Who We Are" statement | fadeUp |
| Home | Why Choose Us image | scaleIn |
| Home | Why Choose Us text | fadeUp |
| Home | Service accordion items | staggered slide-up (replays) |
| Home | Service area pills | staggered fade |
| Projects | Statement block | fadeUp |
| Projects | CTA section | fadeUp |
| About | Our Story image | scaleIn |
| About | Our Story text | fadeUp |
| About | Values cards | staggered fade |
| All service pages | What's Included image | scaleIn |
| All service pages | Why Molinnus image | scaleIn |

### Where NOT Applied
- Hero sections (visible on load, should feel immediate)
- Services accordion (has own staggered slide-up + expand/collapse transitions)
- Testimonials (already animated via framer-motion)
- Project slider (has hover transitions)
- Navigation (has scroll-based transitions)

---

## Cinematic Hero Effect

Applied to the home page hero via overlay layers:

1. **Dark base**: `bg-black/70`
2. **Gold tint**: `bg-amber-900/15 mix-blend-multiply`
3. **Directional gradients**: standard left-to-right and bottom-to-top for text readability
4. **Film grain**: SVG `feTurbulence` noise texture, `opacity-[0.08]`, `backgroundSize: 150px`, repeated

Also available on page heroes via `cinematic` prop (used on About page).

---

## Animations & Transitions

| Element | Duration | Easing | Effect |
|---------|----------|--------|--------|
| Navbar scroll | 500ms | default | bg/shadow transition |
| Navbar logo crossfade | 300ms | default | opacity swap |
| Image hover | 500ms | default | scale 1 to 1.05 |
| Image crossfade (tabs) | 400ms | ease-in-out | opacity only |
| Service item slide-up | 600ms, staggered 70ms | ease-out | opacity + y:30→0 (replays on scroll) |
| Card overlay | 300ms | default | opacity 0 to 1 |
| Dropdown | 200ms | default | opacity + translate-y |
| Accordion expand | 500ms | cubic-bezier(0.4,0,0.2,1) | grid-rows |
| Contact panel | 400ms | default | opacity fade |
| Contact form flip | instant | — | immediate swap (no crossfade) |
| Testimonial swap | 400ms | ease-out | opacity + scale |
| Timeline entry | 500ms | ease-out | opacity + y:30 to 0 |
| Mobile menu | 300ms | default | max-height + opacity |
| Certifications marquee | 15s mobile / 30s desktop | linear | infinite translateX(-50%) |
| Stats bar marquee (mobile) | 20s | linear | infinite translateX(-33.333%), stops at sm |
| Scroll reveal (fadeUp) | 600ms | [0.25,0.1,0.25,1] | opacity + y |
| Scroll reveal (scaleIn) | 700ms | [0.25,0.1,0.25,1] | opacity + scale |

---

## Shadows

| Usage | Value |
|-------|-------|
| Navbar scrolled | `shadow-[0_1px_0_rgba(0,0,0,0.06)]` |
| Dropdown | `shadow-2xl shadow-black/30` |
| Contact panel | `shadow-2xl` |
| Testimonial cards | `shadow-lg` |
| Fullscreen modal | `shadow-2xl shadow-black/40` |
| Button hover glow | `shadow-[0_0_12px_rgba(255,215,3,0.3)]` |

---

## Icons

**Library**: Lucide React

**Sizes**: h-3 (tiny) - h-3.5 - h-4 - h-4.5 - h-5 (standard) - h-6 (large)

**Service Icons**:
- Wrench: Plumbing
- Flame: Heating
- Gauge: Steam/pressure
- ShieldCheck: Safety/compliance/backflow
- MessageSquare: Consultation

**Feature Icons** (context-aware per service):
- Droplets, PipetteIcon, Siren: Plumbing features
- RefreshCw, Compass, Settings, Zap: Hydronic features
- Thermometer, BadgeCheck, Search: Steam features
- ClipboardCheck, FileCheck: Backflow/compliance features
- Users, PenTool, BarChart3: Consultation features

**Certification Icons**:
- ShieldCheck: TSSA Licensed
- GraduationCap: Ontario College of Trades
- HardHat: WSIB Covered
- Award: Fulton Recommended
- Flame: Gas Fitter Certified
- Wrench: Steamfitter Licensed

**Social Icons**:
- Instagram: Custom SVG (`/public/instagram.svg`), used in footer and contact page. Rendered via `next/image` (not Lucide). `invert` class applied on dark backgrounds.

**UI Icons**:
- Phone, MapPin: Contact/location
- ArrowRight, ArrowUpRight: CTA trailing icons
- ChevronDown: Custom select dropdowns
- X: Close buttons
- Menu: Mobile hamburger
- Star: Testimonial ratings

---

## Images

### Format
All images (except logos) are **WebP** format for performance. Logos remain PNG.

### Image Source Rules
- **Only** images from the `molinnus images` folder are used on the site
- No external image URLs (no Unsplash for site images, no wsimg.com)
- Exception: Unsplash headshots for testimonial avatars only
- `next.config.ts` only allows `images.unsplash.com` as a remote pattern

### Hero Images
| Page | File | Object Position |
|------|------|-----------------|
| Home | /hero4.webp | 75% 100% |
| Projects | /steam-boiler-hero.webp | center right |
| About | /hero3.webp | center |
| Contact | (no image — solid bg-brand-900) | — |
| Services (overview) | /hero7.webp | center |
| Commercial Plumbing | /hero6.webp | center |
| Hydronic Heating | /hero9.webp | center |
| Steam Boilers | /hero2.webp | center |
| Backflow Testing | /hero4.webp | center |
| Consultation | /hero5.webp | center |

### Service Images (P-series)
| Image | Content | Used For |
|-------|---------|----------|
| p2.webp | TurboMax DHW system | Commercial Plumbing service cards |
| p3.webp | NTI boiler + storage tanks | Hydronic heating, boiler project |
| p4.webp | BoilerMag separator | Backflow testing service cards |
| p5.webp | RBI Futera boiler | Steam boiler "What's Included" |
| p6.webp | Storage tanks in basement | Commercial storage tank project, steam boiler "Other Services" card |
| p7.webp | Water treatment system | Consultation service cards |
| p8.webp | Hydronic system | About page "Our Story" |
| p10.webp | Glycol snow melt ramp | Hydronic heating service cards & project |
| p11.webp | Plumbing work | Plumbing "What's Included" |
| p12.webp | Valve work on tanks | Featured project, plumbing service (services page) |
| p16.webp | Project photo | Available for use |

### Other Images
| Image | Content | Used For |
|-------|---------|----------|
| plumber-working.webp | Technician on Berg boiler | Why Choose Us / Why Molinnus sections |
| project-gas-boiler-room.webp | Gas-fired boiler room | Steam boiler galleries & cards |
| project-turbomax-wide.webp | TurboMax system wide | TurboMax DHW project |
| project-plate-heat-exchanger.webp | Blue plate heat exchanger | Heat exchanger project |

### Image Rules
- Use `object-cover` with contextual `objectPosition` via inline style to keep subjects visible
- "Why Choose Us" plumber image: `objectPosition: "center 60%"` to center the subject
- Service page "What's Included" uses per-service image mapping (not slug-based)
- All images compressed and converted to WebP (~95% size reduction from original PNGs)

---

## Mobile Responsiveness

### Breakpoints
| Prefix | Min Width | Usage |
|--------|-----------|-------|
| (none) | 0px | Mobile-first base styles |
| sm | 640px | Small tablets, landscape phones |
| md | 768px | Tablets |
| lg | 1024px | Desktop |

### Key Mobile Patterns
- **Stats bars**: Separate mobile/desktop renders. Mobile: marquee animation (`animate-marquee-mobile`, tripled items, no icons). Desktop: static centered with icons. Uses `hidden sm:flex` / `flex sm:hidden`.
- **CTA buttons**: `flex-col sm:flex-row` (stack on mobile, inline on tablet+), `w-full sm:w-auto` for equal width on mobile, `justify-center` for centered text
- **CTA hierarchy**: "Get a Quote" is always the primary gold CTA (listed first), phone number is always the secondary outline CTA (listed second) — applies site-wide
- **Hero H1 (home)**: `text-[2.5rem] sm:text-[2.875rem] md:text-[3.625rem] lg:text-[4.125rem]`
- **Dark overlays on mobile**: `bg-black/[0.65] md:bg-transparent` on page heroes, `bg-black/50 md:bg-transparent` on project cards and service cards — improves text readability on mobile without affecting desktop
- **Hero description**: `text-base sm:text-lg`
- **Project slider cards**: `w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]`
- **Featured project image**: visible on all screens (`min-h-[250px] lg:min-h-[300px]`)
- **Featured project quote form**: relative positioning on mobile (expands container), absolute on `lg+`
- **Services accordion quote form (home)**: normal flow on mobile, absolute overlay on `lg+`
- **Services tabbed quote form (services page)**: absolute overlay with opaque `bg-brand-900` on mobile (covers content), absolute overlay on `lg+` (over image only)
- **Service page quote form**: normal flow on mobile, absolute overlay on `lg+`
- **Home hero contact panel**: centered on mobile (`justify-center`), right-aligned on desktop (`lg:justify-end`)
- **Footer grid**: `gap-8` (not gap-12) on mobile
- **Accordion gap**: `gap-8 lg:gap-20` (reduced from 64px on mobile)
- **Contact panel**: `max-w-[calc(100%-24px)] sm:max-w-[440px]`
- **Grid layouts**: all collapse to single column on mobile via `lg:grid-cols-*`
- **Testimonial cards**: taller min-height on mobile (`360px`), smaller quote text (`text-sm`)
- **Marquee speed (certifications)**: 2x faster on mobile (15s vs 30s desktop)
- **Marquee speed (stats bar)**: 20s on mobile, none on desktop
- **Mobile nav**: white bg + dark logo/icon when menu is open
- **Body**: `overflow-x-hidden` to prevent horizontal scroll from any overflow
- **Contact page form**: `p-5 sm:p-8 md:p-10` (reduced padding on mobile)
- **Project slider**: tap-to-reveal overlay on mobile (replaces hover)
- **Testimonial cards**: no right margin on mobile (`mr-0 md:mr-10`)
- **Page hero (compact)**: `min-h-[65vh] md:min-h-[55vh]` (taller on mobile for nav spacing)

### Orphan Centering Rule
When a grid with an odd number of items wraps to multiple rows on mobile, the last orphaned item must center rather than left-align. Use `flex flex-wrap justify-center` instead of CSS Grid for these cases, with calculated widths per breakpoint:
- Mobile: `w-full` (1 per row, full-width stacked)
- Tablet: `w-[calc(33.333%-11px)]` (3 per row)
- Desktop: `w-[calc(20%-13px)]` (5 per row)
Applied to: Service Areas (home page), Service Regions (contact page)

---

## Dark Section Dividers

When two dark (`bg-brand-900`) sections are adjacent, always add a thin divider:
- Footer: `border-t border-white/10` on the footer element
- CTA sections before footer: `border-b border-white/10`
- Dark sections following light sections: `border-t border-white/10` when needed

---

## File Structure

```
src/
├── app/
│   ├── globals.css           # Theme, colors, typography, marquee animation
│   ├── layout.tsx            # Root layout, font loading, nav/footer
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── services/
│   │   ├── page.tsx          # Services overview (delegates to services-page-content)
│   │   ├── commercial-plumbing/page.tsx
│   │   ├── hydronic-heating/page.tsx
│   │   ├── steam-boilers/page.tsx
│   │   ├── backflow-testing/page.tsx
│   │   └── consultation/page.tsx
├── components/
│   ├── navbar.tsx            # Dual-logo crossfade on scroll
│   ├── footer.tsx            # Dark bg with CTA band
│   ├── section.tsx           # Section + SectionHeader wrappers
│   ├── page-hero.tsx         # Reusable hero for subpages (supports cinematic, compact, imagePosition)
│   ├── home-hero.tsx         # Homepage hero with inline contact panel + cinematic effect
│   ├── featured-project.tsx  # Featured project with quote form flip
│   ├── scroll-reveal.tsx     # ScrollReveal + StaggerReveal animation wrappers
│   ├── services-accordion.tsx # Home page "What We Do" with quote form flip
│   ├── services-page-content.tsx # Services page tabbed section with quote form
│   ├── service-page-content.tsx  # Individual service pages with quote form flip
│   ├── project-slider.tsx    # Responsive project card slider
│   ├── timeline.tsx
│   ├── testimonials-section.tsx # Wrapper with certification icons
│   ├── contact-form.tsx      # Contact page form (client component)
│   ├── field-error.tsx       # Animated validation error message
│   ├── form-success.tsx      # Thank-you confirmation (dark/light variants)
│   └── ui/                   # shadcn/ui primitives
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── textarea.tsx
├── lib/
│   ├── actions.ts            # Server action: CSV logging + email via Resend
│   ├── animations.ts         # Scroll animation variant presets
│   ├── constants.ts          # Site data, services, projects, images
│   ├── use-form-validation.ts # Shared form validation hook (all 6 forms)
│   └── utils.ts              # cn() helper
public/
├── hero.webp, hero2-9.webp   # Page hero images
├── logo-black.png, logo-white.png
├── p2-p12.webp, p16.webp     # Project/service images
├── instagram.svg             # Instagram logo (custom SVG)
├── plumber-working.webp      # Why Choose Us / Why Molinnus image
├── steam-boiler-hero.webp
├── plumbing-hero.webp
├── commercial-plumbing.webp, hydronic-heating.webp, steam-boilers.webp,
│   backflow-testing.webp, consultation.webp  # Service stock images
└── project-*.webp            # Additional project photos
```
