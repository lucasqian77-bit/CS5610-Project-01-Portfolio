// remember to turn this into a module.
let projectImport;
// define a card component to hold project info
function buildProjectCard(name, description, github, live) {
  //check if live exists - if it's not hosted don't render it - replace with a download zip link
  //all other items are guranteed to exist
  return ``;
}

// grab projects.json
// developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getProjects() {
  const projectsPath = "./src/js/projects.json";
  try {

    const response = await fetch(projectsPath);

    if (!response.ok) {
      throw new Error(`Project File not found: ${response.status}`);
    }
    projectImport = await response.json();
    //console.log(projectImport);
  } catch {
    console.log("catch placeholder");
  }
}



//do all the concat logic here

// Loop through the json object, make one big html string out of it
// by mapping the properties to elements

// remember to add the script tag to projects

// use document.getelementbyid, target the id project-cards, save the target as element

// element.innerhtml = the big html string

async function main() {
  await getProjects();
  for(values in projectImport.values()) {
    
    }
  


  console.log(`projectImport in main: ${projectImport}`);
}
main();
