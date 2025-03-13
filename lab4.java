package MMATLab4;
class Node {
    int value;
    Node next;

    // Constructor for Node
    public Node(int value) {
        this.value = value;
        this.next = null;
    }
}

public class lab4 {
    
    // Function to print the linked list
    public static void printList(Node head) {
        Node temp = head;
        while (temp != null) { //loop to traverse all nodes
            System.out.print(temp.value + " ");
            temp = temp.next;
        }
        System.out.println();
    }

   // function to swap values ​​to the left and right of a node
    public static Node reverseLeftAndRight(Node head, int left, int right) {
        if (head == null || left == right) return head; //If the list is empty or the values ​​of the elements 
        //to the left and right of an element are equal, it returns to the beginning.

        // new Node to handle edge cases
        Node newNode = new Node(0);
        newNode.next = head;
        Node prev = newNode;

     // Move newNode to previous node from left
        for (int i = 1; i < left; i++) {
            prev = prev.next;
            
        }

        
        Node current = prev.next;//left node
        Node next = null;
        Node prevRev = null;

        for (int i = left; i <= right; i++) {
            next = current.next;
            current.next = prevRev;
            prevRev = current;
            current = next;
        }
        
        
        

        // new connections between nodes
        prev.next.next = current;  
        prev.next = prevRev;

        return newNode.next;
    }

    // Main function 
    public static void main(String[] args) {
        
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        System.out.println("Original List:");
        printList(head);

        head = reverseLeftAndRight(head, 2, 4);

        System.out.println("Reversed List:");
        printList(head);
    }
}
//The function iterates through the list in three main steps:
//1. Move to the left position (O(n))
//2. Reverse the sublist from left to right (O(n))
//3. Reconnect the reversed part (O(1))
//
//Total time complexity: O(n)

