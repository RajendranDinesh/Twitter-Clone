'use client'

function ProfilePage({params}){

    return (
        <>
        <p style={{color:'white'}}>Profile Page {params.userName}</p>
        </>
    );
}

export default ProfilePage;