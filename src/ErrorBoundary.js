import React  from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError : false };
    }

    static getDerivedStateFromError(Error) {
        return {hasError : true};
    }

    componentDidCatch (error, errorInfo) {
        logErrorToMyService(error, errorInfo);
    }

    render(){
        if (this.state.hasError) {
            return <h1>Something went Wrong</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;