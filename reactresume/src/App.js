import React, { Component } from 'react';
import './App.css';
import Contact from "./contact/Contact";
import Facts from "./facts/Facts";
import Hobby from "./hobby/Hobby";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone: "406-595-4701",
        email: "sirieliasen@gmail.com",
        github: "Github.com/sirimt",
        linkedin: "Linkedin.com/in/siri-eliasen",
        sports: "Seattle Seahawks.",
        pet: "My dog, Ella, LOVES to go fishing!",
        bucket: "Hiking the Wave in Arizona",
        accomplishment: "Starting code school.",
        mistake: "In second grade I cut a section of my best friend's braid. Later that night when she took out her braids to go to bed a chunk of her hair fell to the floor. Lesson learned, not all experiments should be tested.",
        hobby1: "Yoga",
        hobby2: "Fly Fishing",
        hobby3: "Crossfit",
        hobby4: "Cooking",
        hobby5: "Dog Sports",
        hobby6: "Hiking"
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Siri Eliasen</h1>
        <h4>Contact</h4>
        <p><a href="tel:406-595-4701"><Contact superContact={this.state.phone}/></a></p>
        <p><a href="mailto:sirieliasen@gmail.com"><Contact superContact={this.state.email}/></a></p>
        <p><a href="https://github.com/sirimt" target="_blank"><Contact superContact={this.state.github}/></a></p>
        <p><a href="https://www.linkedin.com/in/siri-eliasen" target="_blank"><Contact superContact={this.state.linkedin}/></a><hr /></p>
        <h4>Facts</h4>
        <Facts superFacts={this.state.sports}/>
        <Facts superFacts={this.state.pet}/>
        <Facts superFacts={this.state.bucket}/>
        <Facts superFacts={this.state.accomplishment}/>
        <Facts superFacts={this.state.mistake}/>
        <h4>Hobbies</h4>
        <Hobby superHobby={this.state.hobby1}/>
        <Hobby superHobby={this.state.hobby2}/>
        <Hobby superHobby={this.state.hobby3}/>
        <Hobby superHobby={this.state.hobby4}/>
        <Hobby superHobby={this.state.hobby5}/>
        <Hobby superHobby={this.state.hobby6}/>
      </div>
    );
  }
}

export default App;
