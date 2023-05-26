from single_linked_list import LinkedList
from node import Node

def search(lst, value):
    current_node = lst.get_head()
    while current_node:
        if current_node.data == value:
            return True
        else:
            current_node = current_node.next_element
    return False

lst = LinkedList()
lst.insert_at_head(4)
lst.insert_at_head(10)
lst.insert_at_head(40)
lst.insert_at_head(5)
lst.print_list()
print(search(lst, 4))