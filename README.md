# Chattr

A online chat application made with Angular 9.0 and ASP.NET 5.0.

# Tables of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

# Prerequisites

If you want to run this project on your own computer you wil need the folowwing things: 

- Node.js installed
  - https://nodejs.org/en/
- Angular CLI installed
  - `npm install -g @angular/cli`
- DotNet 5.0 Installed
- SQL Database installed on localhost
  - If you're an apple fanboi, refer to Web III for running a SQL Server Database in a Docker container.

Or you can visit the website [here](https://wonderful-coast-001bcd303.azurestaticapps.net/).

# Usage

Visit the website [here](https://wonderful-coast-001bcd303.azurestaticapps.net/).

Or

```
git clone [this repository]
```

### Client

```
cd Client
npm install
ng build
npm start
```

### Server

```
cd Server/Api
dotnet watch run
```

---

## Production

### Client

```
cd Client
npm install
ng build --prod
```

### Server

```
cd Server/Api
dotnet run
```

# Tests

Test 1: Trying to reach all the pages. ✔️ </br>
Test 2: Trying to POST and GET messages. ✔️

# Questions

If you have any questions, please e-mail me at jonas.v.cutsem@gmail.com.

# Credits

Github: [jonasvancutsem](https://api.github.com/users/jonasvancutsem)

Copyright Jonas Van Cutsem. All Rights Reserved.
