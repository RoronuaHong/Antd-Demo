import React, { PureComponent } from 'react';

import NotfoundImg from "../../images/errorpage/notfound.png";
import '../../styles/notfound.less';

class NotFound extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="notFound">
                    <div className="notFound-content">
                        <img src={ NotfoundImg } alt="" />
                        <p>抱歉！您访问的页面不存在</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound;