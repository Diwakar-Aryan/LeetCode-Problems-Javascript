function doUnion(nums1, nums2) {
  let set = new Set()
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i])
  }
  for (let i = 0; i < nums2.length; i++) {
    set.add(nums2[i])
  }
  console.log(set.size);
}

let nums1 = [1, 2, 3, 4, 5]
let nums2 = [1, 2, 3]

doUnion(nums1, nums2)