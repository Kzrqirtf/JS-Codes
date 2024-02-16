/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init)
{
    if(nums.length==0)return init;
    let arr=init;
    for(i=0;i<nums.length;i++)
    {
        arr=fn(arr,nums[i]);
    }
    return arr;
    
};