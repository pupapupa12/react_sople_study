import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
        image:{
            width: 50,
            height: 50,
            borderRadius: 25,
        },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontsize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

const Comment = (props) => {
    return (
        <div style ={styles.wrapper}>
            <div style ={styles.imageContainer}>
                <img src="https://i.namu.wiki/i/5wsIIZMpTTrwZnd4l8ZRjpiaw7le9rI0BtwzSqrOxUnEVXn7Iq-vbvuYB4VPuT8bHl0UknLwHZ6XKWrO7iAt5OJppYe6mz2g_Ts1Zr0DW8rvYgiGj5uFjVEywc2aUh8l_CepHYh8EpZRplHW-4Y8pA.webp" 
                style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;