# AI Session Memory Log
# This file tracks project decisions, implementations, and context for AI assistants across sessions.
# Format: Append new entries chronologically. Mark contradictions/changes explicitly.
# Purpose: Enable context continuity when resuming work in new sessions.

---

## Project Overview
- **Type**: Personal portfolio website - experimental/chaotic aesthetic
- **Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Goal**: Showcase work without professional constraints - "chaos zone" theme
- **Key Philosophy**: Intentionally broken aesthetic (misaligned, chaotic) while remaining functional

---

## Design Decisions & Theme

### Visual Style
- **Background**: Yellow diagonal striped pattern (45deg, alternating #fef3c7 and #fde68a)
- **Font**: System fonts (removed Comic Sans - user wanted readable)
- **Color Palette**: Pink (#ff6b9d), Green (#4ade80), Purple (#818cf8), Yellow (#fbbf24)
- **Navigation**: Dark background (#1e293b), white text with black shadows
- **Selection Color**: Pink background (#ff6b9d), white text with black shadow
- **Browser Theme**: Yellow (#fbbf24)

### Chaos Elements
1. **Misalignment**: Everything tilted at random angles
2. **Slow Animations**: All animations 2x slower than initially implemented
3. **Random Scattered Elements**: Emojis, shapes, text positioned absolutely with various animations
4. **Chromatic Aberration**: Applied to select elements (red/cyan shadow effect)
5. **Comic Book Styling**: Border + shadow box effects

---

## Key Components & Features

### 1. Dynamic Typing Header (TypingHeader.tsx)
- Location: `/app/components/TypingHeader.tsx`
- Functionality: Types/deletes name variations with blinking cursor
- Variations: ["MMZ", "Mozammil", "Moz", "Mozamil" (typo), "Mozammil Sheikh", "M0z@mm!l", "Mozammml" (typo), "MMZ.dev", "mozammil", "Mozammmil" (typo), "M.M.Z"]
- Selection: Random (not sequential)
- Typing Speed: 150ms per char
- Deleting Speed: 80ms per char
- Cursor: Blinks every 500ms (|)
- Waits: 1.5s after typing, 0.5s after deleting
- Reports text length to parent for dynamic nav tilt

### 2. Dynamic Navigation (DynamicNav.tsx)
- Location: `/app/components/DynamicNav.tsx`
- Functionality: Nav bar tilts based on name length
- Tilt Range: 0deg (empty) to -5deg (max length ~17 chars)
- Transition: 0.6s ease-in-out
- Effect: Header "leans under weight" as name types, springs back when deleting

### 3. Main Name Animation (page.tsx)
- Location: `/app/page.tsx`
- Features scramble animation with counter effect
- Variations change every 5 seconds
- Random selection from nameTexts array
- Individual character effects:
  - chromatic: Red/cyan aberration animation
  - bounce: Vertical stretch/squash
  - glitch: Jittery movement with chromatic shadows
  - big: 1.3x size
  - huge: 1.6x size
- Effects applied randomly per character (50% normal, 15% chromatic, 10% bounce, 10% big, 7% huge, 8% glitch)

### 4. Scattered Background Elements
- Static elements: Emojis (⚡💥⭐🎨🚀✨🎯💎🌈🔥💫🌟), text ("BOOM!", "POW!", "ZAP!", "WOW!", "PING!", "???"), shapes (squares, circles)
- Teleporting elements: Fade in/out with rotation, 8s cycle, 60% opacity
- Popping/moving elements: Travel randomly across screen, go off-screen, 16-20s cycles, 50% opacity
- Movement: Truly random positions including negative percentages (off-screen)
- All have pointer-events-none

### 5. Animation Speeds
**IMPORTANT**: User wanted slower, less distracting animations
- float-random: 12s
- wobble: 8s
- shake: 6s
- tilt-shake: 10s
- wind: 8s
- teleport: 8s
- pop-move-1: 16s
- pop-move-2: 18s
- pop-move-3: 20s

---

## Layout Structure

### Navigation
- Tilts dynamically (see DynamicNav.tsx)
- Links misaligned individually
- Header name uses TypingHeader component

### Main Content
- Centered text alignment
- Comic dialog box with chromatic aberration
- Project cards: Colorful backgrounds, thick black borders, comic shadows
- Each card tilted differently, wind animation on container

### Footer
- Dark background (#1e293b), tilted -0.7deg
- Copyright text tilted -1.8deg inside

---

## Removed Features
- Falling "AHHHH" text: Removed - didn't work as expected
- Comet emoji (☄️): Removed per user request
- Skull emoji changed to 💀 by user in line 175 of page.tsx

---

## File Structure
```
app/
  components/
    DynamicNav.tsx - Nav with dynamic tilt
    TypingHeader.tsx - Typing animation for header
  page.tsx - Home page with scrambling name, scattered elements
  layout.tsx - Root layout, uses DynamicNav
  globals.css - All animations, selection styles
```

---

## Important Notes
1. Name in metadata: "Mozammil" (not "Mozammil Sheikh")
2. Orange square position: top: 70%, right: 15%
3. Red square position: top: 44, left: 12
4. Green square position: top: 12, left: 1/3
5. Read more button: Links to /about, green underline, hover bg green-400/20
6. Never use gradients in nav/footer - solid #1e293b color only
7. Yellow stripes in background are keeper - user likes them

---

## Color Usage Map
- Pink (#ff6b9d): Project cards, selection, some text elements
- Green (#4ade80): Project cards, read more underline
- Purple (#818cf8): Project cards, some text elements
- Yellow (#fbbf24): Project cards, theme color, background stripes
- Dark (#1e293b): Nav, footer backgrounds
- Orange (#fbbf24): Orange square
- Cyan (#00ffff): Chromatic aberration, cyan circle
- Red (#ff00ff): Chromatic aberration, red square

---

## Session End: 2025-11-23
Last working state: Dynamic typing header with nav tilt animation, fully chaotic homepage with random scattered elements

---

## Session Update: 2025-11-23 (Continued)

### About Page Implementation
- Location: `/app/about/page.tsx`
- Style: "Organized chaos" - less distracting than homepage
- Features:
  - Centered layout with clear sections
  - Only 3 scattered elements (✨💭*) vs 20+ on homepage
  - Comic-style boxes WITHOUT chromatic aberration (user removed it)
  - Colorful skill badges matching project card style
  - Subtle tilts on headings
  - Contact links with colored underlines (pink/green/purple)
  - Name "Mozammil" highlighted with selection-style background in bio paragraph
- Planned: Will add cringe photos mixed with content (pending user providing photos)

### Navigation Enhancements
- Header name now has NO individual rotation - aligns perfectly with nav bar
- Dynamic tilt: 0deg when empty → -5deg at max length
- Transition: 0.6s ease-in-out (was 0.2s - user wanted delay/smoothness)
- Name typing creates visual "weight" effect as header leans

### Technical Notes
- TypingHeader component passes text length to DynamicNav via callback
- All scattered elements use `pointer-events-none`
- About page maintains readability while keeping experimental vibe
- Contact section boxes do NOT use `comic-dialog` class (to avoid chromatic aberration)

### User Preferences This Session
1. Wanted readable fonts (confirmed no Comic Sans)
2. Slower animations - less distracting
3. About page: organized with fewer elements
4. Header typing: smooth tilt transition
5. Name highlight: selection-style not oversized/fancy
6. Clean text boxes without chromatic glitch on about page

---

## Session End: 2025-11-23 (Evening)
Last working state: About page complete (pending photos), typing header working with smooth nav tilt, both pages functional

---

## Session Update: 2025-11-23 (Late Session - Resumed)

### Homepage Name Section Fixed
- Location: `/app/page.tsx` lines 197-234
- Issue: Scrambling name with size variations (1.3x, 1.6x) was causing vertical page expansion
- Solution: Wrapped name in fixed-height container (120px) with overflow: visible
- Implementation details:
  - Container uses flexbox (align-items: center, justify-content: center)
  - Fixed height prevents layout shift when character sizes change
  - overflow: visible allows larger characters to extend beyond container without affecting page flow
  - lineHeight: 1 minimizes extra spacing
- Result: Name can scale or overlap without disturbing page size

### Page Overflow Fixes Summary
1. **Horizontal overflow**: Fixed with `overflow-x: hidden` on html and body
2. **Animated elements at bottom**: Fixed by wrapping layout in overflow:hidden container
3. **Name vertical expansion**: Fixed with fixed-height container (120px)

---

## Session End: 2025-11-23 (Late)
Last working state: All overflow issues resolved, homepage name constrained, both pages fully functional
