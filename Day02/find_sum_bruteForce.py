def find_sum(lst,k):
    for i in range(len(lst)):
        for j in range(len(lst)):
            if(lst[i]+lst[j] is k and i is not j):
                return [lst[i],lst[j]]

print(find_sum([1, 2, 3, 4], 5))