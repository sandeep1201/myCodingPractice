def linear_search(lst,k):
    for i in range(len(lst)):
        if lst[i] == k:
            return lst[i],i
    return None,-1


print(linear_search([1,2,3,4,66],66))