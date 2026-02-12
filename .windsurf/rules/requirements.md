# Requirements Summary

## Core Requirements

### Content Management
- DJ creates/manages all portfolio content through Sanity CMS
- Sanity validates card data against schemas
- Cards display in specified order after rebuild
- Webhook triggers rebuild on content changes
- Audio files stored within 100GB asset limit

### Custom Post Cards
- Flexible content blocks: title, body, photo, gallery, track, album
- Any combination of blocks in any order
- Background styling (image or color)
- Collapsed view configuration for specific blocks
- Expand/collapse functionality

### Content Block Requirements

#### Title Blocks
- Prominent typography display
- Always renders at top regardless of block order

#### Body Text Blocks
- Proper formatting with line break preservation
- Markdown rendering to styled HTML

#### Photo Blocks
- Full card width display
- Caption support

#### Gallery Blocks
- Grid layout for multiple images
- Consistent spacing and sizing

#### Track Blocks
- Display title, artwork, streaming links
- Play button for audio files
- Integration with persistent music player

#### Album Blocks
- Display title, artwork, track listing, streaming links
- Individual track playback
- Expand control for albums with >5 tracks

### Event Cards
- Display name, date, time, venue, location, optional image
- Clickable ticket links
- Visual distinction for past events
- Chronological ordering for multiple events

### Contact Form
- Fields: name, email, subject, message
- Client-side validation with error messages
- Form submission to configured endpoint
- Success message and form clear on success
- Error message with data preservation on failure

### EPK Cards
- Preview with bio, photos, press links
- Expand/collapse functionality
- Download links for assets

### Feed Display
- Single vertical feed of all published cards
- Consistent spacing between cards
- Mobile: full width with margins
- Desktop: centered with 800px max width
- Order specified in Sanity CMS

### Filtering & Sorting
- Filter control (hamburger menu mobile, sidebar desktop)
- Category-based filtering (Events, Music, Photos, Updates, General)
- Sort options: newest first, oldest first
- Sort applies to filtered results

### Music Player
- Fixed position at bottom of screen
- Load and play audio from Sanity CMS
- Display track info and playback controls
- Persistent during navigation/scrolling
- Track replacement on new selection

### Deployment & Automation
- Cloudflare Pages deployment
- Sanity webhook triggers builds
- Automatic deployment on success
- Real-time preview in Sanity Studio

## Minimal Implementation Principle
- Include only minimal code necessary to meet specific requirements
- No additional helpers or abstractions unless explicitly requested
- Concise, targeted fixes without over-engineering
- Avoid creating unnecessary files
