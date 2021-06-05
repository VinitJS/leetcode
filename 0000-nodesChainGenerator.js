class Node {
    constructor(value=null, next=null, prev=null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    setNext(next) {
        this.next = next;
    }

    print() {
        console.log(this.value)
    }

    iterate() {
        const prev = new Node(null, this);
        let node = prev.next;
        while(node && node.value) {
            console.log(node.value);
            node = node.next;
        }
    }
}

exports.nodesChainGenerator = function (arr) {
    const head = new Node(arr[0])
    let tail = head;
    for(let i=1; i<arr.length; i++) {
        tail.next = new Node(arr[i]);
        tail = tail.next;
    }
    return head;
}