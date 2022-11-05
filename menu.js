const menuText = `
Welcome! Select an option below:

      1) View List of Dance Activities
      2) Create New Customer
      3) View A Customer
      4) Display All Customers
      5) Delete A Customer

Click Cancel to Exit the Application
`

const danceList = [
    'Hiphop', 'Ballet', 'Jazz', 'Lyrical'
]


class Customer {
    constructor(name) {
        this.name = name;
        this.activities = '';
    }
}



class CustomerRecords {
    constructor() {
        this.customerArray = [];
    }

    create(customer) {

        this.customerArray.push(customer)
    }
    get(customerID) {

        return this.customerArray[customerID]
    }
    list() {

        return this.customerArray
    }
    update(customerID, customer) {

        this.customerArray[customerID] = customer
    }
    remove(customerID) {
        this.customerArray.splice(customerID, 1);
    }
}




class ViewMenu {
    constructor() {
        this.customers = new CustomerRecords();
    }

    start() {
        let selection = '';
        while (selection != null) {
            selection = prompt(menuText);

            switch (selection) {
                case "1":
                    this.showActivities();
                    break;
                case "2":
                    this.createCustomer();
                    break;
                case "3":
                    this.viewCustomer();
                    break;
                case "4":
                    this.listCustomers();
                    break;
                case "5":
                    this.deleteCustomer();
                    break;
                default:
                    alert("Have a great day!");
                    return
            }
        }
    }

    showActivities() {
        let text = 'Dance List:\n\n'
        for (let i = 0; i < danceList.length; i++) {
            text += `${i}) ${danceList[i]}\n`
        }
        alert(text)

    }

    createCustomer() {
        let name = prompt('Enter name for new customer:');
        let customer = new Customer(name)
        let danceID = prompt('What dance activity would you like to try? Please enter the index.');
        let dance = danceList[danceID];
        if (dance == undefined) {
            alert(`Choose only the index from the list of Dance Activities`);
        } else {
            customer.activities = dance
            this.customers.create(customer);
            alert(`You selected ${dance}!`);
        }
    }


    viewCustomer() {
        let id = prompt("View customer by index");
        let customer = this.customers.get(id)
        if (customer == undefined) {
            alert(`No customer to view`);
        } else {
            alert(`Customer Details: ${customer.name}, ${customer.activities}`);
        }

    }


    listCustomers() {
        let text = ' '
        for (let i = 0; i < this.customers.list().length; i++) {
            let customerList = this.customers.list()
            let customerName = customerList[i].name
            let customerActivity = customerList[i].activities
            text += `${i}) ${customerName}, ${customerActivity} \n`
        }
        alert(text)
    }


    deleteCustomer() {
        let id = prompt("Enter customer index to delete!");
        this.customers.remove(id)
    }
}

let menu = new ViewMenu();
menu.start();
