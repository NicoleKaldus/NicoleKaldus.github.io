import { ProjectElement } from "./projectElement.js";
/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class AIMLView {
    constructor() {
      // Initializes a new instance of the AIML view
    }
  
    /**
     * Renders the AIML view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      const AIMLViewElem = document.createElement("div");
      AIMLViewElem.id = "AIML-view";
  
      const AIMLContainerElem = document.createElement("div");
      AIMLContainerElem.id = "AIML-container";
  
      AIMLViewElem.appendChild(AIMLContainerElem);
  
      const cart = new AIML();
      AIMLContainerElem.appendChild(await cart.render());
      AIMLViewElem.appendChild(AIMLContainerElem);
      return AIMLViewElem;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class AIML {
    constructor() {
      this.AIMLElem = document.createElement("div");
    }
    async render() {
      this.AIMLElem.id = "AIML";
      this.AIMLElem.classList.add("view");
      this.AIMLElem.appendChild(
        await this.renderAIML(), //this.cart
      );
      return this.AIMLElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderAIML() {
      // Create the container for the AIML content
      const AIMLContentElem = document.createElement("div");
      AIMLContentElem.classList.add("project-elements");
      AIMLContentElem.classList.add("container");

      const titleRow = document.createElement("div");
      titleRow.classList.add("row");
      const pageTitle = document.createElement("h1");
      pageTitle.textContent = "AI/ML";
      pageTitle.classList.add("resume-title");
      titleRow.appendChild(pageTitle);
      AIMLContentElem.appendChild(titleRow);

      const elementPropsList = [{src: "../content/game_pic.png", link: "", title: "Getting Started", desc: "My first program using Unity to get used to the game engine. I created a textured 3-D map with barriers and obstacles, and a goal to reach the other side of the map."},
      {src: "../content/game_pic.png", link: "", title: "Comparing ML Algorithms for \"Tricky\" Datasets", desc: "My first program using Unity to get used to the game engine. I created a textured 3-D map with barriers and obstacles, and a goal to reach the other side of the map."},
      {src: "../content/game_pic.png", link: "", title: "PacMan RL", desc: "My first program using Unity to get used to the game engine. I created a textured 3-D map with barriers and obstacles, and a goal to reach the other side of the map."}
    ]

      elementPropsList.forEach(e => {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        const elementMaker = new ProjectElement();
        const newElement = elementMaker.render(e.src, e.link, e.title, e.desc);
        newElement.classList.add("project-element");

        newRow.appendChild(newElement);
        AIMLContentElem.appendChild(newRow);
      });

      return AIMLContentElem;
    }
  }