<!DOCTYPE html>

<head>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <style>
    @media print {

      html body{
        visibility:hidden;
      }

      .print_hide,
      .print_hide * {
        display: none !important;
      }

      .alert {
        display: none !important;
      }
      .print_show{
        visibility: visible;
        position: absolute;
        top: 2%;       
        width: 100%;
      }

      #print_holder {
        visibility: visible;
        position: relative;
        left: 0;
        top: 2%;
        margin-top: 5%;
        margin-right: 5%;
        padding: 2%;
        overflow: visible !important;
      }

    }

    /* #main_container {
      min-width: 8in;
    } */
    img {
      width: auto;
      height: 150px;
    }

    @media screen and (max-width: 500px) {
      img {
        width: 100%;
        height: 150px;
      }
    }

    header {
      background-color: #005cbf;
    }

    /* IMAGE STYLES */
    /* CHECKED STYLES */

    .over_emoji {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .over_emoji + i {
      cursor: pointer;
    }

    .over_emoji:checked + i {
      color: orangered;
    }

    /* HIDE RADIO 
    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    
    [type=radio] + i {
      cursor: pointer;
    }

    [type=radio]:checked + i {
      color: orangered;
    } */

    .dropbtn {
      color: black;
      padding: 2px;
      font-size: 15px;
      border: none;
      cursor: pointer;
    }

    .dropbtn:hover, .dropbtn:focus {
      color: #007bff;
    }

    .dropdown {
      position: relative;
      width: 15em;
      margin: 5px;
      display: inline-block;
    }

    .dropdown-content {
      list-style: none;
      padding: 3px;
      box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
      border-radius: 0.5em;
      color: black;
      font-weight: bold;
      position: absolute;
      display: none;
      width: 15em;
      transition: 0.5s;
      z-index: 1;
    }

    .dropdown-content li {
      padding: 0.7em 0.5em;
      margin: 0.3em 0; 
      border-radius: 0.5em;
      cursor: pointer;
    }

    .dropdown-content li:hover {
      color: #007bff;
    }

    .show {
      display: block;
    }

    #hideDiv {
      width: auto;
      height: auto;
      display: none;
      padding: 2px;
      margin: 2px;
    }

    #diapDiv {
      width: auto;
      height: auto;
      display: none;
      padding: 5px;
      margin: 5px;
    }

    #changeYes {
      width: auto;
      height: auto;
      display: none;
      padding: 2px;
      margin: 2px;
    }

    #mealChange {
      width: auto;
      height: auto;
      display: none;
      padding: 2px;
      margin: 2px;
    }

    #wheelChange {
      width: auto;
      height: auto;
      display: none;
      padding: 2px;
      margin: 2px;
    }

    .emoji_face {
      width: 100px;
      height: 100px;
    }

    #hide {
      font-size: 12px;
      color: white;
      border: none;
      background-color: #919191;
      border-radius: 5px;
      padding: 2px;
      margin-top: 5px;
      z-index: 5;
    }

    #cover {
      font-size: 12px;
      color: white;
      border: none;
      background-color: #919191;
      border-radius: 5px;
      padding: 2px;
      margin-top: 5px;
    }

    .diaper {
      border: solid 1px lightgray;
      height: 30px;
      padding: 6px;
    }

    .asking {
      font-size: 13px;
      color: #007bff;
      margin: 0px;
      font-weight: bold;
    }

    .overall {
      display: flex;
      flex-direction: column;
    }
    .overallText {
      font-size: 14px;
      font-weight: bold;
      margin: 0px;
    }

    .navbar-collapse {
      background-color: #007bff;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 20px;
      margin-top: -12px;
      margin-bottom: -12px;
    }

    #main_nav .col {
      text-align: center;
    }

    .navbar-light .navbar-nav .nav-link {
      color: white;
    }

    .logo_link {
      color: white;
      padding-left: 0;
      padding-right: 0;
    }

    .badge {
      background-color: #007bff;
    }

    .form-control {
      width: 95%;
    }

    input[type='text'] {
      width: 90%;
    }

    .activityInput_box:empty::before {
      content: attr(data-placeholder);

      width: 100%;

    }

    .activityInput_box {
      width: 100%;
      margin-top: 5px;
      margin-bottom: 2px;
    }

    label {
      font-weight: bold;
    }

    .required::before {
      content: "* ";
      color: red;
    }

    .dataTables_length {
      display: none;
    }

    .dataTables_filter {
      display: none;
    }

    .dataTables_info {
      display: none;
    }

    .dataTables_paginate {
      display: none;
    }

    .mask {
      z-index: 20;
      display: flex;
      justify-content: center;
      font-size: larger;
      background-color: whitesmoke;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      bottom: 0;
      min-width: 200px;
      min-height: 300px;
    }
  </style>
</head>

