<?php
################################################################################
##  2021-02-24  mxg
##  - Intitial revision
################################################################################
// The 'require_once' keyword is used to embed to PHP code from anothe file. If the file is not found, a fatal error is thrown and the program stops.
// If the file was already included previously, this statement will not include it again.
require_once("../php-lib/session.php");
@ob_start();

// A session is a way to store information (in variables) to be used across multiple pages.
// Unlike a cookie, the information is not stored on the users computer.
// Session variables hold infromation about one single user, and are available to all pages in one application.
// The isset() function checks whether a vaeiable is set, which means that it has to be declared and is not NULL.
// this function returns true if the variable exists and is not NULL, otherwise it returns false.
if( !isset( $_SESSION ) )
{
    sec_session_start();
}

require_once("../php-lib/baseFunctions.php");
require_once("../php-lib/db_connect.php");
require_once("../php-lib/studentFunctions.php");

$html = '';
$dateRangeOpts = ''; $export = 0;

$user_id = $_SESSION['user_id'];
foreach( $dateRangeArray as $val )
{
	$dateRangeOpts .= "<option value='" . strtolower( $val ) . "' >$val</option>";
}
if( ( isset( $_POST['get_grid']) && $_POST['get_grid'] == '1' )  || isset( $_POST['dateRange']) )
{
    //$limit = 50;
    
	$total_pages = 1; $page_num = 1;
	$thtml =  $student_whereStr = $whereStr = ''; $dateWhereStr = '';
    
     $limit = $page = $offset = '';
	if( isset( $_POST['dateRange'] ) && $_POST['dateRange'] != '0' )
	{
		$startDate = $endDate = '';
		$dateR = $_POST['dateRange'];
		if( $_POST['dateRange'] == 'custom')
		{
			$startDate = $_POST['fromDate'];
			$endDate = $_POST['toDate'];
		}
		$dateRange = getDateRangeStr( $_POST['dateRange'], 'session_date', $startDate, $endDate );
		$drStr = explode( ",", $dateRange );
		$dateRangeStr = $drStr[0];
		$startDate =  $drStr[1];
		$dateWhereStr = " and $dateRangeStr ";
		//$whereStr .= $dateWhereStr;

	}
	if( isset( $_POST['service_type']) && $_POST['service_type'] != '' )
	{
	    $service_type = $_POST['service_type'];
	    $whereStr .= " and service_type='$service_type' ";
	}
	if( isset( $_POST['provider_id'] ) && $_POST['provider_id'] != '' )
	{
	    $provider_id = $_POST['provider_id'];
	    $whereStr .= " and student_sessions.session_clinician1=$provider_id ";
	    $student_whereStr = " and student_sessions.session_clinician1=$provider_id ";
	}
	if( isset( $_POST['student_id'] ) && $_POST['student_id'] != '' )
	{
	    $student_id = $_POST['student_id'];
	    $whereStr .= " and student_sessions.student_id=$student_id ";
	    $student_whereStr = " and student_sessions.student_id=$student_id ";
	}
    $limit_str = '';
    if( !isset( $_POST['export'] ) )
    {
        $limit_str = " LIMIT $offset, $limit ";
    }

    $whereStr .= $dateWhereStr;
    $sql = sprintf("Select count( session_id ) as num_rows from student_sessions where 1=1 $whereStr");
 
    $res = mysqli_query( $conn, $sql );
    if( !$res )
	{
	    print "<tr><td colspan=7 class='table-danger'>Error: ".mysqli_error( $conn ) . "$sql</td></tr>";
	    exit;
	}
    $this_row = mysqli_fetch_assoc( $res );
    $total_rows = $this_row['num_rows'];
   
   // $total_pages = ceil( $total_rows/$limit );
    $left_rec = $total_rows - ($page * $limit);
    $sort_by = "session_start_time";
	$sort_order = "desc";
	$order_by = '';
    if( isset( $_POST['sort_by']) && $_POST['sort_by'] != '' )
    {
        $order_by = $_POST['sort_order'];
        $sort_by = $_POST['sort_by']; 
    }
    $order_by = " order by $sort_by $sort_order ";
    $sql = sprintf("select student_lname, student_fname, student_sessions.student_id as s from student_sessions join students on student_sessions.student_id=students.student_id  where  note_status='Complete' and is_telehealth=1 $whereStr group by student_sessions.student_id order by student_lname, student_fname" );
	
	$file_name = '';
	$res = mysqli_query( $conn, $sql );
	if( !$res )
	{
	    print "<tr><td colspan=8 class='table-danger'>Error: ".mysqli_error( $conn ) . "</td></tr>";
	    exit;
	}
	if( mysqli_num_rows( $res ) == 0 )
	{
	    $total_pages = 1;
	    $thtml .= "<tr><td colspan=7>No Results for your seach</td></tr>";
	    $thtml .="<input type='hidden' id='page' value='$page_num'><input type='hidden' id='numPages' value='$total_pages' ><input type='hidden' id='numRows' value='$total_rows' >";
	    print $thtml;
	    exit;
	}
	
	if( isset( $_POST['export'] ) )
	{
		$export = 1;
		#create a tmp file
		$file_name = "providerCaseloadSummaryExport" . strtotime('now') .".csv";
		$export_file = fopen( "../tmp/$file_name", "w") or error_log("failed to open file");
		fwrite($export_file, "Provider,Service Type,Num. Sessions,Num. Hours\r\n");
	}
	$total_hours = $total_sessions = $total_made_up_hours = 0;
	while( $row = mysqli_fetch_assoc( $res ) ) 
	{
	    $csvrow  = '';
	    $date = '';
	    $time = '';
	    $location = '';
	    $clinician = '';
	   // $service_type = $row['service_type'];
	    $student_id = $row['s'];
	    $student = $row['student_fname'] . ' ' . $row['student_lname'];
      // $num_sessions = $row['num_sessions'];
       $outstanding_hours = 0;
	   $thtml .= "<tr>";
	   $thtml .= "<td colspan=6><b>$student</b></td>";
	   $thtml .= "</tr>";
	   $sql = "select * from student_sessions where student_id=$student_id and note_status='Complete' and is_telehealth=1 $whereStr order by session_date, session_start_time";
	   $this_res = mysqli_query( $conn, $sql );
	   $thtml .="<thead><tr><th>&nbsp;</th><th>Date</th><th>Time</th><th>Service</th><th>Provider</th><th class='text-right' >Hours</th></tr></thead>";
	   $total_hours = $num_sessions = 0;
	   $num_made_up = $total_made_up_hours = 0;
	   while( $this_row = mysqli_fetch_assoc( $this_res ) )
	   {
	       $thtml .= "<tr>";
	       $made_up = $made_up_date = '';
	       $made_up_hours = 0;
	       $date = format_date( $this_row['session_date']);
           $thtml .= "<td width=16px>&nbsp;</td>";
	       $thtml .= "<td>$date</td>";
	       $time = date("h:i A", strtotime( $this_row['session_start_time']));
	       	       $thtml .= "<td>$time</td>";

	       $session_id = $this_row['session_id'];
	       $service_type = $this_row['service_type'];
           $provider = getEntityNameById($conn, $this_row['session_clinician1'], 'Employee');
                      $hours = $this_row['session_mandate']/60;

           $thtml .= "<td>$service_type</td>";
           $thtml .= "<td>$provider</td>";
                      $thtml .= "<td class='text-right' >$hours</td>";

           $status = $this_row['session_status'];

          
           $total_made_up_hours += $made_up_hours;
           $total_hours += $hours;
	       $thtml .= "</tr>";
	       $num_sessions++;
	   }
	   $outstanding_hours = $total_hours - $total_made_up_hours;
	   $num_sessions_outstanding = $num_sessions - $num_made_up;
	   $thtml .= "<tfoot><tr><td colspan=5 class='text-right'><b>Total Telehealth Hours for $student ( $num_sessions Sessions ):</b></td><td class='text-right' ><b>$total_hours</b></td></tr>
	       </tfoot>";
	   
	}
	if( $export == 0 )
	{ 
	    
	   
	    $thtml .="<input type='hidden' id='page' value='$page_num'><input type='hidden' id='numPages' value='$total_pages' ><input type='hidden' id='numRows' value='$total_rows' >";
	    //$thtml .= "<tfoot><tr><td>Parameters: [Days] $num_days [Weeks] $num_weeks</td></tr></tfoot>";
	    print $thtml; 
	    
	}
	else
	{
		fclose( $export_file );
		$html = "You file has been exported.</br><a href='tmp/$file_name'>Click here to download</a>";
		print $html; 
	}
	exit;
	
}
$realname = $_SESSION['real_name'];
$student_list = getStudentList( $conn );

