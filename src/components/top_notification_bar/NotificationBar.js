import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

const NotificationBar = () => {
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        axios
            .get("data/NotificationData.json")
            .then((res) => setNotification(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment>
            {
                notification.map((singleNotification, index) => (
                    <div key={index} className='bg-[#121D45]'>
                        <p className='text-center py-1 font-gilroy text-white tracking-widest'>
                            {singleNotification.notificationText}
                        </p>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default NotificationBar;