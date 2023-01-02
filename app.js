function bSubmit() {

    let objstudent = {}

    console.log(objstudent)

    let adm = document.getElementById('adm').value
    objstudent.AdmimitionNo = adm

    console.log(objstudent)

    objstudent.studentName = document.getElementById('sName').value

    console.log(objstudent)

    let gender = document.getElementsByClassName('gender')

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            objstudent.Gender = gender[i].value
        }
    }




    console.log(objstudent)

    let langControl = document.getElementsByName('chklang')
    let lang = []
    for (i = 0; i < langControl.length; i++) {
        if (langControl[i].checked == true) {
            lang.push(langControl[i].value)
        }
    }
    objstudent.lanuages = lang
    console.log(objstudent)

    let controlSelectCity = document.getElementById('selectCity')
    objstudent.city = controlSelectCity.options[controlSelectCity.selectedIndex].value
    
}