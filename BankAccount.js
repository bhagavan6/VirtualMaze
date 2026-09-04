class BankAccount{
    constructor(accountNumber,holderName,balance){
        this.accountNumber=accountNumber;
        this.holderName=holderName;
        this.balance=balance;
    }
    deposit(amount){
       this.balance+=amount; 
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log('Insufficient balance');
        }
        else{
        this.balance-=amount;
        }
    }
    checkbalance(){
        console.log(`Balance: ${this.balance}`);
    }
}
const person1=new BankAccount(101,"Bhagavan",200);

person1.checkbalance();
person1.deposit(500);
person1.checkbalance();
person1.withdraw(450);
person1.checkbalance();
person1.withdraw(400);
person1.checkbalance();