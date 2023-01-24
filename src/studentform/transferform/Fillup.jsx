import React from 'react'
import { useState } from 'react';
import useForm from './useForm'
import validate from './Validinfo'
// https://app.getpostman.com/join-team?invite_code=c68f7920d06d9ebdb201456a74a692fb

const Fillup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    const [value, setValue] = useState([]);
    const [feed, setFeed] = useState([]);

    const handleAdd = () => {
        const increase = [...value,[]]
        setValue(increase)
    }

    const handleFeedAdd = () => {
        const feedAdd = [...feed,[]]
        setFeed(feedAdd)
    }

    const handleFeedAddChange = (onChangeValue, n) => {
        const spanData = [...feed]
        spanData[n] = onChangeValue.target.value;
        setFeed(spanData);
    }

    const handleAddChange = (onChangeValue, i) => {
        const inputData = [...value]
        inputData[i] = onChangeValue.target.value;
        setValue(inputData);
    }

    const handleFeedDelete = (n) => {
        const deleteValue = [...feed]
        deleteValue.splice(n, 1)
        setFeed(deleteValue)
    }

    const handleDelete = (i) => {
        const deleteValue = [...value]
        deleteValue.splice(i, 1)
        setValue(deleteValue)
    }

    console.log(feed, "data:");

  return (
    <div className='container-fluit justify-content-center p-3'>
        <div className='row border-bottom mb-3 p-2'>
        <form onSubmit={handleSubmit} noValidate>
            <div className='container m-auto'>
                <div className='p-2 mb-3 d-flex flex-wrap justify-content-start'>
                    <div className='col-sm-2 mb-2 mr-2 required'>
                        <label className='form-label'> Student Name: </label> 
                        <br />
                        <select className='form-select-sm form-control-sm' 
                            style={{width: "100%"}} 
                            name='studname' 
                            value={values.studname} 
                            onChange={handleChange}>
                            <option>Select One...</option>
                            <option>Brian</option>
                            <option>Dell</option>
                            <option>Anthony</option>
                        </select>
                        {/*<p>{errors.studname && <small>{errors.studname}</small>}</p>*/}
                    </div>
                    <div className='col-sm-2 mb-2 required'>
                        <label className='form-label'> Date: </label>
                        <br />
                        <input type='date' 
                            className='form-control-sm' 
                            id='date' 
                            name='date' 
                            value={values.date} 
                            onChange={handleChange} />
                            {/*<p>{errors.date && <small>{errors.date}</small>}</p>*/}
                    </div>
                    <div className='col-sm-2 mb-2 required'>
                        <label className='form-label'> Classroom: </label>
                        <input type="text"   
                            name='classroom' 
                            className='form-control-sm' 
                            value={values.classroom} 
                            onChange={handleChange} />
                            {/*<p>{errors.classroom && <small>{errors.classroom}</small>}</p>*/}
                    </div>
                </div>
                <div className='p-2 d-flex flex-wrap mb-3 justify-content-start col-md-12'>
                    <div className='mb-2 col-md-4 required'>
                        <label>Discipline (ctrl+click for multiple):</label> <br />
                        <select className='form-select-sm' 
                            name='discipline'
                            value={values.discipline} 
                            onChange={handleChange}>
                            <option>Select One...</option>
                            <option value="Academics">Academics</option>
                            <option value="Occupational Therapy">Occupational Therapy</option>
                            <option value="Physical Therapy">Physical Therapy</option>
                            <option value="Speech-Language Therapy">Speech-Language Therapy</option>
                            <option value="Vision">Vision</option>
                            <option value="Hearing">Hearing</option>
                            <option value="Parent Counseling and Training">Parent Counseling and Training
                            </option>
                            <option value="Assistive Technologies">Assistive Technologies</option>
                            <option value="Music Therapy">Music Therapy</option>
                            <option value="Conductive Education">Conductive Education</option>
                            <option value="Orientation and Mobility">Orientation and Mobility</option>
                        </select>
                    </div>
                    <div className='mb-2 col-md-4 required'>
                        <label>Provider Email(s) (ctrl+click for multiple):</label> <br />
                        <select className='form-select-sm' 
                            style={{width: '100%'}} 
                            name='provider' 
                            value={values.provider} 
                            onChange={handleChange}>
                                <option>Select One...</option>
                                <option>user@email.com</option>
                                <option>any@email.com</option>                           
                        </select>
                    </div>
                </div>

                <div className='container' id="form_content">
                    <div className='row mb-3 d-flex justify-content-between'>
                        <div className='col-md-6 mb-2'>
                            <div className='mb-2 mx-2'>
                                <fieldset>
                                    <legend htmlFor=""><small>Schedule:</small> </legend><small>(all preferred schedules
                                        specific to
                                        the student's
                                        treatment sessions that need to be carried over)</small><br />
                                    <span type="text" placeholder="eg: stander schedule,orthotics/splint schedule"
                                        style={{width: '100%'}} id="schedule_input" 
                                        name="schedule_input" 
                                        className="form-control input attr-input activityInput_box" 
                                        data-placeholder=""
                                        contentEditable="">
                                    </span>
                                </fieldset>
                            </div>
                            <div className='mb-2 mx-2'>
                                <fieldset>
                                    <legend htmlFor=""><small>Regular Schedule:</small> </legend>
                                    <div className='row'>
                                        <div className='d-flex justify-content-between'>
                                            {/* ------------------------------------ */}
                                            <div className='mb-2'>
                                                <label style={{width: "60px"}}>Feeding: </label>
                                                <div className='d-block-flex' id="feeding_holder">
                                                    <div className='feeding_input mb-1' id="feed_div_1">
                                                        <input type="time" className='attr-input' />
                                                        <span type="text" id="feeding_input_1" 
                                                            className='form-control input attr-input activityInput_box'
                                                            data-placeholder="" 
                                                            contentEditable="">
                                                        </span>
                                                        <button type='button' onClick={() => handleFeedAdd()} 
                                                            className='btn btn-primary btn-sm print_hide'
                                                            id="feedingAddBtn">+</button>
                                                            {feed.map((data, n) => {
                                                                return(
                                                                    <div className='feeding_input mb-1' key={n}>
                                                                        <input type="time" 
                                                                            value={data} 
                                                                            className='attr-input' 
                                                                            onChange={e => handleFeedAddChange(e,n)} />
                                                                        <span type="text" id="feeding_input_1" 
                                                                            className='form-control input attr-input activityInput_box'
                                                                            data-placeholder="" 
                                                                            contentEditable="" 
                                                                            value={data} 
                                                                            onChange={e => handleFeedAddChange(e,n)}>
                                                                        </span>
                                                                        <button onClick={() => handleFeedDelete(n)}>X</button>    
                                                                    </div>
                                                                )
                                                            })}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* --------------------------------------- */}
                                            <div className='mb-2'>
                                                <label style={{width: '60px'}}>Nap: </label>
                                                <div className='d-block-flex' id="nap_holder">
                                                    <div className='nap_input mb-1' id="nap_input_1">
                                                        <input type="time" className='attr-input' />
                                                        <span type="text" 
                                                            id="nap_input_1" 
                                                            className='form-control input attr-input activityInput_box'
                                                            data-placeholder="" 
                                                            contentEditable=""></span>
                                                        <button type='button' onClick={() => handleAdd()} 
                                                            className='btn btn-primary btn-sm print_hide'
                                                            id="napAddBtn">+</button>
                                                            {value.map((data, i) => {
                                                                return(
                                                                    <div className='nap_input mb-1' key={i}>
                                                                        <input value={data} 
                                                                            type="time" 
                                                                            className='attr-input' 
                                                                            onChange={e => handleAddChange(e,i)} />
                                                                        <span type="text" 
                                                                            id='nap_input_1' 
                                                                            className='form-control input attr-input activityInput_box'
                                                                            data-placeholder="" 
                                                                            contentEditable="" 
                                                                            value={data} 
                                                                            onChange={e => handleAddChange(e,i)}></span>
                                                                            <button onClick={() => handleDelete(i)}>X</button>
                                                                    </div>
                                                                )
                                                            })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>



                        </div>

                        <div className='col-sm-5' id="backgroundDiv">
                            <fieldset>
                                <legend><small>Background :</small> </legend>
                                <div id="background_container" className='container'>
                                    <table id="backgroundTable" style={{width: "100%"}}
                                        className='table table-bordered table-sm table-hover'>
                                        <tbody>
                                            <tr className='col-sm-6 mb-2 mx-2'>
                                                <th className='col-sm-3 required'><label> Level of Assistance: </label></th>
                                                <th>
                                                    {/*<input type="text" name="background_loa_input"
                                                        id="background_loa_input" style="width: 100%;" class="attr-input ">*/}
                                                    <input type="text" name='assistance'id="background_loa_input"
                                                        className='form-control input attr-input activityInput_box'
                                                        data-placeholder="" contentEditable="" 
                                                        value={values.assistance} 
                                                        onChange={handleChange}>
                                                    </input>
                                                </th>
                                            </tr>
                                            <tr className='col-sm-6 mb-2 mx-2'>
                                                <th className='col-sm-3 required'><label>Sensory Regulation: </label></th>
                                                <th>
                                                    <input type="text" name="background_sr_input" id="background_sr_input"
                                                        className='form-control input attr-input activityInput_box'
                                                        data-placeholder="" contentEditable='' 
                                                        value={values.background_sr_input} 
                                                        onChange={handleChange}>
                                                    </input>
                                                </th>
                                            </tr>
                                            <tr className='col-sm-6 mb-2 mx-2'>
                                                <th className='col-sm-3'><label> Emergency Protocols: </label></th>
                                                <th>
                                                    <span type="text" name="background_ep_input" id="background_ep_input"
                                                        className='form-control input attr-input activityInput_box'
                                                        data-placeholder="" contentEditable=""></span>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3 "><label> H/o Seizure: </label></th>
                                                <th>
                                                    <span type="text" name="background_hos_input" id="background_hos_input"
                                                        className="form-control input attr-input activityInput_box"
                                                        data-placeholder="" contentEditable="">
                                                    </span>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3 "><label> Contraindications: </label></th>
                                                <th>
                                                    <span type="text" name="background_contrain_input"
                                                        id="background_contrain_input" className="form-control input attr-input activityInput_box" 
                                                        data-placeholder="" contentEditable="">
                                                    </span>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3"><label> Special Precautions:</label></th>
                                                <th>
                                                    <span type="text" name="background_sp_input" id="background_sp_input"
                                                    className="form-control input attr-input activityInput_box" 
                                                    data-placeholder="" contentEditable=""></span>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3"> <label> Standardized Test Scores: </label></th>
                                                <th>
                                                    <span type="text" name="background_sts_input" id="background_sts_input"
                                                    className="form-control input attr-input activityInput_box" 
                                                    data-placeholder="" contentEditable=""></span>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2 ">
                                                <th className="col-sm-3 required"><label> Goal Adjustment Updates: </label></th>
                                                <th>
                                                    <input type="text" name="background_gau_input" id="background_gau_input"
                                                        className="form-control input attr-input activityInput_box" 
                                                        data-placeholder="" contentEditable="" 
                                                        value={values.background_gau_input} 
                                                        onChange={handleChange}>
                                                    </input>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3 required"><label> Specific Treatment Protocol: </label>
                                                </th>
                                                <th>
                                                    <input type="text" name="background_stp_input" id="background_stp_input"
                                                        className="form-control input attr-input activityInput_box" 
                                                        data-placeholder="" contentEditable="" 
                                                        value={values.background_stp_input} 
                                                        onChange={handleChange}>
                                                    </input>
                                                </th>
                                            </tr>
                                            <tr className="col-sm-6 mb-2 mx-2">
                                                <th className="col-sm-3"> <label> Additional Comments: </label></th>
                                                <th>
                                                    <span type="text" name="background_ac_input" id="background_ac_input"
                                                    className="form-control input attr-input activityInput_box" 
                                                    data-placeholder="" contentEditable=""></span>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </fieldset>
                        </div>

                    </div>

                    <div className='container'>
                        <div className='row col-md-12 d-flex flex-wrap justify-content-between'>
                            <div className='col-md-2 mb-2 mx-2'>
                                <fieldset>
                                    <legend><small>Equiments:</small></legend>
                                    <fieldset className='mb-1'>
                                        <label style={{width: "55px"}}>Owned: </label>
                                        <span type="text" 
                                            name="equip_owned_input" 
                                            id='equip_owned_input' 
                                            className='form-control input attr-input activityInput_box' 
                                            data-placeholder='' 
                                            contentEditable="" 
                                            style={{minWidth: "200px"}}>
                                        </span>
                                    </fieldset>
                                    <fieldset className='mb-1'>
                                        <label style={{width: "55px"}}>Needed: </label>
                                        <span type="text" 
                                            style={{minWidth: "200px"}} 
                                            name="equip_needed_input" 
                                            id='equip_needed_input' 
                                            className='form-control input attr-input activityInput_box' 
                                            data-placeholder='' contentEditable="">
                                        </span>
                                    </fieldset>
                                </fieldset>
                            </div>

                            <div className='col-md-2 mb-2 mx-2'>
                                <fieldset>
                                    <legend htmlFor=""><small>Strengths:</small></legend> <br />
                                    <span type="text" 
                                        name="strength_input" 
                                        id='strength_input' 
                                        className='form-control input attr-input activityInput_box' 
                                        data-placeholder='' 
                                        contentEditable='' 
                                        style={{minWidth: "200px"}}>
                                    </span>
                                </fieldset>
                            </div>
                            <div className='col-md-2 mb-2 mx-2'>
                                <fieldset>
                                    <legend htmlFor=""><small>Target Area:</small></legend> <br />
                                    <span type="text" 
                                        name="target_area_input" 
                                        id='target_area_input' 
                                        className='form-control input attr-input activityInput_box' 
                                        data-placeholder='' 
                                        contentEditable='' 
                                        style={{minWidth: "200px"}}>
                                            
                                    </span>
                                </fieldset>
                            </div>
                            <div className='col-md-2 mb-2 mx-2'>
                                <fieldset>
                                    <legend htmlFor=''><small>Allergies:</small></legend> <br />
                                    <span type="text" 
                                        name="allergies_input" 
                                        id='allergies_input' 
                                        className='form-control input attr-input activityInput_box' 
                                        style={{minWidth: '200px'}} 
                                        data-placeholder="" 
                                        contentEditable="">

                                    </span>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {errors.studname && <div className='alert alert-danger' 
                    style={{display: "flex", marginTop: "1%", marginLeft: "10%", marginRight: "10%"}}>{errors.studname}</div>}
            </div>

            <div className='row mb-5 mt-5' 
                style={{marginLeft: "20%", marginRight: "20%"}}>
                <button type='submit' 
                    className='btn btn-primary btn-lg'>
                        Submit
                </button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default Fillup