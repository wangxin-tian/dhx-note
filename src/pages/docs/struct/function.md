# 算法

## 哈希索引

## B型树索引

```ts
class BTree {
    degree: number;
    root: Node;

    constructor(degree: number) {
        this.degree = degree;
        this.root = new Node();
    }

    search(key: number): any {
        return this.root.search(key);
    }

    insert(key: number, value: any): void {
        this.root.insert(key, value);
    }
}

abstract class Node {
    keys: number[];

    constructor() {
        this.keys = [];
    }

    abstract search(key: number): any;
    abstract insert(key: number, value: any): void;
}

class InternalNode extends Node {
    children: Node[];

    constructor() {
        super();
        this.children = [];
    }

    search(key: number): any {
        // Binary search to find the child node
        // Recursively call search on the child node
        return null;
    }

    insert(key: number, value: any): void {
        // Binary search to find the child node
        // Recursively call insert on the child node
    }
}

class LeafNode extends Node {
    values: any[];

    constructor() {
        super();
        this.values = [];
    }

    search(key: number): any {
        // Linear search to find the key in the leaf node
        return null;
    }

    insert(key: number, value: any): void {
        // Insert the key-value pair in the leaf node
    }
}

```