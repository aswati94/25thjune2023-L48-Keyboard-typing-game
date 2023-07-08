// $(document).ready(function() {
//     // Keydown event for physical keyboards
//     $(document).keydown(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.addClass('active');
//     });
  
//     // Touchstart event for touchscreen devices
//     $('#keyboard button').on('touchstart', function(event) {
//       event.preventDefault();
//       var key = $(this).text().toUpperCase();
//       $(this).addClass('active');
//     });
  
//     // Keyup event for physical keyboards
//     $(document).keyup(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.removeClass('active');
//     });
  
//     // Touchend event for touchscreen devices
//     $('#keyboard button').on('touchend', function(event) {
//       event.preventDefault();
//       $(this).removeClass('active');
//     });
//   });
let saveRegistrationInfo= ()=>{
    console.timeLog('SWATI');
    //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
}

//    ()(); IIFE 
(()=>{
    console.log('Page Loaded Successfully');
    //Get a reference to the modal element
    var modal = document.getElementById('registrationModal');
    //create a Bootstrap modal instance using the modal element
    var modalInstance = new Bootstrap.Modal(modal);
    //call the 'show' method on the modal instance to launch the modal
    console.log(window.localStorage.getItem('first_name'));
    if(window.localStorage.getItem('first_name') === null && window.localStorage.getItem('first_name') === ''){
    }else{
        modalInstance.show();
    }
    
})();
