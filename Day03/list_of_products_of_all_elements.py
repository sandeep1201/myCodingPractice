def find_product(lst):
    result = []
    # Write your code here
    for i in range(len(lst)):
        product = 1
        j = 0
        while(j < len(lst)):
            if j is not i:
                product *= lst[j]
                j+=1
            else:
                j+=1
        result.append(product)
    return result



# another approach to find_product where we save the number of iterations in the loop

def find_product_save_iterations(lst):
    result = []
    left = 1  # To store product of all previous values from currentIndex
    for i in range(len(lst)):
        currentproduct = 1  # To store current product for index i
        # compute product of values to the right of i index of list
        for ele in lst[i+1:]:
            currentproduct = currentproduct * ele
        # currentproduct * product of all values to the left of i index
        result.append(currentproduct * left)
        # Updating `left`
        left = left * lst[i]

    return result


def find_product_with_less_time_complexity(lst):
    # get product start from left
    left = 1
    product = []
    for ele in lst:
        product.append(left)
        left = left * ele
    # get product starting from right
    right = 1
    for i in range(len(lst)-1, -1, -1):
        product[i] = product[i] * right
        right = right * lst[i]

    return product



print(find_product_with_less_time_complexity([0,1,2,3]))