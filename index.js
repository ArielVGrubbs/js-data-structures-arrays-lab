// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function  destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let drivers2 = [...drivers, name]
    return drivers2
}

function prependDriver(name){
    let drivers3 = [name, ...drivers]
    return drivers3
}

function removeLastDriver(){
    let drivers4 = drivers.slice(0, drivers.length - 1)
    return drivers4
}

function removeFirstDriver(){
    let drivers5 = drivers.slice(1)
    return drivers5
}