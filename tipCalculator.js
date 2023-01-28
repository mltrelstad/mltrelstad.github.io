    function totalBill()
    {
        let text ="";
        var billAmount = document.getElementById("billAmount").value;
    
        if (parseInt(billAmount) < 5)
            document.getElementById("output1").innerHTML = "<b>ERROR:<b/> Number must be at least $5."
        else if (parseInt(billAmount) > 500)
            document.getElementById("output1").innerHTML = "<b>ERROR:<b/> Number must be less than $500."
        else if (!Number.isInteger(parseInt(billAmount)))
            document.getElementById("output1").innerHTML = "<b>ERROR:<b/> Must be a number."
        else
            document.getElementById("output2").innerHTML = "Your bill was for $" + billAmount + ".";   
    };

    function serviceGreat()
    {
        const greatTip = 0.2;
        var billAmount = document.getElementById("billAmount").value;
        var tipCharge = billAmount*greatTip;
        var totalCharge = parseInt(billAmount) + tipCharge;
        document.getElementById("serviceQ").innerHTML = "The tip to add is: $" + tipCharge.toFixed(2) + ".";

        document.getElementById("outcome").innerHTML = "Your bill was for $" + billAmount + ".\n"+
                                                        "Tip: $" + tipCharge.toFixed(2) + ".\n"+
                                                        "Total: $" + totalCharge.toFixed(2) + ".";
    }

    function serviceOk()
    {
        const okTip = 0.15;
        var billAmount = document.getElementById("billAmount").value;
        var tipCharge = parseInt(billAmount*okTip);
        document.getElementById("serviceQ").innerHTML = "The tip to add is: $" + tipCharge + ".";

        let totalCharge = parseInt(billAmount) + tipCharge;
        document.getElementById("outcome").innerHTML = "Your bill was for $" + billAmount + ".\n"+
                                                        "Tip: $" + tipCharge.toFixed(2) + ".\n"+
                                                        "Total: $" + totalCharge.toFixed(2) + ".";
    };

    function servicePoor()
    {
        const poorTip = 0.1;
        var billAmount = document.getElementById("billAmount").value;
        var tipCharge = parseInt(billAmount*poorTip);
        document.getElementById("serviceQ").innerHTML = "The tip to add is: $" + tipCharge + ".";

        let totalCharge = parseInt(billAmount) + tipCharge;
        document.getElementById("outcome").innerHTML = "Your bill was for $" + billAmount + ".\n"+
                                                        "Tip: $" + tipCharge.toFixed(2) + ".\n"+
                                                        "Total: $" + totalCharge.toFixed(2) + ".";
    }