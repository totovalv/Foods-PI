import {render,screen} from "@testing-library/react"
import About from "./About"
test("should render About Component",()=>{
    render(<About/>)
    const aboutElement =screen.getByTestId("about-1")
    expect(aboutElement).toBeInTheDocument()
    expect(aboutElement).toHaveTextContent("This page can help you to discover new recipes, of difentes kinds of diets and dish. Each of them has step by step of its preparation and a summary that will show in a relatively brief text, general information about said recipe, in addition to a health score that indicates how healthy it is between 1 and 100 points.We have 10 different types of diets for example:vegangluten freepaleolithicvegetarianlacto ovo vegetarianpescatarianprimalwhole 30fodmap friendlydairy free And each line can belong to several or none of these. You can view the recipe catalog in preview, search by keyword or filter by alphabetical order, health score, or diet. Also by clicking on a specific one you can see the details of it. Finally we have a section so you can create your own recipe, indicating its title, its health score, its step by step, a summary and diets associated with it.")

})