$service_types_list = '';
$sql = "select service_name from sys_services where service_type='Related Services'";
$res = mysqli_query( $conn, $sql );
$services_sel = '';
$services_list = "<option value='Academics' $services_sel >Academics</option>";
while( $row = mysqli_fetch_assoc( $res ) )
{
    $services_sel = '';
    $services_list .= "<option value='" . $row['service_name'] . "'  $services_sel >".$row['service_name'] . "</option>";
}
$sql = "SELECT user_id, user_fname, user_lname, user_email ,user_real_name FROM users WHERE is_active=1 AND ( `dept` like 'Assistive Technologies' or`dept` like 'Education' or `dept` like 'Hearing' or `dept` like 'Music%' or `dept` like 'Occupational%' or `dept` like 'Physical%' or `dept` like 'Social Work' or `dept` like 'Special%' or `dept` like 'Speech-Language%' or `dept` like 'Vision%' or `title` like '%Neuropsychologist%' or user_id=930 or user_id=958 or user_id=1200) ORDER BY user_fname";
// $sql = "select user_id, user_real_name from users where title like '%O/T%' or title like '%P/T%' or title like '%PT%' or title like '%AT%' or title like  '%Vis%' or title like 'SLP' or title like '%Teacher%' or title like '%Conductor%' or title like '%Therapist%' or dept='Social Work'  $active_clinicians order by user_lname";
$res = mysqli_query( $conn, $sql ) or error_log( mysqli_error( $conn ) . ' ' . $sql );
$clinician_list = '';
while( $row = mysqli_fetch_assoc( $res ) )
{
    $clinician_sel = '';
    $clinician_list .= "<option value='" . $row['user_id'] . "' $clinician_sel >".$row['user_real_name'] . "</option>";
}
$yy = "<i class='fas fa-file-download fa-2x text-muted' title='Export Results' style='font-weight: bolder;margin-right: 8px;'  onclick='exportFile();'></i>&nbsp;";
$html =<<<HDR
<div class="row border-bottom mb-3 p-2">
		<div class='col-md-6'>
        	<span style='padding-left: 2px; font-size: 18px;font-weight: bolder;' >Session Provided via Telehealth Detail Report</span>
        </div>
        <div class='col-md-6'>
            <div class='d-flex'>
                <div class="ml-auto">
                    <i class='fas fa-print fa-2x text-muted' style='font-weight: bolder;margin-right: 8px;' onclick='window.print();' title='Print Results'></i>&nbsp;		
                    <i class='fas fa-home fa-2x text-muted' title='Return to Dashboard' style='font-weight: bolder;' onclick='getPage("dashboard")' ></i>
                </div>
            </div>
        </div>
