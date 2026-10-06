# The Great Bi-Annual SF Scavenger Hunt

This website is deployed via a combination of Cloudflare Workers and GitHub Pages.

To run the frontend locally, run `npm start`

The secrets are stored in Cloudflare, the contributors to this repo should have access to them.

To deploy worker changes, use `wrangler login` and `wrangler deploy` from the worker directory.