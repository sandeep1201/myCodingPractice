def binary_search(lst,k):
    start = 0
    end = len(lst) - 1
    mid = start + end // 2 
    while start <= end:
        if lst[mid] == k:
            return True, mid
        elif lst[mid] < k:
            mid = mid + 1
        elif lst[mid] > k:
            mid = mid - 1
    return False

print(binary_search([1,2,3,4,5,6],1))