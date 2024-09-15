

/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class ResumeView {
    constructor() {
      // Initializes a new instance of the resume view
    }
  
    /**
     * Renders the resume view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      console.log("rendering resume");
      const resumeViewElem = document.createElement("div");
      resumeViewElem.id = "resume-view";
  
      const resumeContainerElm = document.createElement("div");
      resumeContainerElm.id = "resume-container";
  
      resumeViewElm.appendChild(resumeContainerElm);
  
      const cart = new Resume();
      resumeContainerElm.appendChild(await cart.render());
      console.log("returned rendered resume");
      resumeViewElm.appendChild(resumeContainerElm);
      console.log("returning rendered resume view");
      return resumeViewElm;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class Resume {
    constructor() {
      this.resumeElem = document.createElement("div");
    }
    async render() {
      console.log("rendering resume");
      this.resumeElem.id = "resume";
      this.resumeElem.classList.add("view");
      console.log("trying to render list");
      this.resumeElem.appendChild(
        await this.renderResume(), //this.cart
      );
      console.log("should have rendered");
      return this.resumeElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderResume() {
      console.log("Rendering resume content");
  
      // Create the container for the resume content
      const resumeContentElem = document.createElement("div");
      resumeContentElem.classList.add("content");
  
      // Create and append the profile image
      const img = document.createElement("img");
      img.src = 'photo.jpg';  // Replace with your actual image path
      img.alt = 'Profile Photo';
      img.classList.add('profile-photo');
      resumeContentElem.appendChild(img);
  
      // Create and append the text content
      const textContentElem = document.createElement("div");
      textContentElem.classList.add("text-content");
  
      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = "Welcome to My Website";
      textContentElem.appendChild(title);
  
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = "Here you'll find my RESUME.";
      textContentElem.appendChild(description);
  
      // Append the text content to the resume content container
      resumeContentElem.appendChild(textContentElem);
  
      console.log("Finished rendering resume content");
      return resumeContentElem;
    }
  }
  