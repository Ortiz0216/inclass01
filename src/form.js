const Form= (props) => {
    return React.createElement('div',{className: "form-group"}, 
    [
            React.createElement('label', 
            {
                for: "exampleInputEmail1"
            },
            "Email Address"),

            React.createElement('input', 
            {
                className:"form-control",
                type: "email",
                id: "exampleInputEmail",
                placeholder: "Enter Email"
            }, 
            props.itemtwo),
            React.createElement('label', 
            {
                for: "exampleInputzipcode1"
            },
            "Zipcode"),

            React.createElement('input', 
            {
                className:"form-control",
                type: "email",
                id: "exampleInputZipcode",
                placeholder: "Enter Zipcode"
            }, 
            props.itemtwo),
            React.createElement('button', 
            {
                className:"btn btn-primary",
            },
            "Submit"
            ),
        ]
    );
}