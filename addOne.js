// For digits = [1, 2, 3], the output should be addOne(digits) = [1, 2, 4];
// For digits = [1, 2, 9], the output should be addOne(digits) = [1, 3, 0];
// For digits = [9, 9, 9], the output should be addOne(digits) = [1, 0, 0, 0].

function addOne(digits) {
  console.log('original input: ', digits);
  let isAccum = true;
  let i = digits.length - 1;

  while (isAccum) {
    const currentNum = digits[i];

    if (currentNum !== 9) {
      digits[i] = currentNum + 1;
      console.log('khe')
      console.log(currentNum, i)
      if(currentNum === 0 && i === 0) {
        digits.unshift(1);
      }
      isAccum = false;
    } else {
      if (i > 0) {
        console.log('not last!')
        const auxNum = digits[i-1];
        if (auxNum === 9) {
          digits[i-1] = 0;
        } else {
          digits[i-1] = auxNum + 1;
        }
        digits[i] = 0;
      } else {
        console.log('last!')
        digits[i] = 0;
        digits.unshift(1);
        isAccum = false;
      }
    }
  }

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   const currentNum = digits[i];
  //   if (currentNum !== 9) {
  //     digits[i] = currentNum + 1;
  //   } else {
  //     if (i > 0) {
  //       console.log('not last')
  //       const auxNum = digits[i-1];
  //       digits[i-1] = auxNum + 1;
  //       digits[i] = 0;
  //     } else {
  //       console.log('last')
  //       digits[i] = 0;
  //       digits.unshift(1);
  //     }
  //   }
  // }

  console.log(digits)
}

addOne([9,9]);