<body>
  <div class="align-items-center mask">
    <p style="font-size: 5vw;display: inline-block;">Reports drafting...</p>
  </div>
  <div id="report_holder">
    <br>
    <form id="wellness_form">
      <div class="container-fluid d-md-flex flex-wrap print_hide" id="header_input_container"
        style="margin-bottom: 1em;">
        <div id="header_student_container" class="col-sm-3">
          <div class="required">
            <label>Choose Student: </label>
            <select name="student_id_input" id="student_id_input" required class="form-control">
              <option value="">Please Select:</option>

            </select>
          </div>



          <br><br>
          <span id="family_email_holder"></span>
          <input id="parent_email_input" type="hidden" />
          <input id="student_name_input" type="hidden" />
        </div>
        <div id="header_date_container" class="col-sm-3 mb-2">
          <div class="required">
            <label>Wellness Report Date: </label>
            <input type="date" name="report_date_input" id="report_date_input" class="dateAutoInput form-control" required />
          </div>



        </div>
        <div id="providers_container" class="col-sm-4 mb-2">
          <div class="">
            <label>Provider  (ctrl+click for multiple):</label><br>
            <select name="provider_email_input" id="provider_email_input" multiple class="form-control">

            </select>
          </div>

        </div>
      </div>
    </form>
    <div class="row text-center pe-0 ps-0 print_show">
      <div class="" style="background-color: #007bff;">
        <img src="images/thumbnail_Logo_Banner.png" />
      </div>
    </div>
    <br>
    <div id="print_holder" class="container-fluid">
      <div id="main_container" class="container p-3 border border-dark">

        <div id="margin_container" class="container">
          <div class="row text-start">
            <div class="col">
              <h5></h5>
              <h6><span id="student_name_holder">Student Name</span></h6>
              <h6><span id="wellness_date_holder">Report Date</span></h6>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span id="nickname_holder">STUDENT</span>&nbsp;arrived at school today at <span
                id="arrival_time_holder">TIME</span>, with a temperature of <span id="temperature_holder">TEMP</span>.
            </div>
          </div>
          <br><br>
          <div style="border-bottom: 1px solid; margin-bottom: 5px;">
            <div class="dropdown">
              <button onclick="dropFunction()" class="dropbtn">
                                What Did Student Use?
                <i class="fa fa-caret-down"></i>()" class="dropbtn">
                What Did Student Use?
                <i class="fa fa-caret-down"></i>
              </button>
              <ul id="wellDropdown" class="dropdown-content">
                <li id="show" onclick="bathFunction()"> Bathroom </li>
                <li id="open" onclick="diapFunction()"> Diaper </li>
              </ul>
            </div>
          </div>

          <!-- Bathroom Section -->
          <div class="" id="hideDiv">
            Bathroom
            <table width="50%" class="">
              <thead style="font-size: 14px;">
                <tr>
                  <th width="6%" style="text-align: left;">Time:</th>
                  <th width="5%" style="text-align: left;">Pee</th>
                  <th width="5%" style="text-align: left;">Poop</th>
                  <th width="5%" style="text-align: left;">Cream</th>
                  <th width="5%"></th>
                </tr>
              </thead>
              <tbody id="bathroom_data_holder" style="height: auto;">
                <tr class="bathroom_content">
                  <div class="input-group">
                    <td><input type="time" class="time_column form-control-sm attr-input" value="" /></td>
                    <td><input type="checkbox" class="pee_column form-check-input attr-input-checkbox" name="pee" />
                    </td>
                    <td><input type="checkbox" class="poop_column form-check-input attr-input-checkbox" name="poop" />
                    </td>
                    <td><input type="checkbox" class="cream_column form-check-input attr-input-checkbox" name="cream" />
                    </td>
                    <td><input type="button" class="btn btn-primary btn-sm add_bathroom_row_button print_hide"
                        value=" + " onclick="addInput('bathroom')" />
                    </td>
                  </div>
                </tr>

              </tbody>
            </table>
            <button id="hide" onclick="closeDiv()">
              Close
            </button>
          </div>
          <!-- Bathroom Section -->

          <!-- Diaper Section -->
          <div id="diapDiv">
            Diaper
            <div>
              <input class="diaper" type="text" placeholder="Diaper Comments" />
            </div>
            <button id="cover" onclick="coverDiv()">
              Close
            </button>
          </div>
          <!-- Diaper Section -->

          <div class="">
            <!-- <table width="50%" class="">
              <thead style="font-size: 14px;">
                <tr>
                  <th width="6%" style="text-align: left;">Time:</th>
                  <th width="5%" style="text-align: left;">Pee</th>
                  <th width="5%" style="text-align: left;">Poop</th>
                  <th width="5%" style="text-align: left;">Dry</th>
                  <th width="5%" style="text-align: left;">Toilet</th>
                  <th width="5%" style="text-align: left;">Cream</th>
                  <th width="5%"></th>
                </tr>
              </thead>
              <tbody id="bathroom_data_holder">
                <tr class="bathroom_content">
                  <div class="input-group">
                    <td><input type="time" class="time_column form-control-sm attr-input" value="" /></td>
                    <td><input type="checkbox" class="pee_column form-check-input attr-input-checkbox" name="pee" />
                    </td>
                    <td><input type="checkbox" class="poop_column form-check-input attr-input-checkbox" name="poop" />
                    </td>
                    <td><input type="checkbox" class="dry_column form-check-input attr-input-checkbox" name="dry" />
                    </td>
                    <td><input type="checkbox" class="toilet_column form-check-input attr-input-checkbox"
                        name="toilet" /></td>
                    <td><input type="checkbox" class="cream_column form-check-input attr-input-checkbox" name="cream" />
                    </td>
                    <td><input type="button" class="btn btn-primary btn-sm add_bathroom_row_button print_hide"
                        value=" + " onclick="addInput('bathroom')" />
                    </td>
                  </div>
                </tr>

              </tbody>
            </table> -->
          </div>
        </div>
        </br>

        <!-- meals & rest time -->
        <div class="row" 
          style="border-bottom: 1px solid; margin-bottom: 10px;">
          <b>Meals & Rest Time</b>
        </div>

        <div class="row">
          <p class="asking">Does The Student Feeding Continue?</p>
          <div>
            <input type="radio" name="meal_name" id="y" value="1" 
              onclick="yesMeal()" />
            <label for="y">Yes</label>
            <input type="radio" name="meal_name" id="n" value="0" 
              onclick="noMeal()" />
            <label for="n">No</label>
          </div>
          <div class="col" id="mealChange">
              Meal Time:
            <br>
            <div>
              <div id="meal_holder" class="row justify-content-start">
                <div class="row d-block mealInput">
                  <div class="col-sm-1">
                    <input type="time" placeholder="meal time" 
                      class="form-control-sm attr-input mealTime_input" value="0" />
                  </div>
                  <div class="col-sm-10 activityInput_box">
                    <span type="text" 
                      class="form-control input mealDetail_input activityInput_box" 
                      data-placeholder="meal detail"  contenteditable></span>
                  </div>
                </div>
              </div>
              <div class="col-md-2 mt-2">
                <input type="button" 
                  class="btn btn-primary btn-sm print_hide" 
                  value=" + Meal" onclick="addInput('meal')" />
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="row">
          <p class="asking">Did the student take rest?</p>
          <div>
            <input type="radio" name="rest_name" id="y" 
              value="1" 
              onclick="yesRadio()" />
            <label for="y">Yes</label>
            <input type="radio" name="rest_name" id="n" 
              value="0" 
              onclick="noRadio()" />
            <label for="n">No</label>
          </div>
          <br>
          <div class="col" id="changeYes">
              Resting:
            <br>
            <div>
              <div id="rest_holder" class="row justify-content-start">
                <div class="row d-block restInput">
                  <div class="col-sm-1">
                    <input type="time" placeholder="rest time" 
                      class="form-control-sm attr-input restTime_input" value="0" />
                  </div>
                  <div class="col-sm-10 activityInput_box">
                    <span type="text" 
                      class="form-control input restDetail_input activityInput_box" 
                      data-placeholder="resting detail"  contenteditable></span>
                  </div>
                </div>
              </div>
              <div class="col-md-2 mt-2">
                <input type="button" 
                  class="btn btn-primary btn-sm print_hide" 
                  value=" + Rest" onclick="addInput('rest')" />
              </div>
            </div>
          </div>
        </div>
        



        <!-- seizure -->
        <div class="row" style="border-bottom: 1px solid; margin-bottom:10px; margin-top: 15px;"><b>Seizure Activity</b>
        </div>
        <div class="row">
          <div class="col">
            <table width="90%" class="">
              <thead>
                <tr>
                  <th width="40%" style="text-align: left;">Time:</th>
                  <th width="" style="text-align: left;">Duration:</th>
                  <th width=""></th>
                </tr>
              </thead>
              <tbody id="seizure_data_holder">


              </tbody>
            </table>
          </div>
        </div>
        </br>
        <!-- activity -->
        <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>Activities</b>
        </div>

        <div class="row">
          <div class="col">
            <div id="activity_holder" class="input-group col-md-10 d-block">

              <div class="col-md-10 activityInput_box mb-4">
                <span type="text" class="form-control input activity_input activityInput_box"
                  data-placeholder="activity detail" contenteditable></span>
              </div>


            </div>
            <div class="col-md-1">
              <input type="button" class="btn btn-primary btn-sm print_hide mt-2" value=" + Activity "
                onclick="addInput('activity')" />
            </div><br>
          </div>
        </div>
        </br>
        <!-- wheel chair check -->
        <div style="margin-bottom: 20px;">
          <!-- <p class="asking">Does The Student Use Wheel Chair?</p>
          <div>
            <input type="radio" id="y" 
              value='1' name="wheel" 
              onclick="yesWheel()" />
            <label for="y">Yes</label>
            <input type="radio" id="n" 
              value="0" name="wheel" 
              onclick="noWheel()" />
            <label for="n">No</label>
          </div> -->
          
            <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>Wheel Chair Check</b>
            </div><span id="wheelChairHolder"></span>
            <div class="row text-muted mx-2" id="wheelChairInfoHolder">
              <div>
                <div class="row d-inline-flex">
                  <div class="form-control-sm">
                    <span><small><b>Check DateTime: </b></small><span id="wheelChairDateHolder"></span></span>
                  </div>
                  <div class="form-control-sm">
                    <span><small><b>Nurse Comment: </b></small> <span id="wheelChairCommentHolder"></span></span>
                  </div>
                  <div class="form-control-sm">
                    <span><small><b>With Problem: </b></small><span id="wheelChairStatusHolder"></span></span>
                  </div>
    
                </div>
    
                <div class='row' id="wheelChairTableHolder">
                  <div class='col-md-12'>
    
                    <div class='table-responsive'>
                      <table id="wheelChairProblemTable" width='100%' class="table table-bordered table-sm table-hover">
                        <thead style="background-color: rgba(64,136,218,0.911);color: aliceblue;">
                          <tr>
                            <th width=15%>Problem Name</th>
                            <th width=15%>Problem Detail</th>
                            <th width=15%>Problem comment</th>
    
                          </tr>
                        </thead>
                        <tbody id='tests_grid'>
    
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div></br>
              </div>
            </div>
        </div>
        <hr />
        <!-- <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>Wheel Chair Check</b>
        </div><span id="wheelChairHolder"></span>
        <div class="row text-muted mx-2" id="wheelChairInfoHolder">
          <div>
            <div class="row d-inline-flex">
              <div class="form-control-sm">
                <span><small><b>Check DateTime: </b></small><span id="wheelChairDateHolder"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>Nurse Comment: </b></small> <span id="wheelChairCommentHolder"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>With Problem: </b></small><span id="wheelChairStatusHolder"></span></span>
              </div>

            </div>

            <div class='row' id="wheelChairTableHolder">
              <div class='col-md-12'>

                <div class='table-responsive'>
                  <table id="wheelChairProblemTable" width='100%' class="table table-bordered table-sm table-hover">
                    <thead style="background-color: rgba(64,136,218,0.911);color: aliceblue;">
                      <tr>
                        <th width=15%>Problem Name</th>
                        <th width=15%>Problem Detail</th>
                        <th width=15%>Problem comment</th>

                      </tr>
                    </thead>
                    <tbody id='tests_grid'>

                    </tbody>
                  </table>
                </div>
              </div>
            </div></br>

          </div>
        </div> -->

        <!-- E Body Check -->
        <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>E body check</b>
        </div><span id="ebodyHolder"></span>
        <div class="row text-muted" id="ebodyInfoHolder">
          <div class="row text-muted mx-2 mb-2" id="ebodyInfo1">
            <div class="row d-inline-flex ">
              <div class="form-control-sm">
                <span><small><b>Check DateTime: </b></small><span id="ebodyDateHolder1"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>Nurse Comment: </b></small> <span id="ebodyCommentHolder1"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>With Issue: </b></small><span id="ebodyStatusHolder1"></span></span>
              </div>


            </div>

            <div class='row' id="ebodyTableHolder1">
              <div class='col-md-12'>

                <div class='table-responsive'>
                  <table id="ebodyProblemTable1" width='100%' class="table table-bordered table-sm table-hover">
                    <thead style="background-color: rgba(64,136,218,0.911);color: aliceblue;">
                      <tr>
                        <th width=15%>Body Label</th>
                        <th width=15%>Body Name</th>
                        <th width=15%>Issue Detail</th>
                        <th width=15%>Issue Explain</th>

                      </tr>
                    </thead>
                    <tbody id='tests_grid'>

                    </tbody>
                  </table>
                </div>
              </div>
            </div></br>

          </div>
          <hr>
          <div class="row text-muted mx-2 " id="ebodyInfo2">
            <div class="row d-inline-flex">
              <div class="form-control-sm">
                <span><small><b>Check DateTime: </b></small><span id="ebodyDateHolder2"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>Nurse Comment: </b></small> <span id="ebodyCommentHolder2"></span></span>
              </div>
              <div class="form-control-sm">
                <span><small><b>With Issue: </b></small><span id="ebodyStatusHolder2"></span></span>
              </div>


            </div>

            <div class='row' id="ebodyTableHolder2">
              <div class='col-md-12'>

                <div class='table-responsive'>
                  <table id="ebodyProblemTable2" width='100%' class="table table-bordered table-sm table-hover">
                    <thead style="background-color: rgba(64,136,218,0.911);color: aliceblue;">
                      <tr>
                        <th width=15%>Body Label</th>
                        <th width=15%>Body Name</th>
                        <th width=15%>Issue Detail</th>
                        <th width=15%>Issue Explain</th>

                      </tr>
                    </thead>
                    <tbody id='tests_grid'>

                    </tbody>
                  </table>
                </div>
              </div>
            </div></br>

          </div>
        </div>
        <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>Needs</b></div>
        <div class="row">
          <div class="col">
            <div class="input-group col-md-10">
              <span type="text" class="form-control input" id="needs_holder" data-placeholder="need detail"
                contenteditable></span><br>
            </div><br>

          </div>
        </div>

        <div class="overall">
          <div style="border-bottom: solid 1px; margin-bottom: 10px;">
            <b>Overall Wellness</b>
          </div>
          <div>
            <div class="table-responsive">
              <table style= 'width: 100%; text-align: center;' class="table table-bordered table-lg table-hover">
                <tbody>
                  <tr>
                    <td style="width: 16%;">Cognitive</td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="cognitive" value="cog_angry value is: 1" class="over_emoji" />
                        <i class="bi bi-emoji-angry" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="cognitive" value="cog_frown value is: 2" class="over_emoji" />
                        <i class="bi bi-emoji-frown" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="cognitive" value="cog_neutral value is: 3" class="over_emoji" />
                        <i class="bi bi-emoji-neutral"  
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="cognitive" value="cog_smile value is: 4" class="over_emoji"  />
                        <i class="bi bi-emoji-smile" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="cognitive" value="cog_laugh value is: 5" class="over_emoji" />
                        <i class="bi bi-emoji-laughing" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <!-- <td><button id="mood_btn">Show Mood</button></td> -->
                    <td><p id="mood_output"></p></td>
                  </tr>
                  <tr>
                    <td style="width: 16%;">Emotional</td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="emotional" value="emo_angry" class="over_emoji" />
                        <i class="bi bi-emoji-angry" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="emotional" value="emo_frown" class="over_emoji" />
                        <i class="bi bi-emoji-frown" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="emotional" value="emo_neutral" class="over_emoji" />
                        <i class="bi bi-emoji-neutral" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="emotional" value="emo_smile" class="over_emoji" />
                        <i class="bi bi-emoji-smile" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="emotional" value="emo_laugh" class="over_emoji" />
                        <i class="bi bi-emoji-laughing" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 16%;">Social</td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="social" value="soc_angry" class="over_emoji" />
                        <i class="bi bi-emoji-angry" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="social" value="soc_frown" class="over_emoji" />
                        <i class="bi bi-emoji-frown" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="social" value="soc_neutral" class="over_emoji" />
                        <i class="bi bi-emoji-neutral" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="social" value="soc_smile" class="over_emoji" />
                        <i class="bi bi-emoji-smile" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="social" value="soc_laugh" class="over_emoji" />
                        <i class="bi bi-emoji-laughing" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 16%;">Occupational</td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="occupational" value="occ_angry" class="over_emoji" />
                        <i class="bi bi-emoji-angry" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="occupational" value="occ_frown" class="over_emoji" />
                        <i class="bi bi-emoji-frown" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="occupational" value="occ_neutral" class="over_emoji" />
                        <i class="bi bi-emoji-neutral"  
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="occupational" value="occ_smile" class="over_emoji" />
                        <i class="bi bi-emoji-smile" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="occupational" value="occ_laugh" class="over_emoji" />
                        <i class="bi bi-emoji-laughing" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 16%;">Physical</td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="physical" value="phy_angry" class="over_emoji" />
                        <i class="bi bi-emoji-angry" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="physical" value="phy_frown" class="over_emoji" />
                        <i class="bi bi-emoji-frown" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="physical" value="phy_neutral" class="over_emoji" />
                        <i class="bi bi-emoji-neutral" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="physical" value="phy_smile" class="over_emoji" />
                        <i class="bi bi-emoji-smile" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                    <td style="width: 16%;">
                      <label>
                        <input type="radio" name="physical" value="phy_laugh" class="over_emoji" />
                        <i class="bi bi-emoji-laughing" 
                          style="cursor: pointer; font-size: 30px;"></i>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div class="row" style="border-bottom: 1px solid;margin-bottom:10px;"><b>Notes From School</b>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group col-md-10">
              <span type="text" class="form-control input" id="notes_holder" data-placeholder="Note from school"
                contenteditable></span><br>
            </div>

          </div>
        </div>
      </div>
    </div>

    <input type="hidden" id="primary_contact_email" name="primary_contact_email" />


    <div class="container footer text-center print_hide" style="margin-top: 20px;">
      <div class="text-center" id="missingEWalert">
        <div class="alert alert-danger" id="missingEbodyalert" style="display: none">
          E-body check missing... Please do at least once e-body check!
        </div>
        <div class="alert alert-danger" id="missingWheelalert" style="display: none">
          Wheel-chair check...Please do at least once Wheel-chair check!
        </div>

      </div>
      <button class="btn btn-primary" id="draft_button">Draft</button>&nbsp;
      <!-- <button class="btn btn-primary" id="submit_button">Send Email</button>&nbsp; -->
      <button class="btn btn-primary" id="print_button">Print</button>

    </div>
    <br>
    <div style="min-height: 30px;"></div>

  </div>