</div>
HDR;
$date_search =<<<DATESEARCH
<div class='row'>
	<div class='col-md-12'>
		<form class='form-inline' id='brForm' onsubmit="event.preventDefault()" >
				<div class="form-group mx-sm-3 mr-1 mb-2">
					<select class='form-control form-control-sm' id='student_id' name='student_id' style='width: 100%'   >
					    <option value=''>All Students</option>
					    ${student_list}
					</select>
				</div>
				<div class="form-group mx-sm-3 mr-1 mb-2">
                    
					<select class='form-control form-control-sm' id='provider_id' name='provider_id' style='width: 100%'   >
					    <option value=''>All Providers</option>
					    ${clinician_list}
					</select>
				</div>
					<div class="form-group mx-sm-3 mr-1 mb-2">
                    
					<select class='form-control form-control-sm' id='service_type' name='service_type' style='width: 100%'   >
					    <option value=''>All Service Types</option>
					    ${services_list}
					</select>
				</div>
		
			<div class="form-group mx-sm-3 mr-1 mb-2">
					<select class='form-control form-control-sm' id='dateRange' name='dateRange' style='width: 100%' onchange='toggleDateRanges();'  >
						<option value='0' >All Dates</option>
						${dateRangeOpts}
					</select>
				</div>
                     
					<div class="form-group mx-sm-3 mb-2 ml-0 dateRanges">
							<b class='text-muted'>From: </b> 
							<input type='text' style='width: 110px;' class='form-control form-control-sm ml-1 dateRangesInput' name='fromDate' placeholder='mm/dd/YYYY'>
					</div>
					<div class="form-group mx-sm-3 mb-2 ml-1 dateRanges">
							<b class='text-muted'>To: </b> 
							<input type='text' style='width: 110px;' class='form-control form-control-sm ml-1 dateRangesInput' name='toDate' placeholder='mm/dd/YYYY' >
					</div>
				<button class='btn btn-sm btn-primary btn-w mb-2' onclick="dateSearch();">Filter</button>
		</form>
	</div>
