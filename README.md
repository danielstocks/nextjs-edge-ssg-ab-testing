# Next.js Edge SSG A/B Testing

This example statically generates multiple variations of a dynamic route (using `getStaticPaths`). For example `/cats/1` and `/cats/1-blue`.

The user navigates to `cats/1` but using an edge middleware function we can serve the blue variation on every other request (simulating an A/B test) using a URL rewrite.

Downside: This will probably scale poorly if you have thousands of statically generated pages
Upside: Little to no overhead on rendering performance and user experience.

Tested on Next.js 14.x

## How to run example

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
