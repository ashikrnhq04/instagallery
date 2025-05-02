class ImageNode {
  public data: string;
  public next: ImageNode | null;
  public prev: ImageNode | null;
  constructor(data: string) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class ImageList {
  private head: ImageNode | null;
  private current: ImageNode | null;
  private size: number;
  private tail: ImageNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.size = 0;
  }

  append(data: string): void {
    const newNode = new ImageNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      this.current = newNode;

      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      //connect newNode to next and prev
      newNode.next = this.head;
      newNode.prev = this.tail;

      if (this.tail) {
        this.tail.next = newNode;
      }
      //update tail
      this.tail = newNode;

      //update head prev connection to new node
      this.head.prev = this.tail;
    }
    this.size++;
  }

  next() {
    if (this.hasNext()) {
      this.current = this.current?.next || null;
      return this.current?.data;
    }
    return null;
  }

  hasNext(): boolean {
    return !!this.current && this.current?.next !== this.head;
  }

  prev() {
    if (this.hasPrev()) {
      this.current = this.current?.prev || null;
      return this.current?.data || null;
    }
    return null;
  }

  hasPrev(): boolean {
    return !!this.current && this.current?.prev !== this.tail;
  }

  getCurrent() {
    return this.current?.data || null;
  }

  getSize(): number {
    return this.size;
  }

  //open the access of head node in case of loop through
  getHead() {
    if (this.head) {
      this.current = this.head;
      return this.current.data;
    }
    return null;
  }

  //open the access of tail node in case of loop through
  getTail() {
    if (this.tail) {
      this.current = this.tail;
      return this.current.data;
    }

    return null;
  }

  getGallery() {
    const images: string[] = [];
    let current = this.head;

    if (!current) return images;

    do {
      images.push(current.data);
      current = current.next as ImageNode;
    } while (current !== this.head);

    return images;
  }
}

export default ImageList;
