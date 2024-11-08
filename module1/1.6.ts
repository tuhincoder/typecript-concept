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

richUser.addBalance(500)

const customer = {
    name: 'tuhin',
    balance: 0,
    addedBalance(balance: number): string {
        return `your current balance is ${this.balance + balance}`
    }
}


customer.addedBalance(34)
//


