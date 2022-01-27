import React, { useState } from "react";
import './App.css'
import Select from 'react-select'


const options = [
    {
        label: "Hockey",
        value: "Hockey"
    },
    {
        label: "Cricket",
        value: "Cricket"
    },
    {
        label: "Snooker",
        value: "Snooker"
    },
    {
        label: "Table tennis",
        input: "Table tennis"
    }]

function FormContainer() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        Cnic: '',
        cnicIssueDate: '',
        mobile: '',
        email: '',
        games: '',
        Religion: '',
        qualification: '',
        DOB: '',
        fvtlanguages: '',
        province: '',
        description: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const { firstName, lastName, Cnic, cnicIssueDate, gender, mobile, email, province, Religion, qualification, DOB, description, password, confirmPassword } = formData;
    const [error, setError] = useState({
        firstName: 'Enter your first name',
        lastName: ' Enter your last name',
        Cnic: 'Enter your CNIC',
        cnicIssueDate: 'Issue Date',
        mobile: 'Enter your number',
        email: 'Enter your email ',
        Religion: 'Enter your religion',
        qualification: 'enter your qualification',
        DOB: 'Enter your DOB',
        fvtlanguages: 'Your fvt languages',
        province: 'select your province',
        description: 'Add some description',
        password: 'Enter your password',
        confirmPassword: ' Confrim your password',
        image: 'Place your image',
        gender: ' Select your gender'
    })
    const [selectedOption, setSelectedOption] = useState(null);
    const [image, setImage] = useState([])

    const settingFormData = (e, value) => {
        setFormData({ ...formData, [e.target.name]: value })
    }
    const settingFormError = (e, errorMsg) => {
        const name = e.target.name;
        setError({
            ...error,
            [name]: {
                ...error[name],
                msg: errorMsg
            }
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'password') {
            settingFormData(e, value);
            settingFormError(e, passwordValidate(value))
        }
        else if (e.target.name === 'email') {
            settingFormData(e, value);
            settingFormError(e, emailValidate(value))
        }
        else if (e.target.name === 'mobile') {
            settingFormData(e, value);
            settingFormError(e, mobileValidate(value))
        }
        else if (e.target.naame === 'Cnic') {
            settingFormData(e, value);
            settingFormError(e, cnicValidate(value))
        }
        else {
            settingFormData(e, value)
        }
    }

    const handleSubmit = () => {
        let fieldAlert = false;
        if (formData.password !== formData.confirmPassword) {
            alert('Password didnt match')
        }
        for (let obj in formData) {
            if (formData[obj] === "") {
                fieldAlert = true;
            }
        }
        if (fieldAlert === true) {
            alert("Fill the form first");
        }
        //setChoice(true);

        if (
            fieldAlert === false &&
            formData.password === formData.confirmPassword
        ) {
            //setModalIsOpen(true);
        }
        console.log(formData);
        // console.log(error);
    };


    const cnicValidate = (value) => {
        var exp = '/^[0-9]{5}-[0-9]{7}-[0-9]{1}';
        var test = exp.test(value)
        if (test) {
            return true;
        } else {
            return false
        }
    }
    const mobileValidate = (value) => {
        var exp1 = '/^[03]{2}[0-9]{2}-[0-9]{7}';
        var test1 = exp1.test(value);
        if (test1) {
            return true
        } else {
            return false
        }
    }
    const emailValidate = (value) => {
        var exp2 = '/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$';
        var test2 = exp2.test(value);
        if (test2) {
            return true
        } else {
            return false
        }
    }
    const passwordValidate = (value) => {
        var exp3 = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/'
        var test3 = exp3.test(value);
        if (test3) {
            return true;
        } else {
            return false
        }
    }




    // console.log(formData)


    const onImageChange = (evt) => {
        if (evt.target.files && evt.target.files[0]) {
            setImage(URL.createObjectURL(evt.target.files[0]));
        }
    }
    return (
        <form>
            <div className='firstsection'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    placeholder='Enter Your First Name'
                />
                {/* <span>
                    style={
                        formData.firstName === "" ? { display: "block" } : { display: "none" }}
                    {error.firstName}
                </span> */}

                <label htmlFor="lastName">last name</label>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    placeholder='Enter your last name'
                />
                {/* {error.lastName} */}
                <label htmlFor="Cnic">CNIC</label>
                <input
                    type="text"
                    id='Cnic'
                    name='Cnic'
                    value={Cnic}
                    onChange={handleChange}
                    placeholder='xxxxx-xxxxxxx-x' />
                {/* {error.Cnic} */}
            </div>
            <div className='profile'>
                <label id='image'  >


                    <input
                        htmlFor='image'
                        type='file'
                        style={{ display: 'none' }}
                        onChange={onImageChange} />
                    {/* <img src={image} style={{ height: '140px' }} alt='' /> */}
                    <img
                        src={image}
                        alt="Choose Your Image"
                        width="200px"
                        height="200px"
                        style={
                            image === null ? { display: "none" } : { display: "block" }
                        } />

                </label>
                {/* {error.image} */}
            </div>
            <div className='secondsection'>
                <label htmlFor="cnicIssueDate">CNIC Issuance Date and Time</label>
                <input
                    type="datetime-local"
                    id='cnicIssueDate'
                    name='cnicIssueDate'
                    value={cnicIssueDate}
                    onChange={handleChange}
                />
                {/* <span>{error.cnicIssueDate}</span> */}
            </div>
            <div className='personalInfo'>
                <div> <label htmlFor="mobile">Mobile Number</label>
                    <input
                        type="tel"
                        id='mobile'
                        name='mobile'
                        value={mobile}
                        onChange={handleChange}
                        placeholder='Your mobile number'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='username@gmail.com'
                    />
                    {/* {error.email} */}
                </div>
            </div>
            <div className='basicInfo'>
                <div>
                    <label htmlFor='province'>Select your Province or state</label>
                    <select
                        id='province'
                        name='province'
                        value={province}
                        onChange={handleChange}>
                        <option>punjab</option>
                        <option>sindh</option>
                        <option>KPK</option>
                        <option>AJK</option>
                        <option>Balochistan</option>
                    </select>
                    {/* {error.province} */}
                </div>
                <div>
                    <label htmlFor='games'>Select Your Favourites games</label>
                    <Select type='checkbox' isMulti={true}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                    <button type="button">Select</button>
                    {/* {error.games} */}
                </div>
            </div>
            <fieldset id='Religion' value={Religion} onChange={handleChange} >
                <legend>Religion</legend>
                <input
                    type='radio'
                    id='reg'
                    value="Islam"
                    name='Religion' />
                <label htmlFor='reg'>Islam</label>
                <input
                    type='radio'
                    id='christians'
                    value="Christianity"
                    name='Religion' />
                <label htmlFor='christians'>Christianity</label>
                <input
                    type='radio'
                    id='hindusim'
                    value="Hinduism"
                    name='Religion' />
                <label htmlFor='hindusim'>Hinduism</label>
                <input
                    type='radio'
                    id='Buddhism'
                    value="Buddhism"
                    name='Religion' />
                <label htmlFor='Buddhism'>Buddhism</label>
                <input
                    type='radio'
                    id='Sikhism'
                    value="Sikhism"
                    name='Religion' />
                <label htmlFor='Sikhism'>Sikhism</label>
                <input
                    type='radio'
                    id='Atheist'
                    value="Atheist"
                    name='Religion' />
                <label htmlFor='Atheist'>Atheist</label>
                <input
                    type='radio'
                    id='other-religion'
                    value="other"
                    name='Religion' />
                <label htmlFor='other-religion'>other</label>
            </fieldset>
            {/* {error.Religion} */}
            <div className='info'>
                <div>
                    <label htmlFor='qualification'>Highest Qualification</label>
                    <select
                        id='qualification'
                        name='qualification'
                        value={qualification}
                        onChange={handleChange}>
                        <option>Matric/ O level</option>
                        <option>Inter/ A level</option>
                        <option>Bachelor</option>
                        <option>Masters</option>
                        <option>Phd</option>
                    </select>
                    {/* {error.qualification} */}
                </div>
                <div>
                    <label htmlFor='DOB'>Choose your DOB</label>
                    <input type='date' id='DOB' value={DOB}
                        onChange={handleChange}
                    ></input>
                    {/* {error.DOB} */}
                </div>
            </div>
            <div className='lang'>
                <fieldset id='fvtlanguages' onChange={handleChange} >
                    <legend>Favourite Language</legend>
                    <input
                        type='checkbox'
                        id='js'
                        name='fvtlanguages'
                        value="JavaScript" />
                    <label htmlFor='js' > JavaScript </label>
                    <input
                        type='checkbox'
                        id='react'
                        name='fvtlanguages'
                        value="React Js" />
                    <label htmlFor='react' > React Js </label>
                    <input
                        type='checkbox'
                        id='node'
                        name='fvtlanguages'
                        value="Node Js" />
                    <label htmlFor='node' > Node Js </label>
                    <input
                        type='checkbox'
                        id='python'
                        name='fvtlanguages'
                        value="Python" />
                    <label htmlFor='python' > Python </label>
                    <input
                        type='checkbox'
                        id='c++'
                        name='fvtlanguages'
                        value="C++" />
                    <label htmlFor='c++' > C++ </label>
                </fieldset>
                {/* {error.fvtlanguages} */}
            </div>

            <div className='details'>
                <label htmlFor='description'>Description</label>
                <textarea
                    name="description"
                    value={description}
                    id='description'
                    rows={10}
                    onChange={handleChange}></textarea>
                {/* {error.description} */}
            </div>
            <div className='credentials'>
                <div>
                    <label htmlFor='password'> Password</label>
                    <input type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />\
                    {/* {error.password} */}
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' id='confirmPassword'
                        value="confirmPassword"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                    {/* {error.confirmPassword} */}
                </div>
            </div>

            <div className='genderInfo'>
                <fieldset id='gender' onChange={(e) => { setFormData({ ...formData, gender: e.target.value }) }} >
                    <legend>Gender</legend>
                    <input
                        type='radio'
                        id='male'
                        value="male"
                        name='gender' />
                    <label htmlFor='male'>Male</label>
                    <input
                        type='radio'
                        id='female'
                        value="female"
                        name='gender' />
                    <label htmlFor='female'>Female</label>
                    <input
                        type='radio'
                        id='other'
                        value="other"
                        name='gender' />
                    <label htmlFor='other'>other</label>
                </fieldset>
                {/* {error.gender} */}
            </div>
            {/* <input type="submit" value="Submit" /> */}
            <button onClick={() => { handleSubmit() }}>Submit</button>
        </form>
    );
}

export default FormContainer;