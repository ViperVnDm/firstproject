# Firstproject

Next.js application with server-side rendering, Tailwind CSS styling, and a light/dark mode toggle. The app is containerized and ready to deploy on AWS App Runner.

## Documentation

Additional project documentation is available in the `docs` directory. For an overview of planned site content, see [Content Structure](docs/content-structure.md).

## Running locally

```bash
npm install
npm run dev
```

Visit <http://localhost:3000> to see the app.

## Building for production

```bash
npm run build
npm start
```

## Docker

Build the image:

```bash
docker build -t firstproject .
```

Run the container:

```bash
docker run -p 3000:3000 firstproject
```
