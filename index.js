// EXAMPLE 1 : deret penjumlahan
// x=f(n), n=5 => x=5+4+3+2+1
let x = 0;

const addSeries = (num) => {
  if (num === 0)
    return x;
  else {
    x = num + addSeries(num - 1);
    return x;
  };
}

addSeries(5);
console.log(x);

// EXAMPLE 2 : perhitungan pangkat
// z=f(x^y), x=2 y=10 => z=2*2*2*2*2*2*2*2*2*2
// recursive mengubah menjadi perhitungan yg lebih kecil :
// 2^10 => 2^5 * 2^5 => 2 * 2^2 * 2^2 * 2 * 2^2 * 2^2 => ...
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


const z = power(2, 10);
console.log(z);
