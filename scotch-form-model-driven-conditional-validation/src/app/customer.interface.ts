export interface Customer {
    name: string,
    paymentMethod: {
        type: string //deve ser banco ou cartão
        card: {
            cardNo: string; //deve ser visa, mastercard or amex
            cardHolder: string;
            expiry: string //deve estar no formato MM/YY
        },
        bank: {
            accountNo: string,
            accountHolder: string,
            routingNo: string
        }
    }
}