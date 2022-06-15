# Alasan memilih react native

React Native adalah sebuah kerangka kerja perangkat lunak (framework) yang memungkinkan setiap programmer untuk membangun sebuah mobile app layaknya aplikasi “native”. Framework ini menggunakan bahasa pemrograman JavaScript dalam pembuatan aplikasinya sehingga memudahkan para web developer untuk membangun aplikasi mobile.

Sudah menjadi rahasia umum kalau Anda memerlukan bahasa pemrograman yang berbeda-beda (disebut juga “native”) untuk membangun aplikasi berdasarkan platform-nya, seperti Java (untuk Android) atau Swift (untuk iOS). Namun, React Native berhasil menghapus keharusan tersebut. Itulah mengapa React Native juga dikenal sebagai Cross-Platform Network. 

Sama dengan namanya, framework ini mampu mengubah aplikasi yang dibangun ke dalam kode “native” sesuai platform tujuan. Hebatnya lagi, apps yang diciptakan tetap berfungsi secara optimal layaknya sebuah aplikasi “native”. Tentu ini menjadi keuntungan bagi para developer yang mahir JavaScript karena tak perlu lagi mempelajari detail bahasa pemrograman lainnya. 

## Kelebihan
- Development Tools yang banyak digunakan perusahaan berdasarkan

    Popularitas React Native tak perlu lagi diragukan. Mengapa? Karena seperti yang telah disinggung sebelumnya bahwa framework ini sangat terkenal sampai-sampai dianggap sebagai salah satu the world’s top technologies. Buktinya adalah banyak perusahaan besar ternama mempercayakan mobile app nya pada framework ini.

    Dari artikel sebelumnya, beberapa aplikasi perusahaan raksasa yang menggunakan React Native adalah Facebook, Bloomberg, Soundcloud, Wix, Walmart, dan Instagram. Tambahan lagi, merujuk pada tulisan idcloudhost, Airbnb dan Baidu juga merupakan contoh perusahaan besar pengguna React Native lainnya.

- Mengemmbangkan 2 aplikasi dengan 1 kode yang Sama

    Salah satu strategi untuk meningkatkan kesadaran banyak calon user akan produk Anda adalah dengan cara menyediakan aplikasi untuk setiap platform yang beredar di target pengguna, seperti iOS dan Android. Maka, dari sinilah kesulitan dimulai. 

    Masih ingat bukan kalau sebelumnya kita sudah membahas tentang PHP, Java, Swift, dan Objective C? Mereka adalah sederet nama dari bahasa pemrograman “khusus” untuk masing-masing platform yang harus dikuasai seorang developer. 

    Oleh karena alasan inilah, React Native disebut-sebut sebagai penyelamat app developer saat membangun aplikasi buat iOS atau Android. Penggunaannya yang bersifat cross-platform network membuat React Native bisa digunakan untuk dua sistem operasi sekaligus. Sifatnya yang lintas platform ini tidak hanya mempersingkat waktu pengerjaan, tetapi juga mengoptimalkan pembiayaan proyek.

- Code Reuseability dan Prebuild component yang handal

    Sejatinya, konsep dasar pengembangan aplikasi lintas platform (cross-platform) ialah menampilkan basis kode standar yang bisa digunakan berulang pada masing-masing sistem operasi. 

    Malahan, pada implementasinya, hampir 90% kode yang digunakan memiliki kesamaan untuk kedua platform, iOS dan Android. Pun, bila Anda sudah memiliki web app, Anda bisa langsung menggunakan kode yang ada sebagai mobile apps, loh. Inilah yang disebut memudahkan developer. Mereka tidak perlu repot-repot membangunnya secara terpisah. 

    Tak hanya itu, sebagai open-source library, React Native memberikan keuntungan tersendiri bagi developer, yakni penggunaan pre-built components (kode yang sudah dibuat oleh app developer lain). Pada intinya, Anda tidak akan mengalami kesulitan saat mengembangkan mobile apps nantinya.

- Efisiensi waktu

    Berkaitan dengan dua keunggulan React Native sebelumnya, bisa dikatakan bahwa pengembangan aplikasi menggunakan framework React Native adalah yang paling efisien waktu.

    Alasannya? Pertama, Anda tidak perlu repot membuat aplikasi dengan bahasa pemrograman khusus. Kedua, adanya kode dan komponen dari app developer lain yang bisa dipakai ulang tentu memangkas waktu pengembangan.

## Kekurangan
- Performa Masih Banyak Dipertanyakan Banyak Developer

    Dibandingkan dengan iOS atau Android, framework ini masih terbilang muda. Selain itu, terdapat lumayan banyak komponen yang belum tersedia dan kemudian berpengaruh pada kinerja React Native.

    Akan tetapi, patut diingat bahwa pengukuran tingkat kepuasan akan “kinerja” sebuah aplikasi sejatinya bersifat lebih subjektif bila menyangkut opini individu. Selain itu, kemampuan developer dalam membangun kode-kode efisien juga sangat berpengaruh terhadap performa mobile app. Sehingga, pilihlah developer profesional untuk memastikan mobile app memiliki performa yang optimal.

- Ukuran file yang besar

    React native dibagun dengan memanfaatkan komponen pihak ketiga yang cukup banyak dalam pengembanganya sehigga membuat ukuran proyek membengkak, selain itu karena dibuat dengan banyak bahasa pemrograman maka ukuran file akan juga bertambah.


# Kesulitan dalam pengembangan
- Dokumentasi yang masih membingungkan

    untuk senior developer mungkin dokumentasi dari React Native ini mudah untuk dipahami. namun, untuk developer pemula dokumentasi yang ada masih cukup sulit dipahami sehingga dibutuhkan waktu yang cukup lama untuk memahami dokumentasi ini.

- Penggunaan kode yang berbeda dengan React JS

    Meskipun dibagun diatas framework React JS, React Native memiliki kode yang berbeda dengan React JS. dimana kita harus mengatur manual sebagian besar komponen yang ada, semisal di react JS kita menggunakan "DIV" maka di react native kita menggunakan "View". kemudian apabila di React JS, scroll sudah diatur oleh browser di React Native kita harus mengaturnya sendiri dengan menggunakan "ScrollView". 

- Interaksi dengan local storage yang cukup susah 

    React Native tidak menyediakan local storage, sehingga kita harus menggunakan library lain untuk menyimpan data. sebenarnya mereka menyediakan "AsyncStorage" yang bisa digunakan untuk menyimpan data. namun library tersebut sudah berhenti dukungannya sehingga kita harus menggunakan library lain untuk menyimpan data seperti "Expo Secure Storage" tentunya ini akan menambah besar ukuran aplikasi yang dikembangkan.

- Perbedaan ROM Smartphone mempengaruhi performa aplikasi

    Dalam pengembangan aplikasi ini kami menggunakan 3 telepon seluler yang berbeda yaitu, Xiaomi dengan MIUI, Vivo dengan FuntouchOs dan Google Pixel (Emulator) dengan Stock Android. dari pengalaman kami, MIUI memiliki cara yang berbeda dalam mengatur cache aplikasi, sehingga mempengaruhi pengembangan aplikasi seperti Icon yang tidak berubah, Stuck di beberapa halaman, navbar dan menu bar yang perlu di atur kembali dan lain-lain.

- NAVIGATION HANDLING

    ini adalah masalah paling susah dalam pengembangan aplikasi. karena React Native tidak menyediakan navigasi, maka kita harus mengatur navigasi secara manual. dan navigasinya cukup rumit dan bisa terbilang tidak efisien seperti navigasi di browser. belum lagi passing data antara halaman yang lebih membingungkan.