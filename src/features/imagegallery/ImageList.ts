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

  append(data: string): void {
    const newNode = new ImageNode(data);
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
    }
    this.size++;
  }

  next() {
    if (this.hasNext()) {
      this.current = this.current?.next || null;
      return this.current?.data || null;
    }
    return null;
  }

  hasNext(): boolean {
    return !!this.current && this.current?.next !== null;
  }

  prev() {
    if (this.hasPrev()) {
      this.current = this.current?.prev || null;
      return this.current?.data || null;
    }
    return null;
  }

  hasPrev(): boolean {
    return !!this.current && this.current?.prev !== null;
  }

  getCurrent() {
    return this.current?.data || null;
  }

  getSize(): number {
    return this.size;
  }
}

export default ImageList;
