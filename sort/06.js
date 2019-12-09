//煎饼排序
var pancakeSort = function (A) {
  // let length = A.length;
  // let result = [];
  // for(let i=length; i>0; i--) {
  //     let findIndex = A.indexOf(i) + 1;

  //     //356214 =>  653214 =>  412356  看这个例子的第一步操作，其实每步的两次翻转操作可以合并为一次，优化
  //     //A = A.slice(0, findIndex).reverse().concat(A.slice(findIndex));
  //     //A = A.slice(0, i).reverse().concat(A.slice(i));

  //     A = A.slice(findIndex, i).reverse().concat(A.slice(0, findIndex - 1));
  //     result.push(findIndex, i);
  // }
  // return result;
  let arr = [...A]
  A.sort((a, b) => {
    return a - b
  })
  let isSort = arr.every((item, index) => {
    return item === A[index]
  })
  if (isSort) {
    return []
  } else {
    let result = [];
    while (arr.length > 1) {
      //找到数组中最大的数字的下标
      let index = arr.indexOf(Math.max(...arr)) + 1
      if (index === 1) {
        arr.reverse()
        result.push(arr.length)
        arr.pop()
      } else if(index >1 && index < arr.length){
        arr = arr.slice(0, index).reverse().concat(arr.slice(index)).reverse()
        result.push(index)
        result.push(arr.length)
        arr.pop()
      }else if(index === arr.length){
        arr.pop()
      }
     
    }
    return result
  }
};
console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([2,1,3]));
console.log(pancakeSort([2,1]));
