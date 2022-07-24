import { Component } from 'react';
import stl from './contactForm.module.css';
class ContactForm extends Component {
    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <div className={stl.input_box}>
                    <h2>Name</h2>
                    <input
                        className={stl.input_line}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <button>Add contact</button>
                </div>

            </div>
        )
    }
}


export default ContactForm;