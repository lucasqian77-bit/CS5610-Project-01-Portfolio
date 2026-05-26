// remember to turn this into a module.
// define a card component to hold project info
export function buildProjectCard(name, description, github, live) {
  //check if live exists - if it's not hosted don't render it - replace with a download zip link
  //all other items are guranteed to exist
  let liveSiteOrDownload;
  if (live) {
    liveSiteOrDownload = `<a href="${live}" target="_blank" class="btn btn-primary">Live Project</a>`;
  } else {
    liveSiteOrDownload = `<a href="${github}/archive/refs/heads/main.zip" class="btn btn-primary" download>Download ZIP</a>`;
  }
  return `<div class="col-12 mt-3 justify-content-center">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="${github}" class="btn btn-primary">Github</a>
            ${liveSiteOrDownload}
            </div>
            </div>
          </div>`;
}

// grab projects.json
// developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getProjects() {
  const projectsPath = "./src/js/projects.json";
  try {
    const response = await fetch(projectsPath);
    if (!response.ok) {
      throw new Error(`Project File not found: ${response.status}`);
    }
    const projectImport = await response.json();
    //console.log(projectImport);
    return projectImport;
  } catch (error) {
    console.error(`Error getting projects:${error}`);
  }
}

//do all the concat logic here

// Loop through the json object, make one big html string out of it
// by mapping the properties to elements

// remember to add the script tag to projects

// use document.getelementbyid, target the id project-cards, save the target as element

// element.innerhtml = the big html string

export async function main() {
  const projectsParsed = await getProjects();
  let allProjectHTML = "";
  for (const project of projectsParsed) {
    allProjectHTML += buildProjectCard(
      project.name,
      project.description,
      project.github,
      project.live,
    );
  }
  const targetContainer = document.getElementById("project-cards");
  targetContainer.innerHTML = allProjectHTML;
}
main();
