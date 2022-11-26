import React from 'react';
import { Link } from 'react-router-dom';
import ReadMore from './ReadMore';

const Blog = () => {
    return (
        <div className='container mx-auto my-24' >

            <div className='border  p-10 mb-2' >
                <h2 className='text-xl' >What are the different ways to manage a state in a React application?</h2>
                <ReadMore limit={100} >
                    React itself has several built-in APIs for managing state, including the useState and useReducer hooks for managing state inside of React components. It also has a Context API to help with passing data down the component tree. In many cases, React's built-in state management tools are all you'll need to build applications.
                    Some common patterns for React state management are:
                    "Lifting state up": since data flows down the tree as props, sibling components can't share data directly. By putting state in their nearest common ancestor component, the child components can all receive that data via props or context.
                    "Colocating state": some state may only be needed in a certain subtree of the application. It's best to keep the state stored as close as possible to where it's actually needed, which helps optimize rendering behavior.
                    "Prop drilling": passing values from parents as props through many levels of nested child components, explicitly
                    "Providers": React's Context API allows rendering a MyContext.Provider value=someValue component, and nested children can read the value from that context directly without having to prop-drill. A component whose job is to store state and render a MyContext.Provider is also often referred to as a "provider component"
                </ReadMore>
            </div>
            <div className='border  p-10 mb-2' >
                <h2 className='text-xl' >How does prototypical inheritance work?</h2>
                <ReadMore  >
                    Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.

                    Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues.
                    So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                </ReadMore>
            </div>
            <div className='border  p-10 mb-2' >
                <h2 className='text-xl' >What is a unit test? Why should we write unit tests?</h2>
                <ReadMore  >
                    Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.

                    A unit is a single testable part of a software system and tested during the development phase of the application software.

                    The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.

                    Whenever the application is ready and given to the Test engineer, he/she will start checking every component of the module or module of the application independently or one by one, and this process is known as Unit testing or components testing.
                    Why Unit Testing?
                    In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.
                    Generally, the software goes under four level of testing: Unit Testing, Integration Testing, System Testing, and Acceptance Testing but sometimes due to time consumption software testers does minimal unit testing but skipping of unit testing may lead to higher defects during Integration Testing, System Testing, and Acceptance Testing or even during Beta Testing which takes place after the completion of software application
                </ReadMore>
                <div>
                    <h2 className='text-xl'>React vs. Angular vs. Vue?</h2>
                    <p>Angular, React and Vue are all highly popular JavaScript libraries and frameworks that help developers build complex, reactive and modern user interfaces for the web</p>
                    <h2 className='text-lg font-serif' >Angular</h2>
                    <li>MVC framework
                        Angular is a MVW (Model-View-Whatever) framework, traditionally used as an MVC (Model-View-Controller). Due to this, the application is divided into three interconnected components. This enables Angular JS developers to write well-structured code, which is beneficial for complex project</li>
                    <li>Angular templates
                        The templates for component creation are readable because they mostly use standard HTML tags</li>
                    <li>
                        Simple implementation of two-way data binding
                        Two-way data binding means that any changes to the model affect the view. Vice versa when the view changes, model immediately changes as well. Angular allows simple two-way data binding, which is beneficial for simple applications. More complex apps work more quickly with one-way data binding, which works only in one direction (view-to-model or model-to-view), depending on the needs of the software. This allows resources to be saved
                    </li>
                    <li>
                        Doesn’t use virtual DOM at all
                        A virtual DOM is a simplified copy of the DOM. Virtual DOM allows any element to be changed quickly without needing to render the whole DOM. This approach is a trend among modern web development frameworks, but, unfortunately, it isn’t yet supported by any Angular version. Instead, Angular 2 uses unidirectional data flow to detect changes to the model and updates only the parts of the DOM that are affected by changes to the model.
                    </li>
                    <h2 className='text-lg font-serif' >React</h2>
                    <p>React is actually a JavaScript library created to build user interfaces. It is supported by Facebook and Instagram and has become a core technology for the endless feed in these two applications. As a JS library, React has a limited sphere of usage, but when bundled with other libraries it becomes a powerful solution, making it a main competitor of Angular</p>
                    <li>Component model
                        React doesn’t use any templates. The component logic is written in JavaScript, giving it more flexibility and enabling large amounts of data to easily pass through your app, while maintaining the state of the DOM. Although this approach is used in every compared frontend frameworks, React was the first one to introduce a component model.</li>
                    <li>
                        Virtual DOM
                        As explained, a virtual DOM enables a simplified copy of the DOM to be created. All changes that need to be implemented are made in the virtual DOM. Later, the two DOMs are compared and, when the differences are identified, the real DOM will re-render only the changed part. This process is much faster and more efficient than working directly with the DOM
                    </li>
                    <li>
                        Usage of pure functions
                        Unlike Angular, React doesn’t require you to use classes. Your application UI can be created using pure functions, simplifying the codebase
                    </li>
                    <li>
                        Using JSX
                        React recommends using JSX instead of regular JavaScript and HTML. This is actually JavaScript, but has been extended with XML syntax. The creators claim that JSX is faster, safer and easier than JS. So, to get the most from React, you will need to learn this modification of JavaScript.
                    </li>
                    <h2 className='text-lg font-serif' >Vue js</h2>
                    <p>Vue.js is a popular Angular and React alternative. This progressive framework for UI building is gaining popularity. It first became extremely popular in China, and is now becoming popular in the West as well</p>
                    <li>MVC framework
                        Just like Angular, Vue is an MVC (or Model-View-Controller) framework. The advantage of this is obvious – it allows  you to write well-structured code, which is extremely important when developing complex applications.</li>
                    <li>Virtual DOM
                        Due to a lighter-weight virtual DOM implementation, apps built with Vue.js have the highest performance compared with other frontend frameworks.</li>
                    <li>Two-way data binding
                        Vue.js automatically syncs the whole model with the DOM.</li>
                    <li>Pure JavaScript
                        Vue.js uses pure JavaScript, eliminating the need for developers or test engineers to learn any other programming language.</li>
                </div>
            </div>

        </div>
    );
};

export default Blog;