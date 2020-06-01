$(document).ready(function () {
    var solInburette, indi, endpt, solInflask;
    $('select#pilot').change(function () {
        $('input#cbr').val($(this).children("option:selected").val())
    });
    $('select#solInflask').change(function () {
        solInflask = $(this).children('option:selected').val()
    });
    $('select#solInburette').change(function () {
        solInburette = $(this).children("option:selected").val()
    });
    $('select#indicator').change(function () {
        indi = $(this).children("option:selected").val()
    });
    $('select#endpt').change(function () {
        endpt = $(this).children("option:selected").val()
    });
    $('#check').on('click',function(){
        if(solInburette==0.1 && solInflask=='brass' && indi=='E.B.T' && endpt=='w-r' 
        && Calculate($('input#cbr').val(),$('input#ans').val())){
            $('#congo').modal('show')
        }else if(!(solInburette==0.1 && solInflask=='brass' && indi=='E.B.T' && endpt=='w-r')){
            $('p#params').text('Please select appropriate parameters for the experiment')
            $('#errorModal').modal('show')
        }else{
            $('p#params').text('Your answer is wrong , Check your answer.')
            $('#errorModal').modal('show')
        }
    })
    $('#reset').click(function(){
        $('select#pilot').children('option:first').prop('selected','true')
        $('select#solInflask').children('option:first').prop('selected','true')
        $('select#solInburette').children('option:first').prop('selected','true')
        $('select#indicator').children('option:first').prop('selected','true')
        $('select#endpt').children('option:first').prop('selected','true')
    })
})
function Calculate(val,ans){
    var op=32.7*val*0.1;
    var a=parseFloat(ans)
    for(let i=6;i>=1;i--){
        if(op.toPrecision(i)==a){
            return true;
        }
    }
}
