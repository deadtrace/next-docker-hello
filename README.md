Next hello app (using Docker)
=============

Simple hello world application using Next.js and Docker.
https://hub.docker.com/r/deadtrace/next-hello

<img src="https://telegra.ph/file/9ea2ab41de7972c8e3531.png" alt="application" width="100%"/>

How to launch
-------------------------

```bash
docker run -d -p 3000:3000 deadtrace/next-hello
```
OR (using Makefile)

```bash
make run
```

Then navigate to http://localhost:3000.
