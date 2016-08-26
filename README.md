# super-mesh

## Folder Structure
```
supermesh
├── /app
│   ├── /client
│   │       ├── /components (angular components)
│   │       │           └── /blocks
│   │       │                  └── /router
│   │       │           ├── /core (shared files)
│   │       │           ├── /ideas
│   │       │           └── /message
│   │       └── index.html
│   ├── /server
│   │       ├── /db (mongo database set up & models)
│   │       ├── /io (socket.io)
│   │       ├── /env
│   │       ├── /routes (routes)
│   │       │           ├── /message
│   │       │           ├── index.js
│   │       │           └── route.js
│   │       └── start.js (starting server)
├── /dist (output folder for precompiled 'src' folder)
│   ├── /css
│   ├── /fonts
│   ├── /js
│   ├── /loader
│   └── /vendor
└── /src
    ├── /scss
    └── /vendor (library)
```

## Mongoose Model

### Supermesh Model
    - Name (String)
    - Category (String)
    - Message (String)
    - Upvote (Number)
    
## How to start the app
1) npm install
```
$ npm install
```

2) run gulp
```
$ gulp
```

3) npm start
```
npm start
```

4) Project should be on
```
http://localhost:7777/
```