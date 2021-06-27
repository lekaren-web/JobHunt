document.querySelector(".searchbutton").addEventListener("click", ()=> {
    let text = document.getElementById("filter").value
    getData().then((jobs)=> {
    let filtered = filterJob(jobs, text)
        showJobs(filtered)
    }
    )
})

function getData(){
    return fetch("data.json")
    .then((res)=> res.json())
    .then((data)=> {
        return data
    })
}
function filterJob(jobs, search){
if (search){
    let filtered = jobs.filter((job) => {
        if(job.roleName.toLowerCase().includes(search) || job.type.toLowerCase().includes(search) || job.company.toLowerCase().includes(search) || job.requirements.content.toLowerCase().includes(search)){
            console.log(true)
            return true
        } else {
            return false
        }

    })
    return filtered
} else {
    return jobs
}
}
function showJobs(jobs){
    console.log(jobs)
    let jobscontainer = document.querySelector(".jobcontainer")
    let jobsHTML = ""
    jobs.forEach(job => {
        console.log(job)
        jobsHTML += `
        <div class="jobtile">
        <div class="top">
            <img src="${job.logo}">
 <span class="material-icons" ></span><i class="far fa-ellipsis-h"></i></span>
        </div> 
        <div class="rolename">
           <span>${job.roleName}</span> 
        </div>
        <div class="description">
            <span>${job.requirements.content}</span>
        </div>
        <div class="buttons">
            <div class="button apply-now">
            Apply Now
            </div>
            <div class="button message">
            Message
            </div>
        </div>
    
    </div>
        `
    });
    console.log(jobsHTML)
    jobscontainer.innerHTML = jobsHTML
}

getData().then((data) => {
    showJobs(data)
})