
// //Node Code.
Array.prototype.even = function(){
    //console.log(this);
    //console.log(this[0]);
    var temp = new Array();
    var len = this.length;
    var newarray = this;
    setTimeout(function(){
	    for(var i = 0; i<len; i++){
            if(newarray[i] % 2 === 0){
                //console.log(newarray[i]);
                temp.push(newarray[i]);
            }
        }
        console.log(temp);
    }, 2000)
}
Array.prototype.odd = function(){
    //console.log(this);
    //console.log(this[0]);
    var temp = new Array();
    var len = this.length;
    var newarray = this;

    setTimeout(function(){
	    for(let i = 0; i<len; i++){
            //console.log(newarray);
            if(newarray[i] % 2 !== 0){
                temp.push(newarray[i]);
            }
        }
        console.log(temp);
    }, 2000)
}
console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');