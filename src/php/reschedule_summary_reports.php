<?php

    include("CRUD/student_sessions_part_CRUD.php");
    $studentsSessionsFunctions = new StudentSessionsPart;
    include("CRUD/students_CRUD.php");
    $studentsFunctions = new Students;
    include("CRUD/users_CRUD.php");
    $usersFunctions = new Users;

    define('TIMEZONE', 'America/New_York');
    date_default_timezone_set(TIMEZONE);

    if(!$_COOKIE['user_id']) {
        die('2');
    } 
    else {
        $user = $usersFunctions->selectByIdAndActive($_COOKIE['user_id']);
        if($user == 0) {
            die('2');
        } 
        else {
            $user_id = $_COOKIE['user_id'];
        }
    }

    $currentDate = date('Y-m-d', time());

    $query_student_id = $_REQUEST['student_id'];
    $query_provider_id = $_REQUEST['provider_id'];
    $query_service_type = $_REQUEST['service_type'];
    $query_type = $_REQUEST['query_type'];
    $query_from_date = date('Y-m-d', strtotime($_REQUEST['from_date']));
    $query_to_date = date('Y-m-d', strtotime($_REQUEST['to_date']));

    $query_date = $query_from_date;

    if($query_student_id == "" || $query_service_type == "" || $query_type == "" || $query_date == "") {
        die('2');
    }

    $reschedule_summary_reports = null;

    $total_outstanding_hours = 0;

    if($query_student_id == 'all' && $query_provider_id == 'all' && $query_service_type == 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->rescheduleSummarySelectAll();
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByQueryDate($query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByDateFromAndTo($query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id !== 'all' && $query_provider_id == 'all' && $query_service_type == 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentID($query_student_id);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndQueryDate($query_student_id, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndDateFromAndTo($query_student_id, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id !== 'all' && $query_provider_id !== 'all' && $query_service_type == 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderID($query_student_id, $query_provider_id);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderIDAndSessionDate($query_student_id, $query_provider_id, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderIDAndDateFromAndTo($query_student_id, $query_provider_id, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id !== 'all' & $query_provider_id !== 'all' & $query_service_type !== 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderIDAndServiceType($query_student_id, $query_provider_id, $query_service_type);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderIDAndServiceTypeAndSessionDate($query_student_id, $query_provider_id, $query_service_type, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndProviderIDAndServiceTypeAndDateFromAndTo($query_student_id, $query_provider_id, $query_service_type, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id == 'all' && $query_provider_id !== 'all' && $query_service_type == 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderID($query_provider_id);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderIDAndSessionDate($query_provider_id, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderIDAndDateFromAndTo($query_provider_id, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id == 'all' && $query_provider_id !== 'all' && $query_service_type !== 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderIDAndServiceType($query_provider_id, $query_service_type);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderIDAndServiceTypeAndSessionDate($query_provider_id, $query_service_type, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByProviderIDAndServiceTypeAndDateFromAndTo($query_provider_id, $query_service_type, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id == 'all' && $query_provider_id == 'all' && $query_service_type !== 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByServiceType($query_service_type);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByServiceTypeAndSessionDate($query_service_type, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByServiceTypeAndDateFromAndTo($query_service_type, $query_from_date, $query_to_date);
        }
    } 
    else if($query_student_id !== 'all' && $query_provider_id == 'all' && $query_service_type !== 'all') {

        if($query_type == 'all') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndServiceType($query_student_id, $query_service_type);
        } 
        else if($query_type == 'date') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndServiceTypeAndSessionDate($query_student_id, $query_service_type, $query_date);
        } 
        else if($query_type == 'range') {
            $reschedule_summary_reports = $studentsSessionsFunctions->studentMakeUpSelectByStudentIDAndServiceTypeAndDateFromAndTo($query_student_id, $query_service_type, $query_from_date, $query_to_date);
        }
    }

    if($reschedule_summary_reports !== null && count($reschedule_summary_reports) > 0) {
        // Dividing into Chunks
        $data_chunks = array_chunk($reschedule_summary_reports, 500);
        // Dividing into Chunks
        // Requesting Page Number
        $page_number = isset($_GET['page']) ? intval($_GET['page']) : 1 ;
        
        $page_index = $page_number - 1;

        if($page_index >= 0 && $page_index < count($data_chunks)) {
            $current_page_data = $data_chunks[$page_index];

            $payload = array();

            foreach($current_page_data as $report) {
                $session_id = $report['session_id'];
                $student_id = $report['student_id'];
                $student_record = $studentsFunctions->selectByStudentId($student_id);
                $student_name = $student_record[0]['student_fname'] . " " . $student_record[0]['student_lname'];
                $session_date = $report['session_date'];
                $service_type = $report['service_type'];
                $provider_name = $report['clinician1_name'];
                $session_hours = $report['session_mandate'] / 60;
                $madeup_date = $report['madeup_date'];
    
                if($madeup_date != '0000-00-00' && !empty($madeup_date)) {
                    $made_up = 'OK';
                    $madeup_hours = $session_hours;
                    $outstanding_hours = 0;
                } 
                else {
                    $madeup_date = '';
                    $made_up = '';
                    $madeup_hours = 0;
                    $outstanding_hours = $session_hours;
                }
    
                if(empty($madeup_hours)) {
                    $total_outstanding_hours += $session_hours;
                }
    
                $data = array(
                    "session_id" => $session_id,
                    "student_id" => $student_id,
                    "student_name" => $student_name,
                    "session_date" => $session_date,
                    "service_type" => $service_type,
                    "provider_name" => $provider_name,
                    "session_hours" => $session_hours,
                    "madeup_status" => $made_up,
                    "madeup_date" => $madeup_date,
                    "madeup_hours" => $madeup_hours,
                    "outstanding_hours" => $outstanding_hours
                );
    
                array_push($payload, $data);
            }

            $total_data = array(
                "total_outstanding_hours" => $total_outstanding_hours
            );

            array_push($payload, $total_data);

            echo json_encode($payload);
        } 
        else {
            echo json_encode(array("error" => "Invalid page number."));
        }
    } 
    else echo 0;

    require_once("../php/track_user.php");

?>