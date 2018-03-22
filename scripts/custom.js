function Customer(data) {
    var self = this;
    self.Id = ko.observable();
    self.Name = ko.observable();
    self.Address = ko.observable();
    self.isActive = ko.observable();
    if (data) {
        self.Id(data.Id);
        self.Name(data.Name);
        self.Address(data.Address);
        self.isActive(data.isActive);
    }
}

function customerViewModel() {
    var self = this;
    self.customers = ko.observableArray();
    self.selectCustomer = ko.observable();
    self.newCustomer = ko.observable();
    self.selectCustomerPoint = null;

    self.createCustomer = function () {
        var customer = new Customer();
        customer.Id(self.customers().length);
        customer.isActive(true);
        self.newCustomer(ko.toJS(customer));
        $('#createModal').modal('show');
    }
    self.createConfirm = function () {
        self.customers.push(new Customer(ko.toJS(self.newCustomer)));
    }
    self.viewCustomer = function (customer) {
        self.selectCustomer(customer);
        $('#detailModal').modal('show');
    }
    self.editCustomer = function (customer) {
        self.selectCustomerPoint = customer;
        self.newCustomer(new Customer(ko.toJS(customer)));
        $('#editModal').modal('show');
    }

    self.editConfirm = function () {
        self.customers.replace(self.selectCustomerPoint, new Customer(ko.toJS(self.newCustomer)));
    }

    self.deleteCustomer = function (customer) {
        self.selectCustomerPoint = customer;
        self.selectCustomer(customer);
        $('#deleteModal').modal('show');
    }
    self.deleteConfirm = function () {
        var customer = new Customer(ko.toJS(self.selectedCustomer));
        customer.isActive(false);
        self.customers.replace(self.selectCustomerPoint, customer);
    }
}