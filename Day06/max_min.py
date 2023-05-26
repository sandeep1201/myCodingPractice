def max_min(lst):
    res_arr = []
    for i in range(len(lst)):
        if len(res_arr) == len(lst):
                break
        if len(lst) - i > i and i < len(lst) // 2:
            smal = lst[i]
            big = lst[len(lst) - (i+1)]
            res_arr.append(big)
            res_arr.append(smal)
        else:
            res_arr.append(lst[i])
    return res_arr

print(max_min([-10, -1, 1, 1, 1, 1]))