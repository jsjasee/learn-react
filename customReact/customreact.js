// react treats everything as an object in order to inject things into it, like what's the tag name, content, attributes to add to the element etc.
// the names here can be changed, like "props" and "children"
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank", // what is this target thing - it is an attribute, which states where the result should open, _blank means it should open in a new tab.
  },
  children: "Click me to visit Google.",
};

function customRender(reactElement, container) {
  // this code is not optimised, we can optimise further
  /*
  // 1. create an element
  const domElement = document.createElement(reactElement.type); // this gets the "a" from the code, very reusable

  // 2. set up the innerHTML, the contents i guess (recap innerHTML vs innerText?)
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  // 3. utilise the container, as we will append the element.
  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  // we want to loop through the obj so that no matter how many properties we can set it up
  for (const prop in reactElement.props) {
    // we can set our own rules, we don't want 'children' to be in the properties, it should be outside
    if (prop === "children") {
      continue; // CANNOT RETURN AS IT WILL EXIT THE LOOP
    }
    domElement.setAttribute(prop, reactElement.props[prop]); // we use the SQUARE BRACKET notation since 'prop' here is a TEXT. when looping use []
  }

  container.appendChild(domElement);
}

// 1. get the reference of the root, can also use getElementById (this is what vite is doing)
const mainContainer = document.querySelector("#root");

// 2. create a function that takes 2 params, where you want to inject and WHAT you want to inject.

customRender(reactElement, mainContainer);
