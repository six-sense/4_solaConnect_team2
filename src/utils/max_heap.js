export class MaxHeap {
    constructor(){
        this.heap = [null];
    }

    size(){
        return this.heap.length -1;
    }

    getMin(){
        return this.heap[1] ? this.heap[1] : null;
    }

    swap(a,b){
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }

    heappush(value){
        this.heap.push(value);
        let curIndx = this.heap.length-1;
        let parIndx = Math.trunc(curIndx / 2);

        while(curIndx >1 && this.heap[parIndx] < this.heap[curIndx]){
            this.swap(parIndx, curIndx);
            curIndx = parIndx;
            parIndx = Math.trunc(curIndx  /2);
        }
    }

    heappop(){
        const max = this.heap[1];
        if(this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIndx = 1;
        let leftIndx = curIndx * 2;
        let rightIndx = curIndx * 2 + 1;

        if(!this.heap[leftIndx]) return max;
        if(!this.heap[rightIndx]){
            if(this.heap[leftIndx] > this.heap[curIndx]){
                this.swap(leftIndx, curIndx);
            }
            return max;
        }

        while(this.heap[leftIndx] > this.heap[curIndx] || this.heap[rightIndx] > this.heap[curIndx]){
            const maxIndx = this.heap[leftIndx] > this.heap[rightIndx] ? leftIndx : rightIndx;
            this.swap(maxIndx, curIndx);
            leftIndx = curIndx * 2;
            rightIndx = curIndx *2 + 1;
        }
        return max;
    }

}