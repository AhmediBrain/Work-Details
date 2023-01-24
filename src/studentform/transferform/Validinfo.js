export default function Validinfo(values) {
    let errors = {};


     if(!values.studname.trim() || !values.date || values.classroom === '' || !values.discipline.trim() || values.provider === '' || !values.assistance || !values.background_sr_input || !values.background_gau_input || !values.background_stp_input) {
         errors.studname = "Ops...Please check all required fields!"
    }

    // if(!values.date) {
    //     errors.date = "Ops...Please check all required fields!"
    // }

    // if(values.classroom === '') {
    //     errors.classroom = "Ops...Please check all required fields!"
    //     console.log(errors.classroom);
    // }

    
    return errors;
}