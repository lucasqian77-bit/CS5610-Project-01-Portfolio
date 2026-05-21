// remember to turn this into a module.
let projectImport;
// define a card component to hold project info
const exampleHTML = "<div>test render</div>";
// grab projects.json
//developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getProjects() {
  const projectsPath = "./projects.json";
  try {
    const response = await fetch(projectsPath);
    if (!response.ok) {
      throw new Error("Project File not found: ${response.status}");
    }
  } catch {
    console.log("catch placeholder");
  }
}

//do all the concat logic here

const renderArea = document.getElementById("project-cards");
renderArea.innerHTML = exampleHTML;
// Loop through the json object, make one big html string out of it
// by mapping the properties to elements

// remember to add the script tag to projects

// use document.getelementbyid, target the id project-cards, save the target as element

// element.innerhtml = the big html string
getProjects();