</div>

DATESEARCH;

$html .=<<<BODY
${date_search}
<div class='row'>
	<div class='col-12'>
	<div class='table-responsive'>
		<table width='100%' class="table table-sm table-bordered table-hover " id='gridTable'>
		<thead class='thead-light'>
				<tr>
				<th colspan=6>Student</th>
				
				</tr>
		

			</thead>
			<tbody id='sessions_grid'>
			</tbody>
		</table>
		</div>
	</div>
</div>
BODY;

$html .=<<<SCRIPT
<script>
var sortBy = 'session_date';
var sortOrder = 'desc';
  $(function() {
  	  $( ".dateRangesInput" ).datepicker();
	  $( ".dateRanges" ).hide();
	  dateSearch( null, sortBy, sortOrder, 'this week' );
  });
  function toggleDateRanges()
  {
		var dr = document.getElementById('dateRange').value;
		if( dr === 'custom' )
		{
			$('.dateRanges').show();
			return;
		}
		$(".dateRanges").hide();
  }
  function dateSearch( page = null, s = null, o = null, wd = null  )
  {
  	  var formData = $("#brForm").serializeArray();
  	
  	  if( s != '' )
  	  {
  	      formData.push({name: 'sort_by', value: s });
  	      formData.push({name: 'sort_order', value: o });
  	  }
  	  if( wd != null )
  	  {
  	      document.getElementById('dateRange').value = wd;
  	       formData.push({name: 'dateRange', value: wd });
  	       console.log( wd );

  	  }
  	  var spin = "<tr><td colspan=6><span id='spinner' class='fas fa-cog fa-spin' style='color: grey;'></span>&nbsp; Loading ...</td></tr>";
  	  document.getElementById('sessions_grid').innerHTML  = spin;
  	  $.post( "../reports/telehealth_report.php",  formData,
    		function( data ) {
      			document.getElementById('sessions_grid').innerHTML = data;
      		
      }).fail( function(){
            document.getElementById('sessions_grid').innerHTML = "<tr><td colspan=4><div class='alert alert-danger'>Error retrieving records.</div></td></tr>";
          
      });
  }
  function exportFile()
  {
  	 var rowCount = $('#gridTable >tbody >tr').length;
     if( rowCount == 0 )
     {  $.prompt("There is no data to export. Filter data first, then export", {title:'Export Data'} ); return; }
     
  	 var formData = $("#brForm").serializeArray();
  	 formData.push({ name: "export", value: 1 });
  	 
  	 $.post( "../reports/provider_caseload_report.php",  formData,
    		function( data ) {
                $.prompt(data, { title:'Download File' } ); 
      });
  }
</script>


SCRIPT;
print $html;
 
$page = "Seizure Report";
require_once( "../php-lib/track_user.php");

?>