const express = require('express');
const bodyparser = require('body-parser');

const app = express();

// Parse URL-encoded form data
app.use(bodyparser.urlencoded({ extended: true }));

// GET route to show the form
app.get('/contact-us', (req, res, next) => {
  console.log('Handling GET /contact-us', req.method, req.url, req.body);
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
          <input type="text" class="form-control" id="studentName" name="studentName" placeholder="Enter full name">
        </div>
    
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="studentEmail" name="studentEmail" placeholder="Enter email">
        </div>
    
        <div class="mb-3">
          <label for="studentPhone" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="studentPhone" name="studentPhone" placeholder="Enter phone number">
        </div>
    
        <div class="mb-3">
          <label for="studentDOB" class="form-label">Date of Birth</label>
          <input type="date" class="form-control" id="studentDOB" name="studentDOB">
        </div>
    
        <div class="mb-3">
          <label for="studentGender" class="form-label">Gender</label>
          <select class="form-select" id="studentGender" name="studentGender">
            <option selected disabled>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
    
        <div class="mb-3">
          <label for="studentAddress" class="form-label">Address</label>
          <textarea class="form-control" id="studentAddress" name="studentAddress" rows="3" placeholder="Enter address"></textarea>
        </div>
    
        <div class="mb-3">
          <label for="studentCourse" class="form-label">Course</label>
          <input type="text" class="form-control" id="studentCourse" name="studentCourse" placeholder="Enter course name">
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

// POST route to handle form submission
app.post('/contact-us', (req, res, next) => {
  console.log('Handling POST /contact-us', req.method, req.url, req.body);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Form Submitted</title>
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
    
    <div class="container mt-5">
      <h2 class="mb-4 text-center text-success">Form Submitted Successfully</h2>
      <p class="text-center">Thank you, your information has been received.</p>
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

