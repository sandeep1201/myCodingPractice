'''
The basic idea of Kadane's algorithm is to scan the entire list and at
each position find the maximum sum of the sublist ending there. This is
achieved by keeping a current_max for the current list index and a global_max.

'''

# def find_max_sum_sublist(lst):
#     if(len(lst) <1):
#         return 0
    
#     curr_max = lst[0]
#     global_max = lst[0]
#     length_array = len(lst)

#     for i in range(1, length_array):
#         if curr_max < 0:
#             curr_max = lst[i]
#         else:
#             curr_max = curr_max + lst[i]
#         if global_max < curr_max:
#             global_max = curr_max
#     return global_max

# lst = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
# print("Sum of largest subarray: ", find_max_sum_sublist(lst));
lst = [[1, 2, 3, 4],
       [4, 5, 6, 7],
       [8, 9, 10, 11],
       [12, 13, 14, 15]]

for i in range(0, 4):
    print(lst[i].pop()),