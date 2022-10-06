from typing import List


def lengthOfLIS(nums: List[int]) -> int:
        LIS = [1] * len(nums)
        
        for i in range(len(nums) - 1, -1, -1):
            for j in range(i + 1, len(nums)):
                print(j)
                if nums[i] < nums[j]:
                    LIS[i] = max(LIS[i], 1 + LIS[j])
        # print(LIS)
        return max(LIS)
print(lengthOfLIS( [10, 9, 2, 5, 3, 7, 101, 18] ))