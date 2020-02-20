import React from 'react'

function NewProjectRequest() {
    return (
        <div className="container">
            <h3>Create a New Project Request</h3>
            <hr />
            <form>
                <div className="four columns">
                    <label>Customer Name*</label>
                    <input className="u-full-width" type="text" placeholder="customer name..." id="_customerName" />
                </div>
                <div className="four columns">
                    <label>Project Name*</label>
                    <input className="u-full-width" type="text" placeholder="Summary..." id="_projectName" />
                </div>
                <div className="four columns">
                    <label>Priority*</label>
                    <select className="u-full-width" id="exampleRecipientInput">
                        <option value="Option 1">1</option>
                        <option value="Option 2">2</option>
                        <option value="Option 3">3</option>
                    </select>
                </div>

                <label>Description*</label>
                <textarea className="u-full-width" placeholder="user story …" id="_description"></textarea>
                <label className="example-send-yourself-copy">
                    <input type="checkbox" />
                    <span className="label-body">Send a copy to yourself</span>
                </label>
                <input className="button-primary" type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewProjectRequest
