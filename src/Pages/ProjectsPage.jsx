import ProjectsHolder from "../Components/ProjectsPage/ProjectsHolder.jsx";
import "./projectsPage.css"
import json_project from "./../assets/projects.json"

export const projects = [
    { key: 0, title: "Fiat Cinquecento", image: "/mechanicy.png", linkTo: "testPost", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
    , { key: 1, title: "Mega Projekt", image: "/szerokiMechanik.png", linkTo: "mP", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
    , { key: 3, title: "Aparat 5D", image: "/projekt.png", linkTo: "ap5D", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
    , { key: 4, title: "Dłuuuuuuuuugi tytuł bo taki sobie ktoś na pewno wymyśli!", image: "/projekt.png", linkTo: "dlugi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
    , { key: 5, title: "Dłuuuuuuuuugi tytuł bo taki sobie ktoś na pewno wymyśli!", image: "/projekt.png", linkTo: "dlugi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
    , { key: 6, title: "Dłuuuuuuuuugi tytuł bo taki sobie ktoś na pewno wymyśli!", image: "/projekt.png", linkTo: "dlugi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra." }
]

export default function ProjectsPage() {
    return (
        <div>
            <div className="heading">
                <h1>Nasze Projekty</h1>
            </div>
            <div className="mainBody">
                <ProjectsHolder projects={json_project} />
            </div>
        </div>
    )
}