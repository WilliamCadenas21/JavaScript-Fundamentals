const o = new Object;
o.firstName="William"
o.lastName = "Cadenas"
o.isTeaching = true 
o.greet =function(){
	console.log('hi')
}

const o2 = new Object
o.firstName = "William"
o['lastName']= "Cadenas"
const key = "isTeaching"
o[key]=true
o['greet']=function(){
	console.log('hi!!')
}

const o3 = {
	firstName: 'William',
	lastName: 'Cadenas',
	greet: function(){
		console.log('other hi!')
	},
	address:{
		street: 'Main st',
		number: 123,
	},
}
console.log('create without any problem')
console.log('cool')