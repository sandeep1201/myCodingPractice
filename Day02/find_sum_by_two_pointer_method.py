def find_sum(lst,k):
    lst.sort()
    for i in range(len(lst)):
        j = len(lst) - 1
        sum = lst[i] + lst[j]
        if sum > k:
            j = j-1
        if sum < k:
            i = i+1
        if sum == k:
            return [lst[i], lst[j]]


print(find_sum([1, 2, 3, 4], 5))