class AppConfig {
    public productsUrl = 'http://localhost:3030/api/products/';
    public productsTop3Url = 'http://localhost:3030/api/products/top-three/';
    public employeesUrl = 'http://localhost:3030/api/employees/';
    public registerUrl = 'http://localhost:3030/api/register/';
    public loginUrl = 'http://localhost:3030/api/login/';
}

const appConfig = new AppConfig();

export default appConfig;