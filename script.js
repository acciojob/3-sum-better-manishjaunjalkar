function threeSum(arr, target) {
// write your code here
	var n = arr.length;
	for(var i=0;i<n;i++){
		for(var j=i+1;j<n;j++){
			for(var k=j+1;k<n;k++){
				if((arr[i]+arr[j]+arr[k])==target){
					return target;
				}
			}
		}

	}
  
}

module.exports = threeSum;
