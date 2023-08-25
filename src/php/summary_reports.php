<?php

    define('TIMEZONE', 'America/New_York');
    date_default_timezone_set(TIMEZONE);

    $currentDate = date('Y-m-d', time());

    $summary_reports = null;

    $q = "SELECT *, 
            CASE
            WHEN madeup_hours IS NOT NULL THEN 0
            ELSE session_hours / 60
            END AS outstanding_hours
            FROM 
            student_sessions
            WHERE note_status = 'Complete'
            AND session_status = 'Re-Schedule'";

    $q_sum = "SELECT 
                SUM(CASE WHEN madeup_date IS NOT NULL THEN 0 ELSE session_mandate / 60 END) 
                AS total_outstanding_hours 
                FROM student_sessions 
                WHERE note_status = 'Complete' 
                AND session_status = 'Re-Schedule'";

    $q_con = "SELECT 
                SUM(CASE WHEN madeup_date != '0000-00-00' THEN 0 ELSE session_mandate / 60 END) 
                AS total_outstanding_hours 
                FROM student_sessions 
                WHERE note_status = 'Complete' 
                AND session_status = 'Re-Schedule'";
?>