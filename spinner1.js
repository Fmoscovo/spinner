process.stdout.write("I am going to spin!  \rheyyy\n");

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   \n");
}, 1700);

setTimeout(() => {
  process.stdout.write("Spinning complete! ");
}, 1900);

// Let's practice some more with setTimeout, this time creating a low-fidelity loading spinner.

// Using \r for Redrawing a Line
// A problem we'll face right away when trying to "animate" on the terminal is that we'll need to draw a different character to the same part of the terminal. So far, we only know how to write characters or lines to stdout and in doing so we move the cursor forward.

// We need to somehow have our cursor return to the same spot in the output in order to rewrite that part. Thankfully, there are multiple ways to accomplish this, and we'll look at a very simple and limited approach.

// Note
// We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line.
