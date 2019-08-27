import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            hasError: false,
            Info:""
        };
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {

        console.log(error,errorInfo);
    }

    render() {
       if(this.state.hasError){
           return (<div>An unexpected error has occurred </div>)
       }
       return this.props.children;
    }
}

export default ErrorBoundary;