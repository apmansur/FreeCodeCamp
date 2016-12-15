var findMedianSortedArrays = function(nums1, nums2) {
    var array=nums1.concat(nums2);
    var sorted= array.sort(function(a, b){return a-b}); ***always put function in for sorting
    var position= (sorted.length)/2;
    var evenOrOdd= sorted.length % 2;
    var answer = 0; 
    
        if (evenOrOdd === 0){
            answer=((sorted[(position-1)])+(sorted[position]))/2;
        }
        else {
            answer = sorted[(Math.ceil(position)-1)]
        }
    return answer ;
        
};
