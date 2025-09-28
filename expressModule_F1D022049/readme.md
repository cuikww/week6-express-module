# Assignment: Express & Modul Node.js

## Identitas
    - I Nengah Dwi Putra Witarsana
    - F1D022049

## Deskripsi Tugas
    Tugas ini bertujuan untuk mengimplementasikan sebuah API (Application Programming Interface) server menggunakan platform Node.js dengan framework Express.js. Fokus utama dari implementasi ini adalah untuk mendemonstrasikan pemahaman mengenai konsep routing dan modularisasi kode. Aplikasi yang dibangun memiliki beberapa endpoint yang melayani fungsi berbeda, mulai dari menampilkan data statis hingga memberikan data dinamis berdasarkan parameter.

## Hasil
    *   *GET http://localhost:3000/*
        ![alt text](D:\Semester7\Tugas PWL\week6-express-module\expressModule_F1D022049\output\image.png)
        Menguji endpoint root yang dirancang untuk mengembalikan data statis berupa NIM dan Nama.

    *   *GET http://localhost:3000/hitung*
        ![alt text](D:\Semester7\Tugas PWL\week6-express-module\expressModule_F1D022049\output\image1.png)
        Menguji endpoint yang berfungsi untuk mengeksekusi beberapa fungsi matematika yang diimpor dari modul utils/math.js. Hasil ini valid, membuktikan bahwa file index.js berhasil mengimpor dan mengeksekusi fungsi tambah, kali, kurang, dan pangkat dengan benar.

    *   *GET http://localhost:3000/profile*
        ![alt text](D:\Semester7\Tugas PWL\week6-express-module\expressModule_F1D022049\output\image2.png)
        Menguji endpoint yang bertugas untuk mengambil dan menampilkan keseluruhan koleksi data profil yang tersedia di server. Hasil menunjukkan respons dalam format JSON yang berisi sebuah array dari beberapa objek profil. Setiap objek memiliki struktur yang konsisten (nim, nama, prodi, angkatan).

    *   *GET http://localhost:3000/profile/F1D022049*
        ![alt text](D:\Semester7\Tugas PWL\week6-express-module\expressModule_F1D022049\output\image3.png)
        Menguji endpoint dinamis yang dirancang untuk mengambil dan menampilkan satu data profil spesifik berdasarkan parameter nim yang diberikan pada URL. Ketika diakses dengan NIM F1D022049, server memberikan respons JSON yang berisi satu objek profil yang sesuai dengan NIM tersebut.
