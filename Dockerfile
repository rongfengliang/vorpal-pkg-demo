FROM node:8.15-slim as build
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build


FROM alpine:latest
WORKDIR /app
COPY --from=build /app/first-linux /app/first-linux
COPY --from=build /app/first-macos /app/first-macos
COPY --from=build /app/first-win.exe /app/first-win.exe
CMD ["sh"]
