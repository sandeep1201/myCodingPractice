'''What is merge_sort ?
merge sort is the most basic sorting algorithm that is being used in modern world
This algorithm is based on divide and concur methodology. it first divides the inout array into two
half and then continues to divided them until it cannnot anymore. 
then it sorts the divided array and merge them back till it sorts the whole original input array

'''


def merge_sort(myList):
    if(len(myList) > 1):
        mid = len(myList) // 2
        left = myList[:mid]
        right  = myList[mid:]
        merge_sort(left)
        merge_sort(right)

        i = 0
        j = 0

        k = 0

        while(i < len(left)) and (j < len(right)):
            if(left[i] <= right[j]):
                myList[k] = left[i]
                i+=1
            else:
                myList[k] = right[j]
                j+=1
            k+=1
        
        while i < len(left):
            myList[k] = left[i]
            i+=1
            k+=1
        while j < len(right):
            myList[k] = right[j]
            j +=1
            k +=1

myList = [54,26,93,17,77,31,44,55,20]
merge_sort(myList)
print(myList)