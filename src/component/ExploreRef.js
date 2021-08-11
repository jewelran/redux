import React, {useRef} from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null)
    const handleClick = () => {
     userNameRef.current.focus()
     console.log(userNameRef.current.value);

    }
    return (
        <div>
            <h2>this is user ref</h2>
            <input ref = {userNameRef} type="text" name="" id="" />
            <button onClick = {handleClick}> Get focus</button>
        </div>
    );
};

export default ExploreRef;