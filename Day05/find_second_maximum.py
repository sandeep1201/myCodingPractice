def find_second_maximum(lst):
    first_max = float('-inf')
    second_max = float("-inf")

    for item in lst:
        if item > first_max:
            first_max = item
    
    for item in lst:
        if item != first_max and item > second_max:
            second_max = item
    
    return second_max

print(find_second_maximum([9,4,3,5,8]))