function Node(value, next = null) {
    return {
        value: value,
        next: next
    }
}

function append(value) {
    const newNode = Node(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = newNode;
    }
}

function prepend(value) {
    // prepend adds a node to the beginning of the node list
    const newNode = Node(value, this.head);
    this.head = newNode;
}

function size() {
    // returns the total number of nodes in the list
    let count = 0;
    let current = this.head;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

function headNode() {
    // returns the first node in the list
    return this.head;
}

function tailNode() {
    // returns the last node in the list
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
        current = current.next
    }
    return current
}

function at(index) {
    // returns the node at the given index
    let current = this.head;
    let count = 0;
    while (current) {
        if (count === index) return current;
        count++;
        current = current.next;
    }
    return null;
}

function pop() {
    // returns the last element from the list
    if (!this.head) return null;
    if (!this.head.next) {
        const poppedNode = this.head;
        this.head = null;
        return poppedNode;
    }
    let current = this.head;
    while (current.next.next) {
        current = current.next;
    }
    const poppedNode = current.next;
    current.next = null;
    return poppedNode;

}

function contains(value) {
    // returns true if the passed in value is in the list otherwise returns false
    let current = this.head;
    while (current) {
        if (current.value === value) return true;
        current = current.next;
    }
    return false;
}

function find(value) {
    // returns the index of the matching inserted value or null if value not found
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.value === value) return index;
        current = current.next;
        index++
    }
    return null;
}

function toString() {
    // returns your linked List values as strings
    let current = this.head;
    let result = '';
    while (current) {
        result += `( ${current.value} ) -> `;
        current = current.next
    }
    return result + 'null';
}

function linkedList() {
    return {
        head: null,
        append: append,
        prepend: prepend,
        size: size,
        headNode: headNode,
        tailNode: tailNode,
        at: at,
        pop: pop,
        contains: contains,
        find: find,
        toString: toString
    }
}

const list = linkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString());
console.log(list.size());
console.log(list.pop());
console.log(list.toString());