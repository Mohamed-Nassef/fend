import { checkForUrl } from "./url-checker"

function handleSubmit(event) {
    event.preventDefault()
    //debugger;

    // check what text was put into the form field
    let formURL = document.getElementById('url').value
    if (checkForUrl(formURL)) {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/analyis?url=' + formURL)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                document.getElementById('polarity').innerHTML = data.score_tag
                document.getElementById('agreement').innerHTML = data.agreement
                document.getElementById('subjectivity').innerHTML = data.subjectivity
                document.getElementById('confidence').innerHTML = data.confidence
                document.getElementById('irony').innerHTML = data.irony

                console.log(data)
            })
    } else {
        alert("it's not vaild URL")
    }
}

export { handleSubmit }
