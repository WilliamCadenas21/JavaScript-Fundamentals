const o = {
	a: 'a',
	b: 'b'

}

const o2 = o

o2.a = 'new value'

//this is an exemple of the theory of oop
console.log(o.a)
//output "new value"

const o3 ={
	c:'c',
	b: 'b',
	obj:{
		key: 'key'
	}
}

const o4 = Object.assign({},o3)

o4.obj.key = 'i am changing this value'

console.log(o3.obj.key)