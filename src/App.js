import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PersistentDrawer from "./components/PersistentDrawer/persistentDrawer";
import StaffList from "./components/staff-list.component";
import EditStaff from "./components/edit-staff.component";
import CreateStaff from "./components/create-staff.component";

function App() {
  return (
    <Router>
        <PersistentDrawer />
        <Route path="/0" exact component={StaffList} />
        <Route path="/edit/:id" component={EditStaff} />
        <Route path="/1" component={CreateStaff} />
    </Router>
  );
}

export default App;
