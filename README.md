# Shopping

Cấu hình thư mục như sau:

```
shop/
.
├── ...
├── app
│   └── views
│   └── models
│   └── contants
│   └── app.js
│
├── public
│   └──images
└── index.html
```

Sau đó tại folder shop chạy terminal và thực hiện các lệnh sau:

```
npm init -y
npm install --save-dev parcel
npm install -D parcel-plugin-static-files-copy
npm i axios
```

Tài liệu xem tham khảo:

- [Parcel bundler](https://parceljs.org/getting-started/webapp/).
- [parcel-plugin-static-files-copy](https://www.npmjs.com/package/parcel-plugin-static-files-copy)

Sau đó tiến hành cấu hình file package.json:

Những điểm cấu hình.

```json
"scripts": {
    "dev": "parcel ./*.html",
    "devdebug": "parcel watch ./*.html",
  },
  "staticFiles": {
    "staticPath": "public",
    "watcherGlob": "**"
  },
```

Sau khi cấu hình.

```json
{
  "name": "shop",
  "version": "1.0.0",
  "description": "shoping",
  "main": "index.js",
  "scripts": {
    "dev": "parcel ./*.html",
    "devdebug": "parcel watch ./*.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Vjet-Colaboratory/Shopping.git"
  },
  "keywords": ["parel", "axios", "firebase"],
  "author": "vjetgolang",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Vjet-Colaboratory/Shopping/issues"
  },
  "homepage": "https://github.com/Vjet-Colaboratory/Shopping#readme",
  "devDependencies": {
    "parcel": "^2.6.2",
    "parcel-plugin-static-files-copy": "^2.6.0"
  },
  "staticFiles": {
    "staticPath": "public",
    "watcherGlob": "**"
  },
  "dependencies": {
    "axios": "^0.27.2"
  }
}
```

Để chạy dự án ta chạy lệnh:

```
npm run dev
```
