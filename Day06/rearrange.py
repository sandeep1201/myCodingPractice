def rearrange(lst):
    # Write your code here
    last_negative_index = 0
    for i in range(len(lst)):
        if lst[i] < 0:
            tmp = lst[i]
            lst.remove(lst[i])
            lst.insert(last_negative_index, tmp)
            last_negative_index+=1
    return lst

print(rearrange([10,-1,20,4,5,-9,-6]))