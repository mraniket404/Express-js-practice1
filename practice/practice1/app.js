
const express = require('express');

const  app = express();

app.use(( req, res, next) => {
    console.log('frist request received', req.method, req.url);
    next();
});

app.use(( req, res, next) => {
    console.log('second request received', req.method, req.url);
    next();
});

// app.use(( req, res, next) => {
//     console.log('third request received', req.method, req.url);
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Navbar</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
//     </head>
//     <body>
//     <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
    
//     </body>
//     </html>    
//     `)
// });

app.get('/', ( req, res, next) => {
     console.log('home page', req.method, req.url);
     res.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Navbar</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
     </head>
     <body>
         <h1>Home Page</h1>
     </body>
     </html>    
     `);
})
app.get('/contact-us',( req, res, next) => {
     console.log('contact page', req.method, req.url);
     res.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Student Information Form</title>
       <!-- Bootstrap CSS -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
     </head>
     <body>
     
     <div class="container mt-5">
       <h2 class="mb-4 text-center text-primary">Student Information Form</h2>
       <form action="/contact-us" method="post">
         <div class="mb-3">
           <label for="studentName" class="form-label">Full Name</label>
           <input type="text" class="form-control" id="studentName" placeholder="Enter full name">
         </div>
     
         <div class="mb-3">
           <label for="studentEmail" class="form-label">Email address</label>
           <input type="email" class="form-control" id="studentEmail" placeholder="Enter email">
         </div>
     
         <div class="mb-3">
           <label for="studentPhone" class="form-label">Phone Number</label>
           <input type="tel" class="form-control" id="studentPhone" placeholder="Enter phone number">
         </div>
     
         <div class="mb-3">
           <label for="studentDOB" class="form-label">Date of Birth</label>
           <input type="date" class="form-control" id="studentDOB">
         </div>
     
         <div class="mb-3">
           <label for="studentGender" class="form-label">Gender</label>
           <select class="form-select" id="studentGender">
             <option selected disabled>Select gender</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
           </select>
         </div>
     
         <div class="mb-3">
           <label for="studentAddress" class="form-label">Address</label>
           <textarea class="form-control" id="studentAddress" rows="3" placeholder="Enter address"></textarea>
         </div>
     
         <div class="mb-3">
           <label for="studentCourse" class="form-label">Course</label>
           <input type="text" class="form-control" id="studentCourse" placeholder="Enter course name">
         </div>
     
         <button type="submit" class="btn btn-success">Submit</button>
       </form>
     </div>
     
     <!-- Bootstrap JS Bundle (with Popper) -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
     </body>
     </html>
     
     `);
     
});

app.post('/contact-us', ( req, res, next) => {
     console.log('contact page', req.method, req.url);
     res.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Student Information Form</title>
       <!-- Bootstrap CSS -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
     </head>
     <body>
     
     <div class="container mt-5">
       <h2 class="mb-4 text-center text-primary">Student Information Form</h2>
       <p>Form submitted successfully</p>
     </div>
     
     <!-- Bootstrap JS Bundle (with Popper) -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
     </body>
     </html>
     
     `);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

