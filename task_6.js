Array.prototype.sortBubble=function(){
    for(var i=0, tmp;i<this.length-1;i++){
    for(var j=0;j<this.length-1;j++){
        if(this[j]>this[j+1]){
            tmp=this[j];
            this[j]=this[j+1];
            this[j+1]=tmp;
        }
    }
    }
    return this;
    }
    
    var mas=[10, 5, 8, 9, 1, 3, 2];
    
    console.log(mas.sortBubble());
