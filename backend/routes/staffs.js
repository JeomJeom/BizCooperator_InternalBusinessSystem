const router = require('express').Router();
let Staff = require('../models/staff.model');

router.route('/').get((req, res) => {
  //The first endpoint handles incoming HTTP GET requests on the /staffs/ URL path. 
  //We call Staff.find() to get a list of all the users from the database. 
  //The find method returns a promise. 
  //The results are returned in JSON format with res.json(staffs).
  Staff.find()
    .then(staffs => res.json(staffs))
    .catch(err => res.status(400).json('Error: ' + err));
});

//The second endpoint handles incoming HTTP POST requests on the /staffs/add/ URL path. 
//The new variables (such as staff_ID) are part of the request body. 
//After getting the variables, we create a new instance of staff.
router.route('/add').post((req, res) => {
  const staff_ID = req.body.staff_ID;
  const staff_Fname = req.body.staff_Fname;
  const staff_Lname = req.body.staff_Lname;
  const gender = req.body.gender;
  const nationality = req.body.nationality;
  const identity = req.body.identity;
  const addr = req.body.addr;
  const TFN_no = req.body.TFN_no;
  const date_commence = Date.parse(req.body.date_commence);
  const dept = req.body.dept;
  const designation = req.body.designation;

  const newStaff = new Staff({
    staff_ID,
    staff_Fname,
    staff_Lname,
    gender,
    nationality,
    identity,
    addr,
    TFN_no,
    date_commence,
    dept,
    designation,
  });

  //finally, new staff is saved to the database with the save() method and we return “Staff added!”
  newStaff.save()
    .then(() => res.json('New Staff added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//The /:id GET endpoint returns an exercise item given an id. 
router.route('/:id').get((req, res) => {
  Staff.findById(req.params.id)
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});
//The /:id DELETE endpoint deletes an exercise item given an id.
router.route('/:id').delete((req, res) => {
  Staff.findByIdAndDelete(req.params.id)
    .then(() => res.json('Staff deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//The /update/:id POST endpoint updates an existing exercise item.
router.route('/update/:id').post((req, res) => {
  //For this endpoint, we first retrieve the old exercise item from the database based on the id. 
  //Then, we set the exercise property values to what’s available in the request body. 
  //Finally, we call exercise.save to save the updated object in the database.
  Staff.findById(req.params.id)
    .then(staff => {
      const staff_ID = req.body.staff_ID;
      const staff_Fname = req.body.staff_Fname;
      const staff_Lname = req.body.staff_Lname;
      const gender = req.body.gender;
      const nationality = req.body.nationality;
      const identity = req.body.identity;
      const addr = req.body.addr;
      const TFN_no = req.body.TFN_no;
      const date_commence = Date.parse(req.body.date_commence);
      const date_cessation = Date.parse(req.body.date_cessation);
      const dept = req.body.dept;
      const designation = req.body.designation;

      staff.save()
        .then(() => res.json('Staff Details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;