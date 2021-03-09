/**
347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/

Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let heapList = [];

var topKFrequent = function(nums, k) {
    let map = {};
    let output = [];
    heapList = [];
    
    if(nums.length === k) return nums;
    
    for(let num of nums){
        map[num] = map[num] || 0;
        map[num]++;
    }

    createHeap(map, k);  
    
    while(k > 0){
        output.push(poll()[0]);
        k--;
    }
    return output;
    
};


const poll = () => {
    if(heapList.length === 0) return null;
    if(heapList.length === 0) return heapList.pop();
    
    let top = heapList[0];
    heapList[0] = heapList.pop();
    maxHeapifyDown(0);
    return top;
}

const createHeap = (map, limit) => {
    let counter = 0;
    // create heap upto full right node
    for(let key in map){
        heapList.push([key, map[key]]);
        maxHeapifyUp();
        if(counter >= limit){
            heapList.pop();
       }
    }
}

const hasParent = (index) => {
    return Math.floor((index-1)/2) >= 0;
}

const getParent = (index) => {
    return heapList[Math.floor((index-1)/2)][1];
}

const maxHeapifyUp = (index = heapList.length - 1) => {
    if(hasParent(index) && getParent(index) <= heapList[index][1]){
        // swap
        let tmp = heapList[index];
        heapList[index] = heapList[Math.floor((index-1)/2)]
        heapList[Math.floor((index-1)/2)] = tmp;
        maxHeapifyUp(Math.floor((index-1)/2));
    }
};

const hasLeftChild = (index) => {
    return 2*index + 1 < heapList.length;
}

const hasRightChild = (index) => {
    return 2*index + 2 < heapList.length;
}

const getLeftChild = (index) => {
    return heapList[2*index + 1];
}

const getLeftChildIndex = (index) => {
    return 2*index + 1;
}

const getRightChildIndex = (index) => {
    return 2*index + 2;
}

const getRightChild = (index) => {
    return heapList[2*index + 2];
}

const maxHeapifyDown = (index) => {
    let currIndex = null;
    if(hasLeftChild(index)){
        if(getLeftChild(index)[1] > heapList[index][1]){
            currIndex = getLeftChildIndex(index);
            if(hasRightChild(index) &&  getRightChild(index)[1] > getLeftChild(index)[1]){
                currIndex = getRightChildIndex(index);
            }
        } else if(hasRightChild(index) && getRightChild(index)[1] > heapList[index][1]){
            currIndex = getRightChildIndex(index);
        } else {
            return;
        }
        // swap
        let tmp = heapList[index];
        heapList[index] = heapList[currIndex];
        heapList[currIndex] = tmp;
        maxHeapifyDown(currIndex);
    }
}