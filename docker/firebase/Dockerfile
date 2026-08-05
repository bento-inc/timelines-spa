FROM node:22-alpine
RUN npm install -g firebase-tools
WORKDIR /firebase
COPY firebase.json .
RUN mkdir -p /firebase/data
EXPOSE 4000 9099
CMD ["firebase", "emulators:start", "--only", "auth", \
    "--project", "demo-local", "--import", "/firebase/data", "--export-on-exit"]
