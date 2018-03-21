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

    self.createCustomer = function () {
        $('#createModal').modal('show');
    }
    self.viewCustomer = function (customer) {
        $('#detailModal').modal('show');
    }
    self.editCustomer = function (customer) {
        $('#editModal').modal('show');
    }
    self.deleteCustomer = function (customer) {
        $('#deleteModal').modal('show');
    }
}

function getCustomer(data) {
    var customer;
    $.each(data, function (i, item) {
        customer = new Customer(item);
        customerViewModel.customers.push(customer);
    })
}
