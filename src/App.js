import logo from './logo.svg';
import './App.css';
var name = "Roland Rao";
var email = "rolandrao";
var company = "Nuvalence";
var product = "";
var customerid = "";

function App() {
  return (
    <form onLoad={
        resolveCustomer()
    }>
    <div class="container">
        <dl class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="row">
                        <dt class="col-sm-2">
                          <label for="full-name">Full Name</label>
                        </dt>
                        <dd class="col-sm-10">
                            <label class="input-text" id="full-name">{name}</label>
                        </dd>
                    </div>
                    <div class="row">
                        <dt class="col-sm-2">
                            <label for="beneficiary-email">Beneficiary Email</label>
                        </dt>
                        <dd class="col-sm-10">
                            <label class = "input-text" id="beneficiary-email">{email}</label>

                        </dd>
                    </div>
                    <div class="row">
                        <dt class="col-sm-2">
                            <label for="company-name">Company Name</label>
                        </dt>
                        <dd class="col-sm-10">
                            <label class="input-text" id="company-name">{company}</label> 
                        </dd>
                    </div>
                    <div class="row">
                        <dt class="col-sm-2">
                            <label for="customer-id">Customer ID</label>
                        </dt>
                        <dd class="col-sm-10">
                            <label class="input-text" id="customer-id">{customerid}</label>
                        </dd>
                    </div>
                    <div class="row">
                        <dt class="col-sm-2">
                            <label for="product-code">Product Code</label>
                        </dt>
                        <dd class="col-sm-10">
                            <label class="input-text" id="product-code">{product}</label>
                        </dd>
                    </div>
                </div>


            </div>
        </dl>
    </div>
    <div>
        <input type="submit" value="Submit" class="btn form-button" />
    </div>
</form>
  );
}

function resolveCustomer(){
    var customer = {
        CustomerIdentifier: "1234",
        ProductCode: "Test-Product"
    }

    product = customer.ProductCode;

    customerid = customer.CustomerIdentifier;


}

export default App;