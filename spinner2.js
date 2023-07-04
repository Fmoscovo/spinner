process.stdout.write("Loading....  \n");
const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, (time += 200));
}
setTimeout(() => {
  process.stdout.write("\nSpinning complete! ");
}, (time += 200));

// setTimeout(() => {
//   process.stdout.write("\r|   ");
//   setTimeout(() => {
//     process.stdout.write("\r/   ");
//     setTimeout(() => {
//       process.stdout.write("\r-   ");
//       setTimeout(() => {
//         process.stdout.write("\r\\   ");
//         setTimeout(() => {
//           process.stdout.write("\r|   ");
//           setTimeout(() => {
//             process.stdout.write("\r/   ");
//             setTimeout(() => {
//               process.stdout.write("\r-   ");
//               setTimeout(() => {
//                 process.stdout.write("\r\\   ");
//                 setTimeout(() => {
//                   process.stdout.write("\r|   \n");
//                   setTimeout(() => {
//                     process.stdout.write("Spinning complete! ");
//                   }, 100);
//                 }, 300);
//               }, 500);
//             }, 700);
//           }, 900);
//         }, 1100);
//       }, 1300);
//     }, 1500);
//   }, 1700);
// }, 1900);
