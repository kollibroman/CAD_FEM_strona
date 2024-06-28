import { useState } from "react";
import axios from "axios";
import "./addPerson.css";

function AddPerson() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        desc: '',
        dep: 'Zarząd',
        pic: null
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            pic: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        axios.post("http://localhost/website/", form)
            .then((response) => {
                setResponse(response.data);
                
            })
            .catch((error) => {
                setResponse(`Error: ${error.message}, ${error.file}, ${error.line}`);
            });
    };

    return (
        <div className="addPerson">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dodaj osobę</legend>
                    <label>Imie: </label><br />
                    <input
                        name="fname"
                        className="addPersonInput"
                        type="text"
                        value={formData.fname}
                        onChange={handleChange}
                    /><br />

                    <label>Nazwisko: </label><br />
                    <input
                        name="lname"
                        className="addPersonInput"
                        type="text"
                        value={formData.lname}
                        onChange={handleChange}
                    /><br />

                    <label>Krótki opis: </label><br />
                    <input
                        name="desc"
                        className="addPersonInput"
                        type="text"
                        value={formData.desc}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="department">Wybierz dział: </label><br />
                    <select
                        name="dep"
                        id="department"
                        value={formData.dep}
                        onChange={handleChange}
                    >
                        <option value="Zarząd">Zarząd</option>
                        <option value="Promocja">Promocja</option>
                        <option value="Informatyk">Informatyk</option>
                        <option value="Członek">Członek</option>
                    </select>

                    <br /><br />
                    <label htmlFor="photo">Wybierz zdjęcie: </label> <br />
                    <input
                        type="file"
                        id="photo"
                        name="pic"
                        onChange={handleFileChange}
                    />

                    <br/><br/>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {response && <div className="response">{response}</div>}
        </div>
    );
}

export default AddPerson;