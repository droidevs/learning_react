
import { Component } from 'react';


export class PersonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Liste des personnes</h2>
                <ul>
                    {this.props.personnes.map((person, index) => (
                        <Person
                            key={index}
                            nom={person.nom}
                            age={person.age}
                            estMember={person.estMember}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

class Person extends Component{

    constructor({ nom, age, estMember }) {
        super({ nom, age, estMember });
    }

    render() {
        return (
            <li style={{ border: "1px solid #ccc", padding: "8px", margin: "4px", borderRadius: "4px" }}>
                <h3>{this.props.nom}</h3>
                <p>Age: {this.props.age}</p>
                <p>Status: {this.props.estMember ? "Member" : "Non-member"}</p>
            </li>
        );
    }
}