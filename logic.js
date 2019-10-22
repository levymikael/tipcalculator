$(document.body).ready(function() {

    $('#calculate').on('click', function() {
        var billAmountValue = parseInt($('#billamount').val());
        var peopleAmount = parseInt($('#peopleamount').val());
        var qualityService = $('#qualityservice').val() / 100;
        var button = $('button')
        const tip2Leave = ((billAmountValue * qualityService) / peopleAmount).toFixed(2)

        var formIsValid = function() {
            if (isNaN(tip2Leave) == false) {
                return false
            } else {
                return true
            }
        }

        if (billAmountValue == "" || qualityService == "" || peopleAmount == "") {

            alert('Please fill all the fields !')

        } else {
            formIsValid()

            if (formIsValid) {
                $('#button-wrapper').after("<div id='tip'></div>")
                $('#tip').append(tip2Leave + " per person")
                button.off('click');
            } else {
                alert('Make sure to enter only numbers !')
            }
        }
    })

})