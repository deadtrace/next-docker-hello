run:
	docker run -p 3000:3000 -d --rm --name next-hello deadtrace/next-hello
stop:
	docker stop next-hello