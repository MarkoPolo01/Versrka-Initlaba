$('#input0').click(function() {
    if ($("select#input0 :selected").val() == "RU")
        if ($("select#input0 :selected").val() == "ENG")
            if ($("select#input0 :selected").val() == "CS")
                if ($("select#input0 :selected").val() == "GE")
                    if ($("select#input0 :selected").val() == "CHS")
                        console.log('select color: ' + $("select#input0 :selected").val());
});