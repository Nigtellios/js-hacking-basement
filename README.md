# JS Hacking Basement

Project is based on overment Node.JS Boilerplate, I've deleted moongose, static environment configuration and mongoDB to simplify things.

It's this one and only place in the web where I'm going to test some things based on JS injection techniques, like:

- changing functionalities on website via injecting JS scripts into websites
- styling/dynamic styling the elements based on DOM structure (or any provided one)
- testing some things related to loading injected content or its communication between server side

## Front-end
- PUG JS HTML Template Engine


## Back-end
Backend is created by me in these technologies:
- Node.JS (v15) (Express.JS [+ CORS, BodyParser])
- `Database-like` JSON file with some content

## Builders, runners etc.
- Babel, Nodemon

## How to use it?

Front-end is running at port 1234, while backend on 1235. Make sure they aren't busy.

Download the files anywhere that you want and:

### Building project

```npm
npm install
```

Now run pre-start script:

```npm
npm run prestart
```

### Running dist version

For creating `dist` you can use:

```npm
npm run build
```

To run dist version of server after use:

```npm
npm run start
```

### Running development (src) version

To run development process simply use:

```npm
npm run dev
```