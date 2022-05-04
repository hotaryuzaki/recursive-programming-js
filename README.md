# Recursive Programming
in computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem.
Recursion solves such recursive problems by using functions that call themselves from within their own code.

The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement.
In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.

[source: Wikipedia]

===

Dalam ilmu komputer, rekursi adalah metode pemecahan masalah komputasi di mana solusinya bergantung pada solusi untuk kasus yang lebih kecil dari masalah yang sama (untuk di breakdown menjadi proses/perhitugan yang lebih kecil).
Rekursi memecahkan masalah rekursif tersebut dengan menggunakan fungsi yang memanggil diri mereka sendiri dari dalam kode mereka sendiri (bisa dikatakan looping function).

Kekuatan rekursi ternyata terletak pada kemungkinan mendefinisikan kumpulan objek yang tak terbatas dengan pernyataan yang terbatas.
Dengan cara yang sama, jumlah komputasi yang tidak terbatas dapat dijelaskan oleh program rekursif hingga, bahkan jika program ini tidak mengandung pengulangan eksplisit (function call tidak memerlukan define loop, jadi gak ada for loop. Biasanya cukup dengan kondisi - if else)

[source: Google Translate ~ dengan tambahan hehehe..]

## Example of Recursive Programming in JS

Disini saya akan memberikan contoh recursive programming dalam bahasa JS dengan contoh kasus perhitungan pangkat.

Kita tahu 2^10=1024 berasal dari x dikalikan sebanyak y kali. Umumnya untuk menyelesaikan masalah ini melakukan for loop 2\*2\*2\*2\*2\*2\*2\*2\*2\*2. Tapi kita bisa menyelesaikan masalah ini dengan beban compile perhitungan yang lebih kecil untuk meningkatkan performa codingan kita.

Tentu untuk menyelesaikan kasus ini dengan recursive programming kita perlu mempelajari terlebih dahulu bagaimana rumus perhitungan matematika dari pangkat tsb, dan bagaimana menyederhanakannya. Sebenernya itulah inti dari recursive programming, mencari tahu solusi yang lebih sederhana dari masalah yang lebih kompleks. Dan menurut saya itulah tantangannya (kesulitannya).

*Dalam perhitungan pangkat 2^10 bisa disederhanakan menjadi 2^5 \* 2^5 loooh, atau x^n => x^(n/2) \* x^(n/2).*

2 ^ 10 => 2^5 \* 2^5 => (2 * 2^2 \* 2^2) * (2 * 2^2 \* 2^2) => ...

(Untuk penjelasan dari penyederhanaan matematikanya silahkan dicari di tempat lain yaaa hehe.)

## The Code
```
const power = (x, y) => {
  if (y === 0)
    return 1;

  let temp;
  temp = power(x, parseInt(y / 2));

  if (y % 2 === 0)
    return temp * temp;
  else {
    if (y > 0)
      return x * temp * temp;
    else
      return (temp * temp) / x;
  }
}
```

## Usage
```
const z = power(2, 10);
console.log(z); // RETURN 1024
```

Sepertinya cukup sekian.
Di file index.js saya kasih 2 contoh kasus, bisa cek ke TKP yaa
