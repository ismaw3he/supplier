import React from "react";

function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}

const CustopmInputField = (props) => {
    return (
        <div className="input-container">
            <Form.Field>
                <label>Email</label>
                <input
                    placeholder='Enter email address or member ID'
                    onChange={(e) => { setLogInData({ ...logInData, Email: e.target.value }) }}
                />
            </Form.Field>
        </div>
    )
}

export default CustopmInputField;