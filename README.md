# swayams-portfolio

Creative portfolio of Swayams Mohanty. Live at https://swayams-portfolio.pages.dev

Static site hosted on Cloudflare Pages. No server, no build step needed to run: open index.html or serve this folder.

## Structure
- index.html, css-v4.css, assets/ - compiled site + media (posters, music, fonts)
- engine/ - interactive engine code (chess, etc.)
- src/ - JSX source for the override components (compiled into assets/index-v4.js)
- tail.jsx, bundle-v4.js, BUILD.md - base app bundle and build pipeline notes

## Build
See BUILD.md. Pipeline: esbuild compiles src/components.jsx with a custom JSX factory, output is injected into bundle-v4.js to produce assets/index-v4.js.

## Soundtrack

The hero music widget plays "Mia & Sebastian's Theme". The recording itself is NOT in this repo (copyrighted commercial audio). Playback on the live site is handled separately; the "my favorite songs" section uses Spotify embeds for the tracks Swayams picked - no audio files are distributed here. To run locally, drop any mp3 at audio/mia-and-sebs-theme.mp3 or point the widget at your own file.
