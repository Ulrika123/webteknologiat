
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function myFunction() {
  document.getElementById("demo").innerHTML = "Pitsamme ovat tehty laadukkaista kotimaisista raaka-aineista";
}
$(document).ready(function() {
    $("#order-entry").on("keyup", ".form-calc", function() {
        var parent = $(this).closest("tr");
        parent.find(".form-line").val((parent.find(".form-qty").val() * parent.find(".form-cost").val()).toFixed(2));
        var total = 0;
        $(".form-line").each(function(){
            total += parseFloat($(this).val()||0);
        });
        $("#total").text(total.toFixed(2));
    });
});

function addCommas(n){
    var s=n.split('.')[1];
    (s) ? s="."+s : s="";
    n=n.split('.')[0]
    while(n.length>3){
        s=","+n.substr(n.length-3,3)+s;
        n=n.substr(0,n.length-3)
    }
    return n+s
}

