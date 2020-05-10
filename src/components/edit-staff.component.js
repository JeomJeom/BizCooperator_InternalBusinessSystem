import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './style.css';

export default class EditStaff extends Component {
  constructor(props) {
    super(props);

    this.onChangeStaffID = this.onChangeStaffID.bind(this);
    this.onChangeStaffFName = this.onChangeStaffFName.bind(this);
    this.onChangeStaffLName = this.onChangeStaffLName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeNationality = this.onChangeNationality.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeIdentity = this.onChangeIdentity.bind(this);
    this.onChangeDeptID = this.onChangeDeptID.bind(this);
    this.onChangeDateCommence = this.onChangeDateCommence.bind(this);
    this.onChangeDateCessation = this.onChangeDateCessation.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeTFN_no = this.onChangeTFN_no.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      staff_ID: '',
      staff_Fname: '',
      staff_Lname: '',
      gender: '',
      nationality: '',
      address: '',
      identity: '',
      dept_ID: '',
      date_commencement: new Date(),
      date_cessation: new Date(),
      designation: '',
      TFN_no: '',
      //users: []
    }
  }

  componentDidMount() {
    //use axios.get to get the current exercise from the database and load the data into the state variables. 
    //The only difference in the onSubmit method is that the data is posted to the update route.
    axios.get('http://localhost:5000/staff/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          staff_ID: response.body.staff_ID,
          staff_Fname: response.body.staff_Fname,
          staff_Lname: response.body.staff_Lname,
          gender: response.body.gender,
          nationality: response.body.nationality,
          identity: response.body.identity,
          addr: response.body.addr,
          TFN_no: response.body.TFN_no,
          date_commence: new Date(response.body.date_commence),
          date_cessation: new Date(response.body.date_cessation),
          dept: response.body.dept,
          designation: response.body.designation
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    /*  axios.get('http://localhost:5000/users/')
        .then(response => {
          this.setState({ users: response.data.map(user => user.username) });
        })
        .catch((error) => {
          console.log(error);
        })*/
  }

  onChangeStaffID(e) {
    this.setState({
      staff_ID: e.target.value
    });
  }
  onChangeStaffFName(e) {
    this.setState({
      staff_Fname: e.target.value
    });
  }
  onChangeStaffLName(e) {
    this.setState({
      staff_Lname: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }
  onChangeNationality(e) {
    this.setState({
      nationality: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeIdentity(e) {
    this.setState({
      identity: e.target.value
    });
  }
  onChangeDeptID(e) {
    this.setState({
      dept_ID: e.target.value
    });
  }
  onChangeDateCommence(date) {
    this.setState({
      date_commencement: date
    });
  }
  onChangeDateCessation(date) {
    this.setState({
      date_cessation: date
    });
  }
  onChangeTFN_no(e) {
    this.setState({
      TFN_no: e.target.value
    });
  }
  onChangeDesignation(e) {
    this.setState({
      designation: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const staff = {
      staff_ID: this.state.staff_ID,
      staff_Fname: this.state.staff_Fname,
      staff_Lname: this.state.staff_Lname,
      gender: this.state.gender,
      nationality: this.state.nationality,
      address: this.state.address,
      identity: this.state.identity,
      dept_ID: this.state.dept_ID,
      date_commencement: new Date(),
      designation: this.state.designation,
      TFN_no: this.state.TFN_no,
    };

    console.log(staff);

    axios.post('http://localhost:5000/staff/update/' + this.props.match.params.id, staff)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className= "container">
        <h3>Update Staff Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Staff ID: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.staff_ID}
              onChange={this.onChangeStaffID}
            />
          </div>
          <div className="form-group">
            <label>First Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.staff_Fname}
              onChange={this.onChangeStaffFName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.staff_Lname}
              onChange={this.onChangeStaffLName}
            />
          </div>
          <div className="form-group">
            <label for="gender"> Gender: </label>
            <select id="gender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="form-group">
            <label> Nationality: </label>
            <select name="nationality" onChange={this.onChangeStaffLName}>
              <option value="">-- select one --</option>
              <option value="afghan">Afghan</option>
              <option value="albanian">Albanian</option>
              <option value="algerian">Algerian</option>
              <option value="american">American</option>
              <option value="andorran">Andorran</option>
              <option value="angolan">Angolan</option>
              <option value="antiguans">Antiguans</option>
              <option value="argentinean">Argentinean</option>
              <option value="armenian">Armenian</option>
              <option value="australian">Australian</option>
              <option value="austrian">Austrian</option>
              <option value="azerbaijani">Azerbaijani</option>
              <option value="bahamian">Bahamian</option>
              <option value="bahraini">Bahraini</option>
              <option value="bangladeshi">Bangladeshi</option>
              <option value="barbadian">Barbadian</option>
              <option value="barbudans">Barbudans</option>
              <option value="batswana">Batswana</option>
              <option value="belarusian">Belarusian</option>
              <option value="belgian">Belgian</option>
              <option value="belizean">Belizean</option>
              <option value="beninese">Beninese</option>
              <option value="bhutanese">Bhutanese</option>
              <option value="bolivian">Bolivian</option>
              <option value="bosnian">Bosnian</option>
              <option value="brazilian">Brazilian</option>
              <option value="british">British</option>
              <option value="bruneian">Bruneian</option>
              <option value="bulgarian">Bulgarian</option>
              <option value="burkinabe">Burkinabe</option>
              <option value="burmese">Burmese</option>
              <option value="burundian">Burundian</option>
              <option value="cambodian">Cambodian</option>
              <option value="cameroonian">Cameroonian</option>
              <option value="canadian">Canadian</option>
              <option value="cape verdean">Cape Verdean</option>
              <option value="central african">Central African</option>
              <option value="chadian">Chadian</option>
              <option value="chilean">Chilean</option>
              <option value="chinese">Chinese</option>
              <option value="colombian">Colombian</option>
              <option value="comoran">Comoran</option>
              <option value="congolese">Congolese</option>
              <option value="costa rican">Costa Rican</option>
              <option value="croatian">Croatian</option>
              <option value="cuban">Cuban</option>
              <option value="cypriot">Cypriot</option>
              <option value="czech">Czech</option>
              <option value="danish">Danish</option>
              <option value="djibouti">Djibouti</option>
              <option value="dominican">Dominican</option>
              <option value="dutch">Dutch</option>
              <option value="east timorese">East Timorese</option>
              <option value="ecuadorean">Ecuadorean</option>
              <option value="egyptian">Egyptian</option>
              <option value="emirian">Emirian</option>
              <option value="equatorial guinean">Equatorial Guinean</option>
              <option value="eritrean">Eritrean</option>
              <option value="estonian">Estonian</option>
              <option value="ethiopian">Ethiopian</option>
              <option value="fijian">Fijian</option>
              <option value="filipino">Filipino</option>
              <option value="finnish">Finnish</option>
              <option value="french">French</option>
              <option value="gabonese">Gabonese</option>
              <option value="gambian">Gambian</option>
              <option value="georgian">Georgian</option>
              <option value="german">German</option>
              <option value="ghanaian">Ghanaian</option>
              <option value="greek">Greek</option>
              <option value="grenadian">Grenadian</option>
              <option value="guatemalan">Guatemalan</option>
              <option value="guinea-bissauan">Guinea-Bissauan</option>
              <option value="guinean">Guinean</option>
              <option value="guyanese">Guyanese</option>
              <option value="haitian">Haitian</option>
              <option value="herzegovinian">Herzegovinian</option>
              <option value="honduran">Honduran</option>
              <option value="hungarian">Hungarian</option>
              <option value="icelander">Icelander</option>
              <option value="indian">Indian</option>
              <option value="indonesian">Indonesian</option>
              <option value="iranian">Iranian</option>
              <option value="iraqi">Iraqi</option>
              <option value="irish">Irish</option>
              <option value="israeli">Israeli</option>
              <option value="italian">Italian</option>
              <option value="ivorian">Ivorian</option>
              <option value="jamaican">Jamaican</option>
              <option value="japanese">Japanese</option>
              <option value="jordanian">Jordanian</option>
              <option value="kazakhstani">Kazakhstani</option>
              <option value="kenyan">Kenyan</option>
              <option value="kittian and nevisian">Kittian and Nevisian</option>
              <option value="kuwaiti">Kuwaiti</option>
              <option value="kyrgyz">Kyrgyz</option>
              <option value="laotian">Laotian</option>
              <option value="latvian">Latvian</option>
              <option value="lebanese">Lebanese</option>
              <option value="liberian">Liberian</option>
              <option value="libyan">Libyan</option>
              <option value="liechtensteiner">Liechtensteiner</option>
              <option value="lithuanian">Lithuanian</option>
              <option value="luxembourger">Luxembourger</option>
              <option value="macedonian">Macedonian</option>
              <option value="malagasy">Malagasy</option>
              <option value="malawian">Malawian</option>
              <option value="malaysian">Malaysian</option>
              <option value="maldivan">Maldivan</option>
              <option value="malian">Malian</option>
              <option value="maltese">Maltese</option>
              <option value="marshallese">Marshallese</option>
              <option value="mauritanian">Mauritanian</option>
              <option value="mauritian">Mauritian</option>
              <option value="mexican">Mexican</option>
              <option value="micronesian">Micronesian</option>
              <option value="moldovan">Moldovan</option>
              <option value="monacan">Monacan</option>
              <option value="mongolian">Mongolian</option>
              <option value="moroccan">Moroccan</option>
              <option value="mosotho">Mosotho</option>
              <option value="motswana">Motswana</option>
              <option value="mozambican">Mozambican</option>
              <option value="namibian">Namibian</option>
              <option value="nauruan">Nauruan</option>
              <option value="nepalese">Nepalese</option>
              <option value="new zealander">New Zealander</option>
              <option value="ni-vanuatu">Ni-Vanuatu</option>
              <option value="nicaraguan">Nicaraguan</option>
              <option value="nigerien">Nigerien</option>
              <option value="north korean">North Korean</option>
              <option value="northern irish">Northern Irish</option>
              <option value="norwegian">Norwegian</option>
              <option value="omani">Omani</option>
              <option value="pakistani">Pakistani</option>
              <option value="palauan">Palauan</option>
              <option value="panamanian">Panamanian</option>
              <option value="papua new guinean">Papua New Guinean</option>
              <option value="paraguayan">Paraguayan</option>
              <option value="peruvian">Peruvian</option>
              <option value="polish">Polish</option>
              <option value="portuguese">Portuguese</option>
              <option value="qatari">Qatari</option>
              <option value="romanian">Romanian</option>
              <option value="russian">Russian</option>
              <option value="rwandan">Rwandan</option>
              <option value="saint lucian">Saint Lucian</option>
              <option value="salvadoran">Salvadoran</option>
              <option value="samoan">Samoan</option>
              <option value="san marinese">San Marinese</option>
              <option value="sao tomean">Sao Tomean</option>
              <option value="saudi">Saudi</option>
              <option value="scottish">Scottish</option>
              <option value="senegalese">Senegalese</option>
              <option value="serbian">Serbian</option>
              <option value="seychellois">Seychellois</option>
              <option value="sierra leonean">Sierra Leonean</option>
              <option value="singaporean">Singaporean</option>
              <option value="slovakian">Slovakian</option>
              <option value="slovenian">Slovenian</option>
              <option value="solomon islander">Solomon Islander</option>
              <option value="somali">Somali</option>
              <option value="south african">South African</option>
              <option value="south korean">South Korean</option>
              <option value="spanish">Spanish</option>
              <option value="sri lankan">Sri Lankan</option>
              <option value="sudanese">Sudanese</option>
              <option value="surinamer">Surinamer</option>
              <option value="swazi">Swazi</option>
              <option value="swedish">Swedish</option>
              <option value="swiss">Swiss</option>
              <option value="syrian">Syrian</option>
              <option value="taiwanese">Taiwanese</option>
              <option value="tajik">Tajik</option>
              <option value="tanzanian">Tanzanian</option>
              <option value="thai">Thai</option>
              <option value="togolese">Togolese</option>
              <option value="tongan">Tongan</option>
              <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
              <option value="tunisian">Tunisian</option>
              <option value="turkish">Turkish</option>
              <option value="tuvaluan">Tuvaluan</option>
              <option value="ugandan">Ugandan</option>
              <option value="ukrainian">Ukrainian</option>
              <option value="uruguayan">Uruguayan</option>
              <option value="uzbekistani">Uzbekistani</option>
              <option value="venezuelan">Venezuelan</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="welsh">Welsh</option>
              <option value="yemenite">Yemenite</option>
              <option value="zambian">Zambian</option>
              <option value="zimbabwean">Zimbabwean</option>
            </select>
          </div>
          <div className="form-group">
            <label>Identity No: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.identity}
              onChange={this.onChangeIdentity}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input type="text"
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <label>TFN No: </label>
            <input type="text"
              className="form-control"
              value={this.state.TFN_no}
              onChange={this.onChangeTFN_no}
            />
          </div>
          <div className="form-group">
            <label>Date of Commencement: </label>
            <div>
              <DatePicker
                selected={this.state.date_commencement}
                onChange={this.onChangeDateCommence}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="dept">Department </label>
            <select name="dept" onChange={this.onChangeDeptID}>
              <option value="">-- select one --</option>
              <option value="Accounting department">Accounting Department</option>
              <option value="IT department">IT Department</option>
              <option value="marketing deptment">Marketing Department</option>
              <option value="Operation department">Operations Department</option>
              <option value="sales department">Sales Department</option>
              <option value="Human Resource department">HR Department</option>
            </select>
          </div>
          <div className="form-group">
            <label for="designation">Designation </label>
            <select name="designation" onChange={this.onChangeDesignation}>
              <option value="">-- select one --</option>
              <option value="Accounting Associate">Accounting Associate</option>
              <option value="Accounting Exective">Accounting Exective</option>
              <option value="Accounting Manager">Accounting Manager</option>
              <option value="Accounting Director">Accounting Director</option>
              <option value="Senior Accounting Manager">Senior Accounting Manager</option>
              <option value="Tech Lead">Tech Lead</option>
              <option value="Developer">Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Chief Technology Officer (CTO) ">Chief Technology Officer (CTO) </option>
              <option value="Senior Accounting Manager">Senior Accounting Manager</option>
              <option value="Marketing Associate">Marketing Associate</option>
              <option value="Marketing Executive">Marketing Executive</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="Marketing Director">Marketing Director</option>
              <option value="Senior Marketing Manager">Senior Marketing Manager</option>
              <option value="Operations Associate">Operations Associate</option>
              <option value="Operations Exective">Operations Exective</option>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Operations Director">Operations Director</option>
              <option value="Senior Operations Manager">Senior Operations Manager</option>
              <option value="Sales representive">Sales representive</option>
              <option value="Sales Associate"> Sales Associate</option>
              <option value="Sales Executive">Sales Executive</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Sales Director">Sales Director</option>
              <option value="Senior Sales Manager">Senior Sales Manager</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Update Staff Details" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}