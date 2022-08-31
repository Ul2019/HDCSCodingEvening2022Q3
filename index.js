//const num = 5;

const num = 0;
const pascalRow = (num) => {
   const res = []
   while (res.length <= num) {
      res.unshift(1);
      for(let i = 1; i < res.length - 1; i++) {
         res[i] += res[i + 1];
      };
   };
   return res
};
console.log(pascalRow(num));