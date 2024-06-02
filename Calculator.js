<script>
    let outputScreen = document.getElementById("outputscreen");

    function display(num){
        outputScreen.value +=num;
    }

    function Calculate(){
        try{
            outputscreen.value = eval(outputscreen.value);
        }
        catch(err){
            outputScreen.value = "";
            alert("Invalid Input");
        }
    }

    function Clear(){
        outputScreen.value="";
    }

    function del(){
        outputScreen.value = outputScreen.value.slice(0,-1);
    }
</script>