import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

interface ProfileStatusType {
    status: string
    updateProfileStatus: (newStatus: string) => void
}


export const ProfileStatus: React.FC<ProfileStatusType> = ({
                                                               status,
                                                               updateProfileStatus
                                                           }) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    const editMode = () => {
        setIsEditMode(!isEditMode)
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    const onKeyUpChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditMode(!isEditMode)
            updateProfileStatus(newStatus)
        }
    }
    const onBlurChangeStatus = () => {
        setIsEditMode(!isEditMode)
        updateProfileStatus(newStatus)
    }

    useEffect(() => {
        setNewStatus(status)
    }, [status])
    return (
        <>
            {!isEditMode && <div>
                           <span onClick={editMode}>
                                My Status : {status ? status : 'NOT STATUS'}
                            </span>
                </div>
            }

            {isEditMode && <div>
                    <input type="text"
                           value={newStatus}
                           onBlur={onBlurChangeStatus}
                           onChange={changeStatus}
                           onKeyUp={onKeyUpChangeStatus}
                           placeholder="change status"
                           autoFocus/>
                </div>}
            </>
    )

}

