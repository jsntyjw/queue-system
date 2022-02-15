import * as React from 'react';
import { Link } from "react-router-dom";
interface IProps {
}
interface IState {
}

class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://avatars.githubusercontent.com/u/28618678?v=4" alt="" width="72"/>
                        <h1 className="display-5 fw-bold">Queue Management System</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Queue Management System</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a type="button" className="btn btn-primary btn-lg px-4 gap-3"
                                 href="https://www.google.com">Go to Google</a>

                                  <Link to={'/index'} className="btn btn-outline-secondary btn-lg px-4">Index</Link> 
                            </div>
                        </div>
                </div>

            </div>
        );
    }
}
export default Home;