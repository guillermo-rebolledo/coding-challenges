/**
Pattern Recognition

Given a pattern as the first argument and a string of blobs split by | show the number of times the pattern is present in each blob and the total number of matches.

Input:
The input consists of the pattern (“bc” in the example) which is separated by a semicolon followed by a list of blobs (“bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32” in the example). Example input: bc;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32

Output:
The output should consist of the number of occurrences of the pattern per blob (separated by |). Additionally, the final entry should be the summation of all the occurrences (also separated by |).

Example output: 3|2|1|2|8 where ‘bc’ was repeated 3 times, 2 times, 1 time, 2 times in the 4 blobs passed in. And 8 is the summation of all the occurrences (3+2+1+2 = 8)

Test 1
Test Input
bc;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32
Expected Output
3|2|1|2|8

Test 2
Test Input
aa;aaaakjlhaa|aaadsaaa|easaaad|sa
Expected Output
4|4|2|0|10

Test 3
Test Input
b;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32
Expected Output
4|2|3|2|11

Test 4
Test Input
;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32
Expected Output
0|0|0|0|0
 */

function detectPattern(input = "") {
  const [pattern, inputStr] = input.split(";");
  const blobs = inputStr.split("|");
  let result = "";
  let totalCount = 0;

  blobs.forEach((blob) => {
    if (!pattern) {
      result += `0|`;
      totalCount = 0;
    } else {
      let idx = 0;
      let blobSubstr = "";
      let matchCount = 0;
      while (idx < blob.length) {
        blobSubstr = blob.substring(idx, idx + pattern.length);

        if (blobSubstr === pattern) {
          matchCount += 1;
        }

        idx += 1;
      }
      result += `${matchCount}|`;
      totalCount += matchCount;
    }
  });

  return `${result}${totalCount}`;
}

let input = "bc;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32";
console.log(detectPattern(input));
console.log("-------------");

input = "aa;aaaakjlhaa|aaadsaaa|easaaad|sa";
console.log(detectPattern(input));
console.log("--------------");

input = "b;bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32";
console.log(detectPattern(input));
console.log("--------------");

input = ";bcdefbcbebc|abcdebcfgsdf|cbdbesfbcy|1bcdef23423bc32";
console.log(detectPattern(input));
console.log("--------------");
