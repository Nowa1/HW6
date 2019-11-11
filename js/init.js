function List(){
	this.length = function () {};
	this.clearArray = function(){};
	this.pop = function(){};
	this.push = function(){};
	this.shift = function(){};
	this.unshift = function(){};
	this.toString = function(){};
	this.sort = function(){};
	this.test = function(){
		this.a = 15;
		console.log(this.a);
	
	};
	
	// console.log(this.test());
}
List();

function  ArrayList() {
	List.call(this);

	this.length = function () {
		if(arguments.length > 0){
			return false;
		}
		let index = 0;
		for (let i = 0; this[i] !== undefined; i++){
			index = i + 1;
		}
		return index;
	};
	this.clearArray	 = function(){
        for(let i = this.length(); i >= 0; i--){
            delete this[i];
        }
    };
	this.push = function (value) {
		if(arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined){
			return false;
		}
		return (this[this.length()] = value);
	};
	this.pop = function (){
		if(arguments.length > 0){
			return false;
		}
		let deleted = this[this.length() - 1];
		delete this[this.length() - 1];
		return deleted;
	};
	this.shift = function () {
		let deleted = this[0];
		for(let i = 0; i < this.length(); i++){
			this[i] = this[i + 1];
		}
		delete this[this.length()];
		return deleted;
	};
	this.unshift = function  (){
		if(arguments.length !== 1){
			return false;
		}
		for(let i = this.length(); i > -1; i--){
			this[i] = this[i - 1];
		}
		this[0] = value;
		return (this[0] = value);
	};
	this.toString = function () {
        if(arguments.length > 0){
            return false
        }

        let string = '';
        let tmpArray = {};
        tmpArray = this;

        for(let i = 0; this[i] !==undefined; i++){
            tmpArray[i] = '' + tmpArray[i]
        }

        for(let i = 0; this[i] !==undefined; i++){
            string += `${tmpArray[i]} `
        }
        return string;
    };
    this.sort = function (commit) {
        if (commit) {
            if (typeof commit == "function") {
                for (let i = 0; i < this.length(); i++) {
                    for (let j = 0; j < this.length(); j++) {
                        if (j === this.length() - 1)
                            break;
                        if (commit(this[j], this[j + 1]) > 0) {
                            let tmp = this[j + 1];
                            this[j + 1] = this[j];
                            this[j] = tmp;
                        }
                    }
                }
            }
            else {
                return false
            }
        }
        else {
            for (let i = 0; i < this.length(); i++) {
                for (let j = 0; j < this.length(); j++) {
                    if (j === this.length() - 1)
                        break;
                    if (String(this[j]) > String(this[j + 1])) {
                        let tmp = this[j + 1];
                        this[j + 1] = this[j];
                        this[j] = tmp;
                    }
                }
            }
        }
    }
	this.test = function(){
		return this.a;
	}
console.log(this.test());
};
let arrayList  = new ArrayList();
console.log(arrayList());


	
// const arrayList = {
//
// 	length : function(){
// 		if(arguments.length > 0){
// 			return false;
// 		}
//
//
// 		let index = 0;
// 		for (let i = 0; this[i] !== undefined; i++){
// 			index = i + 1;
// 		}
// 		return index;
// 	},
//
// 	push : function(value){
// 		if(arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined){
// 			return false;
// 		}
// 		return (this[this.length()] = value);
// 	},
//
// 	pop : function() {
// 		if(arguments.length > 0){
// 			return false;
// 		}
// 		let deleted = this[this.length() - 1];
// 		delete this[this.length() - 1];
// 		return deleted;
// 	},
//
// 	clear : function(){
// 		if(arguments.length > 0){
// 			return false;
// 		}
// 		for(let i = this.length(); i > -1; i--){
// 			delete this[i];
// 		}
// 	},
//
// 	unshift : function(value){
// 		if(arguments.length !== 1){
// 			return false;
// 		}
// 		for(let i = this.length(); i > -1; i--){
// 			this[i] = this[i - 1];
// 		}
// 		this[0] = value;
// 		return (this[0] = value);
// 	},
//
// 	shift : function(){
// 		let deleted = this[0];
// 		for(let i = 0; i < this.length(); i++){
// 			this[i] = this[i + 1];
// 		}
// 		delete this[this.length()];
// 		return deleted;
// 	},
//
// 	toString : function(){
// 		if(arguments.length > 0){
// 			return false;
// 		}
// 		let str = "";
// 		for(let i = 0; i < this.length(); i++){
// 			str +=this[i] + ", ";
// 		}
// 		str = str.substring(0, str.length - 1);
// 		return str;
// 	},
//
// 	toLinkedList : function (){
// 		for(let i = 0; i < this.length(); i++){
// 			linkedList.push(this[i]);
// 		}
// 		return linkedList;
// 	},
//
// 	sort : function(){
//
// 	}
// };
//
// /////////////////////////////////////////////////////////////////////////////
//
// const linkedList = {
//
// 	length : function(){
// 		if(arguments.length !== 0){
// 			return false;
// 		}
// 		return this.root.length;
// 	},
//
// 	root : {
// 		next : null,
// 		prev : null,
// 		length : 0,
// 	},
//
// 	createNode : function(el){
// 		if(arguments.length !== 1){
// 			return false;
// 		}
// 		return {
// 			el : el ? el : null,
// 			next : null,
// 			prev : null,
// 			index : this.root.length,
// 		}
// 	},
//
// 	push : function (el) {
// 		if(arguments.length !== 1){
// 			return false;
// 		}
//         const newNode = this.createNode(el);
// 		let tmp = this.root;
// 		while (tmp.next && (tmp.next !== this.root)){
//             tmp.next.prev = tmp;
//             tmp = tmp.next;
//             newNode.prev = tmp
//         }
// 		tmp.next = newNode;
//         this.root.prev = null;,	
//         this.root.length++;
// 		return true;
//     },
//
// 	pop: function () {
// 		if(this.root.length === 0){
// 			return false;
// 		}
//
// 		if(this.root.length === 1){
// 			 let deleted = this.root.next;
// 			 this.root.next = null;
// 			 this.root.length --;
// 			 return deleted;
// 		}
//
// 		let tmp = this.root;
// 		while(tmp.next !== null){
// 			tmp = tmp.next;
//
// 			if(tmp.index === (this.root.length - 2) ){
// 				let deleted = tmp.next;
// 				tmp.next == null;
// 				this.root.length --;
// 				return deleted
// 			}
// 		}
// 	},
//
// 	unshift : function (el){
// 		const newNode = this.createNode(el);
//
// 		if(this.root.next == null){
// 			this.root.next = newNode;
// 			this.root.length++;
// 		}else{
// 			let tmp = this.root.next;
// 			this.root.next = newNode;
// 			this.root.next.next = tmp;
// 			this.root.length++;
// 		}
// 		return true;
// 	},
//
// 	shift : function(){
// 		if(this.root.next = null){
// 			return false;
// 		}else{
// 			const tmp = this.root.next.next;
// 			this.root.next = tmp;
// 			this.root.length--;
// 		}
// 	},
//
// 	toString : function(){
// 		let str = "";
// 		let tmp = this.root;
// 		while(tmp.next !== null){
// 			tmp = tmp.next;
// 			str += tmp.el + ", ";
// 		}
// 		str = str.substring(0, str.length - 2);
// 		return str;
// 	},
//
// 	toArrayList : function(){
// 		let tmp = this.root;
// 		while(tmp.next !== null){
// 			tmp = tmp.next;
// 			arrayList.push(tmp.el);
// 		}
// 		return arrayList;
// 	},
//
// 	clear:function(){
// 		this.root.next = null;
// 		this.root.prev = null;
// 		this.root.length = 0;
// 	},
//
// 	sort : function(){
//
// 	}
// }







	
	
	
	
