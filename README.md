# TFV//BLUR — website

A responsive, static website for the TFV//BLUR street-art archive. Built with plain HTML, CSS and JavaScript; no build tools or backend required.

## Preview locally
Open `index.html` in a browser.

## Publish with GitHub Pages
1. Create a new GitHub repository (for example `tfv-blur`).
2. Upload **all files and the `assets` folder** from this project to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. GitHub will publish the site and show its public URL in the Pages section.

## Updating the archive
- Add new image files to `assets/`.
- Add a matching card in `index.html`.
- Add the same artwork's metadata to the `artworks` array in `script.js`.
- Keep the artwork numbering consistent.

## Privacy notes
- No analytics, trackers, external forms, or location pins are included.
- The photos are displayed without exact location labels.
- The font files are loaded from Google Fonts; if you prefer a fully self-hosted site, remove the Google Fonts links and use system fonts.
- The original supplied images are retained visually; image metadata is stripped from the web copies.
