let vize = prompt("vize notunuzu giriniz");
let final = prompt("final notunuzu giriniz");
let toplam = (vize * 30 / 100) + (final * 70 / 100);

if (toplam >= 85 && toplam <= 100) {
    console.log(`not ortalamanız: ${toplam} Harf Notunuz: AA`);
}
else if (toplam >= 50 && toplam <= 84) {
    console.log(`not ortalamız: ${toplam} Harf Notunuz: CC`);
}
else if (toplam >= 31 && toplam <= 49) {
    console.log(`not ortalamanız: ${toplam} harf Notunuz: DC Şartlı geçtiniz`);
}
else{
    console.log("harf notunuz hesaplanmayacak kadar düşük");
}