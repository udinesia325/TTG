# API CRUD

## instalasi dan menjalankan aplikasi

### system requirements

- php 8.1
- composer 2.6.5
- nodejs 18


## persiapan server

- di dalam folder server
- copy file .env.example menjadi .env
- jalankan perintah ``` php artisan key:generate ```
- konfigurasi koneksi database di bagian berikut
```env 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=server
DB_USERNAME=root
DB_PASSWORD=

```
- lakukan migrasi dan seeding database dengan menjalankan perintah
```sh
$ php artisan migrate:fresh --seed
```
- jika ingin melakukan seeding data Todo jalankan perintah
```sh
$ php artisan db:seed --class=TodoSeeder
```
- username dan password untuk login
```sh
name = admin
password = password
```

- jalankan projek dengan mengetikkan
```sh
$ php artisan serve
```


## persiapan client

- di dalam folder client
- install package dengan menjalankan perintah  ``` npm install ```
- run projek dengan menjalankan perintah
- ``` npm run dev ```

### note (jika tidak support localhost silahkan ganti menjadi 127.0.0.1 pada file backendUrl.js di dalam client/src/utils/backendUrl)