</body>

<script>
 
    // const btn = document.querySelector('#mood_btn')
    // const radioButtons = document.querySelectorAll('input[name="cognitive"]');
    // btn.addEventListener("click", () => {
    //   let selectedMood;
    //   for(const radioButton of radioButtons) {
    //     if(radioButton.checked) {
    //       selectedMood = radioButton.value;
    //       break;
    //     }
    //   }

    //   mood_output.innerText = selectedMood ? `Selected Mood is ${selectedMood}` : `None`
    // })
    // mood_output

    const radioButtons = document.querySelectorAll('input[name="cognitive"]');
    for(const radioButton of radioButtons) {
      radioButton.addEventListener('change', showSelected);
    }

    function showSelected(e) {
      console.log(e);
      if(this.checked) {
        document.querySelector('#mood_output').innerText = `Selected Emoji ${this.value}`
      }
    }
  

  function dropFunction() {
    document.getElementById('wellDropdown').classList.toggle('show')
  }

  window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for(i = 0; i <= dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if(openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function yesMeal() {
    document.getElementById('mealChange').style.display = 'none'
  }

  function noMeal() {
    document.getElementById('mealChange').style.minHeight = '200px'
    document.getElementById('mealChange').style.display = 'block'
    document.getElementById('show').style.display = 'none'
  }

  function yesRadio() {
    document.getElementById('changeYes').style.minHeight = '200px'
    document.getElementById('changeYes').style.display = 'block'
    document.getElementById('show').style.display = 'none'
  }

  function noRadio() {
    document.getElementById('changeYes').style.display = 'none'
  }

  // function yesWheel() {
  //   document.getElementById('wheelChange').style.minHeight = '200px'
  //   document.getElementById('wheelChange').style.display = 'block'
  //   document.getElementById('show').style.display = 'none'
  // }

  // function noWheel() {
  //   document.getElementById('wheelChange').style.display = 'none'
  // }

  function bathFunction() {
    document.getElementById('hideDiv').style.minHeight = '100px'
    document.getElementById('hideDiv').style.display = 'block'
    //document.getElementById('show').style.display = 'none'
  }

  function closeDiv() {
    //document.getElementById('hideDiv').style.height = '0px'
    document.getElementById('hideDiv').style.display = 'none'
    document.getElementById('show').style.display = 'inline' 
  }

  function diapFunction() {
    document.getElementById('diapDiv').style.height = '100px'
    document.getElementById('diapDiv').style.display = 'block'
    //document.getElementById('open').style.display = 'none'
  }

  function coverDiv() {
    // document.getElementById('diapDiv').style.height = '0px'
    document.getElementById('diapDiv').style.display = 'none'
    document.getElementById('open').style.display = 'inline'
  }

  var ebody_1_done = 0;
  var ebody_2_done = 0;
  var wheel_chair_done = 0;
  var with_seizure = "";
  var student_id = null;
  var date = null;
  let ebodyIssuetable1 = $("#ebodyProblemTable1").dataTable({

    columns: [
      { data: 'body_label', orderable: false },
      { data: 'body_name', orderable: false },
      { data: 'issue_desc', orderable: false },
      { data: 'issue_explain', orderable: false },
    ]
  });

  let ebodyIssuetable2 = $("#ebodyProblemTable2").dataTable({

    columns: [
      { data: 'body_label', orderable: false },
      { data: 'body_name', orderable: false },
      { data: 'issue_desc', orderable: false },
      { data: 'issue_explain', orderable: false },
    ]
  });

  let wheelChairIssuetable = $("#wheelChairProblemTable").dataTable({

    columns: [
      { data: 'problem_name', orderable: false },
      { data: 'problem_detail', orderable: false },
      { data: 'problem_comment', orderable: false },
    ]
  });


  $(document).ready(function () {
    $('.mask').hide();
    $('.dataTables_length').remove();
    $('.dataTables_filter').remove();
    $('.dataTables_info').remove();
    $('.dataTables_paginate').remove();
    var today = new Date().toLocaleDateString('en-CA');
    // today = formateDate(today);
    $("#report_date_input").val(today);
    getCurrentDate();
    $("#wellness_date_holder").html(today);

    $.ajax({
      type: "POST",
      url: "php/fetch_student_names.php",
      success: function (response) {

        var students = JSON.parse(response);

        for (var student of students) {
          var student_name = student['student_fname'] + " " + student['student_lname'];
          $("#student_id_input").append($('<option></option>').attr('value', student['student_id']).text(student['student_fname'] + "     " + student['student_lname']));
        }
      }
    });

    $.ajax({
      type: "POST",
      url: "php/fetch_all_clinicians.php",
      success: function (results) {

        var results = JSON.parse(results);

        for (var result of results) {
          $("#provider_email_input").append($('<option></option').attr('value', result['user_email']).text(result['user_fname'] + "  " + result['user_lname']));
        }

      }
    });
  });


  function fetchStudentData(student_id) {
    $.ajax({
      type: "POST",
      data: { student_id: student_id },
      url: "php/fetch_student_data.php",
      success: function (result) {
        result = JSON.parse(result);
        $("#student_name_holder").html(result[0]['student_fname'] + " " + result[0]['student_lname']);
        $("#student_name_input").val(result[0]['student_fname'] + " " + result[0]['student_lname']);
        $("#nickname_holder").html(result[0]['student_fname'] + " " + result[0]['student_lname']);
      }
    });
  };

  function fetchWheelChairCheckData(date, student_id, wheelChairIssuetable) {
    $.ajax({
      type: "POST",
      url: "php/fetch_last_wheelChair_check.php",
      data: {
        date: date,
        student_id: student_id
      },
      success: function (res) {
        $("#wheelChairInfoHolder").show();
        wheelChairIssuetable.fnClearTable();
        if (res == 0) {

          $("#wheelChairInfoHolder").hide();
        } else {

          res = JSON.parse(res);
          wheel_chair_done = res[0]['check_id'];
          // $("#wheelChairIdHolder1").val(wheel_chair_done);
          let check_datetime = res[0]['report_date'] + " " + res[0]['report_time'];
          $("#wheelChairDateHolder").html(check_datetime);
          let status = res[0]['is_problems'] == 1 ? "Yes" : "No";
          if (res[0]['is_problems'] == 0) {

            $('#wheelChairTableHolder').hide();
          } else {

            let problemArr = res[0]['problem_list'];
            if (problemArr.length != 0) {
              let newProArr = problemArr[0].map(pro => {

                let newPro = {
                  // problem_id: pro['problem_id'],
                  problem_name: pro['problem_name'],
                  problem_detail: pro['problem_detail'],
                  problem_comment: pro['problem_comment']
                };

                return newPro;
              })

              wheelChairIssuetable.fnAddData(newProArr);
            }

          }
          $('#wheelChairStatusHolder').html(status);
          let nurseCommentStr = res[0]['nurse_comment'] == '' ? "N/A" : res[0]['nurse_comment'];
          $('#wheelChairCommentHolder').html(nurseCommentStr);
        }
      }
    });

  };

  function fetchEbodyData(date, student_id, ebodyIssuetable1, ebodyIssuetable2) {
    $.ajax({
      type: "POST",
      url: "php/fetch_last_e_body_check.php",
      data: {
        date: date,
        student_id: student_id
      },
      success: function (res) {
        $("#ebodyInfoHolder").show();
        ebodyIssuetable1.fnClearTable();
        ebodyIssuetable2.fnClearTable();
        if (res == 0) {
          $("#ebodyInfoHolder").hide();
        } else {
          res = JSON.parse(res);
          // console.log(res.length, " ====");
          if (res.length == 1) {
            ebody_1_done = res[0]['check_id'];
            // $("#ebodyIdHolder1").val(ebody_1_done);  
            $('#ebodyInfo2').hide();
            let check_datetime = res[0]['check_date'] + " " + res[0]['check_time'];
            $("#ebodyDateHolder1").html(check_datetime);
            let status = res[0]['with_issue'] == 1 ? "Yes" : "No";
            if (res[0]['with_issue'] == 0) {
              $('#ebodyTableHolder1').hide();
            } else {
              ebodyIssuetable1.fnAddData(res[0]['issue_list']);
            }
            $('#ebodyStatusHolder1').html(status);
            let nurseCommentStr = res[0]['nurse_comment'] == '' ? "N/A" : res[0]['nurse_comment'];
            $('#ebodyCommentHolder1').html(nurseCommentStr);
          }

          if (res.length >= 2) {
            ebody_1_done = res[0]['check_id'];
            ebody_2_done = res[1]['check_id'];
            // $("#ebodyIdHolder1").val(ebody_1_done); 
            // $("#ebodyIdHolder2").val(ebody_2_done);               
            $('#ebodyInfo2').show();
            // fill first e body table
            let check_datetime1 = res[0]['check_date'] + " " + res[0]['check_time'];
            $("#ebodyDateHolder1").html(check_datetime1);
            let status1 = res[0]['with_issue'] == 1 ? "Yes" : "No";
            if (res[0]['with_issue'] == 0) {
              $('#ebodyTableHolder1').hide();
            } else {
              ebodyIssuetable1.fnAddData(res[0]['issue_list']);
            }
            $('#ebodyStatusHolder1').html(status1);
            let nurseCommentStr1 = res[0]['nurse_comment'] == '' ? "N/A" : res[0]['nurse_comment'];
            $('#ebodyCommentHolder1').html(nurseCommentStr1);

            // fill 2nd e body table
            let check_datetime2 = res[1]['check_date'] + " " + res[1]['check_time'];
            $("#ebodyDateHolder2").html(check_datetime2);
            let status2 = res[1]['with_issue'] == 1 ? "Yes" : "No";
            if (res[1]['with_issue'] == 0) {
              $('#ebodyTableHolder2').hide();
            } else {
              ebodyIssuetable2.fnAddData(res[1]['issue_list']);
            }
            $('#ebodyStatusHolder2').html(status2);
            let nurseCommentStr2 = res[1]['nurse_comment'] == '' ? "N/A" : res[1]['nurse_comment'];
            $('#ebodyCommentHolder2').html(nurseCommentStr2);
          }


        }
      }
    });
  }

  $("#student_id_input").change(function () {
    var today = new Date().toLocaleDateString('en-CA');
    student_id = $("#student_id_input").val();
    date = $("#report_date_input").val();
    $("#ebodyInfoHolder").show();
    $("#wheelChairInfoHolder").show();
    if (student_id != '') {
      fetchStudentData(student_id);
      fetchWheelChairCheckData(date, student_id, wheelChairIssuetable);
      fetchEbodyData(date, student_id, ebodyIssuetable1, ebodyIssuetable2);


      $.ajax({
        type: "POST",
        data: { student_id: student_id },
        url: "php/fetch_student_contact.php",
        // $("#damage_extra_input").append(`<div id='damageInput_${addedOn}'><input type='text'  class='damageInput' name='damageInput_${addedOn}'/><button type='button' class='damageRevBtn' id='damageRevBtn_${addedOn}'>-</button><br></div>`);
        success: function (result) {
          value = 'cream'
          result = JSON.parse(result);


          if (result != 0) {
            // if(result[0]['email'] == null || result[0]['email'] == "") {
            //   $("#family_email_holder").html("No Contact Email Provided");
            //   $("#primary_contact_email").empty();
            //   $("#parent_email_input").val(null);
            //   // $("#submit_button").attr("disabled", true);
            // } 
            let count = 0;
            for (let i = 0; i < result.length; i++) {

              if (result[i]['email'] == '' || result[i]['email'] == null) {
                continue;
              }
              else {
                count++;

                // console.log(result[i]['email'].toLowerCase(), typeof result[i]['email'].toLowerCase());
                $("#student_id_input").after(`<div class='family_email_holder mt-3'>Parent${i + 1} email:  <p class="family_email_input">${result[i]['email']}</p></div>`);
              }

            }
            if (count == 0)
              $("#student_id_input").after(`<div class='family_email_holder mt-3 alert-danger'>No contact email found</div>`)
            // $("#family_email_holder").html("Contact email: " + result[0]['email']);
            $("#primary_contact_email").val(result[0]['email']);
            $("#parent_email_input").val(result[0]['email']);
            $("#submit_button").attr("disabled", false);
          }
          else {
            $("#student_id_input").after(`<div class='family_email_holder mt-3 alert-danger'>No Parents info found</div>`)
            // $("#family_email_holder").html("<p class='alert-danger'>No Parent Info found</p>");
            $("#primary_contact_email").val(null);
            $("#parent_email_input").val(null);
            // $("#submit_button").attr("disabled", true);
          }
        }

      })

    }
    if (student_id != null && date != null && student_id != "") {

      addAttendance(student_id, date);
      addSeizures(student_id, date);
    }
  });
  $("#header_student_container").on('change', "#student_id_input", function () {

    $(".family_email_holder").remove();
    $('#student_name_holder').html('Student Name');
    $('#nickname_holder').html(' STUDENT ');
    $('#arrival_time_holder').html(' TIME ');
    $('#temperature_holder').html(' TEMPREATURE')


  })
  $("#report_date_input").change(function () {

    date = $("#report_date_input").val();

    $("#wellness_date_holder").html(date);

    if (student_id && date) {
      addAttendance(student_id, date);
      addSeizures(student_id, date);
      fetchWheelChairCheckData(date, student_id, wheelChairIssuetable);
      fetchEbodyData(date, student_id, ebodyIssuetable1, ebodyIssuetable2);
    }

  });

  function addAttendance(id, date) {

    $.ajax({
      type: "POST",
      data: { student_id: student_id, date: date },
      url: "php/fetch_student_attendance.php",
      success: function (result) {
        result = JSON.parse(result);

        if (result['time_in'] == 0) {
          $("#arrival_time_holder").html(`<span class='alert-danger'> NO Attendence </span>`);

        }
        else {
          $("#arrival_time_holder").html(result['time_in']);
        }

        if (result['temperature'] == 0) {
          $("#temperature_holder").html(`<span class='alert-danger'> NO Temperature record </span>`);
        }
        else {

          $("#temperature_holder").html(result['temperature']);
        }

      }
    });
  }

  function addSeizures(id, date) {


    $.ajax({
      type: "POST",
      data: { student_id: student_id, date: date },
      url: "php/fetch_student_session_seizures.php",
      success: function (results) {

        results = JSON.parse(results);

        $("#seizure_data_holder").empty();

        if (results != 0) {

          let seizureIds = [];
          for (var result of results) {
            // console.log(result['id'], 'seizure');
            var string = '<tr><div class="input-group"><td><input type="time" class="seizure_time_column form-control attr-input" value="' + result['seizure_time'] + '" /></td><td><input type="text" class="seizure_duration_column form-control attr-input" value="' + result['seizure_duration'] + '" /></td></div></tr>';

            $("#seizure_data_holder").append(string);
            seizureIds.push(result['id']);
          }

          with_seizure = seizureIds.join(';');
          // console.log(with_seizure_report);
        }
      }
    });
  }


  // $(".add_seizure_row_button").click(function () {

  //   var string = '<tr><div class="input-group"><td><input type="time" class="seizure_time_column form-control-sm attr-input" /></td><td><input type="number" class="seizure_duration_column form-control attr-input" /></td><td></td></div></tr>';

  //   $("#seizure_data_holder").append(string);

  // });

  $('#bathroom_data_holder').on('click', '.bathRevBtn', function (e) {
    e.preventDefault();
    let rowIndex = e.target.id.split('_')[1];
    let divId = 'bathroomContent_' + rowIndex;
    $("#" + divId).remove();
  })


  $("#meal_holder").on('click', '.mealRowRevBtn', function (e) {
    e.preventDefault();
    let rowIndex = e.target.id.split('_')[1];
    let divId = 'mealRow_' + rowIndex;
    $("#" + divId).remove();
  })

  $("#rest_holder").on('click', '.restRowRevBtn', function (e) {
    e.preventDefault();
    let rowIndex = e.target.id.split('_')[1];

    let divId = 'restRow_' + rowIndex;

    $("#" + divId).remove();
  })
  $("#activity_holder").on('click', '.activityRowRevBtn', function (e) {
    e.preventDefault();
    let rowIndex = e.target.id.split('_')[1];

    let divId = 'activityRow_' + rowIndex;

    $("#" + divId).remove();
  })





  $(document).on('input', '.attr-input', function () {
    $(this).attr('value', this.value);
  });

  $(document).on('input', '.attr-input-checkbox', function () {
    if (this.value == "on") {
      $(this).attr('checked', true);
    }
  });
  function addInput(val) {
    if (val == 'bathroom') {
      let bathTrArr = document.querySelectorAll('.bathroom_content');
      let extraRow = bathTrArr.length + 1;
      var string = `<tr class="bathroom_content" id="bathroomContent_${extraRow}">
                        <div class="input-group"></br>
                          <td><input type="time" class="time_column form-control-sm attr-input bathroomTime_input" value=''/></td>
                          <td><input type="checkbox" class="pee_column form-check-input attr-input-checkbox" name="pee"/></td>
                          <td><input type="checkbox" class="poop_column form-check-input attr-input-checkbox" name="poop"/></td>
                          <td><input type="checkbox" class="cream_column form-check-input attr-input-checkbox" name="cream"/></td>
                          <td><input id="bathroomContentRevBtn_${extraRow}" type="button" class="add_bathroom_row_button print_hide bathRevBtn" value=" x " /></td>
                        </div>
                      </tr>`;

      $("#bathroom_data_holder").append(string);

    }
    if (val == 'meal') {
      let mealInputArr = document.querySelectorAll('.mealInput');
      let extraRow = mealInputArr.length + 1;
      var mealStr = `<div class='row d-block mealInput mt-2' id="mealRow_${extraRow}">
                          <div class="col-sm-1">
                            <input type="time" placeholder="meal time" class="form-control-sm attr-input mealTime_input" value="0" />
                          </div>
                          <div class="col-sm-10 activityInput_box">
                            <span type="text" class="form-control input mealDetail_input activityInput_box" data-placeholder="meal detail" contenteditable></span>
                          </div> 
                          <div class="col-sm-1">
                            <button id="mealRowInput_${extraRow}" class="mealRowRevBtn removeBtn print_hide" >x</button>
                          </div><br>                        
                        </div>`


      $("#meal_holder").append(mealStr);
    }
    if (val == 'rest') {
      let restInputArr = document.querySelectorAll('.restInput');
      let extraRow = restInputArr.length + 1;
      var restStr = `<div class='row d-block restInput mt-2' id="restRow_${extraRow}">
                          <div class="col-sm-1">
                            <input type="time" placeholder="rest time" class="form-control-sm attr-input restTime_input" value="0"/>
                          </div>
                          <div class="col-sm-10 activityInput_box">
                            <span type="text" class="form-control  input restDetail_input activityInput_box" data-placeholder="resting detail" contenteditable></span>
                          </div> 
                          <div class="col-sm-1">
                            <button id="restRowInput_${extraRow}" class=" restRowRevBtn removeBtn print_hide">x</button>
                          </div><br>                        
                        </div>`


      $("#rest_holder").append(restStr);

    }
    if (val == 'activity') {
      let activityInputArr = document.querySelectorAll('.activityInput_box');
      let extraRow = activityInputArr.length + 1;
      var activityStr = `<div class="col-md-10 activityInput_box mt-2" id="activityRow_${extraRow}">
                              <span type="text" class="form-control input activity_input activityInput_box" data-placeholder="activity detail" contenteditable></span>
                              <div class="col-md-1">
                                  <button id="activityRowInput_${extraRow}" class=" activityRowRevBtn removeBtn print_hide">x</button>
                              </div><br>
                           </div>`
      $("#activity_holder").append(activityStr);
    }

  }
  $("#draft_button").click(function (e) {
    e.preventDefault();
    let parentEmailsNodes = document.querySelectorAll('.family_email_input');
    let familEmailArr = [];
    parentEmailsNodes.forEach(ele => {
      familEmailArr = [...familEmailArr, ele.innerText]

    })
    let familEmailStr = familEmailArr.join(';');
    let timeStamp = new Date().getTime();
    let report_id = 'Wellness_Report_' + timeStamp
    let href = window.location.href;
    let domainLink = href.split("//")[1];
    if (href.split("//")[1].startsWith('dashboard') && ($("#student_name_input").val() == '' || $("#report_date_input").val() == '' )) {
      alert(" Please check required fields!");
    }
    else if ((ebody_1_done == 0 && ebody_2_done == 0) || wheel_chair_done == 0) {

      if (ebody_1_done == 0 && ebody_2_done == 0) {
        $("#missingEbodyalert").show();
        setTimeout(function () {
          $("#missingEbodyalert").hide();
        }, 4000)

        return;
      }
      else if (wheel_chair_done == 0) {
        $("#missingWheelalert").show();
        setTimeout(function () {
          $("#missingWheelalert").hide();
        }, 4000)

        return;
      }
    }
    else {
      $('.mask').show();
      bathroom_dataCollect(timeStamp, report_id);
      meal_dataCollect(timeStamp, report_id);
      rest_dataCollect(timeStamp, report_id);
      activity_dataCollect(timeStamp, report_id);
      var data = new FormData();

      data.append("report_id", report_id);
      data.append("student_id_input", $("#student_id_input").val());
      data.append("draft_date_input", $("#report_date_input").val());
      data.append("parent_email_input", familEmailStr);
      data.append("provider_email_input", $("#provider_email_input").val());
      data.append("student_name_input", $("#student_name_input").val());

      var htmlStringDraft = $("#print_holder").children().html().toString();
      data.append("htmlString_draft", htmlStringDraft);
      data.append("with_seizure", with_seizure);
      data.append("ebody_1_done", ebody_1_done);
      data.append("ebody_2_done", ebody_2_done);
      data.append("wheel_chair_done", wheel_chair_done);
      // console.log(htmlStringDraft.length, ' draft ==');


      $(":input").attr("disabled", "true");
      $(".print_hide").hide();
      var htmlStringFinalize = $("#print_holder").children().html().toString();

      $(":input").removeAttr("disabled");

      // console.log(Array.from(data));

      $.ajax({
        type: "POST",
        processData: false,
        contentType: false,
        cache: false,
        data: data,
        url: "php/draft_wellness_report.php",
        success: function (result) {
          $('.mask').hide();
          // console.log(result)
          if (result == 1) {

            alert("Wellness Report drafted sucessfully!");
            location.reload();
          } else if (result == 2) {

            alert("Something went wrong...Please try re-login! ");


          } else if (result == 3) {

            alert("This student's report was sent out, not able to re-draft! ");


          }
          else if (result == 4) {

            alert("!!! Report already exist for this student, please check and update as need. ");


          }
          else {
            alert("Error drafting Wellness Report");

          }

        },
        error: function (error) {
          alert("error");
          $('.mask').hide();
        }
      });

    }


  })


  // $("#submit_button").click(function () {
  //   let href = window.location.href;
  //   let domainLink = href.split("//")[1];
  //   if (href.split("//")[1].startsWith('dashboard') && ($("#student_name_input").val() == '' || $("#report_date_input").val() == '')) {
  //     alert(" Please check required fields!");
  //   } else {
  //     let timeStamp = new Date().getTime();
  //     let report_id = 'Wellness_Report_' + timeStamp

  //     let parentEmailsNodes = document.querySelectorAll('.family_email_input');
  //     let familEmailArr = [];
  //     parentEmailsNodes.forEach(ele => {
  //       familEmailArr = [...familEmailArr, ele.innerText]

  //     })
  //     let familEmailStr = familEmailArr.join(';');
  //     // console.log(familEmailStr);
  //     //collecting data
  //     //collecting bathroom data===========
  //     let bathInputArr = document.querySelectorAll('.bathroom_content');
  //     let bathCount = 1;
  //     bathInputArr.forEach(ele => {

  //       console.log($(ele), 'bath')
  //       let bathroom_data = {
  //         bathroom_id: "bathroom_" + timeStamp + '_' + bathCount,
  //         report_id: report_id,
  //         bathroom_time: '',
  //         bathroom_detail: ''
  //       };
  //       let bathroomDetailArr = [];
  //       let rowData = $(ele)[0].children;
  //       //collect bath detail
  //       for (let i = 0; i < rowData.length; i++) {
  //         bathroom_data['bathroom_time'] = $(rowData).find('.time_column').val();

  //         if (i >= 1 && $(rowData[i]).children()[0].checked == true) {
  //           bathroomDetailArr.unshift($(rowData[i]).children()[0].value);
  //         }
  //       }
  //       bathroom_data['bathroom_detail'] = bathroomDetailArr.join(';');
  //       bathCount++;
  //       console.log(bathroom_data, 'bath data');

  //     })
  //     //collecting meal data
  //     let mealInputArr = document.querySelectorAll('.mealInput');
  //     let mealCount = 1
  //     mealInputArr.forEach(ele => {
  //       let count = 1;
  //       console.log($(ele), ' meal');
  //       let meal_data = {
  //         meal_id: "meal_" + timeStamp + '_' + mealCount,
  //         report_id: report_id,
  //         meal_time: '',
  //         meal_detail: ''
  //       }
  //       meal_data['meal_time'] = $(ele).find('.mealTime_input').val();
  //       meal_data['meal_detail'] = $(ele).find('.mealDetail_input')[0].innerText;
  //       mealCount++;
  //       console.log(meal_data, 'meal data', $(ele).find('.mealDetail_input')[0]);
  //     })

  //     let restInputArr = document.querySelectorAll('.restInput');
  //     let restCount = 1;
  //     restInputArr.forEach(ele => {
  //       console.log($(ele), 'rest');
  //       let count = 1;
  //       let rest_data = {
  //         rest_id: "meal_" + timeStamp + '_' + restCount,
  //         report_id: report_id,
  //         rest_time: '',
  //         rest_detail: ''
  //       }
  //       rest_data['rest_time'] = $(ele).find('.restTime_input').val();
  //       rest_data['rest_detail'] = $(ele).find('.restDetail_input')[0].innerText;
  //       restCount++;
  //       console.log(rest_data, 'rest data');
  //     })

  //     let activityInputArr = document.querySelectorAll('.activity_input');
  //     let activityCount = 1
  //     activityInputArr.forEach(ele => {
  //       console.log($(ele), 'activity');
  //       let count = 1;
  //       let activity_data = {
  //         activity_id: "activity_" + timeStamp + '_' + activityCount,
  //         report_id: report_id,
  //         activity_detail: $(ele)[0].innerText
  //       }
  //       activityCount++;
  //       console.log(activity_data, 'activity data');
  //     })
  //     var data = new FormData();
  //     data.append("parent_email_input", familEmailStr);
  //     data.append("report_date_input", $("#report_date_input").val());
  //     data.append("provider_email_input", $("#provider_email_input").val());
  //     data.append("student_name_input", $("#student_name_input").val());
  //     data.append("student_id_input", $("#student_id_input").val());


  //     $(":input").attr("disabled", "true");
  //     $(".print_hide").hide();
  //     var htmlString = $("#print_holder").children().html().toString();
  //     $(":input").removeAttr("disabled");
  //     data.append("htmlString", htmlString);

  //     // console.log(Array.from(data));

  //     $.ajax({
  //       type: "POST",
  //       processData: false,
  //       contentType: false,
  //       cache: false,
  //       data: data,
  //       url: "php/process_wellness_report.php",
  //       success: function (result) {

  //         $(".print_hide").show();
  //         // console.log(result)
  //         if (result == 1) {
  //           alert('Wellness resport sent successfully! ');
  //           location.reload();
  //         }
  //         else if (result == 2) {

  //           alert("Something went wrong...Please try re-login! ");
  //           location.reload();
  //         }
  //         else {
  //           alert("Error sending Wellness Report");
  //         }

  //       }
  //     });

  //   }

  // });

  $("#print_button").click(function () {

    window.print();

  });

  // window.onafterprint = function () {

  //   var data = new FormData();
  //   data.append("parent_email_input", $("#parent_email_input").val());
  //   data.append("report_date_input", $("#report_date_input").val());
  //   data.append("provider_email_input", $("#provider_email_input").val());
  //   data.append("student_name_input", $("#student_name_input").val());


  //   $(":input").attr("disabled", "true");
  //   $(".print_hide").hide();

  //   var htmlString = $("#print_holder").children().html().toString();

  //   $(":input").removeAttr("disabled");


  //   data.append("htmlString", htmlString);

    // console.log(data);

    // $.ajax({
    //   type: "POST",
    //   processData: false,
    //   contentType: false,
    //   cache: false,
    //   data: data,
    //   url: "php/process_wellness_report.php",
    //   success: function (result) {

    //     $(".print_hide").show();

    //   }
    // });

  // }
</script>

</body>

</html>