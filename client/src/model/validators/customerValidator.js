import Customer from "../customer/Customer";

class CustomerValidator {
    constructor(customer) {
        this.customerData = customer || new Customer();
    }

    checkCustomerID() {
        return this.customerData.customerID.length > 0;
    }

    checkCustomerPassword() {
        return this.customerData.password.length > 0;
    }

    checkCustomerFirstName() {
        return this.customerData.firstName.length > 0;
    }

    checkCustomerLastName() {
        return this.customerData.lastName.length > 0;
    }

    invalidIDFeedback() {
        return (!this.checkCustomerID()) ? 'Your ID is required' : '';
    }

    invalidPasswordFeedback() {
        return (!this.checkCustomerPassword()) ? 'Your password is required' : '';
    }

    invalidFirstNameFeedback() {
        return (!this.checkCustomerFirstName()) ? 'Your first name is required' : '';
    }

    invalidLastNameFeedback() {
        return (!this.checkCustomerLastName()) ? 'Your last name is required to log in' : '';
    }

    validFeedback() {
        return 'This looks great!'
    }
}
export default CustomerValidator;