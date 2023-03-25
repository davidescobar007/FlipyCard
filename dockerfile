FROM golang:1.18 AS builder

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN CGO_ENABLED=0 GOOS=linux go build -o my_app cmd/server/main.go

FROM alpine:latest AS production
COPY --from=builder /app .
CMD ["./my_app", "serve", "--http", "my_app:8090"]