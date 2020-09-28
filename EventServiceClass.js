var nameControls=new Array("telephone1","name","fax","websiteurl","parentaccountid","tickersymbol");
    function CheckRoleAdmin(executionContext){
    var formContext=executionContext.getFormContext();
    var roleName = "System Administrator";
    var colllectId=Xrm.Utility.getGlobalContext().userSettings.roles;
    var hasRole=false;
    colllectId.forEach(function hasRoleName(item, index) {
        if (item.name===roleName) {
           hasRole=true;
       };
    });
    hasRole?formContext.getAttribute("cr53f_state").setValue(278080000):formContext.getAttribute("cr53f_state").setValue(278080001);
    }
    //
    function VisibilityField(executionContext) {
        var formContext=executionContext.getFormContext();
        var visibility=formContext.getAttribute("cr53f_visibility").getValue();
        var checkBox=formContext.getAttribute("cr53f_applytoall").getValue();
        if( visibility===278080000 && !checkBox)
        {
            formContext.getControl("name").setVisible(true);
        }
        else if( visibility===278080001 && !checkBox)
        {
            formContext.getControl("name").setVisible(false);
        }
        else if(visibility===278080000 && checkBox)
        {
            nameControls.forEach(function (name) {
               formContext.getControl(name).setVisible(true);
            })
        }
        else if(visibility===278080001 && checkBox)
        {
            nameControls.forEach(function (name) {
                formContext.getControl(name).setVisible(false);
            })
        }

    }
    //
    function StateFieldChange(executionContext) {
        var formContext=executionContext.getFormContext();
        var state=formContext.getAttribute("cr53f_state").getValue();
        var checkBox=formContext.getAttribute("cr53f_applytoall").getValue();
        if( state===278080000 && !checkBox)
        {
            formContext.getControl("name").setDisabled(false);
        }
        else if( state===278080001 && !checkBox)
        {
            formContext.getControl("name").setDisabled(true);
        }
        else if(state===278080000 && checkBox)
        {
            nameControls.forEach(function (name) {
                formContext.getControl(name).setDisabled(false);
            })
        }
        else if(state===278080001 && checkBox)
        {
            nameControls.forEach(function (name) {
                formContext.getControl(name).setDisabled(true);
            })
        }

    }
    //
    function RequirementFieldChange(executionContext) {
        var formContext=executionContext.getFormContext();
        var requirement=formContext.getAttribute("cr53f_requirement").getValue();
        var checkBox=formContext.getAttribute("cr53f_applytoall").getValue();
        if( requirement===278080000 && !checkBox)
        {
            formContext.getControl("name").getAttribute().setRequiredLevel("required");
        }
        else if( requirement===278080001 && !checkBox)
        {
            formContext.getControl("name").getAttribute().setRequiredLevel("none");
        }
        else if(requirement===278080000 && checkBox)
        {
            nameControls.forEach(function (name) {
                formContext.getControl(name).getAttribute().setRequiredLevel("required");
            })
        }
        else if(requirement===278080001 && checkBox)
        {
            nameControls.forEach(function (name) {
                formContext.getControl(name).getAttribute().setRequiredLevel("none");
            })
        }

    }
    //A05F8B91-7AF5-EA11-A815-000D3A86A5A6
    function DisplayAlert(executionContext) {
        alert(message);
    }