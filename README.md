# Firstproject

Simple full-stack Hello World web application.

## Documentation

Additional project documentation is available in the `docs` directory.
For an overview of planned site content, see [Content Structure](docs/content-structure.md).

## Running locally

```bash
npm start
```

Visit <http://localhost:3000> to see the app.

## Docker

Build the image:

```bash
docker build -t hello-app .
```

Run the container:

```bash
docker run -p 3000:3000 hello-app
```
