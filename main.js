const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]



function shopItemFormat(obj){
    
    for(const e of obj){
        console.log('==========================================================')
        console.log(`name:    ${e.name}`)
        console.log(`price:  ${e.price}`)
        console.log(`desc:    ${e.desc}`)
        console.log(`category   ${e.category}`)
    }

}
shopItemFormat(shopItems) 

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function hwPersonFormat(obj){
    let result = ''
        Object.keys(obj).forEach((i)=> {result += `{${i}contains: ${hwPerson[i]}`})
            console.log(result)
}        
    //   not really sure how to tackle shakes, i feel like im almost there
hwPersonFormat(hwPerson)

// Question 3:

// Create a Promised based function that will check a string to determine if it's length is greater than 10.

// If the length is greater than 10 then resolve it and console log "Big word". 

// If the length of the string is less than 10 then reject it and  console log "Small String"

const isBigWord = (astring) =>{
    return new Promise((res,rej)=>{
        if(astring.length > 10){
            res(true)
        }else{
            rej(false)
        }
    })
}
isBigWord('this is a big word')
.then((resolve)=>console.log('Big Word'))
.catch((error)=>console.log('Small String'))


// Question 4:
// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add  a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Player hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12

class GameMember{
    constructor(){
        this.hand =[Math.floor(Math.random()*13),Math.floor(Math.random()*13)]
    }
    
}
class Player extends GameMember{
    hit(){if(this.hand.reduce((acc,num) => acc+num,0)<21){
        this.hand.push(Math.floor(Math.random()*13))+1; console.log(this.hand)}else{
            console.log('Bust')
        }
        
    }
}
class Dealer extends GameMember{
    hit(){if(this.hand.reduce((acc,num) => acc+num,0)<17){
        this.hand.push(Math.floor(Math.random()*13)) +1; console.log(this.hand)}else{
            console.log('dealer Bust')
        }
        
    }
}
const player = new Player()
console.log(player.hand)
const dealer = new Dealer()
console.log(dealer.hand)

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

// 1: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// function makeNegative(num) {if(num >0){
//     return num-num*2
//   }else{
//     return num
//   }
    
//   }

// 2: https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript
// function toAcronym(inp){
//     const splitInp = inp.split(' ')
//     const list = []
//     const newlist=[]
//       list.push(splitInp.map((x)=> x[0]))
     
//       return list.map((x)=> x.join(''))[0].toUpperCase()
      
//     }

// 3: https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// function hero(bullets, dragons)
        // return bullets/dragons >= 2