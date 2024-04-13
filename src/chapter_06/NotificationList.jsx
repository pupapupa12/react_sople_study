import React from "react";
import Notification from "./Notification";

// const reservedNotification = [
//     {
//         message: "안녕하세요, 오늘의 서울 날씨는 17도이며, 하늘은 흐리겠습니다.",
//     },
//     {
//         message: "점심 식사 시간입니다.",
//     },
//     {
//         message: "10분 뒤 미팅이 시작됩니다.",
//     },
// ];

const reservedNotification = [
    {
        id: 1,
        message:"안녕하세요, 오늘의 서울 날씨는 17도이며, 하늘은 흐리겠습니다.",
    },
    {
        id: 2,
        message:"점심 식사 시간입니다.",
    },
    {
        id: 3,
        message:"10분 뒤 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 뒷부분 추가 항목
                this.setState({
                    notifications:[],
                });
                // 여기까지 추가
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render () {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    // return <Notification message={Notification.message} />;
                return (
                    <Notification
                    key={notification.id}
                    id={notification.id}
                    message={notification.message}
                    />
                );
                })}
            </div>
        );
    }
}

export default NotificationList;