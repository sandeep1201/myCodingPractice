from single_linked_list import LinkedList
from node import Node

def detect_loop(lst):
    # Keep two iterators
    one_step = lst.get_head()
    two_step = lst.get_head()
    while one_step and two_step and two_step.next_element:
        one_step = one_step.next_element  # Moves one node at a time
        two_step = two_step.next_element.next_element  # skips a node
        if one_step == two_step:  # Loop exists
            return True
    return False



lst = LinkedList()

lst.insert_at_head(21)
lst.insert_at_head(14)
lst.insert_at_head(7)

# Adding a loop
head = lst.get_head()
node = lst.get_head()

for i in range(4):
    if node.next_element is None:
        node.next_element = head.next_element
        break
    node = node.next_element

current_node = lst.get_head()

while current_node is not None:
    print(current_node.data)
    current_node = current_node.next_element

print(detect_loop(lst))