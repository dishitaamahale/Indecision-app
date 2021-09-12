class VisibilityToggle extends React.Component{

    constructor(props) {
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToogleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToogleVisibility}>
                {this.state.visibility? "Hide details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>You have pressed the button!</p>
                    </div>
                )}      
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById("app"));



// let visibility = false;

// const toogleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () =>{
    // const jsx=(
    // <div>
    //     <h1>Visibility Toggle</h1>
    //     <button onClick={toogleVisibility}>
    //         {visibility? "Hide details" : "Show Details"}
    //     </button>
    //     {visibility && (
    //         <div>
    //             <p>You have pressed the button!</p>
    //         </div>
    //     )} 

    //     {/* {visibility? <p>pressed the button</p>: " "} */}

    // </div>
    // );

//     ReactDOM.render(jsx , document.getElementById("app"));

// };

// render();