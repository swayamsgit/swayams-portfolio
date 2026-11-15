# swayams-portfolio v4.1 source (Nov 15, 2026)

The portfolio is a Vite+React static bundle edited surgically (no original repo survives).

Files:
- bundle-v4.js  -> deploy as assets/index-v4.js (app bundle, pretty-printed + patched)
- css-v4.css    -> deploy as assets/index-v4.css
- newc/components.jsx -> JSX source of the injected components (SideRail, GreetBand, Artboard); compiled with:
  npx esbuild newc/components.jsx --jsx=transform --jsx-factory=N.createElement --jsx-fragment=N.Fragment --format=esm --outfile=newc/components.out.js
  then injected into bundle-v4.js replacing the block between `const LinkC = Ot;` and `function ay()`.
  Keep ALL lines of the compiled output (including `const LinkC = Ot;`): the base bundle declares LinkC only inside that replaced block, so stripping it breaks the build with a blank page (ReferenceError: LinkC is not defined). After injecting, assert exactly one `const LinkC = Ot;`, one `const NavLinkC = t0;` and one `const SectionC = vt;` in the result, then `node --check` the bundle.
- index.html, _redirects -> dist root files
- site-v4.zip -> the exact deploy payload uploaded to Cloudflare Pages (contains everything incl. assets/, engine/, audio/)

Deploy: Cloudflare dashboard > Pages > swayams-portfolio > Create deployment > upload site-v4.zip.
Routing: browser history (converted from hash routing in v4); _redirects `/* /index.html 200` handles deep links.
