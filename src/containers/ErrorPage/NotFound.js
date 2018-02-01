import React, { PureComponent } from 'react';
import '../../styles/notfound.less';
// import '../../styles/notfound.css';

class NotFound extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="notFound">
                    <div className="notFound-content">
                        <img src="../images/notfound.png" alt="" />
                        <p>抱歉！您访问的页面不存在</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound;