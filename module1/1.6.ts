function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 4)

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

addArrow(10, 30)

const addReview = (add1: string, add2: string): string => {
    return add1 + add2;
}

addReview('tuhin', 'mahmudul')

const poorUser = {
    name: 'tuhin',
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance
    }

}

const balance = poorUser.addBalance(7)



const richUser = {
    name: 'mahmudul hasan tuhin',
    balance: 0,
    addBalance(balance: number): string {
        return `my Current ballance ${this.balance + balance}`
    }

}

const balance1 = richUser.addBalance(500)
// console.log(balance1);

const customer = {
    name: 'tuhin',
    balance: 0,
    addedBalance(balance: number): string {
        return `your current balance is ${this.balance + balance}`
    }
}


customer.addedBalance(34)
//



const checkBalance = {
    name: 'tuhin',
    balance: 0,
    addBalance(balance: number) {
        console.log(this.balance + balance);
        this.balance = this.balance + balance
    }
}

checkBalance.addBalance(56)


const arr: number[] = [2, 3, 4, 54, 66]

const newArray: number[] = arr.map((elm: number): number => elm * elm)
console.log(newArray);








const countNumber1: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

const newCountNumber = countNumber1.map((num: number) => num * num)









// const myFriends: string[] = ['tuhin', 'hasan', 'tawsif', 'mahmudul']

// const newFriends = myFriends.map((friend: string) => console.log(friend))
