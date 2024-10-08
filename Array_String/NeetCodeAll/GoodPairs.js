const numIdenticalPairs = function(nums) {
    const countMap = {}
    let res =0

    for(const i of nums) {
        if(countMap[i]){
            countMap[i] = countMap[i]+1
            continue
        }
        countMap[i] = 1
    }

    for(const i in countMap) {
        res += countMap[i]*Math.abs((countMap[i]-1)/2)

    }
    return res
}

const T1 = numIdenticalPairs([1,2,3,1,1,3])
const T2 = numIdenticalPairs([1,1,1,1])

console.log(T1, T2)