import React from "react";
import Comment from "./Comment";

// const CommentList = (props) => {
// return (
//     <div>
//         <Comment name={"이성원"} comment={"안녕하세요, 이성원입니다."} />
//         <Comment name={"소플"} comment={"리엑트 너무 어려워요"} />
//     </div>
// );
// }

const comment = [
    {
        name: "이성원",
        comment: "안녕하세요, 이성원입니다.",
    },
    {
        name:"소플",
        comment:"리엑트 너무 어려워요"
    },
    {
        name:"이인제",
        comment:"리엑트 너무 재밌어요"
    },
    // {
    //     name:"",
    //     comment:""
    // },
];


const CommentList = (props) => {
    return(
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;