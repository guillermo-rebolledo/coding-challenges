/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = (distance, start, destination) => {
  let reversedDistance = distance.reverse()
  let arrayA;
  let arrayB;
  if (start < destination) {
    arrayA = distance.slice(start, destination);
    arrayB = distance.slice(destination);
  } else {
    arrayA = distance.slice(destination, start);
    arrayB = reversedDistance.slice(destination, start + 2);
  }

  let sumA = 0;
  let sumB = 0;

  arrayA.forEach(element => {
    sumA += element;
  });

  arrayB.forEach(element => {
    sumB += element;
  });

  return Math.min(sumA, sumB);
};



/*
[7,10,1,12,11,14,5,0]
7
2
*/

console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2))

console.log(distanceBetweenBusStops([3, 6, 7, 2, 9, 10, 7, 16, 11], 6, 2))
