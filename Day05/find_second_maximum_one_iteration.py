def find_second_maximum_one_iteration(lst):
    if len(lst) < 2:
        return None
    
    max_no = second_maximum = float('-inf')

    for i in range(len(lst)):
        if lst[i] > max_no:
            second_maximum = max_no
            max_no = lst[i]
        elif lst[i] > second_maximum and lst[i] != max_no:
            second_maximum = lst[i] 
        
    if second_maximum == float('-inf'):
        return None
    return second_maximum

print(find_second_maximum_one_iteration([1,2,5,6,7,99,89]))