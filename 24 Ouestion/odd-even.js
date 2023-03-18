const odd = [];
const even = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    even[i] = i
  } else {
    odd[i] = i
  }
}

console.log(odd);
console.log(even);