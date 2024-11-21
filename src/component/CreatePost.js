import React from "react";

const CreatePost = () => {
    return (
        <div>
            <form>
                <div>
                    <label for='title'>Title:</label>
                    <input type='text' name='title' id="title" value={title} />
                </div>
            </form>
        </div>
    )
}